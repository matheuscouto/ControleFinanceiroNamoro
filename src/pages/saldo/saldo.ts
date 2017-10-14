import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BancoService} from "../../services/banco";


@IonicPage()
@Component({
  selector: 'page-saldo',
  templateUrl: 'saldo.html'
})
export class SaldoPage {

  constructor(private banco: BancoService) {
  }

}
