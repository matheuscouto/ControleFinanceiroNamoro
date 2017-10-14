import { Component } from '@angular/core';
import {IonicPage, ModalController, PopoverController, NavParams} from 'ionic-angular';
import {BancoService} from "../../services/banco";
import {NovaTransacaoPage} from "../nova-transacao/nova-transacao";


@IonicPage()


@Component({
  template: `
    <div style="width:100%; height:100%; background-color: black; z-index:2"></div>
    <ion-list inset style="background: transparent; margin:0 !important;">
  <ion-item class="text-athelas" style="background: transparent;">
        <button ion-button>Teste</button>
      </ion-item>
      <ion-item class="text-charter" style="background: transparent;">
        <button ion-button>Teste</button>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {


  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
  }
  teste(){

  }

}



@Component({
  selector: 'page-extrato',
  templateUrl: 'extrato.html',
})
export class ExtratoPage {

  items: any[];

  constructor(private banco: BancoService,
              private modalCtrl: ModalController,
              public popoverCtrl: PopoverController) {

  }

  pressEvent(myEvent){
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  toNumber(x){return Number(x).toFixed(2);}

  abrindoModal(){
    const modal = this.modalCtrl.create(NovaTransacaoPage);
    modal.present();
  }


  retornaData(tstamp:number){
    let d = new Date(tstamp);
    return d.toTimeString().split(':')[0] +':'+d.toTimeString().split(':')[1];
  }
}
