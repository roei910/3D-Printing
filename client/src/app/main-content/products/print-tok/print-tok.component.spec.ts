import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTokComponent } from './print-tok.component';

describe('PrintTokComponent', () => {
  let component: PrintTokComponent;
  let fixture: ComponentFixture<PrintTokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintTokComponent]
    });
    fixture = TestBed.createComponent(PrintTokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
