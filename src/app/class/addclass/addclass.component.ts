import { Component, OnInit } from '@angular/core';
import { Cclass } from '../../class';
import { Router ,ActivatedRoute, Params} from '@angular/router';
import { CclassService } from '../../cclass.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

 cclass: Cclass= new Cclass();
 classId:any='';
 top_id:any='';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cclassService:CclassService) { }

  ngOnInit() {
    // subscribe to router event
     this.activatedRoute.params.subscribe((params: Params) => {
       this.top_id = params['top_id'];
       this.classId = params['classId'];
      this.getCclass();
     });
      }
      addCclass(): void {
        this.cclassService.addCclass(this.top_id,this.cclass)
            .subscribe( data => {
              alert("class created successfully.");
            });
    
      };
       updateCclass(): void {
         this.cclassService.updateCclass(this.top_id,this.classId,this.cclass)
            .subscribe( data =>{
              alert("batch updated sucessfully.");
            });
       };
       getCclass(): void {
         this.cclassService.getCclass(this.top_id,this.classId)
            .subscribe( data =>{
               if(this.classId)
            this.cclass=data;
           });
       };
      
    
    
    }
