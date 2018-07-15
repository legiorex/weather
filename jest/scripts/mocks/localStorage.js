export class LocalStorage {
    constructor () {
        this.storage = {};
    }

    clear () {
        this.storage = {};
    }

    getItem = jest.fn((key) => {
        return this.storage[key] || null;
    });

    setItem = jest.fn((key, value) => {
        this.storage[key] = JSON.stringify(value);
    });

    removeItem (key) {
        delete this.storage[key];
    }

    get length () {
        return Object.keys(this.storage).length;
    }
}
