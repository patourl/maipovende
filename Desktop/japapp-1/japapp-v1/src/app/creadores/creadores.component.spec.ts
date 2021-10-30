import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadoresComponent } from './creadores.component';

describe('CreadoresComponent', () => {
  let component: CreadoresComponent;
  let fixture: ComponentFixture<CreadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
