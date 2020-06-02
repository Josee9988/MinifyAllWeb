import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeMinifier} from './home-minifier.component';
import {AppModule} from "../../app.module";

describe('HomeMinifier', () => {
  let component: HomeMinifier;
  let fixture: ComponentFixture<HomeMinifier>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HomeMinifier]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMinifier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
