import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterReviewsComponent } from './printer-reviews.component';

describe('PrinterReviewsComponent', () => {
  let component: PrinterReviewsComponent;
  let fixture: ComponentFixture<PrinterReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterReviewsComponent]
    });
    fixture = TestBed.createComponent(PrinterReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
