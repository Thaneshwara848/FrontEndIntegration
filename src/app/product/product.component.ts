import { Component, OnInit } from '@angular/core';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private serv:MyservService) { }


  product:any =[];

  ngOnInit() {

   
    return this.serv.getAllproduct().subscribe(mydata=>{
              this.product =mydata;
              console.log(mydata)
    },error=>{
      console.log("Something went wrong ....!")
    })
  }

}
