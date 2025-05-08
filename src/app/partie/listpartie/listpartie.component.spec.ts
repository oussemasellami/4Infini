import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpartieComponent } from './listpartie.component';

describe('ListpartieComponent', () => {
  let component: ListpartieComponent;
  let fixture: ComponentFixture<ListpartieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpartieComponent]
    });
    fixture = TestBed.createComponent(ListpartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
