import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubsbooksComponent } from './viewsubsbooks.component';

describe('ViewsubsbooksComponent', () => {
  let component: ViewsubsbooksComponent;
  let fixture: ComponentFixture<ViewsubsbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubsbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsubsbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
