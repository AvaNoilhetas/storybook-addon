import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'storybook-addon-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() label;
  constructor() { }

  ngOnInit(): void {
  }

}
