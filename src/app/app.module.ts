import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GameComponent } from './domain/game/game.component';
import { FacilitiesComponent } from './domain/game/components/facilities/facilities.component';
import { RouteMapComponent } from './domain/game/components/route-map/route-map.component';
import { StatusComponent } from './domain/game/components/status/status.component';
import { TradeComponent } from './domain/game/components/trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameComponent,
    FacilitiesComponent,
    RouteMapComponent,
    StatusComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
