import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { INavigation } from 'src/app/interfaces/i-navigation';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations :[
    trigger('LogoShow',[
      transition(':enter',[
        style({
          fontSize: "30px"
        }),
        animate('1s')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  //public navigation: INavigation[];

  public navigation: INavigation[]=[];


  ngOnInit(): void {
    this.getAllNavs();
  }
  getAllNavs(): void{
    this.navigationService.getAll().subscribe(data => {
      this.navigation = data;
    })
  }
  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.nav') as HTMLElement;
    if (window.pageYOffset > 20) {
      element.classList.add('header-color');
    } else {
      element.classList.remove('header-color');
    }
  }
}
