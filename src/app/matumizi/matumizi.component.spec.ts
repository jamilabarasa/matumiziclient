import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatumiziComponent } from './matumizi.component';

describe('MatumiziComponent', () => {
  let component: MatumiziComponent;
  let fixture: ComponentFixture<MatumiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatumiziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
