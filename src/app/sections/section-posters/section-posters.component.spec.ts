import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPostersComponent } from './section-posters.component';

describe('SectionPostersComponent', () => {
  let component: SectionPostersComponent;
  let fixture: ComponentFixture<SectionPostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPostersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
