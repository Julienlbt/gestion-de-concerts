import { ConcertService } from './../services/concert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public formConcert: ConcertService, private alertCtrl: AlertController, private router: Router) {}

  public concertTab = [];

  public async ngOnInit(){
    this.concertTab = await this.formConcert.getConcert();
  }

  public async deleteOneConcert(posi){
    const alert = await this.alertCtrl.create({
      header: 'Confirme suppression ?',
      message: 'Pas de retour possible tête d\'ail',
      buttons:[
        { text: 'NON' },
        { 
          text: 'OUI', 
          handler: ()=> { this.formConcert.deleteConcert(posi)}
        }
      ]
    });
    alert.present();  
  }

  public upDateOneConcert(posi){
    this.formConcert.input = this.concertTab[posi]
    this.router.navigateByUrl('/update');
  }
}
