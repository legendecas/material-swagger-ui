import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RequestPanelComponent } from './request-panel/request-panel.component';
import { ResponsePanelComponent } from './response-panel/response-panel.component';
import { NavigationBoardComponent } from './navigation-board/navigation-board.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBoardComponent } from './app-board/app-board.component';
import { EntrypointBoardComponent } from './entrypoint-board/entrypoint-board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'app', component: AppBoardComponent },
  { path: 'entrypoint/:id', component: EntrypointBoardComponent, },
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RequestPanelComponent,
    ResponsePanelComponent,
    NavigationBoardComponent,
    AppBarComponent,
    AppBoardComponent,
    EntrypointBoardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
