import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App1Component } from './app.component';

describe('App1Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        App1Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App1Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mf-app'`, () => {
    const fixture = TestBed.createComponent(App1Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mf-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mf-app app is running!');
  });
});
