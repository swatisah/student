import { Component, OnInit } from '@angular/core';
import { Batch } from '../../batch';
import { Router ,ActivatedRoute, Params} from '@angular/router';
import { BatchService } from '../../batch.service';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
  batch: Batch= new Batch();
  cruntId:any='';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private batchService:BatchService) { }

  ngOnInit() {
    // subscribe to router event
     this.activatedRoute.params.subscribe((params: Params) => {
       this.cruntId = params['id'];
      this.getBatch();
     });
      }
      addBatch(): void {
        this.batchService.addBatch(this.batch)
            .subscribe( data => {
              alert("batch created successfully.");
            });
    
      };
       updateBatch(): void {
         this.batchService.updateBatch(this.batch,this.cruntId)
            .subscribe( data =>{
              alert("batch updated sucessfully.");
            });
       };
       getBatch(): void {
         this.batchService.getBatch(this.cruntId)
            .subscribe( data =>{
               if(this.cruntId)
            this.batch=data;
           });
       };
      
    
    
    }
    