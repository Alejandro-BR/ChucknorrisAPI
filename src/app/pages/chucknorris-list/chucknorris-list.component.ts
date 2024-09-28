import { Component, OnInit } from '@angular/core';
import { ChuckapiService } from '../../services/chuckapi.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../models/section/title/title.component";
import { Fact } from '../../models/fact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chucknorris-list',
  standalone: true,
  imports: [CommonModule, TitleComponent, FormsModule],
  templateUrl: './chucknorris-list.component.html',
  styleUrls: ['./chucknorris-list.component.css']
})
export class ChucknorrisListComponent implements OnInit {
  
  categories: string[] = []; 
  facts: Fact[] = [];
  selectedCategory: string = ''; // Para mostrar la categoría seleccionada
  numberOfFacts: number = 1; // Almacenar el número de hechos deseados

  constructor(private chuckapi: ChuckapiService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.categories = await this.chuckapi.factList(); 
      console.log(this.categories); 
    } catch (error) {
      console.error('Error al obtener las categorías:', error); 
    }
  }

  async getFacts(category: string, count: number) {
    this.selectedCategory = category; // Almacenar la categoría seleccionada
    this.facts = await this.chuckapi.facts(category, count); // Llamar a la API para obtener los hechos
  }
}
