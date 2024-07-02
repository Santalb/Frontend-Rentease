import { Component,  OnInit } from '@angular/core';
import { ComunityV1Service, Community } from '../../../Servicios/comunity-v1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-comunity',
  templateUrl: './list-comunity.component.html',
  styleUrls: ['./list-comunity.component.css']
})
export class ListComunityComponent implements OnInit{

  communities: Community[] = [];

  constructor(
    private communityService: ComunityV1Service,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCommunities();
  }

  loadCommunities(): void {
    this.communityService.getCommunities().subscribe(
      data => this.communities = data,
      error => console.error('Error fetching communities', error)
    );
  }

  joinCommunity(communityId: number): void {
    this.communityService.joinCommunity(communityId).subscribe(
      response => {
        this.snackBar.open('Unido a la comunidad exitosamente', 'Cerrar', { duration: 3000 });
        this.loadCommunities(); // Recargar la lista de comunidades después de unirse a una
      },
      error => {
        this.snackBar.open('Error al unirse a la comunidad', 'Cerrar', { duration: 3000 });
      }
    );
  }

}
