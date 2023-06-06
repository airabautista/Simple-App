import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vlogs',
  templateUrl: './vlogs.page.html',
  styleUrls: ['./vlogs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VlogsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
