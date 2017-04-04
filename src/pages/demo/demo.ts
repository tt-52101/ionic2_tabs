import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {PaginationDemoPage} from "./pagination-demo/pagination-demo";
import {CustomIconDemoPage} from "./custom-icon-demo/custom-icon-demo";
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {RecordingPage} from "./recording/recording";

@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html'
})
export class DemoPage {

  constructor(private navCtrl: NavController) {

  }

  pagination() {
    this.navCtrl.push(PaginationDemoPage);
  }

  customIcon() {
    this.navCtrl.push(CustomIconDemoPage);
  }

  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }

  recording() {
    this.navCtrl.push(RecordingPage);
  }
}
