import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAuthorComponent } from './selector-author.component';

describe('SelectorAuthorComponent', () => {
  let component: SelectorAuthorComponent;
  let fixture: ComponentFixture<SelectorAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
