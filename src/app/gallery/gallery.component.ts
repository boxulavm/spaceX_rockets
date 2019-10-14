import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  rocketId;
  loading = false;
  rocketData = [];
  imageUrl;
  showModal = false;

  constructor(    private route: ActivatedRoute,) { }

  onClick(img){
    this.imageUrl = img;
    // console.log(this.imageUrl)
    this.showModal = true;
  }

  onClose(){
    this.showModal = false;
  }

  ngOnInit() {
    this.loading = true;

    // Get Id from router
    this.route.paramMap.subscribe(params => {
      this.rocketId = params.get('rocketId');
      // console.log(this.rocketId)
    });

    // Send request to server with Id
    fetch(`https://api.spacexdata.com/v3/rockets/${this.rocketId}`)
    .then(response => response.json())
    .then(rocket => {
      this.rocketData = rocket;
      // console.log(this.rocketData)
        this.loading = false;
    });

}

}