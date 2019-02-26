import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbatchComponent } from './listbatch.component';

describe('ListbatchComponent', () => {
  let component: ListbatchComponent;
  let fixture: ComponentFixture<ListbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
