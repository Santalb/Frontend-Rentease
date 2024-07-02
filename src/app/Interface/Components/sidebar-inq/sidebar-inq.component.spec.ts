import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInqComponent } from './sidebar-inq.component';

describe('SidebarInqComponent', () => {
  let component: SidebarInqComponent;
  let fixture: ComponentFixture<SidebarInqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarInqComponent]
    });
    fixture = TestBed.createComponent(SidebarInqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
