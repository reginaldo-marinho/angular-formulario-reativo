import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
})
export class AppComponent {
  Nome = new FormControl('Reginaldo');

  SetNome() {
    this.Nome.setValue('Pedro');
  }

  cliente = new FormGroup({
    nome: new FormControl('Maria'),
    cpf: new FormControl('457.555.789.90', { validators: Validators.required }),
    endereco: new FormGroup({
      cep: new FormControl('13545-777'),
      logradouro: new FormControl('Rua Geraldo Justino'),
    }),
  });

  AlterarCliente() {
    this.cliente.patchValue({
      cpf: '000.000.000-90',
      endereco: {
        cep: '00000-000',
      },
    });
  }
}
