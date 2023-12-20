import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTalkComponent } from './general-talk.component';

describe('GeneralTalkComponent', () => {
  let component: GeneralTalkComponent;
  let fixture: ComponentFixture<GeneralTalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralTalkComponent]
    });
    fixture = TestBed.createComponent(GeneralTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
