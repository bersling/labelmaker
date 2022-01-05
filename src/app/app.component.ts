import {Component} from '@angular/core';

/*

0: Vornamen
1: Nachnamen
2: Vorname Partner
3: Nachname Partner
4: Strasse
5: PLZ
6: Stadt
7: Land

* */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labelmaker';
  numVerticalLabels: number = 0;
  numHorizontalLabels: number = 0;

  getWidth(): string {
    return (1/this.numHorizontalLabels)*100 + 'vw';
  }

  labelsStr: string = "";
  get labels(): string[][] {
    return this.labelsStr.split(`\n`).map(line => line.split(`\t`));
  }
}
