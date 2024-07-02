import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUsuarioService } from '../../../Servicios/auth-usuario.service';

@Component({
  selector: 'app-login-rent',
  templateUrl: './login-rent.component.html',
  styleUrls: ['./login-rent.component.css']
})
export class LoginRentComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthUsuarioService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      response => {
        console.log('Login Response:', response);
        if (response.success) {
          const role = response.role;
          console.log('User role:', role);
          if (role === 'ARRENDADOR') {
            this.router.navigate(['/arrendador-dash']);
          } else if (role === 'INQUILINO') {
            this.router.navigate(['/inquilino-dash']);
          } else {
            this.router.navigate(['/home']);
          }
        } else {
          console.log('Login failed:', response);
          this.errorMessage = response.message || 'Error desconocido durante el inicio de sesión.';
          alert(this.errorMessage);
        }
      },
      error => {
        console.error('Login Error:', error);
        this.errorMessage = error.error?.message || 'Ocurrió un error inesperado.';
        alert(this.errorMessage);
      }
    );
  }

  onForgotPassword() {
    alert('Redirigiendo a la página de recuperación de contraseña...');
    this.router.navigate(['/forgot-password']);
  }
}
