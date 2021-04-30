import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
        alert(this.id)
      }
    })
  }

}
