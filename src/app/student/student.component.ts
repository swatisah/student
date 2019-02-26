import { FileUtil }                     from '../file.util';
import { Constants }                    from '../import.constants';

import { Component, OnInit , ViewChild } from '@angular/core';
import { Student } from '../student';
import { Router ,ActivatedRoute,Params} from '@angular/router';
import { StudentService} from '../student.service';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student[];
  
  cruntId:any='';
  classId:any='';
  topId:any='';
  data: AOA = [];
  @ViewChild('fileImportInput') fileImportInput:any='';
  csvRecords:any = [];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private studentService: StudentService,private _router: Router,
    private _fileUtil: FileUtil) 
{
  
  }

  ngOnInit() {  this.activatedRoute.params.subscribe((params: Params) => {
    this.topId = params['topId'];
    this.classId = params['classId'];
    this.int();
  });
    this.int();
  };
int(){
//all st
  // this.studentService.getAllStudents()
  // .subscribe( data => {
  //   this.student = data;
  // });
  //particular st
  this.studentService.getAllStudent(this.topId,this.classId)
      .subscribe( data => {
        this.student = data;
        if(data && data.length>0){
          data.map(itm=>{
            let a:any=[];
            
           
            a.push(itm.student_id);
            a.push(itm.student_fname);
            a.push(itm.student_lname);
            a.push(itm.student_email);
           {this.data.push(a);} 
          });
        }
      });
}
  deleteStudent(id): void{
    this.studentService.deleteStudent(id)
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
  

//added for importing csv
// METHOD CALLED WHEN CSV FILE IS IMPORTED
fileChangeListener($event): void {

  var text = [];
  var target = $event.target || $event.srcElement;
  var files = target.files; 

  if(Constants.validateHeaderAndRecordLengthFlag){
    if(!this._fileUtil.isCSVFile(files[0])){
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  var input = $event.target;
  var reader = new FileReader();
  reader.readAsText(input.files[0]);

  reader.onload = (data) => {
    let csvData = reader.result;
    let csvRecordsArray = csvData.split(/\r\n|\n/);

    var headerLength = -1;
    if(Constants.isHeaderPresentFlag){
      let headersRow = this._fileUtil.getHeaderArray(csvRecordsArray, Constants.tokenDelimeter);
      headerLength = headersRow.length; 
    }
    
    this.csvRecords = this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, 
        headerLength, Constants.validateHeaderAndRecordLengthFlag, Constants.tokenDelimeter);
    
    if(this.csvRecords == null){
      //If control reached here it means csv file contains error, reset file.
      this.fileReset();
    }   
  
    if(csvRecordsArray && csvRecordsArray.length >0){
      csvRecordsArray.map(itm=>{
        let objLine=itm.split(',');
        this.student.push({"student_id":objLine[0],"student_fname":objLine[1],"student_lname":objLine[2],student_email:objLine[3]})
      });
    } 
  }

  reader.onerror = function () {
    alert('Unable to read ' + input.files[0]);
  };
};

fileReset(){
  this.fileImportInput.nativeElement.value = "";
  this.csvRecords = [];
}





}