import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsersService } from '../api/users.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  usuarios: Usuario[] = [];
  tipoPessoa = "pessoa_juridica";

  constructor(private serv: UsersService) {}

  ngOnInit(): void {
    this.buscarPfPj(this.tipoPessoa);
  }

  atualizarLista = (ev: any) => {
    console.log(ev)
    this.serv.getPets().subscribe(res => {
      this.usuarios = res.filter(u => u.tipo === ev.detail.value);
    });
  }


  buscarPfPj = (tp: string) => {
    this.serv.getPets().subscribe(res => {
      this.usuarios = res.filter(u => u.tipo === tp);
    });
  };

}
