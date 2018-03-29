import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NewsCategoryProvider } from '../../providers/news-category/news-category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mainNews = [];
  public foreignNews = [];

  constructor(public navCtrl: NavController,
    private LoadingController:LoadingController,
     private NewsCategoryProvider: NewsCategoryProvider) {
    
  }
ionViewDidLoad(){
  let allMusicLoading = this.LoadingController.create({
    content: "Getting your music"
  });
  //allMusicLoading.present();

  this.NewsCategoryProvider.getMusic()
    .subscribe((musicList) => {
      // console.log(musicList.mainnews);
      allMusicLoading.dismiss();
      this.mainNews = musicList.mainnews;
      this.foreignNews=musicList.foreign;
    });
}
}
