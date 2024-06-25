import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [OverlayModule],
  template:`
 
  <button (click)="isOpen = !isOpen" type="button" cdkOverlayOrigin #trigger="cdkOverlayOrigin" #overlaybtn>
  {{ isOpen ? "Close" : "Open" }}
</button>
  <ng-template
          cdkConnectedOverlay
          [cdkConnectedOverlayOrigin]="trigger"
          [cdkConnectedOverlayOpen]="isOpen"
          (hasBackdrop)="true"
  >
<p>
      random text goes here
</p>
  </ng-template>
  
  `,
  styles: `
  :host {
    background: lightgreen;
    color: #e0e0e0;
    display: block;
    inline-size: 22.5rem;
    padding: 1rem;
  }
  
  p {
    background: red;
padding: 1rem;
  }
  `,

})
export class ListComponent {
  isOpen = false;
}
