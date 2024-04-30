import {Component} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
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
  isOpen = false;
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */