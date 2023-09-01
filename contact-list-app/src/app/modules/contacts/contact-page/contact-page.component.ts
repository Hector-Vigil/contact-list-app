import { Component, OnInit } from '@angular/core';
import { IContact, ICreateContact } from 'src/app/interfaces/contact.interface';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ContactService } from 'src/app/services/contact.service';
import { ImageService } from 'src/app/services/image.service';
import { ContactValidator } from 'src/app/validators/contact.validator';
import { EditableComponent } from 'src/app/shared/editable/editable.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  id:string|null;


  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private imageService: ImageService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id')
     if(!this.id)
      this.id = window.location.pathname.substring(9);
  }

  ngOnInit(): void {
    if(!!this.id && this.id.length === 36)
      this.getContact(this.id as string)
    this.updateFB();
  }

  backToList = () => {
    this.router.navigate(['/contacts/list'])
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
        [Validators.required,ContactValidator.bioValidator],
      ],
      photoUrl:[this.contact.photoUrl]
    });
  }

  getContact(id:string) {
    this.contactService.getItemId(id).subscribe((contact) => {
      this.contact = contact;
      this.editing = false;
      this.updateFB();
    });
  }

  handleImageUpload = (event:Event) =>{
    const files = (event.target as any).files;
    const formData = new FormData();
    formData.append("image",files[0]);
    this.imageService.newItem(formData)
    .subscribe((res:{photoUrl:string})=>{
      Object.assign(this.contact, this.contactForm.value);
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
    if(!!this.id && this.id.length === 36){
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
    } else {
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
    }
  }

}
