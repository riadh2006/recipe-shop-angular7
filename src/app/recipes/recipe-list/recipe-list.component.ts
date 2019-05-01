import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test REcipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn6j9bkumPpcloqw8D7LkGWObCfDZFpznKa8fWxKMp1xwK_gy'),
    new Recipe('Test REcipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn6j9bkumPpcloqw8D7LkGWObCfDZFpznKa8fWxKMp1xwK_gy')
  ];

  constructor() { }

  ngOnInit() {
  }

}
