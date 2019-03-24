import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UsuarioService} from '../../services/api-usuario/usuario.service';
import {Usuario} from '../../interfaces/api-usuario/usuario';
import {LocalStorageService} from '../../services/localStorageService';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private form: FormGroup;

    // private usuario: Usuario;

    constructor(private formBuilder: FormBuilder,
                private usuarioService: UsuarioService,
    private localStorageService: LocalStorageService) {

        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            senha: ['', Validators.required],
        });
    }

    ngOnInit() {

    }

    logForm() {
        this.usuarioService.post(this.form.value).subscribe(
            (result) => getSuccess(result),
            (error) => getError(error)
        );

        const getSuccess = (result) => {
            // this.toastr.success('', 'Sucesso!');
            this.localStorageService.setItem('usuario', result.data.user);
        };

        const getError = (ex) => {
            Swal.fire({
                title: 'Error!',
                text: 'Email ou senha incorretos.',
                type: 'error',
                confirmButtonText: 'Ok'
            });
        };
    }
}
