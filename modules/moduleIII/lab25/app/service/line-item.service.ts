import {Injectable} from "@angular/core";
import {LINEITEMS} from "../mock/line-item-mock";
import {LineItem} from "../model/line-item";
import {Product} from "../model/product";

@Injectable()
export class LineItemService{
    getLineItems(): Promise<LineItem[]>{
        return Promise.resolve(LINEITEMS);
    }

    getLineItem(id: number): Promise<LineItem> {
        return this.getLineItems()
            .then(lineitems => lineitems.find(lineitem => lineitem.lineNumber === id));
    }
    getProductDetail(id: number): Promise<Product[]> {
        return this.getLineItems()
            .then(lineitems => lineitems.find(lineitem => lineitem.lineNumber === id).products);
    }
}
