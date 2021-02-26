import { NgModule } from '@angular/core';
import { PrimeNgModule } from './module/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    ],
    exports: [
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[

    ]
})
export class AppCommonModule {

}
