import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentoComponent } from './new-commento.component';

describe('NewCommentoComponent', () => {
  let component: NewCommentoComponent;
  let fixture: ComponentFixture<NewCommentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCommentoComponent]
    });
    fixture = TestBed.createComponent(NewCommentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
