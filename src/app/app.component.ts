import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  chartSeries = [{
    dataPoints: [{
      amount: 10,
      period: new Date('2016/01/01')
    }, {
      amount: 15,
      period: new Date('2016/01/02')
    }]
  }, {
    dataPoints: [{
      amount: 20,
      period: new Date('2016/01/01')
    }, {
      amount: 25,
      period: new Date('2016/01/02')
    }]
  }];
}
