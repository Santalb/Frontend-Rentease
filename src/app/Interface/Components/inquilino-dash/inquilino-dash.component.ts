import { Component } from '@angular/core';
import { AuthUsuarioService } from '../../../Servicios/auth-usuario.service';

@Component({
  selector: 'app-inquilino-dash',
  templateUrl: './inquilino-dash.component.html',
  styleUrls: ['./inquilino-dash.component.css']
})
export class InquilinoDashComponent {
  fullName: string = '';

  constructor(private authService: AuthUsuarioService) {}

  ngOnInit(): void {
    this.authService.getUserName().subscribe(name => {
      this.fullName = name;
    });
  }

}
