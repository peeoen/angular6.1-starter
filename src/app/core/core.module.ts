import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../share/modules/material.module';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const components = [
    LoginComponent,
    NavbarComponent
];

@NgModule({
    imports: [
        /* 3rd party libraries */
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    providers: [
        /* our own custom services  */
    ]
})
export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
