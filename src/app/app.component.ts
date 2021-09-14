import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FuFE';

  showList(){
    console.log("Full List");
    fetch("http://localhost:3000/breweries", {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }}).then(
      (resp)=>{
        console.log(resp);
      }
    )
  }
}
