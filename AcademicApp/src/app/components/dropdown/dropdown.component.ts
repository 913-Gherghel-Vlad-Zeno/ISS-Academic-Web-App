import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  entities:any = [];
  @Input() placeholderText : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
