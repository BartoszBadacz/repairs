import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/organisms/header/header.component";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TitleComponent} from './components/molecules/title/title.component';
import {LayoutComponent} from './components/templates/layout/layout.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {
  RepairRecordComponent
} from './components/molecules/repair-record/repair-record.component';
import {
  SeparatorComponent
} from './components/atoms/separator/separator.component';
import {
  RepairsPageComponent
} from "./components/pages/repairs-page/repairs-page.component";
import {AppRoutingModule} from './app-routing.module';
import {
  StartPageComponent
} from "./components/pages/start-page/start-page.component";
import {
  DashboardComponent
} from './components/organisms/dashboard/dashboard.component';
import {
  RepairRecordDetailsComponent
} from './components/molecules/repair-record-details/repair-record-details.component';
import {
  RepairsComponent
} from './components/organisms/repairs/repairs.component';
import {
  NotFoundComponent
} from './components/organisms/not-found/not-found.component';
import {IconComponent} from './components/atoms/icon/icon.component';
import {
  RepairRecordHeadingComponent
} from './components/molecules/repair-record-heading/repair-record-heading.component';
import {
  NotFoundPageComponent
} from './components/pages/not-found-page/not-found-page.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {MatDialogModule} from "@angular/material/dialog";
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {
  BasicModalComponent
} from "./components/molecules/basic-modal/basic-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    LayoutComponent,
    RepairRecordComponent,
    SeparatorComponent,
    RepairsPageComponent,
    StartPageComponent,
    DashboardComponent,
    RepairRecordDetailsComponent,
    RepairsComponent,
    NotFoundComponent,
    IconComponent,
    RepairRecordHeadingComponent,
    NotFoundPageComponent,
  ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
        MatDialogModule,
      // NgMaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
