import { IPrimitiveElement } from './@types/primitiveTypes';

class PrimitiveElement<T> implements IPrimitiveElement<T> {
    private _data: T;

    constructor(data: T) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    update(data: T) {
        this._data = data;
    }
}

export class TInt extends PrimitiveElement<number> {
    constructor(data: number) {
        super(Math.floor(data));
    }
}

export class TFloat extends PrimitiveElement<number> {
    constructor(data: number) {
        super(data);
    }
}

export class TChar extends PrimitiveElement<string> {
    constructor(data: string | number) {
        super(
            typeof data === 'string'
                ? data.length === 0
                    ? String.fromCharCode(0)
                    : data.charAt(0)
                : String.fromCharCode(Math.min(Math.max(data, 0), 255))
        );
    }

    addOffset(offset: number) {
        const asciiValue = this.data.charCodeAt(0);
        this.update(String.fromCharCode(Math.min(Math.max(asciiValue + offset, 0), 255)));
    }
}

export class TString extends PrimitiveElement<string> {
    constructor(data: string) {
        super(data);
    }
}

export class TBoolean extends PrimitiveElement<boolean> {
    constructor(data: boolean) {
        super(data);
    }
}