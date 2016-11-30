import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ApiDefinitionService } from './api-definition.service';
import { SchemaValidationService } from './schema-validation.service';
import { InfoCardComponent } from './info-card/info-card.component';
import { MarkedPipe } from './marked.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    MarkedPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    ApiDefinitionService,
    SchemaValidationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
