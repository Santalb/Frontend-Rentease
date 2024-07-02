import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinComunityComponent } from './join-comunity.component';

describe('JoinComunityComponent', () => {
  let component: JoinComunityComponent;
  let fixture: ComponentFixture<JoinComunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinComunityComponent]
    });
    fixture = TestBed.createComponent(JoinComunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
