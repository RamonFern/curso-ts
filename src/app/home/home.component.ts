import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prod: any
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {

    this.produtoService.listar().subscribe(prods => {
      console.log(prods)
      this.prod = prods
    })   
  }

}
