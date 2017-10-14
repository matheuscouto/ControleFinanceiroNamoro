import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarTransacaoPage } from './editar-transacao';

@NgModule({
  declarations: [
    EditarTransacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarTransacaoPage),
  ],
})
export class EditarTransacaoPageModule {}
