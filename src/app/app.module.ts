import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RequestPanelComponent } from './request-panel/request-panel.component';
import { ResponsePanelComponent } from './response-panel/response-panel.component';
import { NavigationBoardComponent } from './navigation-board/navigation-board.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { EntrypointBoardComponent } from './entrypoint-board/entrypoint-board.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestPanelComponent,
    ResponsePanelComponent,
    NavigationBoardComponent,
    AppBarComponent,
    AppBoardComponent,
    EntrypointBoardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
