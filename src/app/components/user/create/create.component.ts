import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Users} from "../../../models/users";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'asg-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  avatar: string = '';
  idIncrement = 8;

  user: Users = {
    id: 0,
    first_name: '',
    last_name: '',
    position: '',
    avatar: '',
    publication: '',
    comment: ''
  }

  firstname = new FormControl('', [
    Validators.required,
  ]);

  constructor(private userService: UsersService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  openBottomSheet(event: Event): any {
    // this._bottomSheet.open();
    // this.avatar = 'hola';
    // @ts-ignore
    const imgAvatar = event.target.files[0].name;
    this.avatar = imgAvatar;
    console.log(imgAvatar);
    // this.imageBase64(imgAvatar).then((img: any) => {
    //   console.log(img);
    //   this.avatar = img.base;
    //   // this.user.avatar = img.base;
    // });
    // console.log(event.target.files[0]);
    // @ts-ignore
    // this.user.avatar = event.target.files[0].name;
  }

  create(): void {
    // delete this.user.id;
    this.user.id = this.idIncrement;
    this.user.avatar = this.avatar;
    console.log(this.user.avatar);
    // this.user.avatar = './assets/FORO-DIA-AGUA-0001.jpg';
    // this.userService.createUser(this.user)
    //   .subscribe(
    //     result => {
    //       console.log(result);
    //     },
    //     error => console.log(error)
    //   );
    // this.idIncrement++;
  }

  // @ts-ignore
  imageBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafaImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafaImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result,
        });
      };
      reader.onerror = error => {
        resolve({
          base: reader.result,
        });
      };
    } catch (e) {
      return null;
    }
  });
}
