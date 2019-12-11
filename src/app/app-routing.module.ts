import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddTradeComponent } from './add-trade/add-trade.component';
import { ModifyTradeComponent } from './modify-trade/modify-trade.component';
import { DeleteTradeComponent } from './delete-trade/delete-trade.component';
import { SearchTradeComponent } from './search-trade/search-trade.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: AddTradeComponent },
  { path: 'modify', component: ModifyTradeComponent },
  { path: 'delete', component: DeleteTradeComponent },
  { path: 'search', component: SearchTradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
