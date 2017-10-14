import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaTransacaoPage } from './nova-transacao';

@NgModule({
  declarations: [
    NovaTransacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaTransacaoPage),
  ],
})
export class NovaTransacaoPageModule {}
