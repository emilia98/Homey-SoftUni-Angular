import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-label-input',
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.scss']
})
export class FloatingLabelInputComponent implements OnInit {
  @Input() type: string = "text";
  @Input() placeholder: string = "placeholder";
  @Input() labelText: string = "Label";
  @Input() name: string = "name";
  @Input() id: string = "name";

  constructor() { 

    console.log(this.type);
  }

  ngOnInit(): void {
  }

}
