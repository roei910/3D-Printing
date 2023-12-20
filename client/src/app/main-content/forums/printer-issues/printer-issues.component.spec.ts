import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterIssuesComponent } from './printer-issues.component';

describe('PrinterIssuesComponent', () => {
  let component: PrinterIssuesComponent;
  let fixture: ComponentFixture<PrinterIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterIssuesComponent]
    });
    fixture = TestBed.createComponent(PrinterIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
