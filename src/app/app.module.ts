//'imports' modules (for modules that extend Angular)
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

//'declarations' modules (for app components)
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
//import additional components here

@NgModule({
    imports: [
        BrowserModule, FormsModule, routing, HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
        //insert components here
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
