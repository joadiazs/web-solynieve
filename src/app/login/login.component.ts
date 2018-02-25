import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string | null = null
  password: string | null = null;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() { }

  login() {
    let ttl: number = 86400;
    this.usuarioService.login({ email: this.email, password: this.password, ttl: ttl })
      .subscribe(res => {
        this.usuarioService.user = res.user;
        console.log("Login", res)
      }, (err => console.log("RESPONSE ERROR:", err.message))
      )
  }
}
