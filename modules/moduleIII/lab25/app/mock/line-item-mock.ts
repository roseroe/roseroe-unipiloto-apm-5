import {LineItem} from '../model/line-item';
import {PRODUCTS} from '../mock/product-mock';

export const LINEITEMS: LineItem[] = [
    {
       lineNumber: 1,
       purchasePrice: 20000,
       products: [PRODUCTS[0]]
    },
    {
       lineNumber: 2,
       purchasePrice: 30000,
       products: [PRODUCTS[1]]
    },
    {
       lineNumber: 3,
       purchasePrice: 40000,
       products: [PRODUCTS[2]]
    }
];