import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from './line-chart.component';

interface Document {
  value: string;
  label: string;
}

interface State {
  value: string;
  label: string;
}

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule, LineChartComponent], // Import CommonModule
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css'],
})
export class DocumentViewerComponent {
  selectedDoc: string = '';
  selectedState: string = '';
  showContent: boolean = false;
  currentDate: Date = new Date();

  documents: Document[] = [
    { value: 'doc1', label: 'Annual Report 2024' },
    { value: 'doc2', label: 'Financial Statement' },
    { value: 'doc3', label: 'Strategic Plan' },
  ];

  states: State[] = [
    { value: 'ny', label: 'New York' },
    { value: 'ca', label: 'California' },
    { value: 'tx', label: 'Texas' },
  ];

  links = [
    { text: 'Complete Market Analysis', url: '#' },
    { text: 'Methodology Details', url: '#' },
    { text: 'Historical Data', url: '#' },
  ];
}
