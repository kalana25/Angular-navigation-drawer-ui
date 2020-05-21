import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkCheckComponent } from './framework-check.component';

describe('FrameworkCheckComponent', () => {
  let component: FrameworkCheckComponent;
  let fixture: ComponentFixture<FrameworkCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
