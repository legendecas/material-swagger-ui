import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { EntrypointListComponent } from './entrypoint-list/entrypoint-list.component';
import { EntrypointCardComponent } from './entrypoint-card/entrypoint-card.component';
import { ApiDefinitionService } from './api-definition.service';
import { SchemaValidationService } from './schema-validation.service';
import { PrettyJsonPipe } from './pretty-json.pipe';
import { InfoCardComponent } from './info-card/info-card.component';
import { MarkedPipe } from './marked.pipe';
import { DrawerComponent } from './drawer/drawer.component';
import { ParameterSchemaFormatterPipe } from './parameter-schema-formatter.pipe';
import { SchemaFormatterPipe } from './schema-formatter.pipe';
import { SchemaFormatterService } from './schema-formatter.service';
import { ResponseViewComponent } from './response-view/response-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrypointListComponent,
    EntrypointCardComponent,
    PrettyJsonPipe,
    InfoCardComponent,
    MarkedPipe,
    DrawerComponent,
    ParameterSchemaFormatterPipe,
    SchemaFormatterPipe,
    ResponseViewComponent,
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
    SchemaFormatterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
