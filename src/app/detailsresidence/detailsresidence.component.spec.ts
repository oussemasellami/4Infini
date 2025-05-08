import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsresidenceComponent } from './detailsresidence.component';

describe('DetailsresidenceComponent', () => {
  let component: DetailsresidenceComponent;
  let fixture: ComponentFixture<DetailsresidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsresidenceComponent]
    });
    fixture = TestBed.createComponent(DetailsresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
