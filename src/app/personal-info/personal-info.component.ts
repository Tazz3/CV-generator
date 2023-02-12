import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup | undefined;

  localItem: any = sessionStorage.getItem('page');
  curPage: number = parseInt(this.localItem);

  pageChange() {
    sessionStorage.setItem('firstLine', 'true');
    return sessionStorage.setItem('page', '2');
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
      sessionStorage.setItem('image', this.imageSrc);
    };
    this.myForm.controls['image'].valid == true;
  }

  cvUpdate(name: any) {
    if (name == 'phone-number' && this.phone != null) {
      sessionStorage.setItem('phone-number', this.phone);
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
    if (name == 'about-me' && this.aboutMe != null) {
      sessionStorage.setItem('about-me', this.aboutMe);
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

    this.aboutMe = sessionStorage.getItem('about-me');
    this.phone = sessionStorage.getItem('phone-number');
    this.image = sessionStorage.getItem('image');
  }
  onSubmit(form: FormGroup) {
    console.log('name', this.myForm.get('name'));
  }
}
