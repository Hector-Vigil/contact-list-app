import { Component, OnInit } from '@angular/core';
import { IContact, ICreateContact } from 'src/app/interfaces/contact.interface';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ContactService } from 'src/app/services/contact.service';
import { ContactValidator } from 'src/app/validators/contact.validator';
import { EditableComponent } from 'src/app/shared/editable/editable.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  standalone: true,
  imports:[ButtonComponent, EditableComponent, CommonModule, ReactiveFormsModule]
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  contact: IContact | ICreateContact = {
    name:"",
    phone:"",
    bio:"",
    photoUrl:""
  };
  isCreating: boolean = true;
  editing: boolean = this.isCreating;
  id:string|undefined;


  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {
    if(!!window.history.state.id)
      this.id = window.history.state.id;
  }

  ngOnInit(): void {
    if(!!this.id)
      this.getContact()
    this.updateFB();
  }

  updateFB(){
    this.contactForm = this.fb.group({
      name: [this.contact.name, Validators.required],
      phone: [
        this.contact.phone,
        [Validators.required, ContactValidator.phoneValidator],
      ],
      bio: [
        this.contact.bio,
        [Validators.required],
      ],
    });
  }

  getContact() {
    this.contactService.getItemId(this.id as string).subscribe((contact) => {
      this.contact = contact;
      this.updateFB();
    });
  }

  phoneNumberSeparator(phone:string){
    return `${phone.substring(0,3)}-${phone.substring(3,6)}-${phone.substring(6)}`
  }

  editHandle() {
    if (!this.editing) this.editing = true;
    else {
      this.handleOnSubmit();
    }
  }

  handleOnSubmit() {
    if (!this.contactForm.valid) return;
    Object.assign(this.contact, this.contactForm.value);
    if(!this.id){
      this.contactService
        .updateItem((this.contact as IContact).id,this.contact as IContact)
        .subscribe(() => {
          this.editing = false;
        });
    } else {
      this.contactService
        .updateItem((this.contact as IContact).id,this.contact as IContact)
        .subscribe(() => {
          this.editing = false;
        });
    }
  }

}
