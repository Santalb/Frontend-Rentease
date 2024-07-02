import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  openSubmenuIndex: number | null = null;

  menuItems = [
    {
      label: 'Alojamientos',
      subItems: [
        { label: 'Registrar Alojamiento', link: '/opcion1' },
        { label: 'Mis Alojamientos', link: '/opcion2' }
      ]
    },
    {
      label: 'Contratos',
      subItems: [
        { label: 'Mis Contratos', link: '/opcion1' },
        { label: 'Historial Contratos', link: '/opcion2' }
      ]
    },
    {
      label: 'Pagos',
      subItems: [
        { label: 'Pagos Pendientes', link: '/opcion1' },
        { label: 'Historial Pagos', link: '/opcion2' }
      ]
    },
    {
      label: 'Reseñas',
      subItems: [
        { label: 'Crear Reseña', link: '/opcion1' },
        { label: 'Historial Reseñas', link: '/opcion2' }
      ]
    },
    {
      label: 'Comunidades',
      subItems: [
        { label: 'Crear Comunidad', link: "/arrendador-dash/create-comuni" },
        { label: 'Ver Comunidades', link: '/arrendador-dash/list-comuni' },
        { label: 'Mis Comunidades', link: '/arrendador-dash/join-comuni' }
      ]
    }
  ];

  toggleSubmenu(index: number): void {
    this.openSubmenuIndex = this.openSubmenuIndex === index ? null : index;
  }

  isSubmenuOpen(index: number): boolean {
    return this.openSubmenuIndex === index;
  }
}
