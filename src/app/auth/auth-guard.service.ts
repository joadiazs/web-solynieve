import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from 'app/shared/services';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        public usuarioService: UsuarioService,
        public router: Router
    ) { }

    canActivate(): boolean {
        console.log("OnlyLoggedInUsers");
        if (1 + 1 == 2) {
            return true;
        } else {
            window.alert("You don't have permission to view this page");
            this.router.navigate(['/login']);
            return false;
        }
    }

}