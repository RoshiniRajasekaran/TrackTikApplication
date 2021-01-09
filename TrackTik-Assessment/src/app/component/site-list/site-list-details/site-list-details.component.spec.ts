import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListDetailsComponent } from './site-list-details.component';

describe('SiteListDetailsComponent', () => {
  let component: SiteListDetailsComponent;
  let fixture: ComponentFixture<SiteListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
