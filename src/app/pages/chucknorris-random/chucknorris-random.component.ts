import { Component, OnInit } from '@angular/core';
import { ChuckapiService } from '../../services/chuckapi.service';
import { Fact } from '../../models/fact';
import { TitleComponent } from "../../models/section/title/title.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-chucknorris-random',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './chucknorris-random.component.html',
  styleUrl: './chucknorris-random.component.css'
})

export class ChucknorrisRandomComponent implements OnInit {

  facts: Fact[] = [];

  constructor(
    private chuckapi: ChuckapiService,
    private router: Router 
  ) { }

  async ngOnInit(): Promise<void> {
    this.facts = await this.chuckapi.factRandom();
  }

  /**
   * Obtiene un fact nuevo
   * y sustituye el anterior.
   */
  async getNewFact(): Promise<void> {
    const newFact = await this.chuckapi.factRandom(); 
    this.facts = [newFact[0]]; 
  }

  goList() {
    this.router.navigateByUrl('/list')
  }


}


