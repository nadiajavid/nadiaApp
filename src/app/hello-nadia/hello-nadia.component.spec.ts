import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloNadiaComponent } from './hello-nadia.component';

describe('HelloNadiaComponent', () => {
  let component: HelloNadiaComponent;
  let fixture: ComponentFixture<HelloNadiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloNadiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloNadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
