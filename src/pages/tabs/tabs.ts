
import {Component} from "@angular/core";
import {ExtratoPage} from "../extrato/extrato";
import {SaldoPage} from "../saldo/saldo";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs color="verde">
      <ion-tab [root]="extratoPage" tabTitle="Extrato" tabIcon="book"></ion-tab>
      <ion-tab [root]="saldoPage" tabTitle="Saldo" tabIcon="git-compare"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage{
  extratoPage = ExtratoPage;
  saldoPage = SaldoPage;
}
