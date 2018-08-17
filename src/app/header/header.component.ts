import { Component, OnInit } from '@angular/core';
import {Data} from '../data'
import { FlipkartService } from '../flipkart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:FlipkartService,private data:Data) { }

  ngOnInit() {
  }
  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
show(option){
  if(option ==='Shoes'){
    this.service.getData(this.data.Shoes)
    
  }  
  if(option ==='Jersey'){
    this.service.getData(this.data.FootballJersey)
  } 
  if(option ==='Mobile'){
    this.service.getData(this.data.Mobile)
  } 
  if(option ==='Games'){
    this.service.getData(this.data.Games)
  }
  // if(option ==='Sports'){
  //   this.service.getData(this.data.Sports)
  // }
     
}

}



