import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public formConcert: ConcertService, private alertCtrl: AlertController) {}

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
}
