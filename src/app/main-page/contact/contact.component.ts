import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { msgMaxLength, msgMinLength } from 'src/app/shared/constants/common.constants';
import { mobilePattern } from 'src/app/shared/constants/regex.constants';
import { ContactInteractionService } from 'src/app/shared/services/contact-interaction.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
    private contactInteractionService: ContactInteractionService) {
    this.initForm();
  }

  contactForm!: FormGroup;
  contactDumpList: any[] = [];

  ngOnInit(): void {
  }

  onSend (){
    if(this.contactForm.valid){
      this.contactInteractionService.updateContactList(this.contactForm.getRawValue());
      this.initForm();
      this._snackBar.open('Your Query Submitted Successfully!', '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 2500,
      });
    }
  }

  initForm(){
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.pattern(mobilePattern)]],
      message: ['', [Validators.required, Validators.minLength(msgMinLength), Validators.maxLength(msgMaxLength)]],
      date: new Date()
    })
  }

  get firstName()  {
    return this.contactForm.get('firstName');
  }

  get lastName()  {
    return this.contactForm.get('lastName');
  }

  get mobile()  {
    return this.contactForm.get('mobile');
  }

  get email()  {
    return this.contactForm.get('email');
  }

  get message()  {
    return this.contactForm.get('message');
  }

}
