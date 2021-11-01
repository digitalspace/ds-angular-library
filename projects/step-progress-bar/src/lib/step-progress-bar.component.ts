import { Component, Input, OnInit } from '@angular/core';


export interface IStepTextObject {
  stepText: string;
  stepSubText: string;
}

@Component({
  selector: 'ds-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss']
})
export class StepProgressBarComponent implements OnInit {
  // If set to negative 1, no steps will be active.
  @Input() activeStepIndex = -1;
  @Input() progressBarColour = 'lightgrey';
  @Input() progressBarActiveColour = '#2f8d46';
  @Input() subTextColour = 'lightgrey';
  @Input() subTextActiveColour = '#2f8d46';
  @Input() stepTextColour = '#ffffff';
  @Input() steps: Array<IStepTextObject>;

  // Calculated
  public widthPercentage: string;


  constructor() { }

  ngOnInit(): void {
    if (this.steps === null || this.steps === undefined || this.steps.length === 0) {
      throw new TypeError("An array of steps is required");
    }

    this.setColours();
    this.calculateWidth();
    this.setContent();
  }

  setColours() {
    document.documentElement.style.setProperty('--progress-bar', this.progressBarColour);
    document.documentElement.style.setProperty('--progress-bar-active', this.progressBarActiveColour);
    document.documentElement.style.setProperty('--sub-text', this.subTextColour);
    document.documentElement.style.setProperty('--sub-text-active', this.subTextActiveColour);
    document.documentElement.style.setProperty('--step-text-color', this.stepTextColour);
  }

  calculateWidth(): void {
    const percentage = (1 / this.steps.length) * 100;
    this.widthPercentage = percentage + '%';
  }

  setContent() {
    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      let styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`.step${i}:before { content: "${step.stepText}"; }`, styleSheet.cssRules.length);
    }
  }
}
