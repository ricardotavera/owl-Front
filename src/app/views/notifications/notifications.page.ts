import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})


export class NotificationsPage implements OnInit {
   
  
   posts = []



  constructor( private router: Router) { 
    
  }

  ngOnInit() {

    
    for(let i=0; i<50; i++){
      console.log(i)
      this.posts[i]  = { title: `Post ${i}`, date: new Date().toDateString(), location: 'Place'}
    }


    console.log(this.posts)
    
  }


  goToMap(){
    this.router.navigateByUrl('tabs'); 
  }

  


  
}
