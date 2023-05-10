import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolfeeComponent } from './schoolfee.component';

describe('SchoolfeeComponent', () => {
  let component: SchoolfeeComponent;
  let fixture: ComponentFixture<SchoolfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolfeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
