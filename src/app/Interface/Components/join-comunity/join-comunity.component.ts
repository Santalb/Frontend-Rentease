import { Component , OnInit} from '@angular/core';
import { ComunityV1Service, Community } from '../../../Servicios/comunity-v1.service';
import { AuthUsuarioService } from '../../../Servicios/auth-usuario.service';

@Component({
  selector: 'app-join-comunity',
  templateUrl: './join-comunity.component.html',
  styleUrls: ['./join-comunity.component.css']
})
export class JoinComunityComponent implements OnInit{

  communities: Community[] = [];
  username: string = '';

  constructor(
    private communityService: ComunityV1Service,
    private authService: AuthUsuarioService
  ) {}

  ngOnInit(): void {
    this.authService.getUsername().subscribe(username => {
      this.username = username;
      this.loadUserCommunities();
    });
  }

  loadUserCommunities(): void {
    this.communityService.getUserCommunities(this.username).subscribe(
      data => this.communities = data,
      error => console.error('Error fetching user communities', error)
    );
  }

}
