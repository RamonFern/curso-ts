import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  listar(){
    return ['Compurador', 'Computador', 'Fones', 'Mouse']
  }
}
