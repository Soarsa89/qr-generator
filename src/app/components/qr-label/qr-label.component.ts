import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-label',
  standalone: false,
  templateUrl: './qr-label.component.html',
  styleUrl: './qr-label.component.scss'
})
export class QrLabelComponent {
  qrText = 'https://ejemplo.com';
  qrImageSrc = '';

  generateQR() {
    QRCode.toDataURL(this.qrText)
      .then(url => {
        this.qrImageSrc = url;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
