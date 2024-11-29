/**
 * 4 - Sep - 2024
 * At this time DraggerHandle takes in "the term" that you use in your item for x and y .
 * There was an idea that it should demand from every item to have fields x and y also if there is some item with term for x = x0 etc that will also need to replace it in database
 * I have decided to keep it such (take in term for x and y) since there can be many types of items and some may not have the concept of x and y.
 */
export default class DraggerHandle extends Handle {
    constructor(itemData: any, termForX?: string, termForY?: string);
    termForX: string;
    termForY: string;
}
import Handle from './Handle';
