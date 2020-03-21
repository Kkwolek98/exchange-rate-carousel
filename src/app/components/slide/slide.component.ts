import { ExchangeRate } from './../../models/ExchangeRate';
import { ExchangeRateService } from './../../services/exchange-rate.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  base: string;
  goal: string;
  public image: string;
  public exchangeData: ExchangeRate;

  @Input()
  set symbols(values: Array<string>) {
    console.log(values)
    this.base = values[0];
    this.goal = values[1];
    this.image = values[2];
    this.getData();
  }
  constructor(private exchangeService: ExchangeRateService) { }

  ngOnInit() {
  }

  getData() {
    this.exchangeService.getRate(this.base, this.goal).subscribe(data => {
      this.exchangeData = data;
    })
  }





}
