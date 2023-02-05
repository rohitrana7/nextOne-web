import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactModel } from 'src/app/shared/models/contact';
import { ContactInteractionService } from 'src/app/shared/services/contact-interaction.service';

@Component({
  selector: 'app-contact-dump',
  templateUrl: './contact-dump.component.html',
  styleUrls: ['./contact-dump.component.scss']
})
export class ContactDumpComponent implements OnInit{

  constructor(private contactInteractionService: ContactInteractionService) { }

  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email', 'mobile', 'date', 'message', 'actions'];

  // CONTACT_DATA!: ContactModel;
  // dataSource = this.CONTACT_DATA;
  // dataSource: ContactModel[] = [];
  dataSource = new MatTableDataSource<ContactModel>();
  // dataSource: ContactModel[] = [];

  ngOnInit () {
    this.contactInteractionService.contactSource$.subscribe( data => {
      // this.dataSource.push(data);
      console.log(data);
      this.dataSource.data = [data];
    })
  }

}