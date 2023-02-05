import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDumpComponent } from './contact-dump.component';

describe('AboutDumpComponent', () => {
  let component: AboutDumpComponent;
  let fixture: ComponentFixture<AboutDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
