import { NgModule } from '@angular/core';

import { HomeApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HomeApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HomeApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HomeApplicationSharedCommonModule {}
