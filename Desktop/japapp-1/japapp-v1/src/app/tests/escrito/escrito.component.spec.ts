import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritoComponent } from './escrito.component';

describe('EscritoComponent', () => {
  let component: EscritoComponent;
  let fixture: ComponentFixture<EscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
