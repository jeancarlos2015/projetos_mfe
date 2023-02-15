import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: APP_BASE_HREF, useValue: "/"
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TabMenuModule
    ]
})
export class AppModule { }
