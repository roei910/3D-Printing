import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePrintsComponent } from './share-prints.component';

describe('SharePrintsComponent', () => {
  let component: SharePrintsComponent;
  let fixture: ComponentFixture<SharePrintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharePrintsComponent]
    });
    fixture = TestBed.createComponent(SharePrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
