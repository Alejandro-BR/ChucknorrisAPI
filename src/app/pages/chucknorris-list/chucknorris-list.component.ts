import { Component, OnInit } from '@angular/core';
import { ChuckapiService } from '../../services/chuckapi.service';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { TitleComponent } from "../../models/section/title/title.component";
import { Fact } from '../../models/fact';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryTranslatePipe } from "../../pipes/category-translate.pipe";

@Component({
  selector: 'app-chucknorris-list',
  standalone: true,
  imports: [CommonModule, TitleComponent, FormsModule, CategoryTranslatePipe, LowerCasePipe],
  templateUrl: './chucknorris-list.component.html',
  styleUrls: ['./chucknorris-list.component.css']
})
export class ChucknorrisListComponent implements OnInit {
  
  categories: string[] = []; 
  facts: Fact[] = [];
  selectedCategory: string = ''; 
  numberOfFacts: number = 1; 

  constructor(private chuckapi: ChuckapiService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    try {
      this.categories = await this.chuckapi.factList(); 
      console.log(this.categories); 
    } catch (error) {
      console.error('Error al obtener las categorías:', error); 
    }
  }

  async getFacts(category: string, count: number) {
    this.selectedCategory = category; 
    this.facts = await this.chuckapi.facts(category, count); 
  }

  goBack() {
    this.router.navigateByUrl('/')
  }
}
