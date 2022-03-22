import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paragraphe = 'Déplacez vous dès au aujourd’hui tout en participant a un cycle durable. Comment ? Découvrez un réseau de vélos performants dans votre ville et un système de cash-back amusant. Le tout en prenant soin de notre planète !'
  title = 'Se déplacer, mieux'
  subtitle = 'Les petits gestes qui changent tout'
  textButton = 'Qui sommes nous ?'
  imageSrc = 'Asset 9-02.png'
  imageAlt = 'cycleMan'


  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
