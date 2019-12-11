import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTradeComponent } from './modify-trade.component';

describe('ModifyTradeComponent', () => {
  let component: ModifyTradeComponent;
  let fixture: ComponentFixture<ModifyTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
