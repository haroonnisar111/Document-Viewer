import { Component } from '@angular/core';

import { DocumentViewerComponent } from './document-viewer.component';

@Component({
  selector: 'app-root',
  imports: [DocumentViewerComponent],
  template: ` <app-document-viewer></app-document-viewer> `,
})
export class AppComponent {
  title = 'document-viewer';
}
