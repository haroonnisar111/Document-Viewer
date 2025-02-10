import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  template: `
    <div class="chart-wrapper" style="padding: 20px;">
      <div
        class="chart-container"
        style="position: relative; height: 400px; width: 100%; max-width: 1200px; margin: auto;"
      >
        <canvas id="lineChart"></canvas>
      </div>
    </div>
  `,
  standalone: true,
})
export class LineChartComponent implements OnInit {
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Current Year',
          data: [400, 300, 600, 800, 500, 750, 900],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.3,
          fill: true,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
        },
        {
          label: 'Previous Year',
          data: [300, 400, 450, 600, 400, 600, 700],
          borderColor: 'rgb(99, 102, 241)',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          tension: 0.3,
          fill: true,
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
        },
      ],
    };

    new Chart('lineChart', {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              padding: 10,
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            padding: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
              size: 12,
            },
            bodyFont: {
              size: 11,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              callback: function (value) {
                return '$' + value;
              },
              font: {
                size: 11,
              },
            },
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45,
              autoSkip: true,
              maxTicksLimit: 7,
              font: {
                size: 11,
              },
              callback: function (value, index) {
                const months = [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                ];
                return months[index];
              },
            },
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 10,
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
          },
        },
      },
    });
  }
}
