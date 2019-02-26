

import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { BatchService } from '../../batch.service';
import { Batch } from '../../batch';

@Component({
  selector: 'app-listbatch',
  templateUrl: './listbatch.component.html',
  styleUrls: ['./listbatch.component.css']
})
export class ListbatchComponent implements OnInit {
  batch: Batch[];
  id:any='';
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private batchService: BatchService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
     
      this.id = params['id'];
      this.int();
    });
    this.int();
  };
int(){
  this.batchService.getAllBatch()
      .subscribe( data => {
        this.batch = data;
      });
}
  deleteBatch(id): void{
    this.batchService.deleteBatch(id)
      .subscribe( data => {
        this.int();

      })
  };
  
 
}


// import { Component, OnInit } from '@angular/core';
// import { Router ,ActivatedRoute, Params} from '@angular/router';
// import { BatchService } from '../../batch.service';
// import { CclassService } from '../../cclass.service';
// import { Batch } from '../../batch';
// import { Cclass } from '../../class';

// @Component({
//   selector: 'app-listbatch',
//   templateUrl: './listbatch.component.html',
//   styleUrls: ['./listbatch.component.css']
// })
// export class ListbatchComponent implements OnInit {
//   batch: Batch[];
//         cclass: Cclass= new Cclass();
//         cruntId:any='';
//   constructor(private activatedRoute: ActivatedRoute,private router: Router, private batchService: BatchService,private cclassService: CclassService) {

//   }

//   ngOnInit() {
//     this.int();
//     this.activatedRoute.params.subscribe((params: Params) => {
//       this.cruntId = params['id'];
//      this.getCclass();
//     });
//   };
// int(){
//   this.batchService.getAllBatch()
//       .subscribe( data => {
//         this.batch = data;
//       });
// }
//   deleteBatch(id): void{
//     this.batchService.deleteBatch(id)
//       .subscribe( data => {
//         this.int();

//       })
//   };
//   getCclass(): void {
//     this.cclassService.getCclass(this.cruntId)
//        .subscribe( data =>{
//           if(this.cruntId)
//        this.cclass=data;
//       });
//   };
 
// }
