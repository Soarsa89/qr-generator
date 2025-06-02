import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrLabelComponent } from './qr-label.component';

describe('QrLabelComponent', () => {
  let component: QrLabelComponent;
  let fixture: ComponentFixture<QrLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
