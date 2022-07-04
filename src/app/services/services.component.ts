import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coding } from '../models/coding';
import { Router } from "@angular/router";


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  coding$: Observable<Coding[]> | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.coding$ = this.codingService.coding$;
  }

  details(){
    this.router.navigate(['design'])
  }

}
