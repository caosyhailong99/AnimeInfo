import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedAnimeScreenComponent } from './searched-anime.component';

describe('SearchedAnimeScreenComponent', () => {
  let component: SearchedAnimeScreenComponent;
  let fixture: ComponentFixture<SearchedAnimeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedAnimeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedAnimeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
