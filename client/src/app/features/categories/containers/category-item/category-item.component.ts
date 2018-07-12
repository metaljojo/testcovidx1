import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  public catItems: any[];

  constructor(public router: Router, public _route: ActivatedRoute) { }

  ngOnInit() {
    const urlParams = this._route.snapshot.params;
    const itemDataBase = {
      categoryItems: {
        bikes: [
          {
            title: 'Vélo Homme',
            subtitle: 'equipment été',
            image: 'https://images.pexels.com/photos/462036/pexels-photo-462036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            title: 'Vélo Femme',
            subtitle: 'equipment été',
            image: 'https://images.pexels.com/photos/805303/pexels-photo-805303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        ],
        skis: [
          {
            title: 'Skis Homme',
            subtitle: 'equipment d\'hiver',
            image: 'https://images.pexels.com/photos/298007/pexels-photo-298007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            title: 'Skis Femme',
            subtitle: 'equipment d\'hiver',
            image: 'https://images.pexels.com/photos/848712/pexels-photo-848712.jpeg?cs=srgb&dl=cold-daylight-enjoyment-848712.jpg&fm=jpg'
          }
        ]
      }
    };
    console.log(':::::', itemDataBase.categoryItems[urlParams.type]);
    this.catItems = itemDataBase.categoryItems[urlParams.type];
  }

  goBack() {
    this.router.navigate(['/tabs/(one:one)']);
  }

}
