import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url     : string = 'https://www.youtube.com';
  imgUrl  : string = 'https://media.istockphoto.com/photos/zombies-hand-silhouette-picture-id849048646?b=1&k=20&m=849048646&s=170667a&w=0&h=ULDxKFDs9b6qG9yjNtg2jrAKtbxpz-eJUxokQM6PgEg=';
  imgUrl2 : string = 'https://media.istockphoto.com/photos/hells-fence-picture-id1008412210?b=1&k=20&m=1008412210&s=612x612&w=0&h=mqe5MtzPPbkagtRuy6ap0B0CQDPVmabkTBQbePb_UuA=';

  valorAtual    : string = '';
  valorSalvo    : string = '';
  nome          : string = 'avc';
  nome2         : string = 'qqq';

  isMouseOverOut   : boolean = false;

  botaoClicado(){
    alert('Botão clicado');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOverOut = !this.isMouseOverOut;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
