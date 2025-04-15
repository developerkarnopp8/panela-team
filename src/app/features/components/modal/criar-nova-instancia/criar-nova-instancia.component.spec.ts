import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarNovaInstanciaComponent } from './criar-nova-instancia.component';

describe('CriarNovaInstanciaComponent', () => {
  let component: CriarNovaInstanciaComponent;
  let fixture: ComponentFixture<CriarNovaInstanciaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarNovaInstanciaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarNovaInstanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
