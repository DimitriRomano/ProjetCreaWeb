import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

Router

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  paragraphe = 'Crée en 2022 d\'une émultion collective, CYCLE est une entreprise qui souhaite renouer avec un mode de vie local plus simple et responsable. Le concept ? Inviter les utilisateurs et les professionels à faire partie d\'un seul et même CYCLE, profitant pour les un d\'avantages tarifaires et pour les autres d\'un référencement unique et d\'une certification VERTE.'
  title = 'Qui sommes nous ?'
  subtitle = 'Une agence citoyenne engagée'
  textButton = 'Découvrir nos services'
  imageSrc = 'Asset 9-02.png'
  imageAlt = 'cycleMan'

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
