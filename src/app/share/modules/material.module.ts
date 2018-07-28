import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatTabsModule, MatToolbarModule } from '@angular/material';

const modules = [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule
];

@NgModule({
    declarations: [

    ],
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [],
    bootstrap: []
})
export class MaterialModule { }
