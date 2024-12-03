import Canvas from "./canvas";
import Eqs from "./eqs";
import upgrade2Basic from "./upgrade2Basic";

export default class SlideObject {
    static canvas = new Canvas();
    static eqs = new Eqs();

    static upgrade2Basic(slides) {
        return upgrade2Basic(slides);
    }
}
