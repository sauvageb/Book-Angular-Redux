import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectionComponent } from './book-selection.component';

describe('BookSelectionComponent', () => {
  let component: BookSelectionComponent;
  let fixture: ComponentFixture<BookSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
