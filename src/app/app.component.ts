import { Component } from '@angular/core';
import { first } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formvalidation';
    myinput1 : any;
    myinput2 : any;
    myinput3 : any;
    myinput4 : any;


    information = {name:" ", address:" ", mobno:" ", Email:" "};
    
    
     submitform(){
           
      

    

      if(this.myinput1 ==  null){
        alert("PLEASE ENTER NAME");
         focus();
      }
      else if(this.myinput2 == null){
        alert("PLEASE ENTER ADDRESS");
        
      }
      else if(this.myinput3 == null){
        alert("PLEASE ENTER MOBILENO");
      }
      else if(this.myinput4 == null){
        alert("PLEASE ENTER EMAIL ADDRESS");
      }
      else{
        alert("SUBMITTED SUCCESSFULLY");

        this.information = {name:this.myinput1, address:this.myinput2, mobno:this.myinput3, Email:this.myinput4};

        let c = localStorage.setItem("userdata: ", JSON.stringify(this.information));
      }
       
    

     }
       printpage(){
        print();
     }

    //  fortext : any;
     
}
