import { Component, OnInit } from '@angular/core';
import partners from './dataPartners.json';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  public partnersList : {name:string,imageName:string}[] = partners;
  constructor() { }

  ngOnInit(): void {
  }

}
