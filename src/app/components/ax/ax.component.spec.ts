import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxComponent } from './ax.component';

describe('AxComponent', () => {
  let component: AxComponent;
  let fixture: ComponentFixture<AxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
