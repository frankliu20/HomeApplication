export interface IProductMySuffix {
    id?: number;
    productName?: string;
    productType?: string;
    price?: number;
}

export class ProductMySuffix implements IProductMySuffix {
    constructor(public id?: number, public productName?: string, public productType?: string, public price?: number) {}
}
