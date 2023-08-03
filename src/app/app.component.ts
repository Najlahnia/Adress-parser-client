import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string | undefined ;
  showTable : any;
  getParsedAdressFromBack(){
    // to do : integrer l'api back 
    // get adress parsed
  }
}
