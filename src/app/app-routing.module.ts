import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { AuthorComponent } from './author/author.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneRoomComponent } from './one-room/one-room.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "restaurant",
        component: RestaurantComponent
      },
      {
        path: "rooms",
        component: AllRoomsComponent
      },
      {
        path: "rooms/:id",
        component: OneRoomComponent
      },
      {
        path: "author",
        component: AuthorComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
