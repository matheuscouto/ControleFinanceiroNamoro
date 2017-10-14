import {Injectable} from "@angular/core";

import {Transacao} from '../models/transacao.model';
import {UserModel} from "../models/user.model";

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import {last} from "rxjs/operator/last";

//import { Subject } from 'rxjs/Subject';


@Injectable()

export class BancoService {
  transacListOb: FirebaseListObservable<any[]>;
  transacList: Transacao[];
  userListOb: FirebaseListObservable<any[]>;
  userList: UserModel[];
  saldoOb: FirebaseObjectObservable<{pagador:string;recebedor:string;valor:number}>;
  saldo: {pagador:string;recebedor:string;valor:number};

  //userSearchOb: FirebaseListObservable<any[]>;
  //sizeSubject: Subject<any>;


  constructor(private fb: AngularFireDatabase){
    this.transacListOb = fb.list('transac');
    this.userListOb = fb.list('user');
    this.saldoOb = fb.object('saldo');

    //this.sizeSubject = new Subject();
    // this.userSearchOb = fb.list('user', {
    //   query: {
    //     orderByChild: 'nome',
    //     equalTo: this.sizeSubject
    //   }
    // });

    this.transacListOb.subscribe(
      transacList => {
        this.transacList = transacList;

      }
    );



    this.saldoOb.subscribe(
      saldo => {this.saldo = saldo; console.log(this.saldo);}
    );

    this.userListOb.subscribe(
      userList => {
        this.userList = userList;
        if(this.userList[0].valor > this.userList[1].valor){
          let saldofinal = ((this.userList[0].valor + this.userList[1].valor)/2)-this.userList[1].valor;
          this.saldoOb.update({pagador: this.userList[1].nome, recebedor: this.userList[0].nome, valor: saldofinal });
        }else if (this.userList[0].valor < this.userList[1].valor){
          let saldofinal = ((this.userList[0].valor + this.userList[1].valor)/2)-this.userList[0].valor;
          this.saldoOb.update({pagador: this.userList[0].nome, recebedor: this.userList[1].nome, valor: saldofinal });
        } else {
          this.saldoOb.update({valor:0});
        }
      }
    );
  }

  adcTrans(autor:any, valor: number, nome:string,tdate:string,categoria:string){

    this.transacListOb.push(new Transacao(autor.nome,valor,nome,tdate,categoria));
    for(let user of this.userList){
      if(user.nome == autor.nome){
        this.userListOb.update(autor.ukey,{valor: Number(user.valor) + Number(valor)});
      }
    }
    // this.userSearchOb.first().map(
    //   foundList => foundList[0] || null
    // ).subscribe(
    //   foundUser => {
    //     console.log(foundUser);
    //     this.transacListOb.push(new Transacao(foundUser.$key,valor,nome,tdate));
    //   }
    // );
    // this.sizeSubject.next(autor);
  }

  resolveSaldo(){

  }

  // totalGasto(user: TransUser[]){
  //   let total: number = 0;
  //   for(let i of user){
  //     total += Number(i.valor);
  //   }
  //   return total;
  // }
  //
  // saldo(){
  //   return (this.totalGasto(this.anne) - this.totalGasto(this.matheus));
  // }
  //
  // saldoDevedor(user: TransUser[]) {
  //   return ((this.totalGasto(this.anne) + this.totalGasto(this.matheus))/2)-this.totalGasto(user);
  // }


  // encontraTrans(): FirebaseListObservable<any[]>{
  //   //return this.db.list('/coutao');
  // }
}
