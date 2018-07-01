import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProductMySuffix } from 'app/shared/model/product-my-suffix.model';
import { ProductMySuffixService } from './product-my-suffix.service';

@Component({
    selector: 'jhi-product-my-suffix-update',
    templateUrl: './product-my-suffix-update.component.html'
})
export class ProductMySuffixUpdateComponent implements OnInit {
    private _product: IProductMySuffix;
    isSaving: boolean;

    constructor(private productService: ProductMySuffixService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ product }) => {
            this.product = product;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.product.id !== undefined) {
            this.subscribeToSaveResponse(this.productService.update(this.product));
        } else {
            this.subscribeToSaveResponse(this.productService.create(this.product));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IProductMySuffix>>) {
        result.subscribe((res: HttpResponse<IProductMySuffix>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get product() {
        return this._product;
    }

    set product(product: IProductMySuffix) {
        this._product = product;
    }
}
