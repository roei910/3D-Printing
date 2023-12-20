import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterDetailComponent } from './printer-detail.component';

describe('PrinterDetailComponent', () => {
  let component: PrinterDetailComponent;
  let fixture: ComponentFixture<PrinterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterDetailComponent]
    });
    fixture = TestBed.createComponent(PrinterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
