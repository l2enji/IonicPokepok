import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { PhotoViewer} from '@ionic-native/photo-viewer/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
product: Product;
rate:any;
slideOpt={
  speed:1000,
  autoplay:{
    delay:500
  }
}
  constructor(private activatedRoute:ActivatedRoute,
    private http:HttpClient, private photoViewer:PhotoViewer,
    private storage:NativeStorage, private toastCtrl:ToastController,
    private navCtrl:NavController, private sharing:SocialSharing,) { }

  ngOnInit() {
    //pour récupérer le chemin de l'id du produit à afficher
    const id : string = this.activatedRoute.snapshot.paramMap.get('id'); //snapshot=capture le chemin
    console.log('id', id);
    // pour lancer la requete pour récuperer l'article correspondant à l'id
    this.loadData(id).subscribe(
      data =>{
        this.product=data;
      }
    )
  }
  //methode qui charge le produit
  loadData(id: string): Observable<Product> {
    let url:string=`${environment.api_url}/produits/${id}`;
    return this.http.get<Product>(url);
  }

  openCart(){
    this.navCtrl.navigateForward('/cart');
  }

  goTo(){

  }

  async share(){ //async=pour ne plus etre syncho avec typescript etc
    try{
      await this.sharing.share(
        this.product.descriptif,null,null,`https://localhost:8100/product-detail/${this.product.id}`
      );
      console.log("sharing success");
    }catch (e){
      console.log("error", e);
    }
  }

  showImage(imgId:string, imgTitle:string):void{
    this.photoViewer.show(`http://localhost:3082/image/${imgId}`, imgTitle, {share:true});
  }
  
  leaveNote():void{
    //on stock la moyenne dans une variable 'average'
    console.log('rate',this.rate);
    let average:number =(this.product.averageStar +this.rate) /2;
  }

  addToCart(item:Product){

  }

  presentToast(message:string, duration:number){

  }
}
