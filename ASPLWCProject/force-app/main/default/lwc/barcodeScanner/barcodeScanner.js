import { LightningElement } from 'lwc';
import { getBarcodeScanner } from 'lightning/mobileCapabilities';

export default class BarcodeScanner extends LightningElement {
    scannedBarcode = '';
  myScanner;

  connectedCallback() {
    this.myScanner = getBarcodeScanner();
  }

  handleBarcodeClick() {
    const options = {
      barcodeTypes: [this.myScanner.barcodeTypes.QR, this.myScanner.barcodeTypes.EAN_13],
      instructionText: 'Scan a barcode',
    };

    this.myScanner.beginCapture(options)
      .then(result => {
        this.scannedBarcode = result.value;
      })
      .finally(() => {
        this.myScanner.endCapture();
      });
  }

}