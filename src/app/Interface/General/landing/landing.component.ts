import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  features = [
    { image: 'assets/images/feature1.jpg', title: 'Función 1' },
    { image: 'assets/images/feature2.jpg', title: 'Función 2' },
    { image: 'assets/images/feature3.jpg', title: 'Función 3' },
    { image: 'assets/images/feature4.jpg', title: 'Función 4' }
  ];

  team = [
    { photo: 'assets/images/team1.jpg', name: 'Leon Garcia', role: 'Alexis' },
    { photo: 'assets/images/team2.jpg', name: 'Yepez Zapata', role: 'Stefano' },
    { photo: 'assets/images/team3.jpg', name: 'Moran Zapata', role: 'Oscar' },
    { photo: 'assets/images/team4.jpg', name: 'Yengle Morillas', role: 'Melissa' },
    { photo: 'assets/images/team5.jpg', name: 'Bazauri Villanueva', role: 'Sebastian' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
