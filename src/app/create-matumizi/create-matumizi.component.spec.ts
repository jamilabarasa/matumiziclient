import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatumiziComponent } from './create-matumizi.component';

describe('CreateMatumiziComponent', () => {
  let component: CreateMatumiziComponent;
  let fixture: ComponentFixture<CreateMatumiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMatumiziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMatumiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
