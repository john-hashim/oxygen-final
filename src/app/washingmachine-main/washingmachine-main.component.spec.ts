import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachineMainComponent } from './washingmachine-main.component';

describe('WashingmachineMainComponent', () => {
  let component: WashingmachineMainComponent;
  let fixture: ComponentFixture<WashingmachineMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingmachineMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingmachineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
