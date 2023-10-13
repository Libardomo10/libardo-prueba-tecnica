import { Data, Response } from 'src/app/shared/interface/response';
import { CardsService } from './../../shared/services/cards-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  wordToSearch!: string;
  listCards!: Array<Data>;

  constructor(private cardService: CardsService) { }

  async ngOnInit() {
  }

  async getListStickers() {
    try {
      await this.cardService.getListStickers(this.wordToSearch).subscribe(
        resp => {
          this.listCards = resp.data;
          console.log(this.listCards);
        }
      );
      
    } catch (error) {
      console.log(error);
    }
  }

}
