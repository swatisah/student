import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params} from '@angular/router';
import { CclassService } from '../../cclass.service';
import { Cclass } from '../../class';


@Component({
  selector: 'app-listclass',
  templateUrl: './listclass.component.html',
  styleUrls: ['./listclass.component.css']
})
export class ListclassComponent implements OnInit {
  cclass:any=[];
  cruntId:any='';
  id:any='';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cclassService: CclassService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cruntId = params['topId'];
      this.id = params['id'];
      this.int();
    });
    this.int();
  };
int(){
  this.cclassService.getAllCclass(this.cruntId)
      .subscribe( data => {
        this.cclass = data;
      });
}
  deleteCclass(id): void{
    this.cclassService.deleteCclass(id)
      .subscribe( data => {
        this.int();

      })
  };
  
 
}
