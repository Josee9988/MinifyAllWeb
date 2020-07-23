import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangelogComponent} from './changelog.component';
import {AppModule} from '../../app.module';

describe('ChangelogComponent', () => {
  let component: ChangelogComponent;
  let fixture: ComponentFixture<ChangelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ChangelogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render loading text', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('main').textContent).toContain(
      'Loading the changelog for you, this might take up to a couple of seconds.');
  });
});
