import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeApplicationSharedModule } from 'app/shared';
import {
    ProductMySuffixComponent,
    ProductMySuffixDetailComponent,
    ProductMySuffixUpdateComponent,
    ProductMySuffixDeletePopupComponent,
    ProductMySuffixDeleteDialogComponent,
    productRoute,
    productPopupRoute
} from './';

const ENTITY_STATES = [...productRoute, ...productPopupRoute];

@NgModule({
    imports: [HomeApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProductMySuffixComponent,
        ProductMySuffixDetailComponent,
        ProductMySuffixUpdateComponent,
        ProductMySuffixDeleteDialogComponent,
        ProductMySuffixDeletePopupComponent
    ],
    entryComponents: [
        ProductMySuffixComponent,
        ProductMySuffixUpdateComponent,
        ProductMySuffixDeleteDialogComponent,
        ProductMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeApplicationProductMySuffixModule {}
