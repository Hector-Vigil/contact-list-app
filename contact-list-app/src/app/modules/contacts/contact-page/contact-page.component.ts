import { Component, OnInit } from '@angular/core';
import { IContact, ICreateContact } from 'src/app/interfaces/contact.interface';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ContactService } from 'src/app/services/contact.service';
import { ContactValidator } from 'src/app/validators/contact.validator';
import { EditableComponent } from 'src/app/shared/editable/editable.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  standalone: true,
  imports:[ButtonComponent, EditableComponent, CommonModule, ReactiveFormsModule, MatTooltipModule]
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  contact: IContact | ICreateContact = {
    name:"",
    phone:"",
    bio:"",
    photoUrl:""
  };
  editing: boolean = true;
  id:string|undefined;


  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    if(!!window.history.state.id)
      this.id = window.history.state.id;
    else if(window.location.pathname.length === 45)
      this.id = window.location.pathname.substring(9);
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
      photoUrl:[this.contact.photoUrl]
    });
  }

  getContact() {
    this.contactService.getItemId(this.id as string).subscribe((contact) => {
      this.contact = contact;
      this.editing = false;
      this.updateFB();
    });
  }

  handleImageUpload = (event:Event) =>{
    const files = (event.target as any).files;
    const formData = new FormData();
    formData.append("image",files[0]);
    this.contactService.uploadImage(formData).subscribe((res:{photoUrl:string})=>{
      this.contact.photoUrl = res.photoUrl;
      this.updateFB();
    })
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

  alertMethod(value: string) {
    if(confirm(value)) {
    }
  }

  deleteContact() {
    this.contactService.removeItem(this.id as string)
    .subscribe(()=>this.router.navigate(['/contacts/list']));
  }

  handleOnSubmit() {
    if (!this.contactForm.valid) return;
    Object.assign(this.contact, this.contactForm.value);
    if(!this.id){
      this.contactService
        .newItem(this.contact as ICreateContact)
        .pipe(
          catchError((e) => {
            return throwError(() => {
              if(e.error.fields[0] === "phone")
                this.alertMethod('This phone number already exists');
              else if(e.error.fields[0] === "bio")
                this.alertMethod('Biography should be longer than 5 chars');
              return new Error(`ups something happened ${JSON.stringify(e.error)}`)
            });
          })
        )
        .subscribe((contact) => {
          this.editing = false;
          this.contact = contact;
          this.id = contact.id;
          this.router.navigate([`/contact/${contact.id}`],{ state:{id:contact.id}})
        });
    } else {
      this.contactService
        .updateItem((this.contact as IContact).id,this.contact as IContact)
        .pipe(
          catchError((e) => {
            return throwError(() => {
              if(e.error.fields[0] === "phone")
                this.alertMethod('This phone number already exists');
              else if(e.error.fields[0] === "bio")
                this.alertMethod('Biography should be longer than 5 chars');
              return new Error(`ups something happened ${JSON.stringify(e.error)}`)
            });
          })
        )
        .subscribe(() => {
          this.editing = false;
        });
    }
  }

}
