import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    host = environment.server.baseUrl;

    constructor(private http: HttpClient) {
    }

    post(data) {
        return this.http.post(this.host + 'api/usuario/autenticar', data);
    }
}
