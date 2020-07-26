import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressFillingPage } from './address-filling.page';

describe('AddressFillingPage', () => {
  let component: AddressFillingPage;
  let fixture: ComponentFixture<AddressFillingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFillingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressFillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
