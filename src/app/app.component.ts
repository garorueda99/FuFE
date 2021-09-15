import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FuFE';

  data: any = [];
  showTable: boolean = false;

  showList() {
    console.log('Full List');
    fetch('http://localhost:3000/breweries')
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then((responseData) => {
          this.data = responseData;
          this.showTable = true;
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  searchItem(searchID: number) {
    fetch('http://localhost:3000/breweries')
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then((responseData) => {
          this.data = [];
          Object.keys(responseData).forEach((key) => {
            if (responseData[key].id === searchID) {
              this.data = responseData[key];
              this.showTable = true;
            }
          });
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }
}
