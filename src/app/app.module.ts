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
import { ApiDefinitionService } from './api-definition.service';
import { SchemaValidationService } from './schema-validation.service';
import { MarkedPipe } from './marked.pipe';
import { JsonTableComponent } from './json-table/json-table.component';

const appRoutes: Routes = [
  { path: 'app', component: AppBoardComponent },
  { path: 'entrypoint', children: [
    { path: '', children: [
      { path: ':method', children: [
        { path: '**', component: EntrypointBoardComponent}] }
    ]}] },
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
    MarkedPipe,
    JsonTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ApiDefinitionService,
    SchemaValidationService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
