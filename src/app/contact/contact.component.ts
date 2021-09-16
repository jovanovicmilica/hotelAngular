import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMessageRequest } from '../interfaces/i-message-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  public mess:IMessageRequest[]=[];

  public data:object={};

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required]),
      lastName: this.formBuilder.control("", [Validators.required]),
      phone: this.formBuilder.control("", [Validators.required,Validators.minLength(9),Validators.maxLength(10)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      message: this.formBuilder.control("", [Validators.required])
    });

   }
  

  ngOnInit(): void {
  }


  prepareDataToSend(){
    let formValue: IMessageRequest = this.form.getRawValue();

    let dataToSend: IMessageRequest = {
      firstName : formValue.firstName,
      lastName : formValue.lastName,
      email : formValue.email,
      phone: formValue.phone,
      message : formValue.message
    };

    return dataToSend;
  }

  save(){
    if(this.form.valid){
      var data = this.prepareDataToSend();
      // console.log(data)
      // alert('I wrote the data in the console')
      this.mess[0]=data;
      this.form.reset();
    }
    else{
      alert("Form is not valid!");
    }
  }
}
