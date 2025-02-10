import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DocumentViewerComponent } from './document-viewer.component';

@NgModule({
  declarations: [AppComponent, DocumentViewerComponent],
  imports: [BrowserModule, CommonModule, FormsModule], // Include CommonModule & FormsModule
  bootstrap: [AppComponent],
})
export class AppModule {}
