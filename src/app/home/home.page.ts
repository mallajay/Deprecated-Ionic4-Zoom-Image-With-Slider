import { ImageModalPage } from './../image-modal/image-modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  sliderOpts ={
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween:90
  };



  
  constructor(private modalController: ModalController) {}

  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => modal.present());
  }


}
