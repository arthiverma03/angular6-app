import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe(' A test recipe', 'this sis simple recope', 'https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Fsites%2Fdefault%2Ffiles%2Frecipe-collections%2Fcollection-image%2F2013%2F05%2Ffrying-pan-pizza-easy-recipe-collection.jpg&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy&docid=L6FA3gV1XSM2KM&tbnid=9_OOaw7zGbFv2M%3A&vet=10ahUKEwjanJy-1LzdAhXbeisKHVjkDBQQMwicAigAMAA..i&w=500&h=454&bih=662&biw=1366&q=recipe%20images&ved=0ahUKEwjanJy-1LzdAhXbeisKHVjkDBQQMwicAigAMAA&iact=mrc&uact=8')
];
  constructor() { }

  ngOnInit() {
  }

}
