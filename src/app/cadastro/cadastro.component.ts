import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiasDaSemana } from '../dias-da-semana.enum';
import { Produto } from '../Objeto/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any


  produto: Produto = new Produto(0,'', 0)

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
       
      }
    })  
  }

  adicionar = () => {
    this.prodService.adicionar(this.produto).subscribe(
      success => console.log("Salvo com sucessso"),
      error => console.log("Não foi possivel Salvar. ERRO!"),
      () => console.log('Requisição completa'))
      this.router.navigate(['home'])
  }


}
