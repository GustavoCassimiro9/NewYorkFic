import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNoticesComponent } from './section-notices.component';

describe('SectionNoticesComponent', () => {
  let component: SectionNoticesComponent;
  let fixture: ComponentFixture<SectionNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
