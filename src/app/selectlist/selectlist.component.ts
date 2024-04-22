import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selectlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './selectlist.component.html',
  styleUrl: './selectlist.component.css'
})
export class SelectlistComponent {

  
  selectedBranch : string =''
  tracks : string[] = []

  branchTrackList :{branch_name : string , tracks: string[]}[] = [
    {
      branch_name :"menofia",
      tracks :["pd","os","ai"]
    }
      ,
    {
      branch_name :"smart",
      tracks :["pd","os","ai",'cybersecurity']
    }
    ,
    {
      branch_name:"mansoura",
      tracks:["pd","os","mearn"]
    }
  ]

  onBranchSelected()
  {
    this.tracks = this.branchTrackList.find(item => item.branch_name === this.selectedBranch)?.tracks || [];
  }
}
