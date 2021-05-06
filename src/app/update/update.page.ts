import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  constructor(public formConcert: ConcertService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  public upDateOneConcert (){
    this.formConcert.upDateConcert();
    this.router.navigateByUrl('/home');
  }

}
