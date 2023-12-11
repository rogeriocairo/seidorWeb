import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(
    private userService: UserService,
    private router: Router) {}

  onSubmit() {
    const data = new Users();
    data.email = this.email;
    data.senha = this.senha;

    this.userService.login(data).subscribe((usuario) => {
      if (usuario) {
        this.router.navigate(['/crud']);
      } else {
        alert('Usuário ou senha inválidos.');
      }
    });
  }
}
