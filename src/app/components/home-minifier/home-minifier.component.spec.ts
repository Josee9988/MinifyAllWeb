import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeMinifierComponent} from './home-minifier.component';
import {AppModule} from '../../app.module';

describe('HomeMinifier', () => {
  let component: HomeMinifierComponent;
  let fixture: ComponentFixture<HomeMinifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HomeMinifierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMinifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
