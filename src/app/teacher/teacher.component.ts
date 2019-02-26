import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { TeacherService} from '../teacher.service';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
  export class TeacherComponent implements OnInit {

    teacher: Teacher[];
    cruntId:any='';
    classId:any='';
    topId:any='';
    id:any='';
    data: AOA = [];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';

  
    constructor(private activatedRoute: ActivatedRoute,private router: Router, private teacherService: TeacherService) {
  
    }
  
    ngOnInit() {  this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.topId = params['topId'];
      this.classId = params['classId'];
      this.int();
    });
      this.int();
    };
  int(){
  //   this.teacherService.getAllTeachers()
  // .subscribe( data => {
  //   this.teacher = data;
  // });
    //particular tchr
    this.teacherService.getAllTeacher(this.topId,this.classId)
        .subscribe( data => {
          this.teacher = data;
          if(data && data.length>0){
            data.map(itm=>{
              let a:any=[];
             
              
              a.push(itm.teacher_id);
              a.push(itm.teacher_fname);
              a.push(itm.teacher_lname);
              a.push(itm.teacher_email);
              this.data.push(a);
            });
          }
        });
  }
    deleteTeacher(id): void{
      this.teacherService.deleteTeacher(id)
        .subscribe( data => {
          this.int();
  
        })
    };
    
    export(): void {
      / generate worksheet /
      const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
  
      / generate workbook and add the worksheet /
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      / save to file /
      XLSX.writeFile(wb, this.fileName);
    } 

    public changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0); 
       console.log(file.name);
       console.log(file.size);
       console.log(file.type);
       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          let csv: any = reader.result;
          console.log(csv);
       }
    }
}
  }
