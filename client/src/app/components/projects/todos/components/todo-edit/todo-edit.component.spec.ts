import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditComponent } from './todo-edit.component';

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;
  let fixture: ComponentFixture<TodoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('task', {});
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });
});
