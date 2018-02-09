import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesuccessComponent } from './reservesuccess.component';

describe('ReservesuccessComponent', () => {
  let component: ReservesuccessComponent;
  let fixture: ComponentFixture<ReservesuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservesuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
