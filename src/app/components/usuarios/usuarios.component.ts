import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/Usuario';
import { Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsuarios().subscribe((users) => {
      this.usuarios = users;
    });
  }
}
