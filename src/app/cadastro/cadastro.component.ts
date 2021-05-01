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
  textoBotao: string = 'Salvar'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.prodService.buscarItemId(this.id).subscribe(prod =>{
          this.produto = prod
        })
        
        console.log(`Id enviado: ${this.id}`)
       
      }
    })  
  }

  adicionar = () => {
    if(this.textoBotao == 'Salvar'){
      this.prodService.adicionar(this.produto).subscribe(
        success => this.navegar('home'),
        error => console.log("Não foi possivel Salvar. ERRO!"),
        () => console.log('Requisição completa'))
      }else{
        this.editar()
      }
    }

 editar = () => {
   this.prodService.editar(this.produto).subscribe(
    success => this.navegar('home'),
    error => console.log("Não foi possivel editar. ERRO!"),
    () => console.log('Requisição completa'))
 }

 navegar = (rota: any) => {
   this.router.navigate([rota])
 }


}
