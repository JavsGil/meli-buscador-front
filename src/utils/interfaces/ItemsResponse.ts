import { Item } from "./Item";

export interface ItemsResponse {
    items: Item[];
    categories: string[];
}

export interface ItemResponse {
    item: Item;
}