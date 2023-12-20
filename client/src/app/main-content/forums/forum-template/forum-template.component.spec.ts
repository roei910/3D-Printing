import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTemplateComponent } from './forum-template.component';

describe('ForumTemplateComponent', () => {
  let component: ForumTemplateComponent;
  let fixture: ComponentFixture<ForumTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumTemplateComponent]
    });
    fixture = TestBed.createComponent(ForumTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
