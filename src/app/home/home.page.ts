import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public disabilitarProsseguir = true;

  public corBotaoCarona = {
    pegar: 'primary',
    dar: 'primary'
  };

  constructor() {}

  public trocar(botao) {
    this.disabilitarProsseguir = false;

    this.corBotaoCarona.pegar = 'primary';
    this.corBotaoCarona.dar = 'primary';

    this.corBotaoCarona[botao] = 'success';
  }
}
