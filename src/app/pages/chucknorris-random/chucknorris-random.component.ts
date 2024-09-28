import { Component, OnInit } from '@angular/core';
import { ChuckapiService } from '../../services/chuckapi.service';
import { Fact } from '../../models/fact';
import { TitleComponent } from "../../models/section/title/title.component";

@Component({
  selector: 'app-chucknorris-random',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './chucknorris-random.component.html',
  styleUrl: './chucknorris-random.component.css'
})

export class ChucknorrisRandomComponent implements OnInit {

  facts: Fact[] = [];

  constructor (private chuckapi: ChuckapiService) {}

  async ngOnInit(): Promise<void> {
    this.facts = await this.chuckapi.factRandom();
  }

}
