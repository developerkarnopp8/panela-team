import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToogleDarkWhiteComponent } from './toogle-dark-white.component';

describe('ToogleDarkWhiteComponent', () => {
  let component: ToogleDarkWhiteComponent;
  let fixture: ComponentFixture<ToogleDarkWhiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleDarkWhiteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToogleDarkWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
