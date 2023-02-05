import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ContactModel } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactInteractionService {

  constructor() { }

  private contactSource = new Subject<ContactModel>();
  contactSource$ = this.contactSource.asObservable();

  updateContactList (contact: ContactModel){
    this.contactSource.next(contact);
  }
}
