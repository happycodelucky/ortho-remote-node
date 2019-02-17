/**
 * ortho-remote gulp.js task configuration
 *
 * Tasks:
 *  - clean
 *  - lint
 *  - build
 *  - preparePublish
 *  - publish
 */

import * as del from 'del'
import * as typescript from 'typescript'
import * as merge from 'merge2'
import * as jsonEditor from 'gulp-json-editor'

import gulpTsLint from 'gulp-tslint'

import { Linter } from 'tslint'
import { Project } from 'gulp-typescript'
import { TaskCallback } from 'gulp'

import { createProject as createTsProject } from 'gulp-typescript'
import { dest, parallel, series, src } from 'gulp'

// Build destination paths
const ARTIFACTS_DEST = 'publish'    // Build artifacts
const COVERAGE_DEST = 'coverage'    // Coverage reports
const LIB_DEST = 'lib'              // Javascript sources
const TYPEDEF_DEST = 'dts'          // Definition files

// Package projects
const PROJECT_TSCONFIG = './tsconfig.json'
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
export function clean() {
    return del([
        ARTIFACTS_DEST,
        COVERAGE_DEST,
        LIB_DEST,
        TYPEDEF_DEST,
    ])
}

/**
 * Performs a lint on package & example sources
 */
export function lint(done: TaskCallback) {
    return parallel(
        lintSources.bind(undefined, tsProject()),
        lintSources.bind(undefined, tsExamplesProject()),
    )(done)
}

/**
 * Transpiles package sources
 */
export function build() {
    return transpileSources(tsProject(), './')
}

/**
 * Packages up the package and assembles an set of artifacts for publishing
 */
export function preparePublish(done: TaskCallback) {
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
export function publish(done: TaskCallback) {
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
        compilationResult.js.pipe(dest(`${artifactsPath}/lib`)),
        compilationResult.dts.pipe(dest(`${artifactsPath}/dts`)),
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
            json.main = `${LIB_DEST}/index.js`
            json.types = `${TYPEDEF_DEST}/index.d.ts`
            json.devDependencies = undefined
            json.private = undefined
            json.scripts = undefined

            return json
        }))
        .pipe(dest(artifactsPath))
}