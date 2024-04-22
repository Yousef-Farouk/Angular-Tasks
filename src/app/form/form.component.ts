import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  id : number = 0
  studentname : string = ' '
  studentage : string = ' '
  inputValue : string = ' '
  studentlist : {id :number , name :string , age :string}[]=[]
  getName(e:Event){
    let target = e.target as HTMLInputElement;
    this.studentname = target.value;
    //console.log(this.inputValue);
  }

  getAge(e:Event){
    let target = e.target as HTMLInputElement;
    this.studentage = target.value;
    //console.log(this.inputValue);
  }

  addStudent()
  {
    if (this.studentname == ''  )
    {
        
    }
    this.studentlist.push({
      id: ++this.id,
      name : this.studentname,
      age : this.studentage,
    })

  }

}
