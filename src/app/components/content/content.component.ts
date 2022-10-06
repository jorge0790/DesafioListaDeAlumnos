import { Component, OnInit } from '@angular/core';
import { POKEMON } from 'src/app/Models/pokemon';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


public POKEMONS: Array<POKEMON> = [
  {
  id:1,
  nombre: 'Jorge',
 
//  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg',
  habilidades: ['Jimenez','Jimenez'],
  fechaDeCaptura: new Date()
},

{
  id:2,
  nombre: 'Alejandra',
 // img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg',
  habilidades: ['Ramirez',' Lopez'],
  fechaDeCaptura: new Date()
},

{
  id:3,
  nombre: 'Rose',
 // img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg',
  habilidades: ['Garcia','Perez'],
  fechaDeCaptura: new Date()
},

];


  constructor() { }

  ngOnInit(): void {
  }

}
