import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableTabComponent } from './scrollable-tab.component';

describe('ScrollableTabComponent', () => {
  let component: ScrollableTabComponent;
  let fixture: ComponentFixture<ScrollableTabComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
