import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthUsuarioService } from '../auth-usuario.service';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorGuard implements CanActivate {

  constructor(private authService: AuthUsuarioService, private router: Router) {}

  canActivate() {
    return this.authService.getRole().pipe(
      map(role => {
        if (role === 'ARRENDADOR') {
          return true;
        } else {
          this.router.navigate(['/home']); // Redirigir si no tiene permiso
          return false;
        }
      })
    );
  }

}
