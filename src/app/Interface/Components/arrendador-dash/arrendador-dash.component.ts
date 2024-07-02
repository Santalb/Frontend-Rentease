import { Component, OnInit } from '@angular/core';
import { AuthUsuarioService } from '../../../Servicios/auth-usuario.service';

@Component({
  selector: 'app-arrendador-dash',
  templateUrl: './arrendador-dash.component.html',
  styleUrls: ['./arrendador-dash.component.css']
})
export class ArrendadorDashComponent implements OnInit {
  fullName: string = '';

  constructor(private authService: AuthUsuarioService) {}

  ngOnInit(): void {
    this.authService.getUserName().subscribe(name => {
      this.fullName = name;
    });
  }
}
