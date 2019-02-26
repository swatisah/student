
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { BatchService } from '../batch.service';
import { Batch } from '../batch';
import { CclassService } from '../cclass.service';
import { Cclass } from '../class';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  batch: Batch[];
  // batch:any=[];
  cclass:any=[];
  cruntId:any='';
  batchsId:any='';
  cclassesId:any='';

  // private map = new Map<string, string[]>([
  //   ['batch 1', ['Warszawa', 'Krakow']],
  //   ['batch 2', ['New York', 'Austin']],
  // ])

  // city: string;


  // get cities(): string[] | undefined {
  //   return this.map.get(this.batch);
  // }

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private batchService: BatchService,private cclassService: CclassService) { }

  ngOnInit() {this.activatedRoute.params.subscribe((params: Params) => {
    this.cruntId = params['topId'];
 
    this.int();
  });
 
    this.int();
  };
int(){
  this.batchService.getAllBatch()
      .subscribe( data => {
        this.batch = data;
      });

      this.cclassService.getAllCclass(this.cruntId)
      .subscribe( data => {
        this.cclass = data;
      });
}
getClass(){
  this.cclassService.getAllCclass(this.batchsId)
  .subscribe( data => {
    this.cclass = data;
  });
}
}


