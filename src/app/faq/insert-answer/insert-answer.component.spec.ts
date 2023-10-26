import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAnswerComponent } from './insert-answer.component';

describe('FaqInsertAnswerComponent', () => {
  let component: InsertAnswerComponent;
  let fixture: ComponentFixture<InsertAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertAnswerComponent]
    });
    fixture = TestBed.createComponent(InsertAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
