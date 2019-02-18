/**
 * Generic error message for all Ortho Remote errors
 */
export class OrthoRemoteError extends Error {
    /**
     * @internal
     * @param message - error message
     * @param name - name given to the error
     */
    constructor(message: string, name: string = 'OrthoRemoteError') {
        super(message);

        // Correct prototype overridden by Error
        // tslint:disable-next-line:no-unsafe-any
        Reflect.setPrototypeOf(this, new.target.prototype);

        this.name = name;
    }
}