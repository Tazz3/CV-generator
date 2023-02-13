import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    // setInterval(function () {
    //   this.refresh();
    // }, 1000);
  }

  myForm: FormGroup | undefined;

  localItem: any = sessionStorage.getItem('page');
  curPage: number = parseInt(this.localItem);

  pageChange() {
    sessionStorage.setItem('firstLine', 'true');
    return sessionStorage.setItem('page', '2');
  }

  reFreshing() {
    sessionStorage.clear();
  }

  fName: any = '';
  surName: any = '';
  eMail: any = '';
  phone: any = '';
  aboutMe: any = '';
  image: any = '';

  imageSrc: string = '';

  uploadImage(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      this.imageSrc = reader.result as string;
      const imageObject = {
        image: this.imageSrc,
      };
      sessionStorage.setItem('image1', this.imageSrc);
    };
  }

  handleFileInput(event) {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader);
    reader.onload = () => {
      const dataURI: any = reader.result;
      sessionStorage.setItem('image', dataURI);
    };
  }

  cvUpdate(name: any) {
    if (name == 'phone_number' && this.phone != null) {
      sessionStorage.setItem('phone_number', this.phone);
    }
    if (name == 'email' && this.eMail != null) {
      sessionStorage.setItem('email', this.eMail);
    }
    if (name == 'name' && this.fName != null) {
      sessionStorage.setItem('name', this.fName);
    }
    if (name == 'surname' && this.surName != null) {
      sessionStorage.setItem('surname', this.surName);
    }
    if (name == 'about_me' && this.aboutMe != null) {
      sessionStorage.setItem('about_me', this.aboutMe);
    }
  }

  refresh() {
    if (sessionStorage.getItem('email') != null) {
      this.eMail = sessionStorage.getItem('email');
    }
    if (sessionStorage.getItem('about_me') != null) {
      this.aboutMe = sessionStorage.getItem('about_me');
    }
    if (sessionStorage.getItem('phone_number') != null) {
      this.phone = sessionStorage.getItem('phone_number');
    }
    if (sessionStorage.getItem('name') != null) {
      this.fName = sessionStorage.getItem('name');
    }
    if (sessionStorage.getItem('surname') != null) {
      this.surName = sessionStorage.getItem('surname');
    }
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[ა-ჰ]+'),
        ],
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[ა-ჰ]+'),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9.]+@redberry.ge')],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[+]995[-. )]*[0-9]{3}[-. )]*[0-9]{2}[-. )]*[0-9]{2}[-. )]*[0-9]{2}[-. )]*'
          ),
        ],
      ],
      image: ['', [Validators.minLength(3)]],
      aboutMe: [''],
    });

    this.fName = sessionStorage.getItem('name');
    this.surName = sessionStorage.getItem('surname');
    if (sessionStorage.getItem('email') != null) {
      this.eMail = sessionStorage.getItem('email');
    }
    if (sessionStorage.getItem('about_me') != null) {
      this.aboutMe = sessionStorage.getItem('about_me');
    }
    if (sessionStorage.getItem('phone_number') != null) {
      this.phone = sessionStorage.getItem('phone_number');
    }
    if (sessionStorage.getItem('name') != null) {
      this.fName = sessionStorage.getItem('name');
    }
    if (sessionStorage.getItem('surname') != null) {
      this.surName = sessionStorage.getItem('surname');
    }
    this.eMail = sessionStorage.getItem('email');
    this.aboutMe = sessionStorage.getItem('about_me');
    this.phone = sessionStorage.getItem('phone_number');
    this.image = sessionStorage.getItem('image');
  }
  onSubmit(form: FormGroup) {
    console.log('name', this.myForm.get('name'));
  }
}
