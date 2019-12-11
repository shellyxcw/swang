import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule } from '@angular/material';
import { AddTradeComponent } from './add-trade/add-trade.component';
import { ModifyTradeComponent } from './modify-trade/modify-trade.component';
import { DeleteTradeComponent } from './delete-trade/delete-trade.component';
import { SearchTradeComponent } from './search-trade/search-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddTradeComponent,
    ModifyTradeComponent,
    DeleteTradeComponent,
    SearchTradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
