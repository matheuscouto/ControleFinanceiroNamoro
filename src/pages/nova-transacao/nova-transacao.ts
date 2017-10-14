import { Component } from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {BancoService} from "../../services/banco";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the NovaTransacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-transacao',
  templateUrl: 'nova-transacao.html',
})
export class NovaTransacaoPage {

  constructor(private banco: BancoService, private viewCtrl: ViewController) {}



  onClose(){
    this.viewCtrl.dismiss();
  }

  onAdcTrans(form: NgForm){
    this.banco.adcTrans(form.value.autor, form.value.valor, form.value.nome, " ",form.value.categoria);
    this.viewCtrl.dismiss();
  }


}
