import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsbookComponent } from './subsbook.component';

describe('SubsbookComponent', () => {
  let component: SubsbookComponent;
  let fixture: ComponentFixture<SubsbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
