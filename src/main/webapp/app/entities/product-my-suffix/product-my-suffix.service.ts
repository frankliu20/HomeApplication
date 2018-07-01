import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IProductMySuffix } from 'app/shared/model/product-my-suffix.model';

type EntityResponseType = HttpResponse<IProductMySuffix>;
type EntityArrayResponseType = HttpResponse<IProductMySuffix[]>;

@Injectable({ providedIn: 'root' })
export class ProductMySuffixService {
    private resourceUrl = SERVER_API_URL + 'api/products';

    constructor(private http: HttpClient) {}

    create(product: IProductMySuffix): Observable<EntityResponseType> {
        return this.http.post<IProductMySuffix>(this.resourceUrl, product, { observe: 'response' });
    }

    update(product: IProductMySuffix): Observable<EntityResponseType> {
        return this.http.put<IProductMySuffix>(this.resourceUrl, product, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IProductMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IProductMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
