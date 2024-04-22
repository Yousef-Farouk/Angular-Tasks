import { Component,ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private elementRef: ElementRef) { }

  name_valid:string = ''
  name_flag :boolean =false
  age_valid:string = ''
  age_flag :boolean =false
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
    this.name_flag = false 
    this.age_flag = false
    if (parseInt(this.studentage) < 18 || this.studentage == '')
    {
      console.log("age checked");
      this.age_flag= true
      this.age_valid = 'age is required and should be more than 18 '
    }
    if (this.studentname.length == 0 ){


        this.name_flag= true
        this.name_valid = 'name is required'
    }
    else if (this.studentname.length <=3){


      this.name_flag= true
      this.name_valid = 'name length shoud be more than 3'

    }
    if(this.name_flag == false && this.age_flag == false)
    {
      this.studentlist.push({
        id: ++this.id,
        name : this.studentname,
        age : this.studentage,
      })

      this.name_flag=false
      this.age_flag = false
    }
    
  }

  delete(index:number)
  {
    this.studentlist.splice(index,1)
  }

}
