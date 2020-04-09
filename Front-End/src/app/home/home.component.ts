import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../services/advert.service';
import { UserService } from '../services/user_.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  content: string;

  p: number = 1;

  adverts: any;
  currentAdvert = null;
  currentIndex = -1;
  // title = '';

  constructor(private advertService: AdvertService, private userService: UserService) { }

  ngOnInit() {
    this.retrieveAdverts();
  }

  update () {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  

  retrieveAdverts() {
    this.advertService.getAll()
      .subscribe(
        data => {
          this.adverts = data;
          console.log("Data:", data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveAdverts();
    this.currentAdvert = null;
    this.currentIndex = -1;
  }

  setActiveAdvert(advert, index) {
    this.currentAdvert = advert;
    this.currentIndex = index;
  }

  // removeAllAdverts() {
  //   this.advertService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveAdverts();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // searchTitle() {
  //   this.advertService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.adverts = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
