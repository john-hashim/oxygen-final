import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopMainComponent } from './laptop-main.component';

describe('LaptopMainComponent', () => {
  let component: LaptopMainComponent;
  let fixture: ComponentFixture<LaptopMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
