import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotDisplayComponent } from './quot-display.component';

describe('QuotDisplayComponent', () => {
  let component: QuotDisplayComponent;
  let fixture: ComponentFixture<QuotDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
