import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-inq',
  templateUrl: './sidebar-inq.component.html',
  styleUrls: ['./sidebar-inq.component.css']
})
export class SidebarInqComponent {

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
        { label: 'Crear Comunidad', link: "/inquilino-dash/create-comuni" },
        { label: 'Ver Comunidades', link: '/inquilino-dash/list-comuni' },
        { label: 'Mis Comunidades', link: '/inquilino-dash/join-comuni' }
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
