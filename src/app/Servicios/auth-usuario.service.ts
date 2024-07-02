import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import baserUrl from './helper';
import { jwtDecode } from 'jwt-decode';


interface JwtPayload {
  id: number;
  username: string;
  role: string;
  userId: number;
  nombre: string;
  apellido: string;
}

export interface UsuarioDTO {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  dni: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUserRole = new BehaviorSubject<string>('');
  private currentUserName = new BehaviorSubject<string>('');  // Nombre completo del usuario
  private currentUserUsername = new BehaviorSubject<string>('');  // Nombre de usuario

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  public login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${baserUrl}/users/login`, loginData).pipe(
      map((response: any) => {
        console.log('Login Response:', response);  // Depuración
        const token = response.token;
        this.setToken(token);
        const decodedToken = jwtDecode<JwtPayload>(token);
        console.log('Decoded Token:', decodedToken);  // Depuración
        this.currentUserRole.next(decodedToken.role);
        this.currentUserName.next(`${decodedToken.nombre} ${decodedToken.apellido}`);  // Almacenar el nombre completo
        this.currentUserUsername.next(decodedToken.username);
        return { success: true, role: decodedToken.role };  // Devuelve un objeto con success
      }),
      catchError(error => {
        console.error('Login Error:', error);  // Depuración
        return throwError(error);
      })
    );
  }

  public register(user: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${baserUrl}/users/register`, user, { headers });
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedIn.next(true);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.currentUserRole.next('');
    this.currentUserName.next('');  // Limpiar el nombre de usuario
  }

  public getRole(): Observable<string> {
    return this.currentUserRole.asObservable();
  }

  public getUserName(): Observable<string> {  // Nuevo método para obtener el nombre completo del usuario
    return this.currentUserName.asObservable();
  }

  public getUsername(): Observable<string> {
    return this.currentUserUsername.asObservable();  // Nuevo método para obtener el username
  }

  private checkToken(): void {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      this.currentUserRole.next(decodedToken.role);
      this.currentUserName.next(`${decodedToken.nombre} ${decodedToken.apellido}`);  // Almacenar el nombre completo al verificar el token
      this.currentUserUsername.next(decodedToken.username);
      this.loggedIn.next(true);
    }
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  public getUsuarioId(): number | null {
    const token = this.getToken();
    if (token) {
      const decoded: JwtPayload = jwtDecode(token);
      console.log('Token decodificado:', decoded); // Depuración
      return decoded.userId || null;
    }
    return null;
  }
}
