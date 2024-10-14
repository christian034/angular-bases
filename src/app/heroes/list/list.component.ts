import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroNames: string[] = ['Ironman', 'Capitán América', 'Thor', 'Hulk','Black widow'];
  public deletedhero?: string;

  removeLasthero():void {
    this.deletedhero = this.heroNames.pop();

  }
}
