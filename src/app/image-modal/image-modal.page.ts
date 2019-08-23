import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavParams, ModalController, Events } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  img: any;

  @ViewChild('slider', {read: ElementRef, static: true})slider: ElementRef;
 


  sliderOpts = {
    zoom: {
      maxRatio: 3
    },
  };

  constructor(
    private navParams: NavParams, 
    private modalController: ModalController,
   
    ) { }


    
    

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }


  close() {
    this.modalController.dismiss();
  }

}
