import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlayoutComponent } from './carlayout.component';

describe('CarlayoutComponent', () => {
  let component: CarlayoutComponent;
  let fixture: ComponentFixture<CarlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
