import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  goBack(){
    var currentUrl = window.location.href;
window.history.back();
setTimeout(function(){
    // if location was not changed in 100 ms, then there is no history back
    if(currentUrl === window.location.href){
        // redirect to site root
        window.close();
    }
  
}, 100);

  }
}
