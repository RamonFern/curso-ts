import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiasDaSemana } from '../dias-da-semana.enum';
import { Produto } from '../Objeto/Produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  texto: string = 'numero'
  valor: number = 9
  endereco: [string, number] = ['rua teste', 30]
  dia: DiasDaSemana = DiasDaSemana.sex

  produto: Produto = new Produto(1,'TV', 1200)

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {

    this.produto.preco = this.produto.aplicarDesconto(1200)

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
       
      }
    })

    this.texto = this.retornarNome('Sophia')
  }

  retornarNome = (nome: string): string =>{
    return `${nome} Fernandes`
  }

}
