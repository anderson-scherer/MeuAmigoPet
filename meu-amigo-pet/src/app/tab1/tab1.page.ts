import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetsService } from '../api/pets.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  pets: Pet[] = [];

  constructor(private serv: PetsService) {}

  ngOnInit(): void {
    this.serv.getPets().subscribe(res => {
      this.pets = res;
    });
  }
}
