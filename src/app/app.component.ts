import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  exp:string='';
  val=0;
  sig:string='+';

  


  add(s1)
  { 
    this.val=this.val+s1;
    this.exp=this.exp+s1+this.sig;

  }

   reset()
  {
    this.val=0;
    this.exp='';

  }
}
