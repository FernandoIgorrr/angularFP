import { Component, OnInit } from '@angular/core';

import { UserdatasService } from './userdatas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userDatas: string[];

  constructor(private userDatasService: UserdatasService) { 
    this.userDatas = userDatasService.getUserDatas();
  }

  ngOnInit(): void {
  }

}
