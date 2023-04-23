import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeInfoScreenComponent } from './anime-info.component';

describe('AnimeInfoScreenComponent', () => {
  let component: AnimeInfoScreenComponent;
  let fixture: ComponentFixture<AnimeInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
