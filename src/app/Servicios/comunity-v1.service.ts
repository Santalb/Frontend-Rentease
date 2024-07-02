import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from './helper';
import { AuthUsuarioService } from './auth-usuario.service';

export interface Community {
  id: number;
  name: string;
  description: string;
  membersCount: number;
}
@Injectable({
  providedIn: 'root'
})
export class ComunityV1Service {

  constructor(private http: HttpClient, private authService: AuthUsuarioService) { }

  createCommunity(communityData: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${baserUrl}/community/create`, communityData, { headers });
  }

  getCommunities(): Observable<Community[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Community[]>(`${baserUrl}/community/list`, { headers });
  }

  getUserCommunities(username: string): Observable<Community[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Community[]>(`${baserUrl}/community/user/${username}`, { headers });
  }

  joinCommunity(communityId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(`${baserUrl}/community/join/${communityId}`, {}, { headers });
  }

}
