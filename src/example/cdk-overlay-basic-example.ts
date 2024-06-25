import {Component, ElementRef, viewChild} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayModule, OverlayRef} from '@angular/cdk/overlay';
import { ListComponent } from 'src/list/list.component';

/**
 * @title Overlay basic example
 */
@Component({
  selector: 'cdk-overlay-basic-example',
  templateUrl: './cdk-overlay-basic-example.html',
  styleUrl: './cdk-overlay-basic-example.css',
  standalone: true,
  imports: [OverlayModule, ListComponent],
})
export class CdkOverlayBasicExample {
  triggerElem = viewChild.required<ElementRef>('overlaybtn'); 
  isOpen = false;
  overlayRef: OverlayRef;
  constructor(private overlay: Overlay) {}

  closeOverlay() {
    console.log("close");
    this.overlayRef.detach(); // Close the overlay
    this.isOpen = false;
}

openOverlay() {
  this.overlayRef = this.overlay.create({
    hasBackdrop: true, // Optional: Add a backdrop behind the overlay
    backdropClass: 'cdk-overlay-transparent-backdrop', // Optional: Style the backdrop
    positionStrategy: this.overlay.position()
        .flexibleConnectedTo(this.triggerElem())
        .withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        }])
});

this.isOpen = true;
}

}
