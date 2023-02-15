import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'assignment';
  unsceduledCandidates:any=[];
  sceduledCandidates:any=[];
  sortNumber:number=-1;

  drop(event: CdkDragDrop<string[]>) {
    console.log(moment(this.unsceduledCandidates[event.previousIndex].interviewDate)>moment());
    if (event.previousContainer === event.container) {
      console.log(event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(this.unsceduledCandidates[event.previousIndex].interviewDate!=null && 
        this.unsceduledCandidates[event.previousIndex].interviewDate!="" && 
        moment(this.unsceduledCandidates[event.previousIndex].interviewDate)>moment())
      {
        console.log(this.unsceduledCandidates[event.previousIndex].interviewDate);
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
      
    }
  }
  ngOnInit(): void {
    this.unsceduledCandidates=[
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      {candidateName:"xyz",qualification:"B.Tech",yearsOfExperience:"2",interviewDate:"",candidatePhoto:"",number:"",email:""},
      ]
  }
  selectDate(event:any,index:number)
  {
    var date=Date.parse(event.value);
    var new_Date=moment(date);
    this.unsceduledCandidates[index].interviewDate=new_Date.format("yyyy-MM-DD HH:mm")
  }
  sort() {
    this.sortNumber=-this.sortNumber;
      this.sceduledCandidates.sort((a:any, b:any) => moment(a.interviewDate) > moment(b.interviewDate) ? this.sortNumber : moment(a.interviewDate) < moment(b.interviewDate) ? -this.sortNumber : 0);
    
  }
  
}
