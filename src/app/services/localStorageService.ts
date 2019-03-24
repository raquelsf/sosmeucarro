import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    usuario;

    constructor() {
        this.usuario = this.getItem('usuario');
    }

    setItem(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getItem(key) {
        const result = localStorage.getItem(key);
        return JSON.parse(result);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }
}
