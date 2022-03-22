import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-partner',
  templateUrl: './service-partner.component.html',
  styleUrls: ['./service-partner.component.scss']
})
export class ServicePartnerComponent implements OnInit {

  title = "Liste des partenaires.";
  paragraph1 = "Nos partenaires vous assure une consommation durable et responsable.";
  paragraph2 = "Découvrez les avantages Cycle qu’ils proposent et leurs derniers trophées.";

  constructor() { }

  ngOnInit(): void {
  }

}
