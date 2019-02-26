import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclassComponent } from './listclass.component';

describe('ListclassComponent', () => {
  let component: ListclassComponent;
  let fixture: ComponentFixture<ListclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
