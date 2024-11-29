/**
 * 6-sep-2024
 * it takes item data for super and property for its self
 */
export default class ButtonHandle extends Handle {
    isHit(mouseX: any, mouseY: any): false | undefined;
    checkHit(mouseX: any, mouseY: any): boolean;
}
import Handle from './Handle';
