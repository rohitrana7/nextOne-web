import { Component, OnInit } from '@angular/core';
import { nextone_menukey } from 'src/app/shared/constants/common.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  nextOneHeaderLogoPath = '../../../../assets/logo/logo-header.png';

  nextone_menukey = nextone_menukey;
  navValue = nextone_menukey.home;

  loadMenu(navItem: number) {
    this.navValue = navItem;
  }
  ngOnInit(): void {
  }

}
