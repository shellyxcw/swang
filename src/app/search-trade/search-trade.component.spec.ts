import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTradeComponent } from './search-trade.component';

describe('SearchTradeComponent', () => {
  let component: SearchTradeComponent;
  let fixture: ComponentFixture<SearchTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
