import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearLogComponent } from './year-log.component';

describe('YearLogComponent', () => {
  let component: YearLogComponent;
  let fixture: ComponentFixture<YearLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
