import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComunityComponent } from './list-comunity.component';

describe('ListComunityComponent', () => {
  let component: ListComunityComponent;
  let fixture: ComponentFixture<ListComunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComunityComponent]
    });
    fixture = TestBed.createComponent(ListComunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
