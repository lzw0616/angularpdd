import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendContainerComponent } from './recommend-container.component';

describe('RecommendContainerComponent', () => {
  let component: RecommendContainerComponent;
  let fixture: ComponentFixture<RecommendContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
