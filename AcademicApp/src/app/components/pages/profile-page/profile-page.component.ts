import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  namePlaceholder = 'Name...';
  phonePlaceholder = 'Phone...';
  emailPlaceholder = 'Email...';
  cnpPlaceholder = 'Cnp...';
  homePlaceholder = 'Home...';
  bursierText: string = 'Not yet decided';


  constructor() { }

  ngOnInit(): void {
    this.fillForm();
  }

  onSubmit(f: NgForm) {
    /**
     * @TO_DO - add validations + backend
     */
    console.log(f.value);  // here you get the values from the from
    console.log(f.valid);  // check if form is valid

    // here send data to backend

    // TO DO: the modal where you confirm that the data was send + refresh page to see modifications
  }

  fillForm(){
    /** 
     * @TO_DO - Here get from backend to fill the profile.
     */

    let test_input = "Let's see if it fills..."
    this.namePlaceholder = test_input;
  }

}
