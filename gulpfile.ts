/**
 * rocket-nuimo gulp.js task configuration
 *
 * Tasks:
 *  - clean
 *  - lint
 *  - build
 *  - preparePublish
 *  - publish
 */

// tslint:disable:completed-docs

import * as del from 'del'
import * as typescript from 'typescript'
import * as merge from 'merge2'
import * as jsonEditor from 'gulp-json-editor'

import gulpTsLint from 'gulp-tslint'

import { Linter } from 'tslint'
import { Project } from 'gulp-typescript'

import { createProject as createTsProject } from 'gulp-typescript'
import { dest, parallel, series, src } from 'gulp'

// Build destination paths
const ARTIFACTS_DEST = 'publish'    // Build artificats
const COVERAGE_DEST = 'coverage'    // Coverage reports
const DIST_DEST = 'dist'            // Javascript sources
const TYPEDEF_DEST = 'dts'          // Defintion files

// Package projects
const PROJECT_TSCONFIG = './src/tsconfig.json'
const EXAMPLES_TSCONFIG = './examples/tsconfig.json'

// Package files
const PACKAGE_FILES_GLOB = [
    'LICENSE',
    'package.json',
    'README.md',
]

/**
 * Purges all generated sources and artifacts
 */
export async function clean() {
    return del([
        ARTIFACTS_DEST,
        COVERAGE_DEST,
        DIST_DEST,
        TYPEDEF_DEST,
    ])
}

/**
 * Performs a lint on package & example sources
 */
export async function lint(done: (error?: any) => void) {
    return parallel(
        lintSources.bind(undefined, tsProject()),
        lintSources.bind(undefined, tsExamplesProject()),
    )(done)
}

/**
 * Transpiles package sources
 */
export async function build() {
    return transpileSources(tsProject(), './')
}

/**
 * Packages up the package and assembles an set of artifacts for publishing
 */
export async function preparePublish(done: (error?: any) => void) {
    const project = tsProject()
    const artifactsPath = ARTIFACTS_DEST

    const cleanPublish = () => del(ARTIFACTS_DEST)

    return series(
        cleanPublish,
        lintSources.bind(undefined, project),
        transpileSources.bind(undefined, project, artifactsPath),
        parallel(
            copyPackageFiles.bind(undefined, artifactsPath),
            copyTypeScriptProjectSources.bind(undefined, project, `${artifactsPath}/src`),
        ),
        updatePackageJson.bind(undefined, artifactsPath),
    )(done)
}

/**
 *
 */
export function publish(done: (error?: any) => void) {
}

//
// Private functions
//

/**
 * Package default project
 */
function tsProject(): Project {
    return createTsProject(PROJECT_TSCONFIG, {
        typescript,
        declaration: true,
    })
}

/**
 * Package examples project
 */
function tsExamplesProject(): Project {
    return createTsProject(EXAMPLES_TSCONFIG, {
        typescript,
    })
}

/**
 * Lints a given project
 */
function lintSources(project: Project) {
    const program = Linter.createProgram(project.configFileName)
    program.getSourceFiles()

    return project.src()
        .pipe(gulpTsLint({
            fix: false,
            formatter: 'codeFrame',
            program,
        }))
        .pipe(gulpTsLint.report({
            summarizeFailureOutput: true,
            allowWarnings: true,
        }));
}

/**
 * Transpiles TypeScript sources
 */
function transpileSources(project: Project, artifactsPath: string) {
    const compilationResult = project.src().pipe(project())

    return merge([
        compilationResult.js.pipe(dest(`${artifactsPath}/${DIST_DEST}`)),
        compilationResult.dts.pipe(dest(`${artifactsPath}/${TYPEDEF_DEST}`)),
    ])
}

/**
 * Copies package TypeScript sources
 */
function copyTypeScriptProjectSources(project: Project, destPath: string) {
    return project.src().pipe(dest(destPath))
}

/**
 * Copies all other package files based on PACKAGE_FILES_GLOB
 */
function copyPackageFiles(artifactsPath: string) {
    return src(PACKAGE_FILES_GLOB).pipe(dest(artifactsPath))
}

/**
 * Updates the package.json configuration
 */
function updatePackageJson(artifactsPath: string) {
    return src(`${artifactsPath}/package.json`)
        .pipe(jsonEditor((json: Record<string, any>) => {
            json.main = `${DIST_DEST}/index.js`
            json.types = `${TYPEDEF_DEST}/index.d.ts`
            json.devDependencies = undefined
            json.private = undefined
            json.scripts = undefined

            return json
        }))
        .pipe(dest(artifactsPath))
}
