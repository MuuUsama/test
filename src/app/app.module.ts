import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './features/ticket/ticket.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { TableDataComponent } from './features/ticket/table-data/table-data.component';
import { StatisticsComponent } from './features/ticket/statistics/statistics.component';
import { ShowTicketComponent } from './features/ticket/show-ticket/show-ticket.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxEchartsModule } from 'ngx-echarts'; // Import NgxEchartsModule
import { ButtonModule } from 'primeng/button'; // Import ButtonModule from PrimeNG
import { TableModule } from 'primeng/table'; // Import TableModule from PrimeNG
import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule from PrimeNG
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TableDataComponent,
    StatisticsComponent,
    ShowTicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgApexchartsModule,
    QRCodeModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }), // Import ECharts
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    HttpClientModule,
    TooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
