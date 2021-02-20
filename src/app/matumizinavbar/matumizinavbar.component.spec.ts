import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatumizinavbarComponent } from './matumizinavbar.component';

describe('MatumizinavbarComponent', () => {
  let component: MatumizinavbarComponent;
  let fixture: ComponentFixture<MatumizinavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatumizinavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatumizinavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
