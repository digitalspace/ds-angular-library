# StepProgressBar

To create a step progress bar, insert the following into your markup:

```
<ds-step-progress-bar [activeStepIndex]="1" [steps]="steps"></ds-step-progress-bar>
```

**activeStepIndex** dictates up to which step will be "active". To have no steps active set **activeStepIndex** to -1.

**Step is a maditory input. This will include the step information. It should be formatted like the following:

```
  steps = [
    {
      stepText: '1',
      stepSubText: 'Step 1'
    },
    {
      stepText: '2',
      stepSubText: 'Step 2'
    },
    {
      stepText: 3',
      stepSubText: 'Step 3'
    },
    {
      stepText: 4',
      stepSubText: 'Step 4'
    }
  ];
```

You can also leave both **stepText** and **stepSubText** as empty string.

You are able to customize colours by using the following inputs:

```
<ds-step-progress-bar [activeStepIndex]="1"
  [progressBarColour]="'grey'"
  [progressBarActiveColour]="'blue'"
  [subTextColour]="'grey'"
  [subTextActiveColour]="'blue'"
  [stepTextColour]="'white'"
  [steps]="steps"></ds-step-progress-bar>
```