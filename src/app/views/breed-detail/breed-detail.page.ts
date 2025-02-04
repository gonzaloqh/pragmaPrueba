import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.page.html',
  styleUrls: ['./breed-detail.page.scss'],
  standalone: false
})

export class BreedDetailPage implements OnInit {
  breed: any;

  //Se carga el item desde el router
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.breed = navigation.extras.state['breed'];
    }
  }

  //Retorna las Keys de un JSON
  getKeys(obj: any): string[] {
    console.log(Object.keys(obj))
    return Object.keys(obj);
  }

  //Evalúa si un valor es un objeto
  isObject(value: any): boolean {
    return (typeof value == 'object');
  }

  ngOnInit() {
  }

}
