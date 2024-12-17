import { c as create_ssr_component, a as subscribe, o as onDestroy, b as add_attribute, f as get_store_value, e as escape, d as each, v as validate_component, h as createEventDispatcher, m as missing_component, n as null_to_empty } from "./ssr.js";
import { w as writable } from "./index.js";
import "katex";
let Sprite$2 = class Sprite {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.data = [];
    this.selectedData = null;
  }
  addItem(name, sx, sy, sw, sh) {
    this.data.push({
      name,
      sx,
      sy,
      sw,
      sh
    });
  }
  applyItem(name) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.name == name) {
        this.selectedData = item;
        return;
      }
    }
  }
};
const students$1 = new Sprite$2("students", "/sprites/students.png");
students$1.addItem("student_w_tablet", 183, 317, 225, 350);
students$1.addItem("student_red", 254, 0, 275, 250);
students$1.addItem("student_female", 424, 288, 220, 250);
students$1.addItem("student_black", 540, 0, 260, 266);
const w$3 = 90;
const h$3 = 100;
let y$3 = 0;
const figs$1 = new Sprite$2("figs", "/sprites/figs.png");
figs$1.addItem("flower1", 0, y$3, w$3, h$3);
figs$1.addItem("flower2", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("flower3", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("flowe4", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("female_stick", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("male_stick", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("bear_face", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("apple", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 1;
figs$1.addItem("plant_pot", 0, y$3, w$3, h$3);
figs$1.addItem("penguin", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("drum_face", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("carrot", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("dimond", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("spring", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("bomb", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("paw", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 2;
figs$1.addItem("line_design1", 0, y$3, w$3, h$3);
figs$1.addItem("line_design2", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("line_design3", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("line_design4", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("line_design5", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("line_design6", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("line_design7", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("line_design8", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 3;
figs$1.addItem("line_design9", 0, y$3, w$3, h$3);
figs$1.addItem("leaf_left", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("leaf_right", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("cherry", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("drop_face", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("spring2", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("clock", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("water_tap_face", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 4;
figs$1.addItem("smily_face_right", 0, y$3, w$3, h$3);
figs$1.addItem("frying_pan_right", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("spatula_right", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("fox_face_left", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("evil_moon_face_left", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("telephone", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("tram_right", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("train", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 5;
figs$1.addItem("car_left", 0, y$3, w$3, h$3);
figs$1.addItem("puff_right", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("signal_right", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("plane_right", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("sun", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("umbrella", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("ice_man", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("cat_face_normal", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 6;
figs$1.addItem("octopus_right", 0, y$3, w$3, h$3);
figs$1.addItem("bow", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("fish_right", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("ant_left", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("duck_left", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("chicken_left", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("heart", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("mouse", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 7;
figs$1.addItem("mouse_right", 0, y$3, w$3, h$3);
figs$1.addItem("ghost_left", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("leaf_big_left", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("pencil_right", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("fork", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("mickey_mouse_face", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("rabit_face", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("crown", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 8;
figs$1.addItem("smily_face_left", 0, y$3, w$3, h$3);
figs$1.addItem("frying_pan_left", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("spatula_left", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("fox_face_right", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("evil_moon_face_right", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("mobile_phone", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("tram_left", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("tv", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 9;
figs$1.addItem("car_right", 0, y$3, w$3, h$3);
figs$1.addItem("puff_left", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("signal_left", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("plane_left", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("cloud_face", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("cloud_rain", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("paw_big", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("cat_face_evil", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 10;
figs$1.addItem("octopus_left", 0, y$3, w$3, h$3);
figs$1.addItem("hot_tea", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("fish_left", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("ant_right", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("duck_right", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("chicken_right", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("shinning_star", w$3 * 6, y$3, w$3, h$3);
figs$1.addItem("robot", w$3 * 7, y$3, w$3, h$3);
y$3 = h$3 * 11;
figs$1.addItem("mouse_left", 0, y$3, w$3, h$3);
figs$1.addItem("ghost_right", w$3 * 1, y$3, w$3, h$3);
figs$1.addItem("leaf_big_right", w$3 * 2, y$3, w$3, h$3);
figs$1.addItem("pencil_left", w$3 * 3, y$3, w$3, h$3);
figs$1.addItem("spoon", w$3 * 4, y$3, w$3, h$3);
figs$1.addItem("octopus_wave", w$3 * 5, y$3, w$3, h$3);
figs$1.addItem("dimon2", w$3 * 6, y$3, w$3, h$3);
const w$2 = 80;
const h$2 = 75;
let y$2 = 0;
const alphabets$1 = new Sprite$2("alphabets", "/sprites/alphabets.png");
alphabets$1.addItem("A", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("B", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("C", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("D", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("E", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("F", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("G", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("H", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("I", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("J", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("K", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("L", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 1;
alphabets$1.addItem("M", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("N", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("O", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("P", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("Q", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("R", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("S", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("T", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("U", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("V", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("W", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("X", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 2;
alphabets$1.addItem("Y", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("Z", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("a", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("b", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("c", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("d", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("e", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("f", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("g", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("h", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("i", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("j", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 3;
alphabets$1.addItem("k", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("l", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("m", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("n", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("o", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("p", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("q", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("r", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("s", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("t", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("u", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("v", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 4;
alphabets$1.addItem("w", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("x", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("y", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("z", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("0", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("1", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("2", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("3", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("4", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("5", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("6", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("7", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 5;
y$2 += 5;
alphabets$1.addItem("8", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("9", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("fullstio", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("comma", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("semi_colon", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("colon", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("question_mark", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("exclamation", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("dash", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("pound", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("double_quote", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("single_quote", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 6;
alphabets$1.addItem("ampersand", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("left_bracket", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("right_bracket", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("right_angle_bracket", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("left_angle_bracket", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("tilda", w$2 * 5, y$2, w$2, h$2);
alphabets$1.addItem("backslash", w$2 * 6, y$2, w$2, h$2);
alphabets$1.addItem("frontslash", w$2 * 7, y$2, w$2, h$2);
alphabets$1.addItem("registered", w$2 * 8, y$2, w$2, h$2);
alphabets$1.addItem("foot_mark", w$2 * 9, y$2, w$2, h$2);
alphabets$1.addItem("degree_mark", w$2 * 10, y$2, w$2, h$2);
alphabets$1.addItem("plus", w$2 * 11, y$2, w$2, h$2);
y$2 = h$2 * 7;
alphabets$1.addItem("isequal", w$2 * 0, y$2, w$2, h$2);
alphabets$1.addItem("multiply", w$2 * 1, y$2, w$2, h$2);
alphabets$1.addItem("dollar", w$2 * 2, y$2, w$2, h$2);
alphabets$1.addItem("greatherThan", w$2 * 3, y$2, w$2, h$2);
alphabets$1.addItem("smallerThan", w$2 * 4, y$2, w$2, h$2);
alphabets$1.addItem("divide", w$2 * 5, y$2, w$2, h$2);
const people$1 = new Sprite$2("people", "/sprites/people.png");
people$1.addItem("man_tblt_stndg", 0, 0, 115, 258);
people$1.addItem("mf_wlk_biz", 150, 0, 200, 250);
people$1.addItem("mf_stnd_read", 380, 0, 180, 240);
people$1.addItem("gp_selfy", 570, 0, 250, 250);
people$1.addItem("boy_googles", 860, 0, 130, 250);
people$1.addItem("mf_travellers", 0, 280, 200, 250);
people$1.addItem("m_h_phone_wlk", 225, 275, 125, 255);
people$1.addItem("crowd", 355, 250, 400, 280);
people$1.addItem("mf_mbl_wlk", 530, 260, 230, 270);
people$1.addItem("old_cpl_jog", 800, 270, 200, 260);
people$1.addItem("mom_kids_study", 0, 530, 315, 250);
people$1.addItem("sofa_3people_rdng", 335, 550, 400, 240);
people$1.addItem("3teen_Students", 760, 530, 230, 260);
people$1.addItem("f_lazy_chair_tblt", 5, 800, 184, 218);
people$1.addItem("biz_dnr", 230, 790, 420, 228);
people$1.addItem("sun_bathing", 650, 800, 347, 221);
const ITEM_TYPE_TEMPLATES = {
  text: [
    "text",
    "x",
    "y",
    "fontSize",
    "fontFamily",
    "font",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  line: [
    "x1",
    "y1",
    "x2",
    "y2",
    "lineWidth",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  lines: [
    "x",
    "y",
    "drawBorder",
    "fill",
    "color",
    "fillBg",
    "bgColor",
    "width",
    "height",
    "lines",
    "command",
    "name",
    "showAt",
    "globalAlpha"
  ],
  rect: [
    "x",
    "y",
    "width",
    "height",
    "filled",
    "lineWidth",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  para: [
    "text",
    "x",
    "y",
    "font",
    "fontSize",
    "fontFamily",
    "lineHeightOffset",
    "xOffset",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  ellipse: [
    "x",
    "y",
    "radiusX",
    "radiusY",
    "rotation",
    "startAngle",
    "endAngle",
    "lineWidth",
    "fill",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  piechart: [
    "x",
    "y",
    "radius",
    "data",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  circle: [
    "x",
    "y",
    "radius",
    "startAngle",
    "endAngle",
    "fill",
    "lineWidth",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  angleSymbol: [
    "x",
    "y",
    "radius",
    "ticks",
    "startAngle",
    "endAngle",
    "lineWidth",
    "showOrigin",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  dot: [
    "x",
    "y",
    "label",
    "dot_width",
    "text_color",
    "text_size",
    "fill",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  icon: [
    "text",
    "x",
    "y",
    "fontSize",
    "iconSize",
    "fontFamily",
    "icon",
    "showBg",
    "iconOnTop",
    "iconErrorX",
    "iconErrorY",
    "bgColor",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  polygon: [
    "points",
    "filled",
    "lineWidth",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  triangle: [
    "x1",
    "y1",
    "x2",
    "y2",
    "x3",
    "y3",
    "lineWidth",
    "filled",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  ray: [
    "x0",
    "y0",
    "x1",
    "y1",
    "lineWidth",
    "arrowWidth",
    "arrowHeight",
    "startArrow",
    "endArrow",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  image: [
    "src",
    "image",
    "x",
    "y",
    "ext",
    "width",
    "height",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ],
  sprite: [
    "spriteId",
    "sheet",
    "sheetItem",
    "x",
    "y",
    "width",
    "height",
    "command",
    "name",
    "color",
    "showAt",
    "globalAlpha"
  ]
};
const DEFAULT_SLIDE_EXTRA = {
  backgroundColor: "#044810",
  canvasWidth: 1e3,
  canvasHeight: 360,
  cellHeight: 25,
  cellWidth: 25,
  bgImg: "system_images/bg_images/black_mat.jpg",
  bgGlobalAlpha: 1,
  xFactor: 0,
  yFactor: 0,
  showGrid: false,
  gridLineWidth: 1,
  gridLineColor: "gray"
};
function checkSlideVersion(slide, fix, report) {
  if (!slide.version) {
    if (fix) slide.version = "basic";
    report.warnings.push("Missing slide version");
  }
}
function checkSlideTiming(slide, fix, report) {
  if (!slide.hasOwnProperty("startTime") || !slide.hasOwnProperty("endTime")) {
    if (fix) {
      slide.startTime = slide.startTime || 0;
      slide.endTime = slide.endTime || 3;
    }
    report.errors.push("Missing start or end times");
  }
  if (slide.startTime >= slide.endTime) {
    report.errors.push("Timing Error: Start time must be less than end time");
    report.result = false;
  }
}
function checkSlideExtra(slide, fix, report) {
  if (!slide.slideExtra) {
    if (fix) slide.slideExtra = { ...DEFAULT_SLIDE_EXTRA };
    report.warnings.push("Missing slideExtra");
  } else {
    Object.keys(DEFAULT_SLIDE_EXTRA).forEach((key) => {
      if (!(key in slide.slideExtra)) {
        if (fix) slide.slideExtra[key] = DEFAULT_SLIDE_EXTRA[key];
        report.warnings.push(`Missing slideExtra field: ${key}`);
      }
    });
  }
}
function checkItems(slide, report) {
  slide.items.forEach((item, index) => {
    if (!item.itemExtra) {
      report.warnings.push(`Item ${index} missing itemExtra`);
      report.result = false;
      return;
    }
    const itemType = item.itemExtra.command;
    const templateFields = ITEM_TYPE_TEMPLATES[itemType];
    if (!templateFields) {
      report.errors.push(`Unknown item type: ${itemType}`);
      report.result = false;
      return;
    }
    const itemExtraFields = Object.keys(item.itemExtra);
    const missingFields = templateFields.filter((field) => !itemExtraFields.includes(field));
    const extraFields = itemExtraFields.filter((field) => !templateFields.includes(field));
    if (missingFields.length > 0) {
      report.errors.push(`${item.itemExtra.name} has missing itemExtra fields: ${missingFields}`);
    }
    if (extraFields.length > 0) {
      report.errors.push(` ${item.itemExtra.name} has extra itemExtra fields: ${extraFields}`);
    }
  });
}
async function canvasHealth(slide, fix = false) {
  const report = { warnings: [], errors: [], result: true };
  checkSlideVersion(slide, fix, report);
  checkSlideTiming(slide, fix, report);
  if (!slide.hasOwnProperty("items")) {
    if (fix) slide.items = [];
    report.warnings.push("Missing items array");
  }
  checkSlideExtra(slide, fix, report);
  checkItems(slide, report);
  return report;
}
function uuid() {
  const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = randomHex();
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
let TextObject$1 = class TextObject {
  static data() {
    return {
      uuid: uuid(),
      type: "text",
      x: 100,
      y: 100,
      text: "Add text..",
      fontSize: 30,
      fontFamily: "Arial",
      color: "black",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fontSize", type: "Number", config: { min: 0, max: 200, step: 1 } });
    dialogueBox.push({ name: "fontFamily", type: "FontFamily", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    if (!itemExtra.fontSize) {
      itemExtra.fontSize = 40;
    }
    if (!itemExtra.fontFamily) {
      itemExtra.fontFamily = "Arial";
    }
    ctx.save();
    const text2 = itemExtra.text;
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.fillStyle = itemExtra.color;
    ctx.font = `${itemExtra.fontSize}px ${itemExtra.fontFamily}`;
    ctx.textBaseline = "top";
    ctx.fillText(text2, x, y2);
    ctx.restore();
  }
};
let Rectangle$1 = class Rectangle {
  static data() {
    return {
      uuid: uuid(),
      type: "rectangle",
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const width = itemExtra.width;
    const height = itemExtra.height;
    const color = itemExtra.color ?? "white";
    const filled = itemExtra.filled;
    const dash = itemExtra.dash ?? 0;
    const gap = itemExtra.gap ?? 0;
    const lineWidth = itemExtra.lineWidth ?? 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    if (filled) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y2, width, height);
    } else {
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y2, width, height);
    }
    ctx.restore();
  }
};
class Ellipse {
  static data() {
    return {
      uuid: uuid(),
      type: "ellipse",
      x: 100,
      y: 100,
      radiusX: 50,
      radiusY: 75,
      rotation: 0,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      filled: false,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radiusX", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radiusY", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "rotation", type: "Float", config: { min: 0, max: 360, step: 0.1 } });
    dialogueBox.push({ name: "startAngle", type: "Float", config: { min: -360, max: 360, step: 0.1 } });
    dialogueBox.push({ name: "endAngle", type: "Float", config: { min: -360, max: 360, step: 0.1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radiusX = itemExtra.radiusX;
    const radiusY = itemExtra.radiusY;
    const color = itemExtra.color || "black";
    const filled = itemExtra.filled || false;
    const rotation = itemExtra.rotation || 0 * (Math.PI / 180);
    const startAngle = itemExtra.startAngle || 0 * (Math.PI / 180);
    const endAngle = itemExtra.endAngle || 360 * (Math.PI / 180);
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.ellipse(x, y2, radiusX, radiusY, rotation, startAngle, endAngle);
    if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
      } else {
        ctx.setLineDash([dash, gap]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
}
class Angle {
  static data() {
    return {
      uuid: uuid(),
      type: "angle",
      x: 100,
      y: 100,
      radius: 25,
      ticks: 3,
      startAngle: -90,
      endAngle: 0,
      lineWidth: 1,
      showOrigin: true,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "radius", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "ticks", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "startAngle", type: "Float", config: { min: -360, max: 360, step: 1 } });
    dialogueBox.push({ name: "endAngle", type: "Float", config: { min: -360, max: 360, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "showOrigin", type: "Boolean", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const startAngle = itemExtra.startAngle * (Math.PI / 180);
    const endAngle = itemExtra.endAngle * (Math.PI / 180);
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radius = itemExtra.radius;
    const ticks = itemExtra.ticks;
    const color = itemExtra.color;
    const lineWidth = itemExtra.lineWidth;
    const showOrigin = itemExtra.showOrigin;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y2, radius, startAngle, endAngle);
    ctx.stroke();
    const angleStep = (endAngle - startAngle) / (ticks + 1);
    for (let i = 1; i <= ticks; i++) {
      const angle = startAngle + i * angleStep;
      const startX = x + Math.cos(angle) * (radius - 5);
      const startY = y2 + Math.sin(angle) * (radius - 5);
      const endX = x + Math.cos(angle) * (radius + 10);
      const endY = y2 + Math.sin(angle) * (radius + 10);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    if (showOrigin) {
      ctx.beginPath();
      ctx.arc(x, y2, 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.restore();
  }
}
let Circle$1 = class Circle {
  static data() {
    return {
      uuid: uuid(),
      type: "circle",
      x: 150,
      y: 150,
      radius: 50,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: false,
      color: "gray",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radius", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "startAngle", type: "Number", config: { min: 0, max: 360, step: 1 } });
    dialogueBox.push({ name: "endAngle", type: "Number", config: { min: 0, max: 360, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 100, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radius = itemExtra.radius;
    const color = itemExtra.color || "black";
    const filled = itemExtra.filled;
    const startAngle = (itemExtra.startAngle || 0) * (Math.PI / 180);
    const endAngle = (itemExtra.endAngle || 360) * (Math.PI / 180);
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const lineWidth = itemExtra.lineWidth || 1;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y2, radius, startAngle, endAngle);
    if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
      } else {
        ctx.setLineDash([dash, gap]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
};
class Dot {
  static data() {
    return {
      uuid: uuid(),
      type: "dot",
      x: 100,
      y: 100,
      label: "label",
      dot_width: 25,
      text_color: "yellowbezier",
      text_size: 40,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "label", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dot_width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text_color", type: "Color", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text_size", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const {
      x,
      y: y2,
      label,
      dot_width,
      text_size,
      color,
      text_color,
      globalAlpha
    } = itemExtra;
    ctx.save();
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(
      x,
      y2,
      dot_width / 2,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = `${text_size}px Arial`;
    ctx.fillStyle = text_color;
    ctx.fillText(
      label,
      parseInt(x) - parseInt(dot_width) / 2,
      parseInt(y2) + parseInt(dot_width) * 2
    );
    ctx.restore();
  }
}
class Icon {
  static data() {
    return {
      uuid: uuid(),
      type: "icon",
      x: 100,
      y: 100,
      text: "This is Heading",
      fontSize: 28,
      iconSize: 100,
      fontFamily: "Arial",
      icon: "🦏",
      showBg: false,
      iconOnTop: true,
      iconErrorX: 0,
      iconErrorY: 0,
      bgColor: "gray",
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text", type: "Text", config: {} });
    dialogueBox.push({ name: "fontSize", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "iconSize", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fontFamily", type: "FontFamily", config: {} });
    dialogueBox.push({ name: "showBg", type: "Boolean", config: {} });
    dialogueBox.push({ name: "iconErrorX", type: "Number", config: {} });
    dialogueBox.push({ name: "iconErrorY", type: "Number", config: {} });
    dialogueBox.push({ name: "bgColor", type: "Color", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const percent_rect_extra = 20;
    ctx.font = itemExtra.fontSize + "px " + itemExtra.fontFamily;
    const textWidth = ctx.measureText(itemExtra.text).width;
    const textHeight = ctx.measureText("W").width;
    ctx.font = itemExtra.iconSize + "px Arial";
    const iconWidth = ctx.measureText(itemExtra.icon).width;
    const iconHeight = ctx.measureText("W").width;
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = percent_rect_extra * (largerWidth / 100);
    const rectangleWidth = largerWidth + extraWidth;
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth) / 3);
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth) / 2);
    if (itemExtra.showBg) {
      roundRect(
        ctx,
        itemExtra.x,
        itemExtra.y,
        rectangleWidth,
        rectangleHeight + 30 * rectangleHeight / 100,
        30,
        itemExtra.bgColor,
        true,
        1,
        0,
        0,
        itemExtra.globalAlpha
      );
    }
    ctx.globalAlpha = itemExtra.globalAlpha;
    text(
      ctx,
      itemExtra.icon,
      itemExtra.x + iconXAdjust + itemExtra.iconErrorX,
      itemExtra.y + itemExtra.iconErrorY,
      itemExtra.color,
      itemExtra.iconSize + "px Arial",
      0,
      0,
      0,
      "black",
      itemExtra.globalAlpha
    );
    ctx.globalAlpha = itemExtra.globalAlpha;
    text(
      ctx,
      itemExtra.text,
      itemExtra.x + textXAdjust,
      itemExtra.y + (iconHeight + 20 * iconHeight / 100),
      itemExtra.color,
      itemExtra.fontSize + "px " + itemExtra.fontFamily,
      0,
      0,
      0,
      "black",
      itemExtra.globalAlpha
    );
    ctx.restore();
  }
}
function roundRect(ctx, x, y2, width, height, radius, color = "black", filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y2);
  ctx.lineTo(x + width - radius, y2);
  ctx.arcTo(x + width, y2, x + width, y2 + radius, radius);
  ctx.lineTo(x + width, y2 + height - radius);
  ctx.arcTo(x + width, y2 + height, x + width - radius, y2 + height, radius);
  ctx.lineTo(x + radius, y2 + height);
  ctx.arcTo(x, y2 + height, x, y2 + height - radius, radius);
  ctx.lineTo(x, y2 + radius);
  ctx.arcTo(x, y2, x + radius, y2, radius);
  ctx.closePath();
  ctx.globalAlpha = globalAlpha;
  ctx.lineWidth = lineWidth;
  if (dash === 0 && gap === 0) {
    ctx.setLineDash([]);
  } else {
    ctx.setLineDash([dash, gap]);
  }
  if (filled) {
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  ctx.restore();
}
function text(ctx, text2, x, y2, color = "black", font = "12px Arial", shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = "gray", globalAlpha = 1) {
  ctx.save();
  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowColor = shadowColor;
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = "top";
  ctx.globalAlpha = globalAlpha;
  ctx.fillText(text2, x, y2);
  ctx.restore();
}
let Image$1 = class Image2 {
  static data() {
    return {
      uuid: uuid(),
      type: "image",
      x: 50,
      y: 50,
      src: "",
      //????
      image: null,
      //????
      width: 200,
      height: 200,
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "src", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (!itemExtra.image || itemExtra.image == null) {
      return;
    }
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.drawImage(itemExtra.image, itemExtra.x, itemExtra.y, itemExtra.width, itemExtra.height);
    ctx.restore();
  }
};
class Piechart {
  static data() {
    return {
      uuid: uuid(),
      type: "piechart",
      x: 100,
      y: 100,
      radius: 50,
      data: '[{"title": "A", "percent": 30, "color": "red"}, {"title": "B", "percent": 50, "color": "blue"}, {"title": "C", "percent": 20, "color": "green"}]',
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "data", type: "TextArea", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radius", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radius = itemExtra.radius;
    const data = JSON.parse(itemExtra.data);
    let startAngle = 0;
    const centerX = x;
    const centerY = y2;
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    data.forEach((pie) => {
      const endAngle = startAngle + pie.percent / 100 * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = pie.color || "#000";
      ctx.fill();
      const midAngle = startAngle + (endAngle - startAngle) / 2;
      const textX = centerX + Math.cos(midAngle) * (radius / 2);
      const textY = centerY + Math.sin(midAngle) * (radius / 2);
      ctx.fillStyle = "#000";
      ctx.font = "14px Arial";
      ctx.fillText(pie.title, textX, textY);
      startAngle = endAngle;
    });
    ctx.restore();
  }
}
class Ray {
  static data() {
    return {
      uuid: uuid(),
      type: "ray",
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,
      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: true,
      endArrow: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "x2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "arrowWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "arrowHeight", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "startArrow", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "endArrow", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  // static draw(ctx, itemExtra) {
  //   // Save the current context state
  //   ctx.save();
  //   // Extract values
  //   const x1 = itemExtra.x1;
  //   const y1 = itemExtra.y1;
  //   const x2 = itemExtra.x2;
  //   const y2 = itemExtra.y2;
  //   const color = itemExtra.color || 'black';
  //   const lineWidth = itemExtra.lineWidth || 1;
  //   const dash = itemExtra.dash || 0;
  //   const gap = itemExtra.gap || 0;
  //   const globalAlpha = itemExtra.globalAlpha || 1;
  //   // Set properties
  //   ctx.lineWidth = lineWidth;
  //   ctx.strokeStyle = color;
  //   ctx.globalAlpha = globalAlpha;
  //   // Set line dash pattern
  //   if (dash === 0 && gap === 0) {
  //       ctx.setLineDash([]);
  //   } else {
  //       ctx.setLineDash([dash, gap]);
  //   }
  //   // Draw the line
  //   ctx.beginPath();
  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);
  //   ctx.stroke();
  //   // Restore the context state
  //   ctx.restore();
  // }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const color = itemExtra.color || "black";
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    const arrowWidth = itemExtra.arrowWidth || 8;
    const arrowHeight = itemExtra.arrowHeight || 12;
    const startArrow = itemExtra.startArrow || false;
    const endArrow = itemExtra.endArrow || false;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.globalAlpha = globalAlpha;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (startArrow) {
      drawArrowHead(ctx, x2, y2, x1, y1, arrowWidth, arrowHeight);
    }
    if (endArrow) {
      drawArrowHead(ctx, x1, y1, x2, y2, arrowWidth, arrowHeight);
    }
    ctx.restore();
  }
}
function drawArrowHead(ctx, x1, y1, x2, y2, arrowWidth, arrowHeight) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowHeight * Math.cos(angle) + arrowWidth * Math.sin(angle),
    y2 - arrowHeight * Math.sin(angle) - arrowWidth * Math.cos(angle)
  );
  ctx.lineTo(
    x2 - arrowHeight * Math.cos(angle) - arrowWidth * Math.sin(angle),
    y2 - arrowHeight * Math.sin(angle) + arrowWidth * Math.cos(angle)
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
let Sprite$1 = class Sprite2 {
  static data() {
    return {
      uuid: uuid(),
      type: "sprite",
      x: 100,
      y: 100,
      spriteId: "000",
      sheet: "students",
      sheetItem: "student_w_tablet",
      width: 0.5,
      height: 0.5,
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "spriteId", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "sheet", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "sheetItem", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra, assets) {
    try {
      ctx.save();
      let sprite;
      for (let i = 0; i < assets.spriteImages.length; i++) {
        const element = assets.spriteImages[i];
        if (element.name == itemExtra.sheet) {
          sprite = element;
          break;
        }
      }
      if (!sprite) {
        throw Error("Sprite not found");
      }
      sprite.applyItem(itemExtra.sheetItem);
      if (!sprite.selectedData) {
        console.warn("sheetItem not found");
        return;
      }
      ctx.globalAlpha = itemExtra.globalAlpha;
      ctx.drawImage(
        sprite.img,
        sprite.selectedData.sx,
        //x on source image
        sprite.selectedData.sy,
        //y on source image
        sprite.selectedData.sw,
        //width on source image
        sprite.selectedData.sh,
        //height on source image
        itemExtra.x,
        //x on destination image
        itemExtra.y,
        //y on destination image
        sprite.selectedData.sw * Math.abs(itemExtra.width),
        //width on source image
        sprite.selectedData.sh * Math.abs(itemExtra.height)
        //height on source image
      );
      ctx.restore();
    } catch (error) {
    }
  }
};
class Triangle {
  static data() {
    return {
      uuid: uuid(),
      type: "triangle",
      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,
      lineWidth: 2,
      filled: false,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x1", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y1", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "x2", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y2", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "x3", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y3", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const x3 = itemExtra.x3;
    const y3 = itemExtra.y3;
    const color = itemExtra.color || "black";
    const filled = itemExtra.filled;
    const lineWidth = itemExtra.lineWidth || 2;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.strokeStyle = color;
    if (dash > 0 && gap > 0) {
      ctx.setLineDash([dash, gap]);
    } else {
      ctx.setLineDash([]);
    }
    if (filled) {
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();
  }
}
class Line {
  static data() {
    return {
      uuid: uuid(),
      type: "line",
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "x2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const color = itemExtra.color || "black";
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.globalAlpha = globalAlpha;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
}
class Lines {
  static data() {
    return {
      uuid: uuid(),
      type: "lines",
      x: 100,
      y: 100,
      drawBorder: false,
      filled: true,
      fillBg: false,
      bgColor: "red",
      width: 300,
      height: 200,
      lines: [
        { x: 0, y: 35 },
        { x: 70, y: 35 },
        { x: 70, y: 20 },
        { x: 100, y: 50 },
        { x: 70, y: 80 },
        { x: 70, y: 65 },
        { x: 0, y: 65 },
        { x: 0, y: 35 }
      ],
      color: "yellow",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "drawBorder", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fillBg", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "bgColor", type: "Color", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const width = itemExtra.width;
    const height = itemExtra.height;
    const drawBorder = itemExtra.drawBorder;
    const fill = itemExtra.filled;
    const color = itemExtra.color;
    const fillBg = itemExtra.fillBg;
    const bgColor = itemExtra.bgColor;
    const lines = itemExtra.lines;
    const percentToPixel = (percent, dimension) => Math.round(percent / 100 * dimension);
    if (!isShapeClosed(lines)) {
      console.error("The shape is not closed. Unable to fill.");
      return;
    }
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (fillBg) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(x, y2, width, height);
    }
    ctx.beginPath();
    const startX = x + percentToPixel(lines[0].x, width);
    const startY = y2 + percentToPixel(lines[0].y, height);
    ctx.moveTo(startX, startY);
    for (let i = 1; i < lines.length; i++) {
      const lineX = x + percentToPixel(lines[i].x, width);
      const lineY = y2 + percentToPixel(lines[i].y, height);
      ctx.lineTo(lineX, lineY);
    }
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.strokeStyle = color;
    ctx.stroke();
    if (drawBorder) {
      ctx.strokeStyle = bgColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y2, width, height);
    }
    ctx.restore();
  }
}
function isShapeClosed(lines) {
  if (lines.length < 3) return false;
  const firstPoint = lines[0];
  const lastPoint = lines[lines.length - 1];
  return firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y;
}
class List {
  static data() {
    return {
      uuid: uuid(),
      type: "list",
      x: 100,
      y: 100,
      text: `Hello 
Hello
Hello`,
      fontSize: 20,
      fontFamily: "Arial",
      lineHeightOffset: 10,
      xOffset: 25,
      color: "blue",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text", type: "TextArea", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fontSize", type: "Number", config: { min: 0, max: 200, step: 1 } });
    dialogueBox.push({ name: "fontFamily", type: "FontFamily", config: {} });
    dialogueBox.push({ name: "lineHeightOffset", type: "Number", config: { min: 0, max: 100, step: 1 } });
    dialogueBox.push({ name: "xOffset", type: "Number", config: { min: 0, max: 100, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    ctx.shadowOffsetX = itemExtra.shadowOffsetX;
    ctx.shadowOffsetY = itemExtra.shadowOffsetY;
    ctx.shadowBlur = itemExtra.shadowBlur;
    ctx.shadowColor = itemExtra.shadowColor;
    ctx.fillStyle = itemExtra.color;
    ctx.font = itemExtra.fontSize + "px  " + itemExtra.fontFamily;
    ctx.textBaseline = "top";
    ctx.globalAlpha = itemExtra.globalAlpha;
    const lines = itemExtra.text.split("\n");
    lines.forEach((line, index) => {
      const lineHeight = parseInt(itemExtra.fontSize, 10) + itemExtra.lineHeightOffset;
      const yPos = itemExtra.y + index * lineHeight;
      const xPos = itemExtra.x + index * itemExtra.xOffset;
      ctx.fillText(line, xPos, yPos);
    });
    ctx.restore();
  }
}
const ItemsMap = /* @__PURE__ */ new Map();
ItemsMap.set("rectangle", Rectangle$1);
ItemsMap.set("ellipse", Ellipse);
ItemsMap.set("circle", Circle$1);
ItemsMap.set("dot", Dot);
ItemsMap.set("piechart", Piechart);
ItemsMap.set("triangle", Triangle);
ItemsMap.set("text", TextObject$1);
ItemsMap.set("angle", Angle);
ItemsMap.set("icon", Icon);
ItemsMap.set("ray", Ray);
ItemsMap.set("line", Line);
ItemsMap.set("lines", Lines);
ItemsMap.set("list", List);
ItemsMap.set("sprite", Sprite$1);
ItemsMap.set("image", Image$1);
const Slide$1 = {
  "uuid": "b1e8eb94-cbbd-4133-87ba-ccea71e3f5e3",
  "version": "basic",
  "startTime": 0,
  "endTime": 10,
  "type": "canvas",
  "template": "",
  "items": [
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "1",
        "x": 52.941565746806965,
        "y": 24.3536865779314,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "14",
        "x": 889.4183045463569,
        "y": 205.4180520051605,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "13",
        "x": 749.6525709747866,
        "y": 185.2997891799128,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "12",
        "x": 568.5924161207067,
        "y": 217.06546732504071,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "11",
        "x": 501.88604327973,
        "y": 208.59461981967328,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "10",
        "x": 389.6499238964992,
        "y": 216.0066113868698,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "9",
        "x": 228.7075640262061,
        "y": 193.77063668528027,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "8",
        "x": 52.941565746806965,
        "y": 226.5951707685791,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "7",
        "x": 857.6533650982728,
        "y": 15.882839072563955,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "6",
        "x": 744.3584144001059,
        "y": 27.53025439244419,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "5",
        "x": 624.7104758123221,
        "y": 34.9422459596407,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "4",
        "x": 472.2387664615181,
        "y": 30.706822206956982,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "3",
        "x": 340.94368340943686,
        "y": 28.58911033061512,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "2",
        "x": 202.2367811528026,
        "y": 24.3536865779314,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "e36b1568-bb90-418e-8cfa-af2e78223081",
      "name": "piechart_56df63e4",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "0178487f-e75f-40aa-8803-97f0ea513e3f",
        "type": "piechart",
        "x": 908.5944014294223,
        "y": 111.29538158866629,
        "radius": 50,
        "data": '[{"title": "A", "percent": 30, "color": "red"}, {"title": "B", "percent": 50, "color": "blue"}, {"title": "C", "percent": 20, "color": "green"}]',
        "color": "black",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "1128c022-262e-41cc-b2e0-09d9040dedda",
      "name": "image_6945f262",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "bdd2265d-b7af-4a0e-8758-4ab1369de834",
        "type": "image",
        "src": "/system_images/gen/wood.jpg",
        "image": {},
        "x": 757.0643901793395,
        "y": 263.65512860456164,
        "ext": "jpg",
        "width": 200,
        "height": 78.2315671103431,
        "color": "black",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "720aa277-b8d3-492d-92df-3aca62f774df",
      "name": "sprite_9638a5bc",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "01a059e0-f0cc-4368-9ee9-9fa0486e0d8e",
        "type": "sprite",
        "spriteId": "000",
        "sheet": "students",
        "sheetItem": "student_w_tablet",
        "x": 643.7694394811726,
        "y": 180.00550948905817,
        "width": 0.5,
        "height": 0.5,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "5959903f-20c2-440c-8fa8-022dbc1deb31",
      "name": "lines_b8e3e7a2",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "ba83d12b-7b44-4211-89b9-005d865df29c",
        "type": "lines",
        "x": 567.5335848057706,
        "y": 258.360848913707,
        "drawBorder": false,
        "fill": true,
        "color": "yellow",
        "fillBg": false,
        "bgColor": "red",
        "width": 79.763086493283,
        "height": 73.99614335765926,
        "lines": [
          {
            "x": 0,
            "y": 35
          },
          {
            "x": 70,
            "y": 35
          },
          {
            "x": 70,
            "y": 20
          },
          {
            "x": 100,
            "y": 50
          },
          {
            "x": 70,
            "y": 80
          },
          {
            "x": 70,
            "y": 65
          },
          {
            "x": 0,
            "y": 65
          },
          {
            "x": 0,
            "y": 35
          }
        ],
        "globalAlpha": 1
      }
    },
    {
      "uuid": "b229a174-0f77-4fde-80c8-e8cf28af72e9",
      "name": "angle_c594ae1e",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "1c650f5c-1306-4789-8f6f-6c8a557f10ec",
        "type": "angle",
        "x": 523.1212361855602,
        "y": 298.65512860456164,
        "radius": 25,
        "ticks": 3,
        "startAngle": -90,
        "endAngle": 0,
        "lineWidth": 1,
        "showOrigin": true,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "df1737b4-c369-43f4-ac73-06d6495b90de",
      "name": "dot_fef218c6",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "b61bc8c8-22b7-4601-831b-a128e191cff6",
        "type": "dot",
        "x": 406.5912249354775,
        "y": 292.2442389351768,
        "label": "label",
        "dot_width": 25,
        "text_color": "yellowbezier",
        "text_size": 40,
        "fill": true,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "cd1065f9-0f71-4661-9d54-a3dbd73af18f",
      "name": "icon_07743bcd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "6ed84827-d0ab-4f17-aed5-4a87edad5636",
        "type": "icon",
        "text": "This is Heading",
        "x": 167.29534775991,
        "y": 240.3602979648012,
        "fontSize": 24.823506055191615,
        "iconSize": 78.8228812365814,
        "fontFamily": "Arial",
        "icon": "🦏",
        "showBg": false,
        "iconOnTop": true,
        "iconErrorX": 0,
        "iconErrorY": 0,
        "bgColor": "gray",
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "eaf1eb60-ceba-4f4f-8aca-6953881bacf4",
      "name": "ray_d56168ca",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "611375bb-959c-4ea0-abdd-e096de37a159",
        "type": "ray",
        "x0": 15.882469724042089,
        "y0": 286.94995924432214,
        "x1": 129.289921249421,
        "y1": 339.7689838385629,
        "lineWidth": 2,
        "arrowWidth": 8,
        "arrowHeight": 12,
        "startArrow": true,
        "endArrow": true,
        "color": "yellow",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "ee1f44a5-2afd-4a8f-9479-0268ca90f1d2",
      "name": "triangle_c4355189",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "781e770f-e829-4900-946a-5ab85286e0b8",
        "type": "triangle",
        "x1": 731.8873668188737,
        "y1": 58.23707659940117,
        "x2": 681.8873668188737,
        "y2": 158.23707659940135,
        "x3": 831.8873668188737,
        "y3": 158.23707659940135,
        "lineWidth": 2,
        "filled": false,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "8a5033b2-aa6d-41d1-abd5-02f9b0e618b2",
      "name": "line_20ad1e9b",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "725dc53b-1071-4790-8c52-ddb15cf4cfcc",
        "type": "line",
        "x1": 591.8867050493018,
        "y1": 40.23652565049535,
        "x2": 666.9446098868374,
        "y2": 159.76347434950463,
        "lineWidth": 1,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "11dea328-a4b6-4b06-9907-c6ae420d18f2",
      "name": "list_46ea2ceb",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "d804b09f-9e6e-44c9-804b-d9c27714387e",
        "type": "list",
        "text": "Hello \nHello\nHello",
        "x": 473.29759777645427,
        "y": 99.53245818806745,
        "font": "20px Arial",
        "fontSize": 20,
        "fontFamily": "Arial",
        "lineHeightOffset": 10,
        "xOffset": 25,
        "color": "#ee1111",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "354edd99-186b-40fc-8f0a-3e776145a617",
      "name": "text_5dcd46b9",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "b9a578d5-cddf-49bb-8bb0-8451011e78e3",
        "text": "Add text..",
        "x": 309.17874396135267,
        "y": 104.8267378789221,
        "type": "text",
        "fontSize": 30,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#060eea",
        "globalAlpha": 1,
        "shadowOffsetX": 0,
        "shadowOffsetY": 0,
        "shadowBlur": 0
      }
    },
    {
      "uuid": "d09b2465-60c2-48f6-8947-70a7e5879e90",
      "name": "ellipse_53d0265f",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "d05d745d-15c1-4ec7-8620-485972e77c8b",
        "type": "ellipse",
        "x": 220.23691350671697,
        "y": 111.17987350794769,
        "radiusX": 50,
        "radiusY": 27.351482782308157,
        "rotation": 0,
        "startAngle": 0,
        "endAngle": 360,
        "lineWidth": 1,
        "fill": true,
        "color": "#f9e50b",
        "showAt": 0,
        "globalAlpha": 1
      }
    },
    {
      "uuid": "fb86d48e-30c2-4d0c-9f9d-5259a81e6ec2",
      "name": "rectangle_53091652",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "87bcd7c9-d214-482b-8edf-b56145f515f9",
        "type": "rectangle",
        "x": 24.3531202435312,
        "y": 86.82618693001629,
        "width": 100,
        "height": 47.05720309145349,
        "filled": true,
        "lineWidth": 1,
        "color": "red",
        "globalAlpha": 1
      }
    }
  ],
  "slideExtra": {
    "backgroundColor": "#efebb8",
    "canvasWidth": 1e3,
    "canvasHeight": 360,
    "cellHeight": 25,
    "cellWidth": 25,
    "bgImg": "system_images/bg_images/black_mat.jpg",
    "bgGlobalAlpha": 1,
    "xFactor": 0,
    "yFactor": 0,
    "showGrid": false,
    "gridLineWidth": 1,
    "gridLineColor": "gray"
  }
};
class Canvas {
  static ItemsMap = Object.freeze(new Map(ItemsMap));
  static checkHealth(slide, fix = false) {
    return canvasHealth(slide, fix);
  }
  static getDemoSlide() {
    return Slide$1;
  }
  /**
   * 9-Dec-2024 the reason we need seperate newSlide for canvas and are not using the SlideObject.newSlide is that we also have to add the slideExtra of the canvas slide. The difference between 2 slide types is not only the slide.type but also slide.slideExtra.
   * 
   */
  static getNewSlide() {
    const slideExtra = Canvas.getSlideExtra();
    return {
      uuid: uuid(),
      version: "basic",
      startTime: 0,
      endTime: 10,
      type: "canvas",
      // canvas is fixed here 
      template: "",
      items: [],
      slideExtra
    };
  }
  static getSlideExtra() {
    return {
      backgroundColor: "#efebb8",
      canvasWidth: 1e3,
      canvasHeight: 360,
      cellHeight: 25,
      cellWidth: 25,
      bgImg: "system_images/bg_images/black_mat.jpg",
      bgGlobalAlpha: 1,
      xFactor: 0,
      yFactor: 0,
      ///////////////////
      showGrid: false,
      gridLineWidth: 1,
      gridLineColor: "gray"
    };
  }
  static getAllItemsExtras() {
    const itemsExtras = [];
    for (const [key, ItemClass] of ItemsMap.entries()) {
      if (typeof ItemClass.data === "function") {
        const itemExtra = ItemClass.data();
        itemsExtras.push({
          type: key,
          ...itemExtra
        });
      }
    }
    return itemsExtras;
  }
}
const Slide = {
  "uuid": "b1e8eb94-cbbd-4133-87ba-ccea71e3f5e3",
  "version": "basic",
  "startTime": 10,
  "endTime": 20,
  "type": "Eqs",
  "template": "",
  "items": [
    {
      "name": "",
      "content": "",
      "showAt": 0,
      "itemExtra": {
        "startTime": 0,
        "endTime": 5,
        "code": "Write the following quadratic equations in the standard form and point out pure quadratic equations.",
        "type": "hdg",
        "sp": []
      }
    },
    {
      "name": "",
      "content": "",
      "showAt": 0,
      "itemExtra": {
        "startTime": 5,
        "endTime": 10,
        "code": "(x+7)(x-3)=-7",
        "type": "code",
        "sp": [
          {
            "code": "https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/baloons.png",
            "type": "img"
          }
        ]
      },
      "_id": { "$oid": "65c30b3ecd2ccbad64e22326" }
    },
    {
      "name": "",
      "content": "",
      "showAt": 0,
      "itemExtra": {
        "startTime": 10,
        "endTime": 15,
        "code": "(x+7)(x-3)=-7",
        "type": "code",
        "sp": [
          {
            "code": "This is Heading",
            "type": "heading"
          },
          {
            "code": "This is text",
            "type": "text"
          },
          {
            "code": "\\sqrt{555}",
            "type": "code"
          }
        ]
      },
      "_id": { "$oid": "65c30b3ecd2ccbad64e22327" }
    },
    {
      "name": "",
      "content": "",
      "showAt": 0,
      "itemExtra": {
        "startTime": 15,
        "endTime": 20,
        "code": "x^2+4x-21=-7",
        "type": "code",
        "sp": [
          {
            "code": '[["\\\\sqrt{44}","\\\\sqrt{44}"],["\\\\sqrt{44}","\\\\sqrt{44}"]]',
            "type": "tableCode"
          },
          {
            "code": '[["jj","kk"],["99","ii"]]',
            "type": "table"
          }
        ]
      },
      "_id": { "$oid": "65c30b3ecd2ccbad64e22328" }
    },
    {
      "name": "",
      "content": "",
      "showAt": 0,
      "itemExtra": {
        "startTime": 20,
        "endTime": 25,
        "code": "x^2+4x-21+7=7",
        "type": "code",
        "sp": []
      },
      "_id": { "$oid": "65c30b3ecd2ccbad64e22329" }
    },
    {
      "name": "",
      "content": "",
      "showAt": 0,
      "itemExtra": {
        "startTime": 25,
        "endTime": 30,
        "code": "x^2+4x-14=0",
        "type": "code",
        "sp": [
          {
            "code": "It is standard form of  quadratic equation(Standard Form)",
            "type": "text"
          },
          {
            "code": "ax^2+bx+c=0",
            "type": "code"
          },
          {
            "code": "Answer",
            "type": "text"
          }
        ]
      },
      "_id": "65c30b3ecd2ccbad64e2232a"
    }
  ],
  "slideExtra": []
};
class Eqs {
  static availableEqsSpItems() {
    return ["code", "text", "img", "heading", "table", "tableCode"];
  }
  static getDemoSlide() {
    return Slide;
  }
  static getEqsSpItem(type) {
    if (!Eqs.availableEqsSpItems().includes(type)) {
      throw new Error(`Invalid item type: ${type}`);
    }
    const EqsSpItemTypes = {
      "code": { code: "", type: "code" },
      "text": { code: "", type: "text" },
      "img": { code: "wood", type: "image" },
      "heading": { code: "", type: "heading" },
      "table": { code: `[["",""],["",""]]`, type: "table" },
      "tableCode": { code: `[["",""],["",""]]`, type: "tableCode" }
    };
    const newItem = EqsSpItemTypes[type];
    if (!newItem) {
      throw new Error(`Invalid item type: ${type}`);
    }
    return newItem;
  }
  static availableEqsItems() {
    return ["hdg", "code", "txt"];
  }
  static getNewItem() {
    let newItem = SlideObject.getNewItem();
    newItem.itemExtra = {
      startTime: 0,
      endTime: 0,
      code: "",
      type: "code",
      // 'text' , 'heading'
      sp: []
    };
    return newItem;
  }
  // static checkHealth(slide, fix = false){
  //     return eqsHealth(slide,fix);
  // }
}
const ctxStore = writable(null);
const selectedItemIndexStore = writable(-1);
function loadImage(itemExtra) {
  const img = new Image();
  img.src = itemExtra.src;
  img.onload = () => {
    itemExtra.image = img;
  };
  img.onerror = () => {
    console.error(`Image failed to load: ${itemExtra.src}`);
  };
}
const CanvasPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_ctxStore;
  $$unsubscribe_ctxStore = subscribe(ctxStore, (value) => value);
  let { slideExtra = {} } = $$props;
  let { items } = $$props;
  let { assets } = $$props;
  let { preDraw = () => {
  } } = $$props;
  let { postDraw = () => {
  } } = $$props;
  let { eventMouseMove = () => {
  } } = $$props;
  let { eventMouseDown = () => {
  } } = $$props;
  let { eventMouseUp = () => {
  } } = $$props;
  let { eventClick = () => {
  } } = $$props;
  let { eventDblClick = () => {
  } } = $$props;
  let canvas;
  onDestroy(() => {
  });
  if ($$props.slideExtra === void 0 && $$bindings.slideExtra && slideExtra !== void 0) $$bindings.slideExtra(slideExtra);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);
  if ($$props.preDraw === void 0 && $$bindings.preDraw && preDraw !== void 0) $$bindings.preDraw(preDraw);
  if ($$props.postDraw === void 0 && $$bindings.postDraw && postDraw !== void 0) $$bindings.postDraw(postDraw);
  if ($$props.eventMouseMove === void 0 && $$bindings.eventMouseMove && eventMouseMove !== void 0) $$bindings.eventMouseMove(eventMouseMove);
  if ($$props.eventMouseDown === void 0 && $$bindings.eventMouseDown && eventMouseDown !== void 0) $$bindings.eventMouseDown(eventMouseDown);
  if ($$props.eventMouseUp === void 0 && $$bindings.eventMouseUp && eventMouseUp !== void 0) $$bindings.eventMouseUp(eventMouseUp);
  if ($$props.eventClick === void 0 && $$bindings.eventClick && eventClick !== void 0) $$bindings.eventClick(eventClick);
  if ($$props.eventDblClick === void 0 && $$bindings.eventDblClick && eventDblClick !== void 0) $$bindings.eventDblClick(eventDblClick);
  {
    {
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (element.itemExtra.type == "image") {
          loadImage(element.itemExtra);
        }
      }
    }
  }
  $$unsubscribe_ctxStore();
  return `<div class="flex justify-center w-full"><canvas class="w-full m-2"${add_attribute("width", slideExtra.canvasWidth, 0)}${add_attribute("height", slideExtra.canvasHeight, 0)}${add_attribute("this", canvas, 0)}></canvas></div>`;
});
class ItemObject {
  constructor(itemData, assets) {
    this.itemData = itemData;
    this.assets = assets;
  }
  isVisible() {
    return true;
  }
  getBounds() {
    return {
      x: this.boundingRectangleX(),
      y: this.boundingRectangleY(),
      width: this.width,
      height: this.height
    };
  }
  // Modify isHit to use getBounds
  isHit(mouseX, mouseY) {
    const bounds = this.getBounds();
    return mouseX >= bounds.x && mouseX <= bounds.x + bounds.width && mouseY >= bounds.y && mouseY <= bounds.y + bounds.height;
  }
  // Position getters and setters
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y;
  }
  get x() {
    return this.itemData.itemExtra.x;
  }
  set x(newX) {
    this.itemData.itemExtra.x = newX;
  }
  get y() {
    return this.itemData.itemExtra.y;
  }
  set y(newY) {
    this.itemData.itemExtra.y = newY;
  }
  // Dimension getters and setters
  get width() {
    return this.itemData.itemExtra.width;
  }
  //because we expect to get dx and dy
  set width(newWidth) {
    this.itemData.itemExtra.width += newWidth;
  }
  get height() {
    return this.itemData.itemExtra.height;
  }
  //because we expect to get dx and dy
  set height(newHeight) {
    this.itemData.itemExtra.height += newHeight;
  }
}
class Rectangle2 extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "Number",
        title: "x",
        props: {}
      },
      {
        componentName: "Number",
        title: "y",
        props: {}
      },
      {
        componentName: "Number",
        title: "width",
        props: {
          min: "1",
          max: "500"
        }
      },
      {
        componentName: "Number",
        title: "height",
        props: {
          min: "1",
          max: "500"
        }
      },
      {
        componentName: "Number",
        title: "lineWidth",
        props: {}
      },
      {
        componentName: "Tf",
        title: "filled",
        props: {}
      },
      {
        componentName: "Color",
        title: "color",
        props: {}
      },
      {
        componentName: "Number",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      //gap-dash
      {
        componentName: "Number",
        title: "dash",
        props: {}
      },
      {
        componentName: "Number",
        title: "gap",
        props: {}
      }
    ];
  }
  ////////////////////////////////////////////////////
}
class ImageObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    if (this.itemData.itemExtra.src == null || this.itemData.itemExtra.image == null) {
      this.itemData.itemExtra.src = "/system_images/gen/wood.jpg";
    }
    this.loadImage();
    this.dialogueBox = [
      {
        componentName: "TrText",
        title: "src",
        props: {}
      },
      {
        componentName: "TrText",
        // Representing the button for extension type
        title: "ext",
        props: {
          options: ["jpg", "png"],
          // Custom handling for the buttons
          current: "jpg"
          // Current selected ext
        }
      },
      {
        componentName: "TrNo",
        title: "x",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "y",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "width",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "height",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // gap-dash
      {
        componentName: "TrPropNumber",
        title: "dash",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "gap",
        props: {}
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  loadImage() {
    const img = new Image();
    img.src = this.itemData.itemExtra.src;
    img.onload = () => {
      this.itemData.itemExtra.image = img;
    };
    img.onerror = () => {
      console.error(`Image failed to load: ${this.itemData.itemExtra.src}`);
    };
  }
  ///////////////////////////////////////////////////
}
class Circle2 extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {
          min: 0,
          max: 1e3
        }
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "radius",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "startAngle",
        props: {
          min: 0,
          max: 25
        }
      },
      {
        componentName: "TrPropNumber",
        title: "endAngle",
        props: {
          min: 0,
          max: 25
        }
      },
      {
        componentName: "TrPropNumber",
        title: "lineWidth",
        props: {
          min: 0,
          max: 25
        }
      },
      {
        componentName: "TrPropBoolean",
        title: "fill",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // gap-dash
      {
        componentName: "TrPropNumber",
        title: "dash",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "gap",
        props: {}
      },
      // shadow
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  draw(ctx) {
    ctx.save();
    const x = this.itemData.itemExtra.x;
    const y2 = this.itemData.itemExtra.y;
    const radius = this.itemData.itemExtra.radius;
    const color = this.itemData.itemExtra.color || "black";
    const fill = this.itemData.itemExtra.fill || false;
    const startAngle = this.itemData.itemExtra.startAngle || 0 * (Math.PI / 180);
    const endAngle = (this.itemData.itemExtra.endAngle || 360) * (Math.PI / 180);
    const dash = this.itemData.itemExtra.dash || 0;
    const gap = this.itemData.itemExtra.gap || 0;
    const lineWidth = this.itemData.itemExtra.lineWidth || 1;
    const globalAlpha = this.itemData.itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y2, radius, startAngle, endAngle);
    if (fill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
      } else {
        ctx.setLineDash([dash, gap]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
  ////////////////////////////////////////////////////////////////////
  // Position getters and setters
  boundingRectangleX() {
    return this.itemData.itemExtra.x - this.itemData.itemExtra.radius;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y - this.itemData.itemExtra.radius;
  }
  get x() {
    return this.itemData.itemExtra.x;
  }
  set x(newX) {
    this.itemData.itemExtra.x = newX;
  }
  get y() {
    return this.itemData.itemExtra.y;
  }
  set y(newY) {
    this.itemData.itemExtra.y = newY;
  }
  // Dimension getters and setters
  get width() {
    return this.itemData.itemExtra.radius * 2;
  }
  set width(newWidth) {
    this.itemData.itemExtra.radius += newWidth;
  }
  get height() {
    return this.itemData.itemExtra.radius * 2;
  }
  set height(newHeight) {
    this.itemData.itemExtra.radius += newHeight;
  }
  ////////////////////////////////////////////////////////////////////
  // 
}
class RayObject extends ItemObject {
  constructor(itemData = null, assets) {
    super(itemData, assets);
  }
  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  boundingRectangleX() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    return Math.min(x1, x2);
  }
  boundingRectangleY() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    return Math.min(y1, y2);
  }
  get x() {
    return this.boundingRectangleX();
  }
  set x(newX) {
    const deltaX = newX - this.x;
    this.itemData.itemExtra.x1 += deltaX;
    this.itemData.itemExtra.x2 += deltaX;
  }
  get y() {
    return this.boundingRectangleY();
  }
  set y(newY) {
    const deltaY = newY - this.y;
    this.itemData.itemExtra.y1 += deltaY;
    this.itemData.itemExtra.y2 += deltaY;
  }
  get width() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    return Math.abs(x2 - x1);
  }
  set width(newWidth) {
    this.itemData.itemExtra.x2 += newWidth;
  }
  get height() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    return Math.abs(y2 - y1);
  }
  set height(newHeight) {
    this.itemData.itemExtra.y2 += newHeight;
  }
  ///////////////////////////////////////////////////////////////////////////
}
class LinesObject extends ItemObject {
  constructor(itemData = null, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "InputNumber",
        title: "x",
        props: {}
      },
      {
        componentName: "InputNumber",
        title: "y",
        props: {}
      },
      {
        componentName: "InputNumber",
        title: "width",
        props: {
          min: "1",
          max: "500"
        }
      },
      {
        componentName: "InputNumber",
        title: "height",
        props: {
          min: "1",
          max: "500"
        }
      },
      {
        componentName: "TrTf",
        title: "drawBorder"
      },
      {
        componentName: "TrTf",
        title: "fill"
      },
      {
        componentName: "TrTf",
        title: "fillBg"
      },
      {
        componentName: "TrColor",
        title: "color"
      },
      {
        componentName: "TrColor",
        title: "bgColor"
      }
    ];
  }
  // : 'yellow',
  // : 'red',
}
class LineObject extends ItemObject {
  constructor(itemData = null, assets) {
    super(itemData, assets);
  }
  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  boundingRectangleX() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    return Math.min(x1, x2);
  }
  boundingRectangleY() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    return Math.min(y1, y2);
  }
  get x() {
    return this.boundingRectangleX();
  }
  set x(newX) {
    const deltaX = newX - this.x;
    this.itemData.itemExtra.x1 += deltaX;
    this.itemData.itemExtra.x2 += deltaX;
  }
  get y() {
    return this.boundingRectangleY();
  }
  set y(newY) {
    const deltaY = newY - this.y;
    this.itemData.itemExtra.y1 += deltaY;
    this.itemData.itemExtra.y2 += deltaY;
  }
  get width() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    return Math.abs(x2 - x1);
  }
  set width(newWidth) {
    this.itemData.itemExtra.x2 += newWidth;
  }
  get height() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    return Math.abs(y2 - y1);
  }
  set height(newHeight) {
    this.itemData.itemExtra.y2 += newHeight;
  }
  ///////////////////////////////////////////////////////////////////////////
}
class EllipseObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {
          min: 0,
          max: 50
        }
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {
          min: 0,
          max: 50
        }
      },
      {
        componentName: "TrPropNumber",
        title: "radiusX",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "radiusY",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "rotation",
        props: {
          min: 0,
          max: 200
        }
      },
      {
        componentName: "TrPropNumber",
        title: "startAngle",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "endAngle",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "lineWidth",
        props: {
          min: 0,
          max: 25
        }
      },
      {
        componentName: "TrPropBoolean",
        title: "fill",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // gap-dash
      {
        componentName: "TrPropNumber",
        title: "dash",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "gap",
        props: {}
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  draw(ctx) {
    ctx.save();
    const x = this.itemData.itemExtra.x;
    const y2 = this.itemData.itemExtra.y;
    const radiusX = this.itemData.itemExtra.radiusX;
    const radiusY = this.itemData.itemExtra.radiusY;
    const color = this.itemData.itemExtra.color || "black";
    const fill = this.itemData.itemExtra.fill || false;
    const rotation = this.itemData.itemExtra.rotation || 0 * (Math.PI / 180);
    const startAngle = this.itemData.itemExtra.startAngle || 0 * (Math.PI / 180);
    const endAngle = this.itemData.itemExtra.endAngle || 360 * (Math.PI / 180);
    const lineWidth = this.itemData.itemExtra.lineWidth || 1;
    const dash = this.itemData.itemExtra.dash || 0;
    const gap = this.itemData.itemExtra.gap || 0;
    const globalAlpha = this.itemData.itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.ellipse(x, y2, radiusX, radiusY, rotation, startAngle, endAngle);
    if (fill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
      } else {
        ctx.setLineDash([dash, gap]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
  ////////////////////////////////////////////////////
  boundingRectangleX() {
    return this.itemData.itemExtra.x - this.itemData.itemExtra.radiusX;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y - this.itemData.itemExtra.radiusY;
  }
  get width() {
    return this.itemData.itemExtra.radiusX * 2;
  }
  set width(newWidth) {
    this.itemData.itemExtra.radiusX += newWidth;
  }
  get height() {
    return this.itemData.itemExtra.radiusY * 2;
  }
  set height(newHeight) {
    this.itemData.itemExtra.radiusY += newHeight;
  }
}
class TextObject2 extends ItemObject {
  constructor(itemData, fnList) {
    super(itemData, fnList);
    this._width = 50;
    this._height = 25;
    this.dialogueBox = [
      {
        componentName: "TrPropText",
        title: "text",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "fontSize",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // Gap-dash
      {
        componentName: "TrPropNumber",
        title: "dash",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "gap",
        props: {}
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  ////////////////////////////////////////////////////
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y;
  }
  get width() {
    return this._width;
  }
  set width(newWidth) {
    this.itemData.itemExtra.fontSize += newWidth;
  }
  get height() {
    return this._height;
  }
  set height(newHeight) {
    this.itemData.itemExtra.fontSize += newHeight;
  }
}
class TriangleObject extends ItemObject {
  constructor(itemData, fnList) {
    super(itemData, fnList);
    this.dialogueBox = [
      {
        componentName: "TrPropNumber",
        title: "x1",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y1",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "x2",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y2",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "x3",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y3",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "lineWidth",
        props: {}
      },
      {
        componentName: "TrPropBoolean",
        title: "filled",
        props: {}
      },
      // GapDashCommands
      {
        componentName: "TrPropNumber",
        title: "dash",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "gap",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  get x() {
    return this.boundingRectangleX();
  }
  set x(newX) {
    const deltaX = newX - this.x;
    this.itemData.itemExtra.x1 += deltaX;
    this.itemData.itemExtra.x2 += deltaX;
    this.itemData.itemExtra.x3 += deltaX;
  }
  get y() {
    return this.boundingRectangleY();
  }
  set y(newY) {
    const deltaY = newY - this.y;
    this.itemData.itemExtra.y1 += deltaY;
    this.itemData.itemExtra.y2 += deltaY;
    this.itemData.itemExtra.y3 += deltaY;
  }
  boundingRectangleX() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    const x3 = this.itemData.itemExtra.x3;
    return Math.min(x1, x2, x3);
  }
  boundingRectangleY() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    const y3 = this.itemData.itemExtra.y3;
    return Math.min(y1, y2, y3);
  }
  get width() {
    const x1 = this.itemData.itemExtra.x1;
    const x2 = this.itemData.itemExtra.x2;
    const x3 = this.itemData.itemExtra.x3;
    return Math.max(x1, x2, x3) - Math.min(x1, x2, x3);
  }
  set width(deltaWidth) {
    if (deltaWidth === 0) return;
    const leftX = this.boundingRectangleX();
    const scale = (this.width + deltaWidth) / this.width;
    this.itemData.itemExtra.x1 = leftX + (this.itemData.itemExtra.x1 - leftX) * scale;
    this.itemData.itemExtra.x2 = leftX + (this.itemData.itemExtra.x2 - leftX) * scale;
    this.itemData.itemExtra.x3 = leftX + (this.itemData.itemExtra.x3 - leftX) * scale;
  }
  get height() {
    const y1 = this.itemData.itemExtra.y1;
    const y2 = this.itemData.itemExtra.y2;
    const y3 = this.itemData.itemExtra.y3;
    return Math.max(y1, y2, y3) - Math.min(y1, y2, y3);
  }
  set height(deltaHeight) {
    if (deltaHeight === 0) return;
    const topY = this.boundingRectangleY();
    const scale = (this.height + deltaHeight) / this.height;
    this.itemData.itemExtra.y1 = topY + (this.itemData.itemExtra.y1 - topY) * scale;
    this.itemData.itemExtra.y2 = topY + (this.itemData.itemExtra.y2 - topY) * scale;
    this.itemData.itemExtra.y3 = topY + (this.itemData.itemExtra.y3 - topY) * scale;
  }
}
class ParaObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this._width = 50;
    this._height = 25;
    this.dialogueBox = [
      {
        componentName: "TrTextArea",
        title: "text",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "fontSize",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "lineHeightOffset",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "xOffset",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // Gap-dash
      {
        componentName: "TrPropNumber",
        title: "dash",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "gap",
        props: {}
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y;
  }
  get width() {
    return this._width;
  }
  set width(newWidth) {
    this.itemData.itemExtra.fontSize += newWidth;
  }
  get height() {
    return this._height;
  }
  set height(newHeight) {
    this.itemData.itemExtra.fontSize += newHeight;
  }
}
class AngleObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "TrNo",
        title: "x",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "y",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "radius",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "ticks",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "startAngle",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "endAngle",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "lineWidth",
        props: {}
      },
      {
        componentName: "TrTf",
        title: "showOrigin",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  // Calculate the leftmost x coordinate of the arc's bounding box
  boundingRectangleX() {
    const x = this.itemData.itemExtra.x;
    const radius = this.itemData.itemExtra.radius;
    return x - radius - 10;
  }
  // Calculate the topmost y coordinate of the arc's bounding box
  boundingRectangleY() {
    const y2 = this.itemData.itemExtra.y;
    const radius = this.itemData.itemExtra.radius;
    return y2 - radius - 10;
  }
  get x() {
    return this.boundingRectangleX();
  }
  set x(newX) {
    const radius = this.itemData.itemExtra.radius;
    this.itemData.itemExtra.x = newX + radius + 10;
  }
  get y() {
    return this.boundingRectangleY();
  }
  set y(newY) {
    const radius = this.itemData.itemExtra.radius;
    this.itemData.itemExtra.y = newY + radius + 10;
  }
  get width() {
    const radius = this.itemData.itemExtra.radius;
    return (radius + 10) * 2;
  }
  set width(newWidth) {
    this.itemData.itemExtra.radius += newWidth;
  }
  get height() {
    const radius = this.itemData.itemExtra.radius;
    return (radius + 10) * 2;
  }
  set height(newHeight) {
    this.itemData.itemExtra.radius += newHeight;
  }
}
class SpriteObject extends ItemObject {
  constructor(itemData = null, assets) {
    super(itemData, assets);
    this.mouseOldX = 0;
    this.mouseOldY = 0;
    this.dialogueBox = [
      {
        componentName: "TrPropNumber",
        title: "dx",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "dy",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "wFactor",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "hFactor",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // ShadowCommands
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  ///////////////////////////////////////////
  // Position getters and setters
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y;
  }
  get x() {
    return this.itemData.itemExtra.x;
  }
  set x(newX) {
    this.itemData.itemExtra.x = newX;
  }
  get y() {
    return this.itemData.itemExtra.y;
  }
  set y(newY) {
    this.itemData.itemExtra.y = newY;
  }
  // Dimension getters and setters
  get width() {
    let sprite;
    for (let i = 0; i < this.assets.spriteImages.length; i++) {
      const element = this.assets.spriteImages[i];
      if (element.name == this.itemData.itemExtra.sheet) {
        sprite = element;
        break;
      }
    }
    sprite.applyItem(this.itemData.itemExtra.sheetItem);
    return sprite.selectedData.sw * Math.abs(this.itemData.itemExtra.width);
  }
  get height() {
    let sprite;
    for (let i = 0; i < this.assets.spriteImages.length; i++) {
      const element = this.assets.spriteImages[i];
      if (element.name == this.itemData.itemExtra.sheet) {
        sprite = element;
        break;
      }
    }
    sprite.applyItem(this.itemData.itemExtra.sheetItem);
    return sprite.selectedData.sh * Math.abs(this.itemData.itemExtra.height);
  }
  set width(newWidth) {
    this.itemData.itemExtra.width += 0.01;
  }
  set height(newHeight) {
    this.itemData.itemExtra.height += 0.01;
  }
  ////////////////////////////////////////////////////
}
class DotObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {}
      },
      {
        componentName: "TrPropText",
        title: "label",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "dot_width",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "text_color",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "text_size",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      }
    ];
  }
  ////////////////////////////////////////////////////////////
  draw(ctx) {
    const {
      x,
      y: y2,
      label,
      dot_width,
      text_size,
      color,
      text_color,
      globalAlpha
    } = this.itemData.itemExtra;
    ctx.save();
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(
      x,
      y2,
      dot_width / 2,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = `${text_size}px Arial`;
    ctx.fillStyle = text_color;
    ctx.fillText(
      label,
      parseInt(x) - parseInt(dot_width) / 2,
      parseInt(y2) + parseInt(dot_width) * 2
    );
    ctx.restore();
  }
  ////////////////////////////////////////////////////
  boundingRectangleX() {
    return this.itemData.itemExtra.x - this.itemData.itemExtra.dot_width;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y - this.itemData.itemExtra.dot_width;
  }
  get x() {
    return this.itemData.itemExtra.x;
  }
  set x(newX) {
    this.itemData.itemExtra.x = newX;
  }
  get y() {
    return this.itemData.itemExtra.y;
  }
  set y(newY) {
    this.itemData.itemExtra.y = newY;
  }
  // Dimension getters and setters
  get width() {
    return this.itemData.itemExtra.dot_width * 2;
  }
  set width(newWidth) {
    this.itemData.itemExtra.dot_width += newWidth;
  }
  get height() {
    return this.itemData.itemExtra.dot_width * 2;
  }
  set height(newHeight) {
    this.itemData.itemExtra.text_size += newHeight;
  }
  ////////////////////////////////////////////////////////////
}
class IconObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "TrPropText",
        title: "text",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "fontSize",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "iconSize",
        props: {}
      },
      {
        componentName: "TrText",
        title: "fontFamily",
        props: {}
      },
      {
        componentName: "TrTf",
        title: "showBg",
        props: {}
      },
      {
        componentName: "TrTf",
        title: "iconOnTop",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "bgColor",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "iconErrorX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "iconErrorY",
        props: {}
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrPropColor",
        title: "color",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      }
    ];
  }
  ////////////////////////////////////////////////////////////
  // eslint-disable-next-line no-unused-vars
  draw(ctx, currentTime) {
    ctx.save();
    const percent_rect_extra = 20;
    ctx.font = this.itemData.itemExtra.fontSize + "px " + this.itemData.itemExtra.fontFamily;
    const textWidth = ctx.measureText(this.itemData.itemExtra.text).width;
    const textHeight = ctx.measureText("W").width;
    ctx.font = this.itemData.itemExtra.iconSize + "px Arial";
    const iconWidth = ctx.measureText(this.itemData.itemExtra.icon).width;
    const iconHeight = ctx.measureText("W").width;
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = percent_rect_extra * (largerWidth / 100);
    const rectangleWidth = largerWidth + extraWidth;
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth) / 3);
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth) / 2);
    if (this.itemData.itemExtra.showBg) {
      this.roundRect(
        ctx,
        this.itemData.itemExtra.x,
        this.itemData.itemExtra.y,
        rectangleWidth,
        rectangleHeight + 30 * rectangleHeight / 100,
        30,
        this.itemData.itemExtra.bgColor,
        true,
        1,
        0,
        0,
        this.itemData.itemExtra.globalAlpha
      );
    }
    ctx.globalAlpha = this.itemData.itemExtra.globalAlpha;
    this.text(
      ctx,
      this.itemData.itemExtra.icon,
      this.itemData.itemExtra.x + iconXAdjust + this.itemData.itemExtra.iconErrorX,
      this.itemData.itemExtra.y + this.itemData.itemExtra.iconErrorY,
      this.itemData.itemExtra.color,
      this.itemData.itemExtra.iconSize + "px Arial",
      0,
      0,
      0,
      "black",
      this.itemData.itemExtra.globalAlpha
    );
    ctx.globalAlpha = this.itemData.itemExtra.globalAlpha;
    this.text(
      ctx,
      this.itemData.itemExtra.text,
      this.itemData.itemExtra.x + textXAdjust,
      this.itemData.itemExtra.y + (iconHeight + 20 * iconHeight / 100),
      this.itemData.itemExtra.color,
      this.itemData.itemExtra.fontSize + "px " + this.itemData.itemExtra.fontFamily,
      0,
      0,
      0,
      "black",
      this.itemData.itemExtra.globalAlpha
    );
    ctx.restore();
  }
  // Implemented DrawLib methods
  roundRect(ctx, x, y2, width, height, radius, color = "black", filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + radius, y2);
    ctx.lineTo(x + width - radius, y2);
    ctx.arcTo(x + width, y2, x + width, y2 + radius, radius);
    ctx.lineTo(x + width, y2 + height - radius);
    ctx.arcTo(x + width, y2 + height, x + width - radius, y2 + height, radius);
    ctx.lineTo(x + radius, y2 + height);
    ctx.arcTo(x, y2 + height, x, y2 + height - radius, radius);
    ctx.lineTo(x, y2 + radius);
    ctx.arcTo(x, y2, x + radius, y2, radius);
    ctx.closePath();
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = lineWidth;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.stroke();
    }
    ctx.restore();
  }
  text(ctx, text2, x, y2, color = "black", font = "12px Arial", shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = "gray", globalAlpha = 1) {
    ctx.save();
    ctx.shadowOffsetX = shadowOffsetX;
    ctx.shadowOffsetY = shadowOffsetY;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = shadowColor;
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.globalAlpha = globalAlpha;
    ctx.fillText(text2, x, y2);
    ctx.restore();
  }
  ////////////////////////////////////////////////////
  boundingRectangleX() {
    return this.itemData.itemExtra.x;
  }
  boundingRectangleY() {
    return this.itemData.itemExtra.y;
  }
  get x() {
    return this.itemData.itemExtra.x;
  }
  set x(newX) {
    this.itemData.itemExtra.x = newX;
  }
  get y() {
    return this.itemData.itemExtra.y;
  }
  set y(newY) {
    this.itemData.itemExtra.y = newY;
  }
  // Dimension getters and setters
  get width() {
    const percent_rect_extra = 20;
    get_store_value(ctxStore).font = `${this.itemData.itemExtra.fontSize}px ${this.itemData.itemExtra.fontFamily}`;
    const textWidth = get_store_value(ctxStore).measureText(this.itemData.itemExtra.text).width;
    get_store_value(ctxStore).font = `${this.itemData.itemExtra.iconSize}px Arial`;
    const iconWidth = get_store_value(ctxStore).measureText(this.itemData.itemExtra.icon).width;
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = percent_rect_extra * (largerWidth / 100);
    return largerWidth + extraWidth;
  }
  set width(newWidth) {
    this.itemData.itemExtra.fontSize += newWidth;
  }
  get height() {
    get_store_value(ctxStore).font = `${this.itemData.itemExtra.fontSize}px ${this.itemData.itemExtra.fontFamily}`;
    const textHeight = get_store_value(ctxStore).measureText("W").width;
    get_store_value(ctxStore).font = `${this.itemData.itemExtra.iconSize}px Arial`;
    const iconHeight = get_store_value(ctxStore).measureText("W").width;
    return textHeight + iconHeight;
  }
  set height(newHeight) {
    this.itemData.itemExtra.iconSize += newHeight;
  }
  ////////////////////////////////////////////////////////////
}
class PieChartObject extends ItemObject {
  constructor(itemData, assets) {
    super(itemData, assets);
    this.dialogueBox = [
      {
        componentName: "TrTextArea",
        title: "data"
      },
      {
        componentName: "TrPropNumber",
        title: "x",
        props: {
          min: 0,
          max: 1e3
        }
      },
      {
        componentName: "TrPropNumber",
        title: "y",
        props: {
          min: 0,
          max: 500
        }
      },
      {
        componentName: "TrPropNumber",
        title: "radius",
        props: {
          min: 0,
          max: 500
        }
      },
      // CommonCommands
      {
        componentName: "TrText",
        title: "name",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "showAt",
        props: {}
      },
      {
        componentName: "TrPropNumber",
        title: "globalAlpha",
        props: {
          min: "0.0",
          max: "1.0",
          step: "0.1"
        }
      },
      // gap-dash
      // shadow
      {
        componentName: "TrNo",
        title: "shadowOffsetX",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowOffsetY",
        props: {}
      },
      {
        componentName: "TrNo",
        title: "shadowBlur",
        props: {}
      },
      {
        componentName: "TrColor",
        title: "shadowColor",
        props: {}
      }
    ];
  }
  // Calculate the leftmost x coordinate of the pie's bounding box
  boundingRectangleX() {
    const x = this.itemData.itemExtra.x;
    const radius = this.itemData.itemExtra.radius;
    const labelPadding = 20;
    return x - radius - labelPadding;
  }
  // Calculate the topmost y coordinate of the pie's bounding box
  boundingRectangleY() {
    const y2 = this.itemData.itemExtra.y;
    const radius = this.itemData.itemExtra.radius;
    const labelPadding = 20;
    return y2 - radius - labelPadding;
  }
  get x() {
    return this.boundingRectangleX();
  }
  set x(newX) {
    const radius = this.itemData.itemExtra.radius;
    const labelPadding = 20;
    this.itemData.itemExtra.x = newX + radius + labelPadding;
  }
  get y() {
    return this.boundingRectangleY();
  }
  set y(newY) {
    const radius = this.itemData.itemExtra.radius;
    const labelPadding = 20;
    this.itemData.itemExtra.y = newY + radius + labelPadding;
  }
  get width() {
    const radius = this.itemData.itemExtra.radius;
    const labelPadding = 20;
    return (radius + labelPadding) * 2;
  }
  set width(newWidth) {
    this.itemData.itemExtra.radius += newWidth;
  }
  get height() {
    const radius = this.itemData.itemExtra.radius;
    const labelPadding = 20;
    return (radius + labelPadding) * 2;
  }
  set height(newHeight) {
    this.itemData.itemExtra.radius += newHeight;
  }
}
function itemToObject(item, assets) {
  let selectedItem;
  let lookFor = item.itemExtra.type;
  switch (lookFor) {
    case "piechart":
      selectedItem = new PieChartObject(item, assets);
      break;
    case "repeatText":
      break;
    case "repeatDot":
      break;
    case "icon":
      selectedItem = new IconObject(item, assets);
      break;
    case "dot":
      selectedItem = new DotObject(item, assets);
      break;
    case "angle":
      selectedItem = new AngleObject(item, assets);
      break;
    case "sprite":
      selectedItem = new SpriteObject(item, assets);
      break;
    case "list":
      selectedItem = new ParaObject(item, assets);
      break;
    case "triangle":
      selectedItem = new TriangleObject(item, assets);
      break;
    case "text":
      selectedItem = new TextObject2(item, assets);
      break;
    case "ellipse":
      selectedItem = new EllipseObject(item, assets);
      break;
    case "ray":
      selectedItem = new RayObject(item, assets);
      break;
    case "line":
      selectedItem = new LineObject(item, assets);
      break;
    case "lines":
      selectedItem = new LinesObject(item, assets);
      break;
    case "rectangle":
      selectedItem = new Rectangle2(item, assets);
      break;
    case "image":
      selectedItem = new ImageObject(item, assets);
      break;
    case "circle":
      selectedItem = new Circle2(item, assets);
      break;
    default:
      if (!selectedItem) {
        throw new Error("Item type not found");
      }
      break;
  }
  return selectedItem;
}
class Handle {
  constructor(xFn, yFn, pointer = "pointer", color = "#1a73e8") {
    this.x = xFn;
    this.y = yFn;
    this.size = 20;
    this.color = color;
    this.hoverColor = "#64b5f6";
    this.isHovered = false;
    this.cursor = pointer;
    this.icon = null;
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.isHovered ? this.hoverColor : this.color;
    ctx.fillRect(this.x(), this.y(), this.size, this.size);
    if (this.icon) {
      ctx.fillStyle = "#ffffff";
      ctx.font = `${this.size * 0.8}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.icon, this.x(), this.y());
    }
    ctx.restore();
  }
  isHit(x, y2) {
    if (x >= this.x() && x <= this.x() + this.size && y2 >= this.y() && y2 <= this.y() + this.size) {
      return true;
    } else {
      return false;
    }
  }
}
class SelectedItem {
  constructor(itemObject) {
    this.itemObject = itemObject;
    this.handles = [];
    this.selectedHandle = null;
    this.isDrag = false;
    this.startPositionX = 0;
    this.startPositionY = 0;
    this.initializeHandles();
  }
  initializeHandles() {
    const move = new Handle(
      () => this.itemObject.boundingRectangleX() - 10,
      () => this.itemObject.boundingRectangleY() - 10,
      "✥",
      "green"
    );
    this.handles.push(move);
    const widthHandle = new Handle(
      () => this.itemObject.boundingRectangleX() + this.itemObject.width - 10,
      () => this.itemObject.boundingRectangleY() + this.itemObject.height / 2 - 10,
      // Changed position to middle-right
      "✥",
      "orange"
    );
    this.handles.push(widthHandle);
    const heightHandle = new Handle(
      () => this.itemObject.boundingRectangleX() + this.itemObject.width / 2 - 10,
      // Changed position to middle-top
      () => this.itemObject.boundingRectangleY() - 10,
      "✥",
      "blue"
    );
    this.handles.push(heightHandle);
  }
  drawHandles(ctx) {
    ctx.save();
    ctx.strokeStyle = "#1a73e8";
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(
      this.itemObject.boundingRectangleX(),
      this.itemObject.boundingRectangleY(),
      this.itemObject.width,
      this.itemObject.height
    );
    for (const handle of this.handles) {
      handle.draw(ctx);
    }
    ctx.restore();
  }
  mouseDown(x, y2) {
    this.startPositionX = x;
    this.startPositionY = y2;
    this.isDrag = true;
    if (this.handles[0].isHit(x, y2)) {
      this.selectedHandle = "move";
      return true;
    }
    if (this.handles[1].isHit(x, y2)) {
      this.selectedHandle = "widen";
      return true;
    }
    if (this.handles[2].isHit(x, y2)) {
      this.selectedHandle = "heighten";
      return true;
    }
    return false;
  }
  mouseMove(x, y2) {
    if (!this.isDrag) return false;
    const dx = x - this.startPositionX;
    const dy = y2 - this.startPositionY;
    const isMovingRight = dx > 0;
    const isMovingLeft = dx < 0;
    const isMovingDown = dy > 0;
    const isMovingUp = dy < 0;
    switch (this.selectedHandle) {
      case "move":
        this.itemObject.x = x;
        this.itemObject.y = y2;
        break;
      case "widen":
        if (isMovingRight) {
          this.itemObject.width = dx;
        } else if (isMovingLeft) {
          this.itemObject.width = dx;
        }
        this.startPositionX = x;
        break;
      case "heighten":
        if (isMovingDown) {
          this.itemObject.height = dy;
        } else if (isMovingUp) {
          this.itemObject.height = dy;
        }
        this.startPositionY = y2;
        break;
    }
    return true;
  }
  mouseUp() {
    this.isDrag = false;
    this.selectedHandle = null;
  }
  isHit(x, y2) {
    return this.mouseDown(x, y2);
  }
}
const ToolbarDiv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "flex p-0 m-0 bg-gray-900 text-white gap-2 py-1" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `<div${add_attribute("class", style, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const SmallBtnToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clk } = $$props;
  let { icon } = $$props;
  let { title } = $$props;
  if ($$props.clk === void 0 && $$bindings.clk && clk !== void 0) $$bindings.clk(clk);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `<div class="flex flex-col hover:bg-gray-500 rounded-md p-1"><button class="bg-stone-500 p-1 rounded-md text-xs ">${escape(icon)}</button> <div class="text-xs p-1">${escape(title)}</div></div>`;
});
const ToolBarCallbackWithArgs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { callBack = () => {
  } } = $$props;
  let { containerClass = "flex text-white" } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.callBack === void 0 && $$bindings.callBack && callBack !== void 0) $$bindings.callBack(callBack);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  return `<div${add_attribute("class", containerClass, 0)}>${each(items, (item) => {
    return `${validate_component(SmallBtnToolbar, "SmallBtnToolbar").$$render(
      $$result,
      {
        clk: () => callBack(item.payload),
        icon: item.icon,
        title: item.title
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const ToolBarCallback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { containerClass = "flex border-2 border-gray-500 rounded-md" } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  return `<div${add_attribute("class", containerClass, 0)}>${each(items, (item) => {
    return `${validate_component(SmallBtnToolbar, "SmallBtnToolbar").$$render(
      $$result,
      {
        clk: item.callback,
        icon: item.icon,
        title: item.title
      },
      {},
      {}
    )}`;
  })}</div>`;
});
let Icons$2 = class Icons {
  static ADD = " ➕";
  static ANGLE = " ∠";
  static BALANCE = "⚖️";
  static BAZIER = "🔷";
  static BARCHART = "📊";
  static BOOK = "📘";
  static BOOKS = "📚";
  static BUS = "🚌";
  static BULB = "💡";
  static CAR = "🚗";
  static CANVAS = "🖼️";
  static CHARTUP = "📈";
  static CHARTDOWN = "📉";
  static CIRCLE = "⭕";
  static CLOCK = "⏱️";
  static COG = "⚙";
  static COMPUTER = "💻";
  static COPY = "📋";
  static CODE = "📟";
  static COLD = "🥶";
  static CROSS = "❌";
  static CLIP = "📎";
  static CLONE = "🁜";
  static DARK = "🌃";
  static DEL = "🗑️";
  static DOOR = "🚪";
  static DOT = "🔘";
  static DOWN = "↓";
  static EMAIL = "📧";
  static EYE = "👁️";
  static EYES = "👀";
  static EXPLOSION = "💥";
  static ELLIPSE = "🥚";
  static FILESBOX = "🗃️";
  static FLOWER = "🌸";
  static FROWNFACE = "☹️";
  static HAMMER_AND_WRENCH = "🛠️";
  static HEART = "❤️";
  static HIDE = "🙈";
  static HOT = "🔥";
  static HOURGLASS = "⌛";
  static HOUSE = "🏠";
  static ICE = "🧊";
  static KEY = "🔑";
  static LOCK = "🔒";
  static LEFT = "←";
  static LINE = "➖";
  static MAGNIFYING_GLASS = "🔍";
  static MANAGER = "💼";
  static MCQ = "🔱";
  static MESSAGE = "📨";
  static MICROSCOPE = "🔬";
  static NET = "🌐";
  static NOTES = "📋";
  static NUMBER = "❶";
  static PALETTE = "🎨";
  static PENCIL = " ✏️";
  static PHONE = "📱";
  static QUESTIONMARK = "❓";
  static RULER = "📏";
  static RIGHT = "→";
  static RECYCLE = "♻️";
  static RECTANGLE = "▭";
  static RUN = "🏃";
  static ROCKET = "🚀";
  static SAVE = "💾";
  static SMILYFACE = "😊";
  static SPEECH = "🗣️";
  static SPEAKER = "📢";
  static NOSPEAKER = "🔇";
  static STAIRS = "🪜";
  static STAR = "⭐";
  static SHEEP = "🐑";
  static START = "▶";
  static STOP = "||";
  static STUDENT = "👨‍🎓";
  static SPRITE = "🕹️";
  static STUDENTCAP = "🎓";
  static SUN = "☀️";
  static SUNRISE = "🌅";
  static SUBTRACT = "➖";
  static TAG = "🏷️";
  static TEAM = "🧑‍🤝‍🧑";
  static TICK = "✔️";
  static TEMPRATURE = "🌡️";
  static TEMPLATE = "📜";
  static TEST = "🧪";
  static TEXT = "📃";
  static TEXT2 = "¶";
  static THUMBSUP = "👍";
  static THUMBSDOWN = "👎";
  static TRIANGE = "🔺";
  static TRIANGULAR_RULER = "📐";
  static TREE = "🌳";
  static TV = "📺";
  static WRENCH = "🔧";
  static UP = "↑";
  static MONEYBAG = "💰";
  static MAGNET = "🧲";
  static MAGICWAND = "🪄";
  static MAP = "🗺️";
  static MEDAL = "🎖️";
  static MEGAPHONE = "📣";
  static MICROPHONE = "🎤";
  static MILK = "🥛";
  static MOON = "🌙";
  static MOUNTAIN = "⛰️";
  static MUSIC = "🎵";
  static NETWORK = "🔗";
  static NEWSPAPER = "📰";
  static NOTEBOOK = "📓";
  static OIL = "🛢️";
  static PANDA = "🐼";
  static PARACHUTE = "🪂";
  static PEACE = "☮️";
  static PENGUIN = "🐧";
  static PET = "🐾";
  static PIGGYBANK = "🐖";
  static PINEAPPLE = "🍍";
  static PIZZA = "🍕";
  static PLANET = "🪐";
  static PRINTER = "🖨️";
  static PUZZLE = "🧩";
  static QUILL = "🖋️";
  static RAINBOW = "🌈";
  static RECORD = "🎙️";
  static ROSE = "🌹";
  static SAILBOAT = "⛵";
  static SATELLITE = "🛰️";
  static SCISSORS = "✂️";
  static SCROLL = "📜";
  static SHIELD = "🛡️";
  static SNOWFLAKE = "❄️";
  static SQUIRREL = "🐿️";
  static SUITCASE = "💼";
  static SUNGLASSES = "🕶️";
  static SURFBOARD = "🏄‍♂️";
  static TADA = "🎉";
  static TEA = "🍵";
  static TELESCOPE = "🔭";
  static TENT = "⛺";
  static TOOLS = "🛠️";
  static TORNADO = "🌪️";
  static TROPHY = "🏆";
  static UMBRELLA = "☂️";
  static UNLOCK = "🔓";
  static VAN = "🚐";
  static VIAL = "🧪";
  static VIKING = "🛡️";
  static WALLET = "👛";
  static WATERMELON = "🍉";
  static WHALE = "🐋";
  static WIFI = "📶";
  static WIND = "💨";
  static WOLF = "🐺";
  static YIN_YANG = "☯️";
  static AIRPLANE = "✈️";
  static ALARM = "⏰";
  static APPLE = "🍎";
  static AVOCADO = "🥑";
  static BALLOON = "🎈";
  static BANANA = "🍌";
  static BATTERY = "🔋";
  static BEACH = "🏖️";
  static BELL = "🔔";
  static BICYCLE = "🚲";
  static BIRD = "🐦";
  static BIRTHDAY_CAKE = "🎂";
  static BOMB = "💣";
  static BOOKMARK = "🔖";
  static BOW_AND_ARROW = "🏹";
  static BRIEFCASE2 = "👜";
  static BROOM = "🧹";
  static CACTUS = "🌵";
  static CALCULATOR = "📟";
  static CAMERA = "📷";
  static CANDY = "🍬";
  static CANDLE = "🕯️";
  static CARD = "💳";
  static CARROT = "🥕";
  static CAT = "🐱";
  static CHAMPAGNE = "🍾";
  static CHECK_MARK = "✅";
  static CHERRY = "🍒";
  static CHEESE = "🧀";
  static CHESS = "♟️";
  static CHICKEN = "🐔";
  static CLOUD = "☁️";
  static CLAPPERBOARD = "🎬";
  static COOKIE = "🍪";
  static CROWN = "👑";
  static CUPCAKE = "🧁";
  static CUTLERY = "🍴";
  static DAGGER = "🗡️";
  static DIAMOND = "💎";
  static DRUM = "🥁";
  static DUMBBELL = "🏋️";
  static ELEPHANT = "🐘";
  static ENVELOPE = "✉️";
  static FIREWORKS = "🎆";
  static FLAG = "🚩";
  static FLAME = "🔥";
  static FOOTBALL = "⚽";
  static FRIES = "🍟";
  static GEAR2 = "⚙️";
  static GIFT = "🎁";
  static GLOBE = "🌍";
  static GUITAR = "🎸";
  static HANDSHAKE = "🤝";
  static HELICOPTER = "🚁";
  static HONEY = "🍯";
  static HURRICANE = "🌀";
  static ICE_CREAM = "🍦";
  static JAM = "🍓";
  static JUICE = "🧃";
  static KITE = "🪁";
  static LAMP = "💡";
  static LEMONADE = "🍋";
  static LIGHTNING = "⚡";
  static LOCKED_BOOK = "🔏";
  static LOUDSPEAKER = "📢";
  static LUNCHBOX = "🍱";
  static MAGNETIC_TAPE = "📼";
  static MAPLE_LEAF = "🍁";
  static MASK = "🎭";
  static MEDICINE = "💊";
  static METEOR = "☄️";
  static MOLECULE = "🧬";
  static MOUSE = "🐭";
  static MUSHROOM = "🍄";
  static NUT_AND_BOLT = "🔩";
  static OCTOPUS = "🐙";
  static ORANGE = "🍊";
  static OWL = "🦉";
  static PAW_PRINT = "🐾";
  static PENCIL2 = "🖊️";
  static PILLOW = "🛏️";
  static PINE_TREE = "🌲";
  static POPCORN = "🍿";
  static RADAR = "📡";
  static ROBOT = "🤖";
  static RUBY = "💍";
  static SANDWICH = "🥪";
  static SATURN = "🪐";
  static SEA_SHELL = "🐚";
  static SHARK = "🦈";
  static SHOPPING_BAG = "🛍️";
  static SKULL = "💀";
  static SNORKEL = "🤿";
  static SPIDER = "🕷️";
  static SQUID = "🦑";
  static STETHOSCOPE = "🩺";
  static SWIMMING_POOL = "🏊";
  static SYRINGE = "💉";
  static TOOLBOX = "🧰";
  static TRAFFIC_LIGHT = "🚦";
  static TRAIN = "🚆";
  static TREE2 = "🌴";
  static TRUCK = "🚚";
  static VAMPIRE = "🧛";
  static WATERMELON_SLICE = "🍉";
  static ABACUS = "🧮";
  static ALIEN = "👽";
  static AMPHORA = "🏺";
  static ANCHOR = "⚓";
  static ANT = "🐜";
  static ASTRONAUT = "👨‍🚀";
  static ATOM = "⚛️";
  static AXE = "🪓";
  static BACKPACK = "🎒";
  static BADMINTON = "🏸";
  static BAGEL = "🥯";
  static BAGUETTE = "🥖";
  static BAMBOO = "🎍";
  static BANJO = "🪕";
  static BASKET = "🧺";
  static BAT = "🦇";
  static BEAVER = "🦫";
  static BENTO = "🍱";
  static BIOHAZARD = "☣️";
  static BLUEBERRY = "🫐";
  static BOAR = "🐗";
  static BOBSLED = "🛷";
  static BONE = "🦴";
  static BONSAI = "🎍";
  static BOOMERANG = "🪃";
  static BRAIN = "🧠";
  static BREAD = "🍞";
  static BRICK = "🧱";
  static BRIDGE = "🌉";
  static BROCCOLI = "🥦";
  static BROOM_AND_BALL = "🧹🏀";
  static BUBBLE_TEA = "🧋";
  static BUCKET = "🪣";
  static BUTTERFLY = "🦋";
  static CACTUS_IN_POT = "🌵🪴";
  static CALENDAR = "📅";
  static CAMEL = "🐪";
  static CANOE = "🛶";
  static CASTLE = "🏰";
  static CHAINSAW = "🪚";
  static CHAIR = "🪑";
  static CHESTNUT = "🌰";
  static CHIPMUNK = "🐿️";
  static CHOCOLATE_BAR = "🍫";
  static CHOPSTICKS = "🥢";
  static CLAMP = "🗜️";
  static CLOVER = "🍀";
  static COCONUT = "🥥";
  static COFFIN = "⚰️";
  static COIN = "🪙";
  static COMET = "☄️";
  static COMPASS = "🧭";
  static CORAL = "🪸";
  static CORN = "🌽";
  static CRAYON = "🖍️";
  static CRICKET = "🦗";
  static CROCODILE = "🐊";
  static CROISSANT = "🥐";
  static CRYSTAL_BALL = "🔮";
  static CUCUMBER = "🥒";
  static CUPID = "💘";
  static CURLING_STONE = "🥌";
  static CYCLONE = "🌀";
  static DANGO = "🍡";
  static DART = "🎯";
  static DEER = "🦌";
  static DESKTOP = "🖥️";
  static DICE = "🎲";
  static DINOSAUR = "🦕";
  static DIVIDER = "〰️";
  static DNA = "🧬";
  static DONUT = "🍩";
  static DOVE = "🕊️";
  static DRAGON = "🐉";
  static DRILL = "🛠️";
  static DROPLET = "💧";
  static DUCK = "🦆";
  static DUMPLING = "🥟";
  static EAR = "👂";
  static EGGPLANT = "🍆";
  static ELF = "🧝";
  static EVERGREEN = "🌲";
  static FAIRY = "🧚";
  static FALLEN_LEAF = "🍂";
  static FEATHER = "🪶";
  static FERRIS_WHEEL = "🎡";
  static FIRE_EXTINGUISHER = "🧯";
  static FIRECRACKER = "🧨";
  static FISHING_POLE = "🎣";
  static FLEUR_DE_LIS = "⚜️";
  static FLYING_DISC = "🥏";
  static FLYING_SAUCER = "🛸";
  static FOG = "🌫️";
  static FONDUE = "🫕";
  static FOOTPRINTS = "👣";
  static FOUNTAIN = "⛲";
  static FOX = "🦊";
  static FROG = "🐸";
  static GARLIC = "🧄";
  static GENIE = "🧞";
  static GERM = "🦠";
  static GHOST = "👻";
  static GIRAFFE = "🦒";
  static GLOVES = "🧤";
  static GOAT = "🐐";
  static GORILLA = "🦍";
  static GRAPES = "🍇";
  static GRASSHOPPER = "🦗";
  static HAMSA = "🧿";
  static HARMONICA = "🎹";
  static HEADSTONE = "🪦";
  static HEDGEHOG = "🦔";
  static HERB = "🌿";
  static HIBISCUS = "🌺";
  static HIPPOPOTAMUS = "🦛";
  static HOOK = "🪝";
  static HOURGLASS_DONE = "⌛";
  static IGLOO = "�iglq";
  static INFINITY = "♾️";
  static JELLYFISH = "🪼";
  static JIGSAW = "🧩";
  static JOYSTICK = "🕹️";
  static KANGAROO = "🦘";
  static KIWI = "🥝";
  static KNOT = "🪢";
  static KOALA = "🐨";
  static LABCOAT = "🥼";
  static LADDER = "🪜";
  static LADYBUG = "🐞";
  static LASSO = "🪃";
  static LEMON = "🍋";
  static LEOPARD = "🐆";
  static LEVITATE = "🕴️";
  static LIGHT_BULB = "💡";
  static LIZARD = "🦎";
  static LLAMA = "🦙";
  static LOBSTER = "🦞";
  static LOLLIPOP = "🍭";
  static LOTUS = "🪷";
  static LUGGAGE = "🧳";
  static LUNGS = "🫁";
  static MAGE = "🧙";
  static MANGO = "🥭";
  static MANTIS = "🦗";
  static MICROBE = "🦠";
  static MIRROR = "🪞";
  static MOAI = "🗿";
  static MOLE = "🐀";
  static MONKEY = "🐒";
  static MOSQUITO = "🦟";
  static MOTOR_SCOOTER = "🛵";
  static MOTORCYCLE = "🏍️";
  static MOUNTAIN_CABLEWAY = "🚠";
  static NAZAR_AMULET = "🧿";
  static NECKTIE = "👔";
  static NESTING_DOLLS = "🪆";
  static NINJA = "🥷";
  static ONION = "🧅";
  static ORANGUTAN = "🦧";
  static OTTER = "🦦";
  static OYSTER = "🦪";
  static PACKAGE = "📦";
  static PAINTBRUSH = "🖌️";
  static PALM_TREE = "🌴";
  static PANCAKES = "🥞";
  static PAPERCLIP = "📎";
  static PARROT = "🦜";
  static PEACH = "🍑";
  static PEACOCK = "🦚";
  static PEANUTS = "🥜";
  static PEARL = "🫠";
  static PEAR = "🍐";
  static PENCIL_AND_PAPER = "📝";
  static PEPPER = "🌶️";
  static PETRI_DISH = "🧫";
  static PICKAXE = "⛏️";
  static PIEZO = "🔊";
  static PIGEON = "🕊️";
  static PILL = "💊";
  static PINATA = "🪅";
  static PINCH = "🤏";
  static PINEAPPLE_SLICE = "🍍";
  static PING_PONG = "🏓";
  static PIRATE = "🏴‍☠️";
  static PLANT_IN_POT = "🪴";
  static PLATYPUS = "🦡";
  static PLUNGER = "🪠";
  static POPCORN_BUCKET = "🍿";
  static POTATO = "🥔";
  static PRETZEL = "🥨";
  static PROTOZOA = "🦠";
  static PUMPKIN = "🎃";
  static PUSHPIN = "📌";
  static RABBIT = "🐰";
  static RACCOON = "🦝";
  static RADIO = "📻";
  static RAIL_CAR = "🚃";
  static RAINBOW_FLAG = "🏳️‍🌈";
  static RAMEN = "🍜";
  static RAT = "🐀";
  static RECEIPT = "🧾";
  static RHINOCEROS = "🦏";
  static RICE = "🍚";
  static RING_BUOY = "🛟";
  static ROCK = "🪨";
  static ROOSTER = "🐓";
  static SAFETY_PIN = "🧷";
  static SAFETY_VEST = "🦺";
  static SALT = "🧂";
  static SANDAL = "👡";
  static SATELLITE_ANTENNA = "📡";
  static SAUROPOD = "🦕";
  static SCALES = "⚖️";
  static SCARF = "🧣";
  static SCORPION = "🦂";
  static SCREWDRIVER = "🪛";
  static SEAL = "🦭";
  static SEEDLING = "🌱";
  static SHAMROCK = "☘️";
  static SHRIMP = "🦐";
  static SKUNK = "🦨";
  static SLED = "🛷";
  static SLOTH = "🦥";
  static SNAIL = "🐌";
  static SNAKE = "🐍";
  static SNOWBOARDER = "🏂";
  static SNOWMAN = "☃️";
  static SOAP = "🧼";
  static SOCCER_BALL = "⚽";
  static SOCKS = "🧦";
  static SOFTBALL = "🥎";
  static SPADE = "♠️";
  static SPAGHETTI = "🍝";
  static SPARKLES = "✨";
  static SPARKLER = "🎇";
  static SPARKLING_HEART = "💖";
  static SPOON = "🥄";
  static SPORTS_MEDAL = "🏅";
  static STACKED_BOOKS = "📚";
  static STAPLER = "🗄️";
  static STOPWATCH = "⏱️";
  static STORM = "🌩️";
  static STRAWBERRY = "🍓";
  static SUNFLOWER = "🌻";
  static SUSHI = "🍣";
  static SWAN = "🦢";
  static SWEAT_DROPLETS = "💦";
  static T_REX = "🦖";
  static TACO = "🌮";
  static TAKEOUT_BOX = "🥡";
  static TAMALE = "🫔";
  static TANGERINE = "🍊";
  static TAXI = "🚕";
  static TEAPOT = "🫖";
  static TEDDY_BEAR = "🧸";
  static TENNIS = "🎾";
  static THERMOMETER = "🌡️";
  static THONG_SANDAL = "🩴";
  static THREAD = "🧵";
  static TICKET = "🎟️";
  static TIGER = "🐯";
  static TOILET = "🚽";
  static TOMATO = "🍅";
  static TONGUE = "👅";
  static TRACTOR = "🚜";
  static TROLLEYBUS = "🚎";
  static TSHIRT = "👕";
  static TULIP = "🌷";
  static TURKEY = "🦃";
  static TURTLE = "🐢";
  static UNICORN = "🦄";
  static VIOLIN = "🎻";
  static VOLLEYBALL = "🏐";
  static WAFFLE = "🧇";
  static WASTEBASKET = "🗑️";
  static WATCH = "⌚";
  static WATER_BUFFALO = "🐃";
  static WATER_POLO = "🤽";
  static WATER_WAVE = "🌊";
  static WATERFALL = "🧗‍♀️";
  static WINDMILL = "🏰";
  static WINDOW = "🪟";
  static WINE_GLASS = "🍷";
  static WOOD = "🪵";
  static WORM = "🪱";
  static WREATH = "🎍";
  static WRITING_HAND = "✍️";
  static X_RAY = "🦴";
  static YARN = "🧶";
  static YO_YO = "🪀";
  static ZEBRA = "🦓";
  static ZOMBIE = "🧟";
  ////////////////////////
};
const AddToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { addNewItem } = $$props;
  let { clone = () => {
  } } = $$props;
  let { deleteFn = () => {
  } } = $$props;
  let { showCanvas = () => {
  } } = $$props;
  const shapeItems = [
    {
      icon: Icons$2.RECTANGLE,
      payload: "rectangle",
      title: "Rect"
    },
    {
      icon: Icons$2.ELLIPSE,
      payload: "ellipse",
      title: "Ellipse"
    },
    {
      icon: Icons$2.ELLIPSE,
      payload: "circle",
      title: "Circle"
    },
    {
      icon: Icons$2.TEXT,
      payload: "text",
      title: "Text"
    },
    {
      icon: Icons$2.TEMPLATE,
      payload: "list",
      title: "List"
    },
    {
      icon: Icons$2.LINE,
      payload: "line",
      title: "Line"
    },
    {
      icon: Icons$2.TRIANGE,
      payload: "triangle",
      title: "Tri"
    },
    {
      icon: Icons$2.SUNRISE,
      payload: "ray",
      title: "Ray"
    },
    {
      icon: Icons$2.SPEAKER,
      payload: "icon",
      title: "Icon"
    },
    {
      icon: Icons$2.DOT,
      payload: "dot",
      title: "DOT"
    },
    {
      icon: Icons$2.ANGLE,
      payload: "angle",
      title: "ANGLE"
    },
    {
      icon: Icons$2.BICYCLE,
      payload: "lines",
      title: "Lines"
    },
    {
      icon: Icons$2.SPRITE,
      payload: "sprite",
      title: "Sprite"
    },
    {
      icon: Icons$2.MAP,
      payload: "image",
      title: "Image"
    },
    {
      icon: Icons$2.PIZZA,
      payload: "piechart",
      title: "Pie"
    }
  ];
  const actionItems = [
    {
      icon: Icons$2.SHEEP,
      callback: clone,
      title: "Clone"
    },
    {
      icon: Icons$2.CANVAS,
      callback: showCanvas,
      title: "Canvas"
    },
    {
      icon: Icons$2.WASTEBASKET,
      callback: deleteFn,
      title: "Delete"
    }
  ];
  if ($$props.addNewItem === void 0 && $$bindings.addNewItem && addNewItem !== void 0) $$bindings.addNewItem(addNewItem);
  if ($$props.clone === void 0 && $$bindings.clone && clone !== void 0) $$bindings.clone(clone);
  if ($$props.deleteFn === void 0 && $$bindings.deleteFn && deleteFn !== void 0) $$bindings.deleteFn(deleteFn);
  if ($$props.showCanvas === void 0 && $$bindings.showCanvas && showCanvas !== void 0) $$bindings.showCanvas(showCanvas);
  return `${validate_component(ToolbarDiv, "ToolbarDiv").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ToolBarCallbackWithArgs, "ToolBarCallbackWithArgs").$$render($$result, { items: shapeItems, callBack: addNewItem }, {}, {})} ${validate_component(ToolBarCallback, "ToolBarCallback").$$render($$result, { items: actionItems }, {}, {})}`;
    }
  })}`;
});
function getMouseData(e) {
  const canvas = e.target;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y2 = (e.clientY - rect.top) * scaleY;
  return { x, y: y2, canvas, rect };
}
const SelectItemMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { selectedItemIndex } = $$props;
  let { setSelectedItemIndex } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.selectedItemIndex === void 0 && $$bindings.selectedItemIndex && selectedItemIndex !== void 0) $$bindings.selectedItemIndex(selectedItemIndex);
  if ($$props.setSelectedItemIndex === void 0 && $$bindings.setSelectedItemIndex && setSelectedItemIndex !== void 0) $$bindings.setSelectedItemIndex(setSelectedItemIndex);
  return `<select class="bg-stone-800 text-gray-300 text-xs p-1.5 m-1 rounded-md border border-stone-600 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 shadow-sm"${add_attribute("value", selectedItemIndex, 0)}>${each(items, (item, index) => {
    return `<option class="bg-stone-700 text-gray-300"${add_attribute("value", index, 0)}>${escape(item.name)} </option>`;
  })}</select>`;
});
const InputNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let valueWithoutDecimal;
  let { value } = $$props;
  let { config } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0) $$bindings.config(config);
  valueWithoutDecimal = value ? Math.trunc(value) : value;
  return `  <input type="number"${add_attribute("min", config.min, 0)}${add_attribute("max", config.max, 0)}${add_attribute("step", config.step, 0)}${add_attribute("value", valueWithoutDecimal, 0)} class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500 text-xs">`;
});
const InputFloat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedValue;
  let { value } = $$props;
  let { config } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0) $$bindings.config(config);
  formattedValue = value === null || value === void 0 ? "" : value.toFixed(2);
  return `<input type="number"${add_attribute("min", config?.min || 0, 0)}${add_attribute("max", config?.max || 1, 0)}${add_attribute("step", config?.step || 0.01, 0)}${add_attribute("value", formattedValue, 0)} class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500 text-xs">`;
});
const InputText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  return `  <input type="text" class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"${add_attribute("value", value, 0)}>`;
});
const InputTextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value } = $$props;
  let { redraw } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0) $$bindings.redraw(redraw);
  return `  <textarea class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500">${escape(value || "")}</textarea>`;
});
const InputCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { redraw } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0) $$bindings.redraw(redraw);
  return `  <input type="checkbox" ${value ? "checked" : ""} class="bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500">`;
});
const InputColor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value } = $$props;
  let { redraw } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0) $$bindings.redraw(redraw);
  return `  <input type="color" class="bg-gray-900 text-white rounded-md border border-gray-600 p-1 focus:ring-1 focus:ring-pink-500"${add_attribute("value", value, 0)}>`;
});
const FontFamilyDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  const options = [
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Gill Sans"
  ];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  return `<select class="bg-gray-900 text-white text-xs"><option value="" data-svelte-h="svelte-lzn8xl">Select Font</option>${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select>`;
});
const StudentOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sheetItem } = $$props;
  if ($$props.sheetItem === void 0 && $$bindings.sheetItem && sheetItem !== void 0) $$bindings.sheetItem(sheetItem);
  return `<option value="student_w_tablet" ${sheetItem === "student_w_tablet" ? "selected" : ""}>student_w_tablet</option> <option value="student_red" ${sheetItem === "student_red" ? "selected" : ""}>student_red</option> <option value="student_black" ${sheetItem === "student_black" ? "selected" : ""}>student_black</option> <option value="student_female" ${sheetItem === "student_female" ? "selected" : ""}>student_female</option> `;
});
const FigOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sheetItem } = $$props;
  if ($$props.sheetItem === void 0 && $$bindings.sheetItem && sheetItem !== void 0) $$bindings.sheetItem(sheetItem);
  return ` <option value="flower1" ${sheetItem === "flower1" ? "selected" : ""}>flower1</option> <option value="flower2" ${sheetItem === "flower2" ? "selected" : ""}>flower2</option> <option value="flower3" ${sheetItem === "flower3" ? "selected" : ""}>flower3</option> <option value="flowe4" ${sheetItem === "flowe4" ? "selected" : ""}>flowe4</option> <option value="female_stick" ${sheetItem === "female_stick" ? "selected" : ""}>female_stick</option> <option value="male_stick" ${sheetItem === "male_stick" ? "selected" : ""}>male_stick</option> <option value="bear_face" ${sheetItem === "bear_face" ? "selected" : ""}>bear_face</option> <option value="apple" ${sheetItem === "apple" ? "selected" : ""}>apple</option>  <option value="plant_pot" ${sheetItem === "plant_pot" ? "selected" : ""}>plant_pot</option> <option value="penguin" ${sheetItem === "penguin" ? "selected" : ""}>penguin</option> <option value="drum_face" ${sheetItem === "drum_face" ? "selected" : ""}>drum_face</option> <option value="carrot" ${sheetItem === "carrot" ? "selected" : ""}>carrot</option> <option value="dimond" ${sheetItem === "dimond" ? "selected" : ""}>dimond</option> <option value="spring" ${sheetItem === "spring" ? "selected" : ""}>spring</option> <option value="bomb" ${sheetItem === "bomb" ? "selected" : ""}>bomb</option> <option value="paw" ${sheetItem === "paw" ? "selected" : ""}>paw</option>  <option value="line_design1" ${sheetItem === "line_design1" ? "selected" : ""}>line_design1</option> <option value="line_design2" ${sheetItem === "line_design2" ? "selected" : ""}>line_design2</option> <option value="line_design3" ${sheetItem === "line_design3" ? "selected" : ""}>line_design3</option> <option value="line_design4" ${sheetItem === "line_design4" ? "selected" : ""}>line_design4</option> <option value="line_design5" ${sheetItem === "line_design5" ? "selected" : ""}>line_design5</option> <option value="line_design6" ${sheetItem === "line_design6" ? "selected" : ""}>line_design6</option> <option value="line_design7" ${sheetItem === "line_design7" ? "selected" : ""}>line_design7</option> <option value="line_design8" ${sheetItem === "line_design8" ? "selected" : ""}>line_design8</option>  <option value="line_design9" ${sheetItem === "line_design9" ? "selected" : ""}>line_design9</option> <option value="leaf_left" ${sheetItem === "leaf_left" ? "selected" : ""}>leaf_left</option> <option value="leaf_right" ${sheetItem === "leaf_right" ? "selected" : ""}>leaf_right</option> <option value="cherry" ${sheetItem === "cherry" ? "selected" : ""}>cherry</option> <option value="drop_face" ${sheetItem === "drop_face" ? "selected" : ""}>drop_face</option> <option value="spring2" ${sheetItem === "spring2" ? "selected" : ""}>spring2</option> <option value="clock" ${sheetItem === "clock" ? "selected" : ""}>clock</option> <option value="water_tap_face" ${sheetItem === "water_tap_face" ? "selected" : ""}>water_tap_face</option>  <option value="smily_face_right" ${sheetItem === "smily_face_right" ? "selected" : ""}>smily_face_right</option> <option value="frying_pan_right" ${sheetItem === "frying_pan_right" ? "selected" : ""}>frying_pan_right</option> <option value="spatula_right" ${sheetItem === "spatula_right" ? "selected" : ""}>spatula_right</option> <option value="fox_face_left" ${sheetItem === "fox_face_left" ? "selected" : ""}>fox_face_left</option> <option value="evil_moon_face_left" ${sheetItem === "evil_moon_face_left" ? "selected" : ""}>evil_moon_face_left</option> <option value="telephone" ${sheetItem === "telephone" ? "selected" : ""}>telephone</option> <option value="tram_right" ${sheetItem === "tram_right" ? "selected" : ""}>tram_right</option> <option value="train" ${sheetItem === "train" ? "selected" : ""}>train</option>  <option value="car_left" ${sheetItem === "car_left" ? "selected" : ""}>car_left</option> <option value="puff_right" ${sheetItem === "puff_right" ? "selected" : ""}>puff_right</option> <option value="signal_right" ${sheetItem === "signal_right" ? "selected" : ""}>signal_right</option> <option value="plane_right" ${sheetItem === "plane_right" ? "selected" : ""}>plane_right</option> <option value="sun" ${sheetItem === "sun" ? "selected" : ""}>sun</option> <option value="umbrella" ${sheetItem === "umbrella" ? "selected" : ""}>umbrella</option> <option value="ice_man" ${sheetItem === "ice_man" ? "selected" : ""}>ice_man</option> <option value="cat_face_normal" ${sheetItem === "cat_face_normal" ? "selected" : ""}>cat_face_normal</option>  <option value="octopus_right" ${sheetItem === "octopus_right" ? "selected" : ""}>octopus_right</option> <option value="bow" ${sheetItem === "bow" ? "selected" : ""}>bow</option> <option value="fish_right" ${sheetItem === "fish_right" ? "selected" : ""}>fish_right</option> <option value="ant_left" ${sheetItem === "ant_left" ? "selected" : ""}>ant_left</option> <option value="duck_left" ${sheetItem === "duck_left" ? "selected" : ""}>duck_left</option> <option value="chicken_left" ${sheetItem === "chicken_left" ? "selected" : ""}>chicken_left</option> <option value="heart" ${sheetItem === "heart" ? "selected" : ""}>heart</option> <option value="mouse" ${sheetItem === "mouse" ? "selected" : ""}>mouse</option>  <option value="mouse_right" ${sheetItem === "mouse_right" ? "selected" : ""}>mouse_right</option> <option value="ghost_left" ${sheetItem === "ghost_left" ? "selected" : ""}>ghost_left</option> <option value="leaf_big_left" ${sheetItem === "leaf_big_left" ? "selected" : ""}>leaf_big_left</option> <option value="pencil_right" ${sheetItem === "pencil_right" ? "selected" : ""}>pencil_right</option> <option value="fork" ${sheetItem === "fork" ? "selected" : ""}>fork</option> <option value="mickey_mouse_face" ${sheetItem === "mickey_mouse_face" ? "selected" : ""}>mickey_mouse_face</option> <option value="rabit_face" ${sheetItem === "rabit_face" ? "selected" : ""}>rabit_face</option> <option value="crown" ${sheetItem === "crown" ? "selected" : ""}>crown</option>  <option value="smily_face_left" ${sheetItem === "smily_face_left" ? "selected" : ""}>smily_face_left</option> <option value="frying_pan_left" ${sheetItem === "frying_pan_left" ? "selected" : ""}>frying_pan_left</option> <option value="spatula_left" ${sheetItem === "spatula_left" ? "selected" : ""}>spatula_left</option> <option value="fox_face_right" ${sheetItem === "fox_face_right" ? "selected" : ""}>fox_face_right</option> <option value="evil_moon_face_right" ${sheetItem === "evil_moon_face_right" ? "selected" : ""}>evil_moon_face_right</option> <option value="mobile_phone" ${sheetItem === "mobile_phone" ? "selected" : ""}>mobile_phone</option> <option value="tram_left" ${sheetItem === "tram_left" ? "selected" : ""}>tram_left</option> <option value="tv" ${sheetItem === "tv" ? "selected" : ""}>tv</option>  <option value="car_right" ${sheetItem === "car_right" ? "selected" : ""}>car_right</option> <option value="puff_left" ${sheetItem === "puff_left" ? "selected" : ""}>puff_left</option> <option value="signal_left" ${sheetItem === "signal_left" ? "selected" : ""}>signal_left</option> <option value="plane_left" ${sheetItem === "plane_left" ? "selected" : ""}>plane_left</option> <option value="cloud_face" ${sheetItem === "cloud_face" ? "selected" : ""}>cloud_face</option> <option value="cloud_rain" ${sheetItem === "cloud_rain" ? "selected" : ""}>cloud_rain</option> <option value="paw_big" ${sheetItem === "paw_big" ? "selected" : ""}>paw_big</option> <option value="cat_face_evil" ${sheetItem === "cat_face_evil" ? "selected" : ""}>cat_face_evil</option>  <option value="octopus_left" ${sheetItem === "octopus_left" ? "selected" : ""}>octopus_left</option> <option value="hot_tea" ${sheetItem === "hot_tea" ? "selected" : ""}>hot_tea</option> <option value="fish_left" ${sheetItem === "fish_left" ? "selected" : ""}>fish_left</option> <option value="ant_right" ${sheetItem === "ant_right" ? "selected" : ""}>ant_right</option> <option value="duck_right" ${sheetItem === "duck_right" ? "selected" : ""}>duck_right</option> <option value="chicken_right" ${sheetItem === "chicken_right" ? "selected" : ""}>chicken_right</option> <option value="shinning_star" ${sheetItem === "shinning_star" ? "selected" : ""}>shinning_star</option> <option value="robot" ${sheetItem === "robot" ? "selected" : ""}>robot</option>  <option value="mouse_left" ${sheetItem === "mouse_left" ? "selected" : ""}>mouse_left</option> <option value="ghost_right" ${sheetItem === "ghost_right" ? "selected" : ""}>ghost_right</option> <option value="leaf_big_right" ${sheetItem === "leaf_big_right" ? "selected" : ""}>leaf_big_right</option> <option value="pencil_left" ${sheetItem === "pencil_left" ? "selected" : ""}>pencil_left</option> <option value="spoon" ${sheetItem === "spoon" ? "selected" : ""}>spoon</option> <option value="octopus_wave" ${sheetItem === "octopus_wave" ? "selected" : ""}>octopus_wave</option> <option value="dimon2" ${sheetItem === "dimon2" ? "selected" : ""}>dimon2</option>`;
});
const AlbhabetOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sheetItem } = $$props;
  if ($$props.sheetItem === void 0 && $$bindings.sheetItem && sheetItem !== void 0) $$bindings.sheetItem(sheetItem);
  return ` <option value="A" ${sheetItem === "A" ? "selected" : ""}>A</option> <option value="B" ${sheetItem === "B" ? "selected" : ""}>B</option> <option value="C" ${sheetItem === "C" ? "selected" : ""}>C</option> <option value="D" ${sheetItem === "D" ? "selected" : ""}>D</option> <option value="E" ${sheetItem === "E" ? "selected" : ""}>E</option> <option value="F" ${sheetItem === "F" ? "selected" : ""}>F</option> <option value="G" ${sheetItem === "G" ? "selected" : ""}>G</option> <option value="H" ${sheetItem === "H" ? "selected" : ""}>H</option> <option value="I" ${sheetItem === "I" ? "selected" : ""}>I</option> <option value="J" ${sheetItem === "J" ? "selected" : ""}>J</option> <option value="K" ${sheetItem === "K" ? "selected" : ""}>K</option> <option value="L" ${sheetItem === "L" ? "selected" : ""}>L</option>  <option value="M" ${sheetItem === "M" ? "selected" : ""}>M</option> <option value="N" ${sheetItem === "N" ? "selected" : ""}>N</option> <option value="O" ${sheetItem === "O" ? "selected" : ""}>O</option> <option value="P" ${sheetItem === "P" ? "selected" : ""}>P</option> <option value="Q" ${sheetItem === "Q" ? "selected" : ""}>Q</option> <option value="R" ${sheetItem === "R" ? "selected" : ""}>R</option> <option value="S" ${sheetItem === "S" ? "selected" : ""}>S</option> <option value="T" ${sheetItem === "T" ? "selected" : ""}>T</option> <option value="U" ${sheetItem === "U" ? "selected" : ""}>U</option> <option value="V" ${sheetItem === "V" ? "selected" : ""}>V</option> <option value="W" ${sheetItem === "W" ? "selected" : ""}>W</option> <option value="X" ${sheetItem === "X" ? "selected" : ""}>X</option>  <option value="Y" ${sheetItem === "Y" ? "selected" : ""}>Y</option> <option value="Z" ${sheetItem === "Z" ? "selected" : ""}>Z</option> <option value="a" ${sheetItem === "a" ? "selected" : ""}>a</option> <option value="b" ${sheetItem === "b" ? "selected" : ""}>b</option> <option value="c" ${sheetItem === "c" ? "selected" : ""}>c</option> <option value="d" ${sheetItem === "d" ? "selected" : ""}>d</option> <option value="e" ${sheetItem === "e" ? "selected" : ""}>e</option> <option value="f" ${sheetItem === "f" ? "selected" : ""}>f</option> <option value="g" ${sheetItem === "g" ? "selected" : ""}>g</option> <option value="h" ${sheetItem === "h" ? "selected" : ""}>h</option> <option value="i" ${sheetItem === "i" ? "selected" : ""}>i</option> <option value="j" ${sheetItem === "j" ? "selected" : ""}>j</option>  <option value="k" ${sheetItem === "k" ? "selected" : ""}>k</option> <option value="l" ${sheetItem === "l" ? "selected" : ""}>l</option> <option value="m" ${sheetItem === "m" ? "selected" : ""}>m</option> <option value="n" ${sheetItem === "n" ? "selected" : ""}>n</option> <option value="o" ${sheetItem === "o" ? "selected" : ""}>o</option> <option value="p" ${sheetItem === "p" ? "selected" : ""}>p</option> <option value="q" ${sheetItem === "q" ? "selected" : ""}>q</option> <option value="r" ${sheetItem === "r" ? "selected" : ""}>r</option> <option value="s" ${sheetItem === "s" ? "selected" : ""}>s</option> <option value="t" ${sheetItem === "t" ? "selected" : ""}>t</option> <option value="u" ${sheetItem === "u" ? "selected" : ""}>u</option> <option value="v" ${sheetItem === "v" ? "selected" : ""}>v</option>  <option value="w" ${sheetItem === "w" ? "selected" : ""}>w</option> <option value="x" ${sheetItem === "x" ? "selected" : ""}>x</option> <option value="y" ${sheetItem === "y" ? "selected" : ""}>y</option> <option value="z" ${sheetItem === "z" ? "selected" : ""}>z</option> <option value="0" ${sheetItem === "0" ? "selected" : ""}>0</option> <option value="1" ${sheetItem === "1" ? "selected" : ""}>1</option> <option value="2" ${sheetItem === "2" ? "selected" : ""}>2</option> <option value="3" ${sheetItem === "3" ? "selected" : ""}>3</option> <option value="4" ${sheetItem === "4" ? "selected" : ""}>4</option> <option value="5" ${sheetItem === "5" ? "selected" : ""}>5</option> <option value="6" ${sheetItem === "6" ? "selected" : ""}>6</option> <option value="7" ${sheetItem === "7" ? "selected" : ""}>7</option>  <option value="8" ${sheetItem === "8" ? "selected" : ""}>8</option> <option value="9" ${sheetItem === "9" ? "selected" : ""}>9</option> <option value="fullstio" ${sheetItem === "fullstio" ? "selected" : ""}>fullstio</option> <option value="comma" ${sheetItem === "comma" ? "selected" : ""}>comma</option> <option value="semi_colon" ${sheetItem === "semi_colon" ? "selected" : ""}>semi_colon</option> <option value="colon" ${sheetItem === "colon" ? "selected" : ""}>colon</option> <option value="question_mark" ${sheetItem === "question_mark" ? "selected" : ""}>question_mark</option> <option value="exclamation" ${sheetItem === "exclamation" ? "selected" : ""}>exclamation</option> <option value="dash" ${sheetItem === "dash" ? "selected" : ""}>dash</option> <option value="pound" ${sheetItem === "pound" ? "selected" : ""}>pound</option> <option value="double_quote" ${sheetItem === "double_quote" ? "selected" : ""}>double_quote</option> <option value="single_quote" ${sheetItem === "single_quote" ? "selected" : ""}>single_quote</option>  <option value="ampersand" ${sheetItem === "ampersand" ? "selected" : ""}>ampersand</option> <option value="left_bracket" ${sheetItem === "left_bracket" ? "selected" : ""}>left_bracket</option> <option value="right_bracket" ${sheetItem === "right_bracket" ? "selected" : ""}>right_bracket</option> <option value="right_angle_bracket" ${sheetItem === "right_angle_bracket" ? "selected" : ""}>right_angle_bracket</option> <option value="left_angle_bracket" ${sheetItem === "left_angle_bracket" ? "selected" : ""}>left_angle_bracket</option> <option value="tilda" ${sheetItem === "tilda" ? "selected" : ""}>tilda</option> <option value="backslash" ${sheetItem === "backslash" ? "selected" : ""}>backslash</option> <option value="frontslash" ${sheetItem === "frontslash" ? "selected" : ""}>frontslash</option> <option value="registered" ${sheetItem === "registered" ? "selected" : ""}>registered</option> <option value="foot_mark" ${sheetItem === "foot_mark" ? "selected" : ""}>foot_mark</option> <option value="degree_mark" ${sheetItem === "degree_mark" ? "selected" : ""}>degree_mark</option> <option value="plus" ${sheetItem === "plus" ? "selected" : ""}>plus</option>  <option value="isequal" ${sheetItem === "isequal" ? "selected" : ""}>isequal</option> <option value="multiply" ${sheetItem === "multiply" ? "selected" : ""}>multiply</option> <option value="dollar" ${sheetItem === "dollar" ? "selected" : ""}>dollar</option> <option value="greatherThan" ${sheetItem === "greatherThan" ? "selected" : ""}>greatherThan</option> <option value="smallerThan" ${sheetItem === "smallerThan" ? "selected" : ""}>smallerThan</option> <option value="divide" ${sheetItem === "divide" ? "selected" : ""}>divide</option>`;
});
const PeopleOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sheetItem } = $$props;
  if ($$props.sheetItem === void 0 && $$bindings.sheetItem && sheetItem !== void 0) $$bindings.sheetItem(sheetItem);
  return ` <option value="man_tblt_stndg" ${sheetItem === "man_tblt_stndg" ? "selected" : ""}>man_tblt_stndg</option> <option value="mf_wlk_biz" ${sheetItem === "mf_wlk_biz" ? "selected" : ""}>mf_wlk_biz</option> <option value="mf_stnd_read" ${sheetItem === "mf_stnd_read" ? "selected" : ""}>mf_stnd_read</option> <option value="gp_selfy" ${sheetItem === "gp_selfy" ? "selected" : ""}>gp_selfy</option> <option value="boy_googles" ${sheetItem === "boy_googles" ? "selected" : ""}>boy_googles</option> <option value="mf_travellers" ${sheetItem === "mf_travellers" ? "selected" : ""}>mf_travellers</option> <option value="m_h_phone_wlk" ${sheetItem === "m_h_phone_wlk" ? "selected" : ""}>m_h_phone_wlk</option> <option value="crowd" ${sheetItem === "crowd" ? "selected" : ""}>crowd</option> <option value="mf_mbl_wlk" ${sheetItem === "mf_mbl_wlk" ? "selected" : ""}>mf_mbl_wlk</option> <option value="old_cpl_jog" ${sheetItem === "old_cpl_jog" ? "selected" : ""}>old_cpl_jog</option> <option value="mom_kids_study" ${sheetItem === "mom_kids_study" ? "selected" : ""}>mom_kids_study</option> <option value="sofa_3people_rdng" ${sheetItem === "sofa_3people_rdng" ? "selected" : ""}>sofa_3people_rdng</option> <option value="3teen_Students" ${sheetItem === "3teen_Students" ? "selected" : ""}>3teen_Students</option> <option value="f_lazy_chair_tblt" ${sheetItem === "f_lazy_chair_tblt" ? "selected" : ""}>f_lazy_chair_tblt</option> <option value="biz_dnr" ${sheetItem === "biz_dnr" ? "selected" : ""}>biz_dnr</option> <option value="sun_bathing" ${sheetItem === "sun_bathing" ? "selected" : ""}>sun_bathing</option>`;
});
const SheetItemsDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sheet } = $$props;
  let { sheetItem } = $$props;
  if ($$props.sheet === void 0 && $$bindings.sheet && sheet !== void 0) $$bindings.sheet(sheet);
  if ($$props.sheetItem === void 0 && $$bindings.sheetItem && sheetItem !== void 0) $$bindings.sheetItem(sheetItem);
  return `${sheet == "figs" ? `${validate_component(FigOptions, "FigOptions").$$render($$result, { sheetItem }, {}, {})}` : ``} ${sheet == "alphabets" ? `${validate_component(AlbhabetOptions, "AlbhabetOptions").$$render($$result, { sheetItem }, {}, {})}` : ``} ${sheet == "students" ? `${validate_component(StudentOptions, "StudentOptions").$$render($$result, { sheetItem }, {}, {})}` : ``} ${sheet == "people" ? `${validate_component(PeopleOptions, "PeopleOptions").$$render($$result, { sheetItem }, {}, {})}` : ``}`;
});
const SpriteDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { extra } = $$props;
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  return `<div class="flex flex-col w-full space-y-2"><div class="border-b border-gray-700"><div class="px-2 text-[10px] text-yellow-200 text-left" data-svelte-h="svelte-1qlrink">Sheet</div> <div class="border border-gray-700 px-2 py-1"><select class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full focus:outline-none focus:ring focus:ring-yellow-400"${add_attribute("value", extra.sheet, 0)}><option value="students" data-svelte-h="svelte-374bv2">Students</option><option value="alphabets" data-svelte-h="svelte-l030lq">Alphabets</option><option value="figs" data-svelte-h="svelte-19yba46">Figs</option><option value="people" data-svelte-h="svelte-1wgqkmi">People</option></select></div></div> <div class="border-b border-gray-700"><div class="px-2 text-[10px] text-yellow-200 text-left" data-svelte-h="svelte-npji2h">S-Items</div> <div class="border border-gray-700 px-2 py-1"><select class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full focus:outline-none focus:ring focus:ring-yellow-400">${validate_component(SheetItemsDD, "SheetItemsDd").$$render(
    $$result,
    {
      sheet: extra.sheet,
      sheetItem: extra.sheetItem
    },
    {},
    {}
  )}</select></div></div></div>`;
});
const IconDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { extra } = $$props;
  let icons = [
    { label: "ADD", value: " ➕" },
    { label: "ANGLE", value: " ∠" },
    { label: "BALANCE", value: "⚖️" },
    { label: "BAZIER", value: "🔷" },
    { label: "BARCHART", value: "📊" },
    { label: "BOOK", value: "📘" },
    { label: "BOOKS", value: "📚" },
    { label: "BUS", value: "🚌" },
    { label: "BULB", value: "💡" },
    { label: "CAR", value: "🚗" },
    { label: "CANVAS", value: "🖼️" },
    { label: "CHARTUP", value: "📈" },
    { label: "CHARTDOWN", value: "📉" },
    { label: "CIRCLE", value: "⭕" },
    { label: "CLOCK", value: "⏱️" },
    { label: "COG", value: "⚙" },
    { label: "COMPUTER", value: "💻" },
    { label: "COPY", value: "📋" },
    { label: "CODE", value: "📟" },
    { label: "COLD", value: "🥶" },
    { label: "CROSS", value: "❌" },
    { label: "CLIP", value: "📎" },
    { label: "CLONE", value: "🁜" },
    { label: "DARK", value: "🌃" },
    { label: "DEL", value: "🗑️" },
    { label: "DOOR", value: "🚪" },
    { label: "DOT", value: "🔘" },
    { label: "DOWN", value: "↓" },
    { label: "EMAIL", value: "📧" },
    { label: "EYE", value: "👁️" },
    { label: "EYES", value: "👀" },
    { label: "EXPLOSION", value: "💥" },
    { label: "ELLIPSE", value: "🥚" },
    { label: "FILESBOX", value: "🗃️" },
    { label: "FLOWER", value: "🌸" },
    { label: "FROWNFACE", value: "☹️" },
    { label: "HAMMER_AND_WRENCH", value: "🛠️" },
    { label: "HEART", value: "❤️" },
    { label: "HIDE", value: "🙈" },
    { label: "HOT", value: "🔥" },
    { label: "HOURGLASS", value: "⌛" },
    { label: "HOUSE", value: "🏠" },
    { label: "ICE", value: "🧊" },
    { label: "KEY", value: "🔑" },
    { label: "LOCK", value: "🔒" },
    { label: "LEFT", value: "←" },
    { label: "LINE", value: "➖" },
    { label: "MAGNIFYING_GLASS", value: "🔍" },
    { label: "MANAGER", value: "💼" },
    { label: "MCQ", value: "🔱" },
    { label: "MESSAGE", value: "📨" },
    { label: "MICROSCOPE", value: "🔬" },
    { label: "NET", value: "🌐" },
    { label: "NOTES", value: "📋" },
    { label: "NUMBER", value: "❶" },
    { label: "PALETTE", value: "🎨" },
    { label: "PENCIL", value: " ✏️" },
    { label: "PHONE", value: "📱" },
    { label: "QUESTIONMARK", value: "❓" },
    { label: "RULER", value: "📏" },
    { label: "RIGHT", value: "→" },
    { label: "RECYCLE", value: "♻️" },
    { label: "RECTANGLE", value: "▭" },
    { label: "RUN", value: "🏃" },
    { label: "ROCKET", value: "🚀" },
    { label: "SAVE", value: "💾" },
    { label: "SMILYFACE", value: "😊" },
    { label: "SPEECH", value: "🗣️" },
    { label: "SPEAKER", value: "📢" },
    { label: "NOSPEAKER", value: "🔇" },
    { label: "STAIRS", value: "🪜" },
    { label: "STAR", value: "⭐" },
    { label: "SHEEP", value: "🐑" },
    { label: "START", value: "▶" },
    { label: "STOP", value: "||" },
    { label: "STUDENT", value: "👨‍🎓" },
    { label: "SPRITE", value: "🕹️" },
    { label: "STUDENTCAP", value: "🎓" },
    { label: "SUN", value: "☀️" },
    { label: "SUNRISE", value: "🌅" },
    { label: "SUBTRACT", value: "➖" },
    { label: "TAG", value: "🏷️" },
    { label: "TEAM", value: "🧑‍🤝‍🧑" },
    { label: "TICK", value: "✔️" },
    { label: "TEMPRATURE", value: "🌡️" },
    { label: "TEMPLATE", value: "📜" },
    { label: "TEST", value: "🧪" },
    { label: "TEXT", value: "📃" },
    { label: "TEXT2", value: "¶" },
    { label: "THUMBSUP", value: "👍" },
    { label: "THUMBSDOWN", value: "👎" },
    { label: "TRIANGE", value: "🔺" },
    { label: "TRIANGULAR_RULER", value: "📐" },
    { label: "TREE", value: "🌳" },
    { label: "TV", value: "📺" },
    { label: "WRENCH", value: "🔧" },
    { label: "UP", value: "↑" },
    { label: "MONEYBAG", value: "💰" },
    { label: "MAGNET", value: "🧲" },
    { label: "MAGICWAND", value: "🪄" },
    { label: "MAP", value: "🗺️" },
    { label: "MEDAL", value: "🎖️" },
    { label: "MEGAPHONE", value: "📣" },
    { label: "MICROPHONE", value: "🎤" },
    { label: "MILK", value: "🥛" },
    { label: "MOON", value: "🌙" },
    { label: "MOUNTAIN", value: "⛰️" },
    { label: "MUSIC", value: "🎵" },
    { label: "NETWORK", value: "🔗" },
    { label: "NEWSPAPER", value: "📰" },
    { label: "NOTEBOOK", value: "📓" },
    { label: "OIL", value: "🛢️" },
    { label: "PANDA", value: "🐼" },
    { label: "PARACHUTE", value: "🪂" },
    { label: "PEACE", value: "☮️" },
    { label: "PENGUIN", value: "🐧" },
    { label: "PET", value: "🐾" },
    { label: "PIGGYBANK", value: "🐖" },
    { label: "PINEAPPLE", value: "🍍" },
    { label: "PIZZA", value: "🍕" },
    { label: "PLANET", value: "🪐" },
    { label: "PRINTER", value: "🖨️" },
    { label: "PUZZLE", value: "🧩" },
    { label: "QUILL", value: "🖋️" },
    { label: "RAINBOW", value: "🌈" },
    { label: "RECORD", value: "🎙️" },
    { label: "ROSE", value: "🌹" },
    { label: "SAILBOAT", value: "⛵" },
    { label: "SATELLITE", value: "🛰️" },
    { label: "SCISSORS", value: "✂️" },
    { label: "SCROLL", value: "📜" },
    { label: "SHIELD", value: "🛡️" },
    { label: "SNOWFLAKE", value: "❄️" },
    { label: "SQUIRREL", value: "🐿️" },
    { label: "SUITCASE", value: "💼" },
    { label: "SUNGLASSES", value: "🕶️" },
    { label: "SURFBOARD", value: "🏄‍♂️" },
    { label: "TADA", value: "🎉" },
    { label: "TEA", value: "🍵" },
    { label: "TELESCOPE", value: "🔭" },
    { label: "TENT", value: "⛺" },
    { label: "TOOLS", value: "🛠️" },
    { label: "TORNADO", value: "🌪️" },
    { label: "TROPHY", value: "🏆" },
    { label: "UMBRELLA", value: "☂️" },
    { label: "UNLOCK", value: "🔓" },
    { label: "VAN", value: "🚐" },
    { label: "VIAL", value: "🧪" },
    { label: "VIKING", value: "🛡️" },
    { label: "WALLET", value: "👛" },
    { label: "WATERMELON", value: "🍉" },
    { label: "WHALE", value: "🐋" },
    { label: "WIFI", value: "📶" },
    { label: "WIND", value: "💨" },
    { label: "WOLF", value: "🐺" },
    { label: "YIN_YANG", value: "☯️" },
    { label: "AIRPLANE", value: "✈️" },
    { label: "ALARM", value: "⏰" },
    { label: "APPLE", value: "🍎" },
    { label: "AVOCADO", value: "🥑" },
    { label: "BALLOON", value: "🎈" },
    { label: "BANANA", value: "🍌" },
    { label: "BATTERY", value: "🔋" },
    { label: "BEACH", value: "🏖️" },
    { label: "BELL", value: "🔔" },
    { label: "BICYCLE", value: "🚲" },
    { label: "BIRD", value: "🐦" },
    { label: "BIRTHDAY_CAKE", value: "🎂" },
    { label: "BOMB", value: "💣" },
    { label: "BOOKMARK", value: "🔖" },
    { label: "BOW_AND_ARROW", value: "🏹" },
    { label: "BRIEFCASE2", value: "👜" },
    { label: "BROOM", value: "🧹" },
    { label: "CACTUS", value: "🌵" },
    { label: "CALCULATOR", value: "📟" },
    { label: "CAMERA", value: "📷" },
    { label: "CANDY", value: "🍬" },
    { label: "CANDLE", value: "🕯️" },
    { label: "CARD", value: "💳" },
    { label: "CARROT", value: "🥕" },
    { label: "CAT", value: "🐱" },
    { label: "CHAMPAGNE", value: "🍾" },
    { label: "CHECK_MARK", value: "✅" },
    { label: "CHERRY", value: "🍒" },
    { label: "CHEESE", value: "🧀" },
    { label: "CHESS", value: "♟️" },
    { label: "CHICKEN", value: "🐔" },
    { label: "CLOUD", value: "☁️" },
    { label: "CLAPPERBOARD", value: "🎬" },
    { label: "COOKIE", value: "🍪" },
    { label: "CROWN", value: "👑" },
    { label: "CUPCAKE", value: "🧁" },
    { label: "CUTLERY", value: "🍴" },
    { label: "DAGGER", value: "🗡️" },
    { label: "DIAMOND", value: "💎" },
    { label: "DRUM", value: "🥁" },
    { label: "DUMBBELL", value: "🏋️" },
    { label: "ELEPHANT", value: "🐘" },
    { label: "ENVELOPE", value: "✉️" },
    { label: "FIREWORKS", value: "🎆" },
    { label: "FLAG", value: "🚩" },
    { label: "FLAME", value: "🔥" },
    { label: "FOOTBALL", value: "⚽" },
    { label: "FRIES", value: "🍟" },
    { label: "GEAR2", value: "⚙️" },
    { label: "GIFT", value: "🎁" },
    { label: "GLOBE", value: "🌍" },
    { label: "GUITAR", value: "🎸" },
    { label: "HANDSHAKE", value: "🤝" },
    { label: "HELICOPTER", value: "🚁" },
    { label: "HONEY", value: "🍯" },
    { label: "HURRICANE", value: "🌀" },
    { label: "ICE_CREAM", value: "🍦" },
    { label: "JAM", value: "🍓" },
    { label: "JUICE", value: "🧃" },
    { label: "KITE", value: "🪁" },
    { label: "LAMP", value: "💡" },
    { label: "LEMONADE", value: "🍋" },
    { label: "LIGHTNING", value: "⚡" },
    { label: "LOCKED_BOOK", value: "🔏" },
    { label: "LOUDSPEAKER", value: "📢" },
    { label: "LUNCHBOX", value: "🍱" },
    { label: "MAGNETIC_TAPE", value: "📼" },
    { label: "MAPLE_LEAF", value: "🍁" },
    { label: "MASK", value: "🎭" },
    { label: "MEDICINE", value: "💊" },
    { label: "METEOR", value: "☄️" },
    { label: "MOLECULE", value: "🧬" },
    { label: "MOUSE", value: "🐭" },
    { label: "MUSHROOM", value: "🍄" },
    { label: "NUT_AND_BOLT", value: "🔩" },
    { label: "OCTOPUS", value: "🐙" },
    { label: "ORANGE", value: "🍊" },
    { label: "OWL", value: "🦉" },
    { label: "PAW_PRINT", value: "🐾" },
    { label: "PENCIL2", value: "🖊️" },
    { label: "PILLOW", value: "🛏️" },
    { label: "PINE_TREE", value: "🌲" },
    { label: "POPCORN", value: "🍿" },
    { label: "RADAR", value: "📡" },
    { label: "ROBOT", value: "🤖" },
    { label: "RUBY", value: "💍" },
    { label: "SANDWICH", value: "🥪" },
    { label: "SATURN", value: "🪐" },
    { label: "SEA_SHELL", value: "🐚" },
    { label: "SHARK", value: "🦈" },
    { label: "SHOPPING_BAG", value: "🛍️" },
    { label: "SKULL", value: "💀" },
    { label: "SNORKEL", value: "🤿" },
    { label: "SPIDER", value: "🕷️" },
    { label: "SQUID", value: "🦑" },
    { label: "STETHOSCOPE", value: "🩺" },
    { label: "SWIMMING_POOL", value: "🏊" },
    { label: "SYRINGE", value: "💉" },
    { label: "TOOLBOX", value: "🧰" },
    { label: "TRAFFIC_LIGHT", value: "🚦" },
    { label: "TRAIN", value: "🚆" },
    { label: "TREE2", value: "🌴" },
    { label: "TRUCK", value: "🚚" },
    { label: "VAMPIRE", value: "🧛" },
    { label: "WATERMELON_SLICE", value: "🍉" },
    { label: "ABACUS", value: "🧮" },
    { label: "ALIEN", value: "👽" },
    { label: "AMPHORA", value: "🏺" },
    { label: "ANCHOR", value: "⚓" },
    { label: "ANT", value: "🐜" },
    { label: "ASTRONAUT", value: "👨‍🚀" },
    { label: "ATOM", value: "⚛️" },
    { label: "AXE", value: "🪓" },
    { label: "BACKPACK", value: "🎒" },
    { label: "BADMINTON", value: "🏸" },
    { label: "BAGEL", value: "🥯" },
    { label: "BAGUETTE", value: "🥖" },
    { label: "BAMBOO", value: "🎍" },
    { label: "BANJO", value: "🪕" },
    { label: "BASKET", value: "🧺" },
    { label: "BAT", value: "🦇" },
    { label: "BEAVER", value: "🦫" },
    { label: "BENTO", value: "🍱" },
    { label: "BIOHAZARD", value: "☣️" },
    { label: "BLUEBERRY", value: "🫐" },
    { label: "BOAR", value: "🐗" },
    { label: "BOBSLED", value: "🛷" },
    { label: "BONE", value: "🦴" },
    { label: "BONSAI", value: "🎍" },
    { label: "BOOMERANG", value: "🪃" },
    { label: "BRAIN", value: "🧠" },
    { label: "BREAD", value: "🍞" },
    { label: "BRICK", value: "🧱" },
    { label: "BRIDGE", value: "🌉" },
    { label: "BROCCOLI", value: "🥦" },
    { label: "BROOM_AND_BALL", value: "🧹🏀" },
    { label: "BUBBLE_TEA", value: "🧋" },
    { label: "BUCKET", value: "🪣" },
    { label: "BUTTERFLY", value: "🦋" },
    { label: "CACTUS_IN_POT", value: "🌵🪴" },
    { label: "CALENDAR", value: "📅" },
    { label: "CAMEL", value: "🐪" },
    { label: "CANOE", value: "🛶" },
    { label: "CASTLE", value: "🏰" },
    { label: "CHAINSAW", value: "🪚" },
    { label: "CHAIR", value: "🪑" },
    { label: "CHESTNUT", value: "🌰" },
    { label: "CHIPMUNK", value: "🐿️" },
    { label: "CHOCOLATE_BAR", value: "🍫" },
    { label: "CHOPSTICKS", value: "🥢" },
    { label: "CLAMP", value: "🗜️" },
    { label: "CLOVER", value: "🍀" },
    { label: "COCONUT", value: "🥥" },
    { label: "COFFIN", value: "⚰️" },
    { label: "COIN", value: "🪙" },
    { label: "COMET", value: "☄️" },
    { label: "COMPASS", value: "🧭" },
    { label: "CORAL", value: "🪸" },
    { label: "CORN", value: "🌽" },
    { label: "CRAYON", value: "🖍️" },
    { label: "CRICKET", value: "🦗" },
    { label: "CROCODILE", value: "🐊" },
    { label: "CROISSANT", value: "🥐" },
    { label: "CRYSTAL_BALL", value: "🔮" },
    { label: "CUCUMBER", value: "🥒" },
    { label: "CUPID", value: "💘" },
    { label: "CURLING_STONE", value: "🥌" },
    { label: "CYCLONE", value: "🌀" },
    { label: "DANGO", value: "🍡" },
    { label: "DART", value: "🎯" },
    { label: "DEER", value: "🦌" },
    { label: "DESKTOP", value: "🖥️" },
    { label: "DICE", value: "🎲" },
    { label: "DINOSAUR", value: "🦕" },
    { label: "DIVIDER", value: "〰️" },
    { label: "DNA", value: "🧬" },
    { label: "DONUT", value: "🍩" },
    { label: "DOVE", value: "🕊️" },
    { label: "DRAGON", value: "🐉" },
    { label: "DRILL", value: "🛠️" },
    { label: "DROPLET", value: "💧" },
    { label: "DUCK", value: "🦆" },
    { label: "DUMPLING", value: "🥟" },
    { label: "EAR", value: "👂" },
    { label: "EGGPLANT", value: "🍆" },
    { label: "ELF", value: "🧝" },
    { label: "EVERGREEN", value: "🌲" },
    { label: "FAIRY", value: "🧚" },
    { label: "FALLEN_LEAF", value: "🍂" },
    { label: "FEATHER", value: "🪶" },
    { label: "FERRIS_WHEEL", value: "🎡" },
    { label: "FIRE_EXTINGUISHER", value: "🧯" },
    { label: "FIRECRACKER", value: "🧨" },
    { label: "FISHING_POLE", value: "🎣" },
    { label: "FLEUR_DE_LIS", value: "⚜️" },
    { label: "FLYING_DISC", value: "🥏" },
    { label: "FLYING_SAUCER", value: "🛸" },
    { label: "FOG", value: "🌫️" },
    { label: "FONDUE", value: "🫕" },
    { label: "FOOTPRINTS", value: "👣" },
    { label: "FOUNTAIN", value: "⛲" },
    { label: "FOX", value: "🦊" },
    { label: "FROG", value: "🐸" },
    { label: "GARLIC", value: "🧄" },
    { label: "GENIE", value: "🧞" },
    { label: "GERM", value: "🦠" },
    { label: "GHOST", value: "👻" },
    { label: "GIRAFFE", value: "🦒" },
    { label: "GLOVES", value: "🧤" },
    { label: "GOAT", value: "🐐" },
    { label: "GORILLA", value: "🦍" },
    { label: "GRAPES", value: "🍇" },
    { label: "GRASSHOPPER", value: "🦗" },
    { label: "HAMSA", value: "🧿" },
    { label: "HARMONICA", value: "🎹" },
    { label: "HEADSTONE", value: "🪦" },
    { label: "HEDGEHOG", value: "🦔" },
    { label: "HERB", value: "🌿" },
    { label: "HIBISCUS", value: "🌺" },
    { label: "HIPPOPOTAMUS", value: "🦛" },
    { label: "HOOK", value: "🪝" },
    { label: "HOURGLASS_DONE", value: "⌛" },
    { label: "IGLOO", value: "�iglq" },
    { label: "INFINITY", value: "♾️" },
    { label: "JELLYFISH", value: "🪼" },
    { label: "JIGSAW", value: "🧩" },
    { label: "JOYSTICK", value: "🕹️" },
    { label: "KANGAROO", value: "🦘" },
    { label: "KIWI", value: "🥝" },
    { label: "KNOT", value: "🪢" },
    { label: "KOALA", value: "🐨" },
    { label: "LABCOAT", value: "🥼" },
    { label: "LADDER", value: "🪜" },
    { label: "LADYBUG", value: "🐞" },
    { label: "LASSO", value: "🪃" },
    { label: "LEMON", value: "🍋" },
    { label: "LEOPARD", value: "🐆" },
    { label: "LEVITATE", value: "🕴️" },
    { label: "LIGHT_BULB", value: "💡" },
    { label: "LIZARD", value: "🦎" },
    { label: "LLAMA", value: "🦙" },
    { label: "LOBSTER", value: "🦞" },
    { label: "LOLLIPOP", value: "🍭" },
    { label: "LOTUS", value: "🪷" },
    { label: "LUGGAGE", value: "🧳" },
    { label: "LUNGS", value: "🫁" },
    { label: "MAGE", value: "🧙" },
    { label: "MANGO", value: "🥭" },
    { label: "MANTIS", value: "🦗" },
    { label: "MICROBE", value: "🦠" },
    { label: "MIRROR", value: "🪞" },
    { label: "MOAI", value: "🗿" },
    { label: "MOLE", value: "🐀" },
    { label: "MONKEY", value: "🐒" },
    { label: "MOSQUITO", value: "🦟" },
    { label: "MOTOR_SCOOTER", value: "🛵" },
    { label: "MOTORCYCLE", value: "🏍️" },
    { label: "MOUNTAIN_CABLEWAY", value: "🚠" },
    { label: "NAZAR_AMULET", value: "🧿" },
    { label: "NECKTIE", value: "👔" },
    { label: "NESTING_DOLLS", value: "🪆" },
    { label: "NINJA", value: "🥷" },
    { label: "ONION", value: "🧅" },
    { label: "ORANGUTAN", value: "🦧" },
    { label: "OTTER", value: "🦦" },
    { label: "OYSTER", value: "🦪" },
    { label: "PACKAGE", value: "📦" },
    { label: "PAINTBRUSH", value: "🖌️" },
    { label: "PALM_TREE", value: "🌴" },
    { label: "PANCAKES", value: "🥞" },
    { label: "PAPERCLIP", value: "📎" },
    { label: "PARROT", value: "🦜" },
    { label: "PEACH", value: "🍑" },
    { label: "PEACOCK", value: "🦚" },
    { label: "PEANUTS", value: "🥜" },
    { label: "PEARL", value: "🫠" },
    { label: "PEAR", value: "🍐" },
    { label: "PENCIL_AND_PAPER", value: "📝" },
    { label: "PEPPER", value: "🌶️" },
    { label: "PETRI_DISH", value: "🧫" },
    { label: "PICKAXE", value: "⛏️" },
    { label: "PIEZO", value: "🔊" },
    { label: "PIGEON", value: "🕊️" },
    { label: "PILL", value: "💊" },
    { label: "PINATA", value: "🪅" },
    { label: "PINCH", value: "🤏" },
    { label: "PINEAPPLE_SLICE", value: "🍍" },
    { label: "PING_PONG", value: "🏓" },
    { label: "PIRATE", value: "🏴‍☠️" },
    { label: "PLANT_IN_POT", value: "🪴" },
    { label: "PLATYPUS", value: "🦡" },
    { label: "PLUNGER", value: "🪠" },
    { label: "POPCORN_BUCKET", value: "🍿" },
    { label: "POTATO", value: "🥔" },
    { label: "PRETZEL", value: "🥨" },
    { label: "PROTOZOA", value: "🦠" },
    { label: "PUMPKIN", value: "🎃" },
    { label: "PUSHPIN", value: "📌" },
    { label: "RABBIT", value: "🐰" },
    { label: "RACCOON", value: "🦝" },
    { label: "RADIO", value: "📻" },
    { label: "RAIL_CAR", value: "🚃" },
    { label: "RAINBOW_FLAG", value: "🏳️‍🌈" },
    { label: "RAMEN", value: "🍜" },
    { label: "RAT", value: "🐀" },
    { label: "RECEIPT", value: "🧾" },
    { label: "RHINOCEROS", value: "🦏" },
    { label: "RICE", value: "🍚" },
    { label: "RING_BUOY", value: "🛟" },
    { label: "ROCK", value: "🪨" },
    { label: "ROOSTER", value: "🐓" },
    { label: "SAFETY_PIN", value: "🧷" },
    { label: "SAFETY_VEST", value: "🦺" },
    { label: "SALT", value: "🧂" },
    { label: "SANDAL", value: "👡" },
    { label: "SATELLITE_ANTENNA", value: "📡" },
    { label: "SAUROPOD", value: "🦕" },
    { label: "SCALES", value: "⚖️" },
    { label: "SCARF", value: "🧣" },
    { label: "SCORPION", value: "🦂" },
    { label: "SCREWDRIVER", value: "🪛" },
    { label: "SEAL", value: "🦭" },
    { label: "SEEDLING", value: "🌱" },
    { label: "SHAMROCK", value: "☘️" },
    { label: "SHRIMP", value: "🦐" },
    { label: "SKUNK", value: "🦨" },
    { label: "SLED", value: "🛷" },
    { label: "SLOTH", value: "🦥" },
    { label: "SNAIL", value: "🐌" },
    { label: "SNAKE", value: "🐍" },
    { label: "SNOWBOARDER", value: "🏂" },
    { label: "SNOWMAN", value: "☃️" },
    { label: "SOAP", value: "🧼" },
    { label: "SOCCER_BALL", value: "⚽" },
    { label: "SOCKS", value: "🧦" },
    { label: "SOFTBALL", value: "🥎" },
    { label: "SPADE", value: "♠️" },
    { label: "SPAGHETTI", value: "🍝" },
    { label: "SPARKLES", value: "✨" },
    { label: "SPARKLER", value: "🎇" },
    { label: "SPARKLING_HEART", value: "💖" },
    { label: "SPOON", value: "🥄" },
    { label: "SPORTS_MEDAL", value: "🏅" },
    { label: "STACKED_BOOKS", value: "📚" },
    { label: "STAPLER", value: "🗄️" },
    { label: "STOPWATCH", value: "⏱️" },
    { label: "STORM", value: "🌩️" },
    { label: "STRAWBERRY", value: "🍓" },
    { label: "SUNFLOWER", value: "🌻" },
    { label: "SUSHI", value: "🍣" },
    { label: "SWAN", value: "🦢" },
    { label: "SWEAT_DROPLETS", value: "💦" },
    { label: "T_REX", value: "🦖" },
    { label: "TACO", value: "🌮" },
    { label: "TAKEOUT_BOX", value: "🥡" },
    { label: "TAMALE", value: "🫔" },
    { label: "TANGERINE", value: "🍊" },
    { label: "TAXI", value: "🚕" },
    { label: "TEAPOT", value: "🫖" },
    { label: "TEDDY_BEAR", value: "🧸" },
    { label: "TENNIS", value: "🎾" },
    { label: "THERMOMETER", value: "🌡️" },
    { label: "THONG_SANDAL", value: "🩴" },
    { label: "THREAD", value: "🧵" },
    { label: "TICKET", value: "🎟️" },
    { label: "TIGER", value: "🐯" },
    { label: "TOILET", value: "🚽" },
    { label: "TOMATO", value: "🍅" },
    { label: "TONGUE", value: "👅" },
    { label: "TRACTOR", value: "🚜" },
    { label: "TROLLEYBUS", value: "🚎" },
    { label: "TSHIRT", value: "👕" },
    { label: "TULIP", value: "🌷" },
    { label: "TURKEY", value: "🦃" },
    { label: "TURTLE", value: "🐢" },
    { label: "UNICORN", value: "🦄" },
    { label: "VIOLIN", value: "🎻" },
    { label: "VOLLEYBALL", value: "🏐" },
    { label: "WAFFLE", value: "🧇" },
    { label: "WASTEBASKET", value: "🗑️" },
    { label: "WATCH", value: "⌚" },
    { label: "WATER_BUFFALO", value: "🐃" },
    { label: "WATER_POLO", value: "🤽" },
    { label: "WATER_WAVE", value: "🌊" },
    { label: "WATERFALL", value: "🧗‍♀️" },
    { label: "WINDMILL", value: "🏰" },
    { label: "WINDOW", value: "🪟" },
    { label: "WINE_GLASS", value: "🍷" },
    { label: "WOOD", value: "🪵" },
    { label: "WORM", value: "🪱" },
    { label: "WREATH", value: "🎍" },
    { label: "WRITING_HAND", value: "✍️" },
    { label: "X_RAY", value: "🦴" },
    { label: "YARN", value: "🧶" },
    { label: "YO_YO", value: "🪀" },
    { label: "ZEBRA", value: "🦓" },
    { label: "ZOMBIE", value: "🧟" }
  ];
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  return `<select class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full p-1 focus:outline-none focus:ring focus:ring-yellow-400">${each(icons, (icon) => {
    return `<option${add_attribute("value", icon.value, 0)} class="bg-gray-800 text-yellow-200 text-[10px] p-1">${escape(icon.value)} ${escape(icon.label)} </option>`;
  })}</select>`;
});
const LinesDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { extra } = $$props;
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  return `<div class="flex flex-col w-full space-y-2"><div class="border-b border-gray-700"><div class="px-2 text-[10px] text-yellow-200 text-left" data-svelte-h="svelte-rkhdmx">Shapes</div> <div class="border border-gray-700 px-2 py-1"><select class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full focus:outline-none focus:ring focus:ring-yellow-400"><option value="arrowLeft" data-svelte-h="svelte-vkwnya">Arrow Left</option><option value="arrowRight" data-svelte-h="svelte-b54tus">Arrow Right</option><option value="arrowUp" data-svelte-h="svelte-13evpfa">Arrow Up</option><option value="arrowDown" data-svelte-h="svelte-op3uvi">Arrow Down</option><option value="pentagon" data-svelte-h="svelte-k90dy6">Pentagon</option><option value="hexagon" data-svelte-h="svelte-22zgru">Hexagon</option><option value="equilateralTriangle" data-svelte-h="svelte-zldim2">Equilateral Triangle</option><option value="rightTriangle" data-svelte-h="svelte-1hn956o">Right Triangle</option><option value="isoscelesUp" data-svelte-h="svelte-17lnlmf">Isosceles Triangle (Up)</option><option value="isoscelesDown" data-svelte-h="svelte-1vshl63">Isosceles Triangle (Down)</option><option value="rightTriangleLeft" data-svelte-h="svelte-6iuafz">Right-Angled Triangle (Left)</option><option value="rightTriangleRight" data-svelte-h="svelte-atblhh">Right-Angled Triangle (Right)</option><option value="scaleneTriangle" data-svelte-h="svelte-1pq74k2">Scalene Triangle</option><option value="sword" data-svelte-h="svelte-1mqi5fs">Sword</option><option value="shield" data-svelte-h="svelte-prxbly">Shield</option><option value="star" data-svelte-h="svelte-fvc1gu">Star</option><option value="heart" data-svelte-h="svelte-12wxiju">Heart</option><option value="lightning" data-svelte-h="svelte-qfzdwz">Lightning Bolt</option><option value="crown" data-svelte-h="svelte-vruejk">Crown</option></select></div></div></div>`;
});
const DialogueBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { dialogueBox } = $$props;
  const componentMap = {
    Number: InputNumber,
    Float: InputFloat,
    TextArea: InputTextArea,
    Text: InputText,
    Boolean: InputCheckbox,
    Color: InputColor,
    FontFamily: FontFamilyDD
  };
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.dialogueBox === void 0 && $$bindings.dialogueBox && dialogueBox !== void 0) $$bindings.dialogueBox(dialogueBox);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${item ? `<div class="flex flex-col overflow-y-auto max-h-[70vh] rounded-lg shadow mx-2 my-2">    ${item.itemExtra.type === "sprite" ? `<div><div>${validate_component(SpriteDD, "SpriteDD").$$render(
      $$result,
      { extra: item.itemExtra },
      {
        extra: ($$value) => {
          item.itemExtra = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : ``} ${item.itemExtra.type === "icon" ? `<div><div>${validate_component(IconDD, "IconDD").$$render(
      $$result,
      { extra: item.itemExtra },
      {
        extra: ($$value) => {
          item.itemExtra = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : ``} ${item.itemExtra.type === "lines" ? `<div><div>${validate_component(LinesDD, "LinesDD").$$render(
      $$result,
      { extra: item.itemExtra },
      {
        extra: ($$value) => {
          item.itemExtra = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : ``}  <div class="border-b border-gray-700">${each(dialogueBox, (dialogueItem) => {
      return `${componentMap[dialogueItem.type] ? `<div class="border border-gray-700 px-2 text-[10px] text-yellow-200 text-left">${escape(dialogueItem.name)}</div> <div class="border border-gray-700 px-2 py-1">${validate_component(componentMap[dialogueItem.type] || missing_component, "svelte:component").$$render(
        $$result,
        {
          config: dialogueItem.config || {},
          value: item.itemExtra[dialogueItem.name]
        },
        {
          value: ($$value) => {
            item.itemExtra[dialogueItem.name] = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>` : ``}`;
    })}</div></div>` : `<h6 class="text-sm text-gray-400" data-svelte-h="svelte-14jc0mw">No item selected</h6>`}`;
  } while (!$$settled);
  return $$rendered;
});
const CanvasCommand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { extra } = $$props;
  if ($$props.extra === void 0 && $$bindings.extra && extra !== void 0) $$bindings.extra(extra);
  return `<div class="flex w-full text-white rounded-md justify-center bg-stone-700 p-1 m-1 border-2 border-white"><div class="flex justify-end gap-1"><button class="p-1 m-1 text-xs rounded-md hover:bg-slate-700" data-svelte-h="svelte-eoa4in">Canvas</button></div></div> ${`<div class="flex flex-col w-full"><table class="border-collapse border-2 border-white"><tr><td class="border border-white p-1" data-svelte-h="svelte-bpap4a">Templates</td> <td class="border border-white p-1"><select class="bg-gray-900 text-white p-1"><option value="" data-svelte-h="svelte-1vbnolo">None</option><option value="blue" data-svelte-h="svelte-jwqbke">blue</option><option value="green" data-svelte-h="svelte-1ogzi18">green</option><option value="gold" data-svelte-h="svelte-lbisga">gold</option><option value="red" data-svelte-h="svelte-1pm3sm0">red</option><option value="brown" data-svelte-h="svelte-1ef8ubu">brown</option><option value="wood" data-svelte-h="svelte-b0fwsy">wood</option><option value="starryEvening" data-svelte-h="svelte-1qcz4gw">starryEvening</option><option value="coastalHarmony" data-svelte-h="svelte-167ffte">coastalHarmony</option><option value="sereneForest" data-svelte-h="svelte-1mun5ki">sereneForest</option><option value="horizonGlow" data-svelte-h="svelte-t0mclq">horizonGlow</option><option value="tranquilGarden" data-svelte-h="svelte-z61wl2">tranquilGarden</option></select></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-673slv">Bg Img</td> <td class="border border-white p-1"><select class="bg-gray-900 text-white p-1"><option value="null" data-svelte-h="svelte-1rt94z7">None</option><option value="system_images/bg_images/paper01.jpg" data-svelte-h="svelte-1rvk0vj">paper01</option><option value="system_images/bg_images/drywall.jpg" data-svelte-h="svelte-1a2i6w7">drywall</option><option value="system_images/bg_images/black_board.jpg" data-svelte-h="svelte-10nlgnf">black-board</option><option value="system_images/bg_images/black_board_mat.jpg" data-svelte-h="svelte-1mz80y3">black-board-mat</option><option value="system_images/bg_images/wood.jpg" data-svelte-h="svelte-36sv0v">wood</option><option value="system_images/bg_images/tinted.jpg" data-svelte-h="svelte-f19ssj">tinted</option><option value="system_images/bg_images/black_mat.jpg" data-svelte-h="svelte-an1013">Black-Mat</option><option value="system_images/bg_images/white_mat.jpg" data-svelte-h="svelte-1o2v1h7">White-Mat</option><option value="system_images/bg_images/granite.jpg" data-svelte-h="svelte-y6o6gl">granite</option><option value="system_images/bg_images/gray_marble.jpg" data-svelte-h="svelte-p7dv0p">gray-marble</option><option value="system_images/bg_images/brown_stone.jpg" data-svelte-h="svelte-1vt06uf">brown-stone</option><option value="system_images/bg_images/gray_stone.jpg" data-svelte-h="svelte-w2ozih">gray-stone</option><option value="system_images/bg_images/design_old.jpg" data-svelte-h="svelte-1xf0x3p">design-old</option><option value="system_images/bg_images/blue_waves.jpg" data-svelte-h="svelte-1s0tlxp">blue-waves</option><option value="system_images/bg_images/wall.jpg" data-svelte-h="svelte-5yopf">wall</option></select></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-1jrr0ck">Opacity</td> <td class="border border-white p-1"><input type="number" min="0" max="1" step="0.1" class="bg-gray-900 text-white p-1"${add_attribute("value", extra.bgGlobalAlpha, 0)}></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-dw29mj">Bg Color</td> <td class="border border-white p-1"><input type="color" class="bg-gray-900 text-white p-1"${add_attribute("value", extra.backgroundColor, 0)}></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-18m15gm">Show Grid</td> <td class="border border-white p-1"><input type="checkbox" class="bg-gray-900 text-white p-1"${add_attribute("checked", extra.showGrid, 1)}></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-up8327">Cell Width</td> <td class="border border-white p-1"><input type="number" min="1" max="1000" class="bg-gray-900 text-white p-1"${add_attribute("value", extra.cellWidth, 0)}></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-zchfwm">Cell Height</td> <td class="border border-white p-1"><input type="number" min="1" max="1000" class="bg-gray-900 text-white p-1"${add_attribute("value", extra.cellHeight, 0)}></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-b3a1ih">Grid Line Width</td> <td class="border border-white p-1"><input type="number" min="1" max="1000" class="bg-gray-900 text-white p-1"${add_attribute("value", extra.gridLineWidth, 0)}></td></tr> <tr><td class="border border-white p-1" data-svelte-h="svelte-1567vtc">Grid Line Color</td> <td class="border border-white p-1"><input type="color" class="bg-gray-900 text-white p-1"${add_attribute("value", extra.gridLineColor, 0)}></td></tr></table> <br></div>`}`;
});
function itemsToitemObjects(items, assets) {
  let itemObjects = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemObj = itemToObject(item, assets);
    if (itemObj) {
      itemObjects.push(itemObj);
    }
  }
  return itemObjects;
}
let interval = null;
const CanvasEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedItemIndexStore, $$unsubscribe_selectedItemIndexStore;
  $$unsubscribe_selectedItemIndexStore = subscribe(selectedItemIndexStore, (value) => $selectedItemIndexStore = value);
  let { items } = $$props;
  let { slideExtra } = $$props;
  let { assets } = $$props;
  let { showAddToolbar = true } = $$props;
  const ItemsMap2 = SlideObject.Canvas.ItemsMap;
  let selectedItem = null;
  let showCanvasFlag = false;
  let currentMouseX = 0;
  let currentMouseY = 0;
  onDestroy(async () => {
    clearInterval(interval);
  });
  function getDialogueBox(itemType) {
    const staticItem = SlideObject.Canvas.ItemsMap.get(itemType);
    return staticItem.dialogueBox();
  }
  function addNewItem(itemType) {
    const newItemExtra = ItemsMap2.get(itemType).data();
    const firstSegment = uuid().split("-")[0];
    const name = newItemExtra.type + "_" + firstSegment;
    const newItem = SlideObject.getNewItem(newItemExtra, name);
    items.unshift(newItem);
    items = [...items];
    selectedItemIndexStore.set(0);
    selectedItem = new SelectedItem(getSelectedItemObject());
  }
  function eventMouseDown(e, ctx) {
    if (selectedItem) {
      const { x, y: y2 } = getMouseData(e);
      selectedItem.mouseDown(x, y2);
    }
  }
  function eventMouseMove(e, ctx) {
    const { x, y: y2 } = getMouseData(e);
    currentMouseX = x.toFixed(0);
    currentMouseY = y2.toFixed(0);
    if (selectedItem) {
      selectedItem.mouseMove(x, y2);
    }
  }
  function eventMouseUp() {
    if (selectedItem) {
      selectedItem.mouseUp();
      items = [...items];
    }
  }
  async function eventDblClick(e, ctx) {
    await checkHit(e, ctx);
  }
  async function checkHit(e, ctx) {
    const { x, y: y2 } = getMouseData(e);
    for (let i = 0; i < items.length; i++) {
      const itemObject = itemToObject(items[i], assets);
      if (itemObject && itemObject.isHit(x, y2, ctx)) {
        setSelectedItemIndex(i);
        return;
      }
    }
    selectedItemIndexStore.set(-1);
    selectedItem = null;
  }
  function getSelectedItemObject() {
    const currentIndex = $selectedItemIndexStore;
    if (currentIndex === -1) return null;
    const itemData = items[currentIndex];
    return itemToObject(itemData, assets);
  }
  function setSelectedItemIndex(index) {
    selectedItemIndexStore.set(index);
    selectedItem = new SelectedItem(getSelectedItemObject());
  }
  function postDraw(ctx) {
    const selectedObj = getSelectedItemObject();
    if (selectedObj) {
      const selected = new SelectedItem(selectedObj);
      selected.drawHandles(ctx);
    }
  }
  function showCanvas() {
    showCanvasFlag = !showCanvasFlag;
  }
  function clone() {
    if (selectedItem) {
      const currentIndex = $selectedItemIndexStore;
      const clonedItem = JSON.parse(JSON.stringify(items[currentIndex]));
      delete clonedItem._id;
      clonedItem.itemExtra.x = (clonedItem.itemExtra.x || 0) + 20;
      clonedItem.itemExtra.y = (clonedItem.itemExtra.y || 0) + 20;
      items.splice(currentIndex, 0, clonedItem);
      items = [...items];
    }
  }
  function deleteFn() {
    const currentIndex = $selectedItemIndexStore;
    if (currentIndex !== -1) {
      items.splice(currentIndex, 1);
      items = [...items];
      selectedItemIndexStore.set(-1);
      selectedItem = null;
    }
  }
  function logSlideLocal() {
    console.log("items", items);
    console.log("slideExtra", slideExtra);
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.slideExtra === void 0 && $$bindings.slideExtra && slideExtra !== void 0) $$bindings.slideExtra(slideExtra);
  if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);
  if ($$props.showAddToolbar === void 0 && $$bindings.showAddToolbar && showAddToolbar !== void 0) $$bindings.showAddToolbar(showAddToolbar);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if (items.length > 0) {
          itemsToitemObjects(items, assets);
        } else {
          selectedItemIndexStore.set(-1);
        }
      }
    }
    $$rendered = `${items ? `${showAddToolbar ? `<div class="flex w-full p-0 m-0">${validate_component(AddToolbar, "AddToolbar").$$render(
      $$result,
      {
        icons: assets.icons,
        addNewItem,
        clone,
        deleteFn,
        logSlideLocal,
        showCanvas
      },
      {},
      {}
    )}</div>` : ``} <div class="flex w-full p-0 m-0 bg-stone-900 text-white p-2 gap-1"><div class="mx-1">${validate_component(CanvasPlayer, "CanvasPlayer").$$render(
      $$result,
      {
        items,
        slideExtra,
        assets,
        postDraw,
        eventMouseDown,
        eventMouseUp,
        eventDblClick,
        eventMouseMove
      },
      {},
      {}
    )} <div class="bg-gray-900 text-[10px] text-yellow-600"><span class="bg-stone-700 rounded-md p-1">${escape(`x: ${currentMouseX} y: ${currentMouseY}`)}</span> <span class="bg-stone-700 rounded-md p-1">${escape(`Total Items = ${items.length}`)}</span> <span class="bg-stone-700 rounded-md p-1">${escape(`Selected Index = ${$selectedItemIndexStore === -1 ? "null" : $selectedItemIndexStore}`)}</span> ${$selectedItemIndexStore != -1 ? `<span class="bg-stone-700 rounded-md p-1">${escape(`Selected Item = ${items[$selectedItemIndexStore].itemExtra.name}`)}</span>` : `<span class="bg-stone-700 rounded-md p-1">${escape(`Selected Item = Null`)}</span>`}</div></div> <div class="w-3/12 text-center">${showCanvasFlag ? `${validate_component(CanvasCommand, "CanvasCommand").$$render($$result, { extra: slideExtra }, {}, {})}` : `${validate_component(SelectItemMenu, "SelectItemMenu").$$render(
      $$result,
      {
        selectedItemIndex: $selectedItemIndexStore,
        setSelectedItemIndex,
        items
      },
      {
        items: ($$value) => {
          items = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${selectedItem ? `${validate_component(DialogueBox, "DialogueBox").$$render(
      $$result,
      {
        dialogueBox: getDialogueBox(items[$selectedItemIndexStore].itemExtra.type),
        item: items[$selectedItemIndexStore]
      },
      {
        item: ($$value) => {
          items[$selectedItemIndexStore] = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedItemIndexStore();
  return $$rendered;
});
const UnknownslideTypePlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1ajiqwf">UnknownslideType</h1>`;
});
const UnknownslideTypeEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1ajiqwf">UnknownslideType</h1>`;
});
const itemsStore = writable([]);
const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayMode = false } = $$props;
  let output;
  let latex;
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0) $$bindings.displayMode(displayMode);
  return ` <span style="display: none;"${add_attribute("this", latex, 0)}>${slots.default ? slots.default({}) : ``}</span>  <span${add_attribute("this", output, 0)}></span>`;
});
const CodeTxt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eq } = $$props;
  if ($$props.eq === void 0 && $$bindings.eq && eq !== void 0) $$bindings.eq(eq);
  return `<svelt:head data-svelte-h="svelte-12ul5rv"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous"></svelt:head>  <div class="flex justify-center ">${eq.itemExtra.type == void 0 || eq.itemExtra.type == "code" || eq.itemExtra.type == "" ? `${validate_component(Katex, "Katex").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(eq.itemExtra.code)}`;
    }
  })}` : ``} ${eq.itemExtra.type == "txt" || eq.itemExtra.type == "text" ? `<p>${escape(eq.itemExtra.code)}</p>` : ``} ${eq.itemExtra.type == "hdg" || eq.itemExtra.type == "heading" ? `<h1 class="text-yellow-400">${escape(eq.itemExtra.code)}</h1>` : ``} ${eq.itemExtra.type == "html" ? `<div><!-- HTML_TAG_START -->${eq.itemExtra.code}<!-- HTML_TAG_END --></div>` : ``}</div>`;
});
const css = {
  code: ".focused.svelte-578pb{background-color:rgb(2, 63, 2);color:white;border:2px solid red;padding:5px;font-size:1.5em;font-weight:bold;line-height:1.5em;border-radius:5px;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.2);transition:all 0.3s ease}.nonFocused.svelte-578pb{background-color:grey;padding:2px;margin:2px;font-size:1.25em;transition:all 0.3s ease}",
  map: `{"version":3,"file":"EqPanel.svelte","sources":["EqPanel.svelte"],"sourcesContent":["<script>\\n  // edited on 17-Nov-2024\\n  import { itemsStore } from \\"./store\\";\\n  import CodeTxt from './CodeTxt.svelte';\\n  \\n  // export let items;\\n  export let currentTime;\\n  export let setPulse;\\n\\n  // Reactive statement to update selected states\\n  $: {\\n    currentTime;\\n    // Create a new array with updated selected states\\n    const updatedItems = $itemsStore.map(item => ({\\n      ...item,\\n      selected: currentTime >= item.itemExtra.startTime && \\n                currentTime < item.itemExtra.endTime\\n    }));\\n    \\n    // Update the store with the new array\\n    itemsStore.set(updatedItems);\\n  }\\n<\/script>\\n  \\n<div class=\\"flex flex-col space-y-2 w-full\\">\\n  {#each $itemsStore as item, index}\\n    <button\\n      class=\\"flex w-full items-center\\"\\n      on:click={() => setPulse(item.itemExtra.startTime)}\\n    >\\n      <div class=\\"m-1 p-1 rounded-2xl text-sm bg-stone-600\\">\\n        {index + 1}\\n      </div>\\n      \\n      <div\\n        class={item.selected ? 'focused w-full text-center' : 'nonFocused w-full text-center'}\\n      >\\n        <CodeTxt eq={item} />\\n      </div>\\n    </button>\\n  {/each}\\n</div>\\n\\n<div class=\\"h-32\\"></div>\\n\\n<style>\\n.focused {\\n  background-color: rgb(2, 63, 2);\\n  color: white;\\n  border: 2px solid red;\\n  padding: 5px;\\n  font-size: 1.5em;\\n  font-weight: bold;\\n  line-height: 1.5em;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\\n  transition: all 0.3s ease;\\n}\\n\\n.nonFocused {\\n  background-color: grey;\\n  padding: 2px;\\n  margin: 2px;\\n  font-size: 1.25em;\\n  transition: all 0.3s ease;\\n}\\n</style>"],"names":[],"mappings":"AA8CA,qBAAS,CACP,gBAAgB,CAAE,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAC/B,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,GAAG,CACrB,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,KAAK,CAClB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC1C,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACvB,CAEA,wBAAY,CACV,gBAAgB,CAAE,IAAI,CACtB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,GAAG,CACX,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACvB"}`
};
const EqPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $itemsStore, $$unsubscribe_itemsStore;
  $$unsubscribe_itemsStore = subscribe(itemsStore, (value) => $itemsStore = value);
  let { currentTime } = $$props;
  let { setPulse } = $$props;
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  if ($$props.setPulse === void 0 && $$bindings.setPulse && setPulse !== void 0) $$bindings.setPulse(setPulse);
  $$result.css.add(css);
  {
    {
      const updatedItems = $itemsStore.map((item) => ({
        ...item,
        selected: currentTime >= item.itemExtra.startTime && currentTime < item.itemExtra.endTime
      }));
      itemsStore.set(updatedItems);
    }
  }
  $$unsubscribe_itemsStore();
  return `<div class="flex flex-col space-y-2 w-full">${each($itemsStore, (item, index) => {
    return `<button class="flex w-full items-center"><div class="m-1 p-1 rounded-2xl text-sm bg-stone-600">${escape(index + 1)}</div> <div class="${escape(
      null_to_empty(item.selected ? "focused w-full text-center" : "nonFocused w-full text-center"),
      true
    ) + " svelte-578pb"}">${validate_component(CodeTxt, "CodeTxt").$$render($$result, { eq: item }, {}, {})}</div> </button>`;
  })}</div> <div class="h-32"></div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  let parsedData = [];
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  {
    {
      parsedData = JSON.parse(code);
    }
  }
  return `${parsedData.length > 0 ? `<table class="justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300">${each(parsedData, (row, rowIndex) => {
    return `<tr class="">${each(row, (cell, colIndex) => {
      return `<td class="border-2 border-gray-200 p-1"> ${escape(cell)}  </td>`;
    })} </tr>`;
  })}</table>` : ``}`;
});
const TableCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  let parsedData = [];
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  {
    {
      parsedData = JSON.parse(code);
    }
  }
  return `<svelt:head data-svelte-h="svelte-12ul5rv"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous"></svelt:head>  ${parsedData.length > 0 ? `<table class="justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300">${each(parsedData, (row, rowIndex) => {
    return `<tr class="">${each(row, (cell, colIndex) => {
      return `<td class="border-2 border-gray-200 p-1"> ${validate_component(Katex, "Katex").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(cell)}`;
        }
      })}  </td>`;
    })} </tr>`;
  })}</table>` : ``}`;
});
const ImgCodeTxt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eq } = $$props;
  if ($$props.eq === void 0 && $$bindings.eq && eq !== void 0) $$bindings.eq(eq);
  return `<div class="flex justify-center ">${eq.type == void 0 || eq.type == "txt" || eq.type == "text" ? `<p class="bg-stone-700 p-2 m-1 rounded-md">${escape(eq.code)}</p>` : ``} ${eq.type == "code" ? `<div class="bg-stone-900 p-2 m-1 rounded-md">${validate_component(Katex, "Katex").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(eq.code)}`;
    }
  })}</div>` : ``} ${eq.type == "img" || eq.type == "image" ? `<img${add_attribute("src", eq.code, 0)} alt="Not found">` : ``} ${eq.type == "table" || eq.type == "tbl" ? `${validate_component(Table, "Table").$$render($$result, { code: eq.code }, {}, {})}` : ``} ${eq.type == "tableCode" ? `${validate_component(TableCode, "TableCode").$$render($$result, { code: eq.code }, {}, {})}` : ``} ${eq.type == "heading" || eq.type == "hdg" ? `<div class="flex justify-center items-center w-full "><div${add_attribute("class", `inline-flex  justify-center bg-stone-700 text-white rounded-md p-2  px-8 m-2`, 0)}>${escape(eq.code)}</div></div>` : ``}</div>`;
});
const SidePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $itemsStore, $$unsubscribe_itemsStore;
  $$unsubscribe_itemsStore = subscribe(itemsStore, (value) => $itemsStore = value);
  let { currentTime } = $$props;
  let currentItem;
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  {
    {
      for (let i = 0; i < $itemsStore.length; i++) {
        const item = $itemsStore[i];
        if (currentTime >= item.itemExtra.startTime && currentTime < item.itemExtra.endTime) {
          currentItem = item;
          console.log("currentItem", currentItem);
        }
      }
    }
  }
  $$unsubscribe_itemsStore();
  return `<div class="justify-center sticky top-4 line-clamp-4 text-yellow-300">${currentItem ? `<div class="w-full rounded-md m-1 p-1 bg-stone-600 text-center">${currentItem.itemExtra.sp.length > 0 ? `${each(currentItem.itemExtra.sp, (eq) => {
    return `${validate_component(ImgCodeTxt, "ImgCodeTxt").$$render($$result, { eq }, {}, {})}`;
  })}` : ``}</div>` : ``}</div>`;
});
const EqPlayerCore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentTime } = $$props;
  let { setPulse } = $$props;
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  if ($$props.setPulse === void 0 && $$bindings.setPulse && setPulse !== void 0) $$bindings.setPulse(setPulse);
  return `<div class="bg-gray-800 w-full text-white min-h-screen p-0 m-0"><div class="flex px-2 rounded-md bg-gray-900"> <div class="w-8/12 min-h-screen max-h-screen p-2 m-0 overflow-x-auto">${validate_component(EqPanel, "EqPanel").$$render($$result, { setPulse, currentTime }, {}, {})}</div> <div class="w-4/12 min-h-screen p-2 m-0 mt-2 bg-yellow-950 text-yellow-300b">${validate_component(SidePanel, "SidePanel").$$render($$result, { currentTime }, {}, {})}</div></div></div>`;
});
const EqPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { slideExtra = [] } = $$props;
  let { currentTime = 0 } = $$props;
  let { setPulse = 0 } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.slideExtra === void 0 && $$bindings.slideExtra && slideExtra !== void 0) $$bindings.slideExtra(slideExtra);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  if ($$props.setPulse === void 0 && $$bindings.setPulse && setPulse !== void 0) $$bindings.setPulse(setPulse);
  {
    {
      itemsStore.set(items);
    }
  }
  return `${validate_component(EqPlayerCore, "EqPlayerCore").$$render($$result, { slideExtra, currentTime, setPulse }, {}, {})}`;
});
const TopToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { add } = $$props;
  if ($$props.add === void 0 && $$bindings.add && add !== void 0) $$bindings.add(add);
  return `<button class="bg-orange-700 px-2 rounded-md" data-svelte-h="svelte-1rqmeix">Add</button>`;
});
const AddTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { currentTime } = $$props;
  let { updateTimings } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  if ($$props.updateTimings === void 0 && $$bindings.updateTimings && updateTimings !== void 0) $$bindings.updateTimings(updateTimings);
  return `<div class="flex flex-col w-full bg-stone-700 p-0 m-0 rounded-md"> <input type="number" class="text-xs bg-gray-800 text-white"${add_attribute("value", item.itemExtra.startTime, 0)}> <div class="text-[14px]">Start:${escape(item.itemExtra.startTime)}</div> <div class="text-[14px]">End:${escape(item.itemExtra.endTime)}</div> <button class="bg-orange-800 text-xs p-0 m-1 rounded-md" data-svelte-h="svelte-7yggh">Set Time</button></div>`;
});
const EqTypeCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  return `<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md">${escape(item.itemExtra.code || "")}</textarea> <div class="bg-stone-700 w-5/12 p-0 m-0 rounded-md">${validate_component(Katex, "Katex").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(item.itemExtra.code)}`;
    }
  })}</div>`;
});
const EqTypeText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  return `<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md">${escape(item.itemExtra.code || "")}</textarea> <div class="bg-stone-600 w-5/12 p-0 m-0 rounded-md">${escape(item.itemExtra.code)}</div>`;
});
const EqTypeHdg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  return `<textarea class="bg-stone-700 w-5/12 p-1 m-0 rounded-md">${escape(item.itemExtra.code || "")}</textarea> <div class="w-5/12 justify-center text-center"><h1 class="bg-blue-800 p-1 m-1 rounded-md">${escape(item.itemExtra.code)}</h1></div>`;
});
const EqPart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  return `<div class="flex justify-centre w-full p-0 m-1 gap-1 rounded-md ">${item.itemExtra.type == void 0 || item.itemExtra.type == "code" || item.itemExtra.type == "" ? `${validate_component(EqTypeCode, "EqTypeCode").$$render($$result, { item }, {}, {})}` : ``} ${item.itemExtra.type == "text" || item.itemExtra.type == "txt" ? `${validate_component(EqTypeText, "EqTypeText").$$render($$result, { item }, {}, {})}` : ``} ${item.itemExtra.type == "heading" || item.itemExtra.type == "hdg" ? `${validate_component(EqTypeHdg, "EqTypeHdg").$$render($$result, { item }, {}, {})}` : ``}</div>`;
});
let Icons$1 = class Icons2 {
  static ADD = " ➕";
  static ANGLE = " ∠";
  static BALANCE = "⚖️";
  static BAZIER = "🔷";
  static BARCHART = "📊";
  static BOOK = "📘";
  static BOOKS = "📚";
  static BUS = "🚌";
  static BULB = "💡";
  static CAR = "🚗";
  static CANVAS = "🖼️";
  static CHARTUP = "📈";
  static CHARTDOWN = "📉";
  static CIRCLE = "⭕";
  static CLOCK = "⏱️";
  static COG = "⚙";
  static COMPUTER = "💻";
  static COPY = "📋";
  static CODE = "📟";
  static COLD = "🥶";
  static CROSS = "❌";
  static CLIP = "📎";
  static CLONE = "🁜";
  static DARK = "🌃";
  static DEL = "🗑️";
  static DOOR = "🚪";
  static DOT = "🔘";
  static DOWN = "↓";
  static EMAIL = "📧";
  static EYE = "👁️";
  static EYES = "👀";
  static EXPLOSION = "💥";
  static ELLIPSE = "🥚";
  static FILESBOX = "🗃️";
  static FLOWER = "🌸";
  static FROWNFACE = "☹️";
  static HAMMER_AND_WRENCH = "🛠️";
  static HEART = "❤️";
  static HIDE = "🙈";
  static HOT = "🔥";
  static HOURGLASS = "⌛";
  static HOUSE = "🏠";
  static ICE = "🧊";
  static KEY = "🔑";
  static LOCK = "🔒";
  static LEFT = "←";
  static LINE = "➖";
  static MAGNIFYING_GLASS = "🔍";
  static MANAGER = "💼";
  static MCQ = "🔱";
  static MESSAGE = "📨";
  static MICROSCOPE = "🔬";
  static NET = "🌐";
  static NOTES = "📋";
  static NUMBER = "❶";
  static PALETTE = "🎨";
  static PENCIL = " ✏️";
  static PHONE = "📱";
  static QUESTIONMARK = "❓";
  static RULER = "📏";
  static RIGHT = "→";
  static RECYCLE = "♻️";
  static RECTANGLE = "▭";
  static RUN = "🏃";
  static ROCKET = "🚀";
  static SAVE = "💾";
  static SMILYFACE = "😊";
  static SPEECH = "🗣️";
  static SPEAKER = "📢";
  static NOSPEAKER = "🔇";
  static STAIRS = "🪜";
  static STAR = "⭐";
  static SHEEP = "🐑";
  static START = "▶";
  static STOP = "||";
  static STUDENT = "👨‍🎓";
  static SPRITE = "🕹️";
  static STUDENTCAP = "🎓";
  static SUN = "☀️";
  static SUNRISE = "🌅";
  static SUBTRACT = "➖";
  static TAG = "🏷️";
  static TEAM = "🧑‍🤝‍🧑";
  static TICK = "✔️";
  static TEMPRATURE = "🌡️";
  static TEMPLATE = "📜";
  static TEST = "🧪";
  static TEXT = "📃";
  static TEXT2 = "¶";
  static THUMBSUP = "👍";
  static THUMBSDOWN = "👎";
  static TRIANGE = "🔺";
  static TRIANGULAR_RULER = "📐";
  static TREE = "🌳";
  static TV = "📺";
  static WRENCH = "🔧";
  static UP = "↑";
  static MONEYBAG = "💰";
  static MAGNET = "🧲";
  static MAGICWAND = "🪄";
  static MAP = "🗺️";
  static MEDAL = "🎖️";
  static MEGAPHONE = "📣";
  static MICROPHONE = "🎤";
  static MILK = "🥛";
  static MOON = "🌙";
  static MOUNTAIN = "⛰️";
  static MUSIC = "🎵";
  static NETWORK = "🔗";
  static NEWSPAPER = "📰";
  static NOTEBOOK = "📓";
  static OIL = "🛢️";
  static PANDA = "🐼";
  static PARACHUTE = "🪂";
  static PEACE = "☮️";
  static PENGUIN = "🐧";
  static PET = "🐾";
  static PIGGYBANK = "🐖";
  static PINEAPPLE = "🍍";
  static PIZZA = "🍕";
  static PLANET = "🪐";
  static PRINTER = "🖨️";
  static PUZZLE = "🧩";
  static QUILL = "🖋️";
  static RAINBOW = "🌈";
  static RECORD = "🎙️";
  static ROSE = "🌹";
  static SAILBOAT = "⛵";
  static SATELLITE = "🛰️";
  static SCISSORS = "✂️";
  static SCROLL = "📜";
  static SHIELD = "🛡️";
  static SNOWFLAKE = "❄️";
  static SQUIRREL = "🐿️";
  static SUITCASE = "💼";
  static SUNGLASSES = "🕶️";
  static SURFBOARD = "🏄‍♂️";
  static TADA = "🎉";
  static TEA = "🍵";
  static TELESCOPE = "🔭";
  static TENT = "⛺";
  static TOOLS = "🛠️";
  static TORNADO = "🌪️";
  static TROPHY = "🏆";
  static UMBRELLA = "☂️";
  static UNLOCK = "🔓";
  static VAN = "🚐";
  static VIAL = "🧪";
  static VIKING = "🛡️";
  static WALLET = "👛";
  static WATERMELON = "🍉";
  static WHALE = "🐋";
  static WIFI = "📶";
  static WIND = "💨";
  static WOLF = "🐺";
  static YIN_YANG = "☯️";
  static AIRPLANE = "✈️";
  static ALARM = "⏰";
  static APPLE = "🍎";
  static AVOCADO = "🥑";
  static BALLOON = "🎈";
  static BANANA = "🍌";
  static BATTERY = "🔋";
  static BEACH = "🏖️";
  static BELL = "🔔";
  static BICYCLE = "🚲";
  static BIRD = "🐦";
  static BIRTHDAY_CAKE = "🎂";
  static BOMB = "💣";
  static BOOKMARK = "🔖";
  static BOW_AND_ARROW = "🏹";
  static BRIEFCASE2 = "👜";
  static BROOM = "🧹";
  static CACTUS = "🌵";
  static CALCULATOR = "📟";
  static CAMERA = "📷";
  static CANDY = "🍬";
  static CANDLE = "🕯️";
  static CARD = "💳";
  static CARROT = "🥕";
  static CAT = "🐱";
  static CHAMPAGNE = "🍾";
  static CHECK_MARK = "✅";
  static CHERRY = "🍒";
  static CHEESE = "🧀";
  static CHESS = "♟️";
  static CHICKEN = "🐔";
  static CLOUD = "☁️";
  static CLAPPERBOARD = "🎬";
  static COOKIE = "🍪";
  static CROWN = "👑";
  static CUPCAKE = "🧁";
  static CUTLERY = "🍴";
  static DAGGER = "🗡️";
  static DIAMOND = "💎";
  static DRUM = "🥁";
  static DUMBBELL = "🏋️";
  static ELEPHANT = "🐘";
  static ENVELOPE = "✉️";
  static FIREWORKS = "🎆";
  static FLAG = "🚩";
  static FLAME = "🔥";
  static FOOTBALL = "⚽";
  static FRIES = "🍟";
  static GEAR2 = "⚙️";
  static GIFT = "🎁";
  static GLOBE = "🌍";
  static GUITAR = "🎸";
  static HANDSHAKE = "🤝";
  static HELICOPTER = "🚁";
  static HONEY = "🍯";
  static HURRICANE = "🌀";
  static ICE_CREAM = "🍦";
  static JAM = "🍓";
  static JUICE = "🧃";
  static KITE = "🪁";
  static LAMP = "💡";
  static LEMONADE = "🍋";
  static LIGHTNING = "⚡";
  static LOCKED_BOOK = "🔏";
  static LOUDSPEAKER = "📢";
  static LUNCHBOX = "🍱";
  static MAGNETIC_TAPE = "📼";
  static MAPLE_LEAF = "🍁";
  static MASK = "🎭";
  static MEDICINE = "💊";
  static METEOR = "☄️";
  static MOLECULE = "🧬";
  static MOUSE = "🐭";
  static MUSHROOM = "🍄";
  static NUT_AND_BOLT = "🔩";
  static OCTOPUS = "🐙";
  static ORANGE = "🍊";
  static OWL = "🦉";
  static PAW_PRINT = "🐾";
  static PENCIL2 = "🖊️";
  static PILLOW = "🛏️";
  static PINE_TREE = "🌲";
  static POPCORN = "🍿";
  static RADAR = "📡";
  static ROBOT = "🤖";
  static RUBY = "💍";
  static SANDWICH = "🥪";
  static SATURN = "🪐";
  static SEA_SHELL = "🐚";
  static SHARK = "🦈";
  static SHOPPING_BAG = "🛍️";
  static SKULL = "💀";
  static SNORKEL = "🤿";
  static SPIDER = "🕷️";
  static SQUID = "🦑";
  static STETHOSCOPE = "🩺";
  static SWIMMING_POOL = "🏊";
  static SYRINGE = "💉";
  static TOOLBOX = "🧰";
  static TRAFFIC_LIGHT = "🚦";
  static TRAIN = "🚆";
  static TREE2 = "🌴";
  static TRUCK = "🚚";
  static VAMPIRE = "🧛";
  static WATERMELON_SLICE = "🍉";
  static ABACUS = "🧮";
  static ALIEN = "👽";
  static AMPHORA = "🏺";
  static ANCHOR = "⚓";
  static ANT = "🐜";
  static ASTRONAUT = "👨‍🚀";
  static ATOM = "⚛️";
  static AXE = "🪓";
  static BACKPACK = "🎒";
  static BADMINTON = "🏸";
  static BAGEL = "🥯";
  static BAGUETTE = "🥖";
  static BAMBOO = "🎍";
  static BANJO = "🪕";
  static BASKET = "🧺";
  static BAT = "🦇";
  static BEAVER = "🦫";
  static BENTO = "🍱";
  static BIOHAZARD = "☣️";
  static BLUEBERRY = "🫐";
  static BOAR = "🐗";
  static BOBSLED = "🛷";
  static BONE = "🦴";
  static BONSAI = "🎍";
  static BOOMERANG = "🪃";
  static BRAIN = "🧠";
  static BREAD = "🍞";
  static BRICK = "🧱";
  static BRIDGE = "🌉";
  static BROCCOLI = "🥦";
  static BROOM_AND_BALL = "🧹🏀";
  static BUBBLE_TEA = "🧋";
  static BUCKET = "🪣";
  static BUTTERFLY = "🦋";
  static CACTUS_IN_POT = "🌵🪴";
  static CALENDAR = "📅";
  static CAMEL = "🐪";
  static CANOE = "🛶";
  static CASTLE = "🏰";
  static CHAINSAW = "🪚";
  static CHAIR = "🪑";
  static CHESTNUT = "🌰";
  static CHIPMUNK = "🐿️";
  static CHOCOLATE_BAR = "🍫";
  static CHOPSTICKS = "🥢";
  static CLAMP = "🗜️";
  static CLOVER = "🍀";
  static COCONUT = "🥥";
  static COFFIN = "⚰️";
  static COIN = "🪙";
  static COMET = "☄️";
  static COMPASS = "🧭";
  static CORAL = "🪸";
  static CORN = "🌽";
  static CRAYON = "🖍️";
  static CRICKET = "🦗";
  static CROCODILE = "🐊";
  static CROISSANT = "🥐";
  static CRYSTAL_BALL = "🔮";
  static CUCUMBER = "🥒";
  static CUPID = "💘";
  static CURLING_STONE = "🥌";
  static CYCLONE = "🌀";
  static DANGO = "🍡";
  static DART = "🎯";
  static DEER = "🦌";
  static DESKTOP = "🖥️";
  static DICE = "🎲";
  static DINOSAUR = "🦕";
  static DIVIDER = "〰️";
  static DNA = "🧬";
  static DONUT = "🍩";
  static DOVE = "🕊️";
  static DRAGON = "🐉";
  static DRILL = "🛠️";
  static DROPLET = "💧";
  static DUCK = "🦆";
  static DUMPLING = "🥟";
  static EAR = "👂";
  static EGGPLANT = "🍆";
  static ELF = "🧝";
  static EVERGREEN = "🌲";
  static FAIRY = "🧚";
  static FALLEN_LEAF = "🍂";
  static FEATHER = "🪶";
  static FERRIS_WHEEL = "🎡";
  static FIRE_EXTINGUISHER = "🧯";
  static FIRECRACKER = "🧨";
  static FISHING_POLE = "🎣";
  static FLEUR_DE_LIS = "⚜️";
  static FLYING_DISC = "🥏";
  static FLYING_SAUCER = "🛸";
  static FOG = "🌫️";
  static FONDUE = "🫕";
  static FOOTPRINTS = "👣";
  static FOUNTAIN = "⛲";
  static FOX = "🦊";
  static FROG = "🐸";
  static GARLIC = "🧄";
  static GENIE = "🧞";
  static GERM = "🦠";
  static GHOST = "👻";
  static GIRAFFE = "🦒";
  static GLOVES = "🧤";
  static GOAT = "🐐";
  static GORILLA = "🦍";
  static GRAPES = "🍇";
  static GRASSHOPPER = "🦗";
  static HAMSA = "🧿";
  static HARMONICA = "🎹";
  static HEADSTONE = "🪦";
  static HEDGEHOG = "🦔";
  static HERB = "🌿";
  static HIBISCUS = "🌺";
  static HIPPOPOTAMUS = "🦛";
  static HOOK = "🪝";
  static HOURGLASS_DONE = "⌛";
  static IGLOO = "�iglq";
  static INFINITY = "♾️";
  static JELLYFISH = "🪼";
  static JIGSAW = "🧩";
  static JOYSTICK = "🕹️";
  static KANGAROO = "🦘";
  static KIWI = "🥝";
  static KNOT = "🪢";
  static KOALA = "🐨";
  static LABCOAT = "🥼";
  static LADDER = "🪜";
  static LADYBUG = "🐞";
  static LASSO = "🪃";
  static LEMON = "🍋";
  static LEOPARD = "🐆";
  static LEVITATE = "🕴️";
  static LIGHT_BULB = "💡";
  static LIZARD = "🦎";
  static LLAMA = "🦙";
  static LOBSTER = "🦞";
  static LOLLIPOP = "🍭";
  static LOTUS = "🪷";
  static LUGGAGE = "🧳";
  static LUNGS = "🫁";
  static MAGE = "🧙";
  static MANGO = "🥭";
  static MANTIS = "🦗";
  static MICROBE = "🦠";
  static MIRROR = "🪞";
  static MOAI = "🗿";
  static MOLE = "🐀";
  static MONKEY = "🐒";
  static MOSQUITO = "🦟";
  static MOTOR_SCOOTER = "🛵";
  static MOTORCYCLE = "🏍️";
  static MOUNTAIN_CABLEWAY = "🚠";
  static NAZAR_AMULET = "🧿";
  static NECKTIE = "👔";
  static NESTING_DOLLS = "🪆";
  static NINJA = "🥷";
  static ONION = "🧅";
  static ORANGUTAN = "🦧";
  static OTTER = "🦦";
  static OYSTER = "🦪";
  static PACKAGE = "📦";
  static PAINTBRUSH = "🖌️";
  static PALM_TREE = "🌴";
  static PANCAKES = "🥞";
  static PAPERCLIP = "📎";
  static PARROT = "🦜";
  static PEACH = "🍑";
  static PEACOCK = "🦚";
  static PEANUTS = "🥜";
  static PEARL = "🫠";
  static PEAR = "🍐";
  static PENCIL_AND_PAPER = "📝";
  static PEPPER = "🌶️";
  static PETRI_DISH = "🧫";
  static PICKAXE = "⛏️";
  static PIEZO = "🔊";
  static PIGEON = "🕊️";
  static PILL = "💊";
  static PINATA = "🪅";
  static PINCH = "🤏";
  static PINEAPPLE_SLICE = "🍍";
  static PING_PONG = "🏓";
  static PIRATE = "🏴‍☠️";
  static PLANT_IN_POT = "🪴";
  static PLATYPUS = "🦡";
  static PLUNGER = "🪠";
  static POPCORN_BUCKET = "🍿";
  static POTATO = "🥔";
  static PRETZEL = "🥨";
  static PROTOZOA = "🦠";
  static PUMPKIN = "🎃";
  static PUSHPIN = "📌";
  static RABBIT = "🐰";
  static RACCOON = "🦝";
  static RADIO = "📻";
  static RAIL_CAR = "🚃";
  static RAINBOW_FLAG = "🏳️‍🌈";
  static RAMEN = "🍜";
  static RAT = "🐀";
  static RECEIPT = "🧾";
  static RHINOCEROS = "🦏";
  static RICE = "🍚";
  static RING_BUOY = "🛟";
  static ROCK = "🪨";
  static ROOSTER = "🐓";
  static SAFETY_PIN = "🧷";
  static SAFETY_VEST = "🦺";
  static SALT = "🧂";
  static SANDAL = "👡";
  static SATELLITE_ANTENNA = "📡";
  static SAUROPOD = "🦕";
  static SCALES = "⚖️";
  static SCARF = "🧣";
  static SCORPION = "🦂";
  static SCREWDRIVER = "🪛";
  static SEAL = "🦭";
  static SEEDLING = "🌱";
  static SHAMROCK = "☘️";
  static SHRIMP = "🦐";
  static SKUNK = "🦨";
  static SLED = "🛷";
  static SLOTH = "🦥";
  static SNAIL = "🐌";
  static SNAKE = "🐍";
  static SNOWBOARDER = "🏂";
  static SNOWMAN = "☃️";
  static SOAP = "🧼";
  static SOCCER_BALL = "⚽";
  static SOCKS = "🧦";
  static SOFTBALL = "🥎";
  static SPADE = "♠️";
  static SPAGHETTI = "🍝";
  static SPARKLES = "✨";
  static SPARKLER = "🎇";
  static SPARKLING_HEART = "💖";
  static SPOON = "🥄";
  static SPORTS_MEDAL = "🏅";
  static STACKED_BOOKS = "📚";
  static STAPLER = "🗄️";
  static STOPWATCH = "⏱️";
  static STORM = "🌩️";
  static STRAWBERRY = "🍓";
  static SUNFLOWER = "🌻";
  static SUSHI = "🍣";
  static SWAN = "🦢";
  static SWEAT_DROPLETS = "💦";
  static T_REX = "🦖";
  static TACO = "🌮";
  static TAKEOUT_BOX = "🥡";
  static TAMALE = "🫔";
  static TANGERINE = "🍊";
  static TAXI = "🚕";
  static TEAPOT = "🫖";
  static TEDDY_BEAR = "🧸";
  static TENNIS = "🎾";
  static THERMOMETER = "🌡️";
  static THONG_SANDAL = "🩴";
  static THREAD = "🧵";
  static TICKET = "🎟️";
  static TIGER = "🐯";
  static TOILET = "🚽";
  static TOMATO = "🍅";
  static TONGUE = "👅";
  static TRACTOR = "🚜";
  static TROLLEYBUS = "🚎";
  static TSHIRT = "👕";
  static TULIP = "🌷";
  static TURKEY = "🦃";
  static TURTLE = "🐢";
  static UNICORN = "🦄";
  static VIOLIN = "🎻";
  static VOLLEYBALL = "🏐";
  static WAFFLE = "🧇";
  static WASTEBASKET = "🗑️";
  static WATCH = "⌚";
  static WATER_BUFFALO = "🐃";
  static WATER_POLO = "🤽";
  static WATER_WAVE = "🌊";
  static WATERFALL = "🧗‍♀️";
  static WINDMILL = "🏰";
  static WINDOW = "🪟";
  static WINE_GLASS = "🍷";
  static WOOD = "🪵";
  static WORM = "🪱";
  static WREATH = "🎍";
  static WRITING_HAND = "✍️";
  static X_RAY = "🦴";
  static YARN = "🧶";
  static YO_YO = "🪀";
  static ZEBRA = "🦓";
  static ZOMBIE = "🧟";
  ////////////////////////
};
const LowerToolBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { i } = $$props;
  let { item } = $$props;
  let { addEq } = $$props;
  let { moveUpEq } = $$props;
  let { moveDownEq } = $$props;
  let { setEqType } = $$props;
  let { delEq } = $$props;
  if ($$props.i === void 0 && $$bindings.i && i !== void 0) $$bindings.i(i);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.addEq === void 0 && $$bindings.addEq && addEq !== void 0) $$bindings.addEq(addEq);
  if ($$props.moveUpEq === void 0 && $$bindings.moveUpEq && moveUpEq !== void 0) $$bindings.moveUpEq(moveUpEq);
  if ($$props.moveDownEq === void 0 && $$bindings.moveDownEq && moveDownEq !== void 0) $$bindings.moveDownEq(moveDownEq);
  if ($$props.setEqType === void 0 && $$bindings.setEqType && setEqType !== void 0) $$bindings.setEqType(setEqType);
  if ($$props.delEq === void 0 && $$bindings.delEq && delEq !== void 0) $$bindings.delEq(delEq);
  return `<div class="flex justify-center bg-stone-500 w-4/12 p-1 m-1 mb-3 gap-1 rounded-md"><button class="bg-green-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-1c32be5">Add</button> <button class="bg-gray-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-w3ycwo">Up</button> <button class="bg-gray-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-1qf0m2q">Down</button>  <div class="flex gap-1 bg-stone-800 text-white text-xs p-1 rounded-sm"><button${add_attribute(
    "class",
    `${item.itemExtra.type == "code" ? "bg-red-800" : "bg-gray-500"} rounded-md`,
    0
  )}>${escape(Icons$1.ADD)}</button> <button${add_attribute(
    "class",
    `${item.itemExtra.type == "text" ? "bg-red-800" : "bg-gray-500"} rounded-md`,
    0
  )}>${escape(Icons$1.TEMPLATE)}</button> <button${add_attribute(
    "class",
    `${item.itemExtra.type == "hdg" ? "bg-red-800" : "bg-gray-500"} rounded-md`,
    0
  )}>${escape(Icons$1.BOOK)}</button></div> <button class="bg-red-900 text-white p-1 text-xs rounded-md" data-svelte-h="svelte-yomx15">Del</button></div>`;
});
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasItems;
  let { currentTime = 0 } = $$props;
  let { item } = $$props;
  let { updateTimings } = $$props;
  let { i } = $$props;
  let { addEq } = $$props;
  let { delEq } = $$props;
  let { moveUpEq } = $$props;
  let { moveDownEq } = $$props;
  let { setEqType } = $$props;
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.updateTimings === void 0 && $$bindings.updateTimings && updateTimings !== void 0) $$bindings.updateTimings(updateTimings);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0) $$bindings.i(i);
  if ($$props.addEq === void 0 && $$bindings.addEq && addEq !== void 0) $$bindings.addEq(addEq);
  if ($$props.delEq === void 0 && $$bindings.delEq && delEq !== void 0) $$bindings.delEq(delEq);
  if ($$props.moveUpEq === void 0 && $$bindings.moveUpEq && moveUpEq !== void 0) $$bindings.moveUpEq(moveUpEq);
  if ($$props.moveDownEq === void 0 && $$bindings.moveDownEq && moveDownEq !== void 0) $$bindings.moveDownEq(moveDownEq);
  if ($$props.setEqType === void 0 && $$bindings.setEqType && setEqType !== void 0) $$bindings.setEqType(setEqType);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hasItems = item?.itemExtra?.sp?.length > 0;
    $$rendered = `<div class="flex w-full justify-center text-lg rounded-md gap-2"><span class="rounded-lg bg-stone-700 text-white text-md p-1">${escape(i + 1)}</span> <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">${validate_component(AddTime, "AddTime").$$render(
      $$result,
      { currentTime, updateTimings, item },
      {
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-10/12 bg-gray-600 text-center rounded-md border-2 border-gray-400">${validate_component(EqPart, "EqPart").$$render(
      $$result,
      { item },
      {
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(LowerToolBar, "LowerToolBar").$$render(
      $$result,
      {
        i,
        addEq,
        delEq,
        moveUpEq,
        moveDownEq,
        setEqType,
        item
      },
      {
        item: ($$value) => {
          item = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  <div class="w-1/12 bg-gray-600 text-center rounded-md border-2 border-gray-400"><button class="${"p-1 rounded-md m-1 " + escape(hasItems ? "bg-orange-900" : "bg-gray-400", true)}">Side Panel</button></div></div> ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const EqsEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { currentTime = 0 } = $$props;
  let timingsError = false;
  function setEqType(i, typ) {
    items = items.map((item, index) => index === i ? {
      ...item,
      itemExtra: { ...item.itemExtra, type: typ }
    } : item);
  }
  function moveUpEq(index) {
    if (index > 0) {
      const eqToMove = items[index];
      items = [
        ...items.slice(0, index - 1),
        eqToMove,
        items[index - 1],
        ...items.slice(index + 1)
      ];
    }
  }
  function moveDownEq(index) {
    if (index < items.length - 1) {
      const eqToMove = items[index];
      items = [
        ...items.slice(0, index),
        items[index + 1],
        eqToMove,
        ...items.slice(index + 2)
      ];
    }
  }
  function delEq(index) {
    items = [...items.slice(0, index), ...items.slice(index + 1)];
  }
  function addEq(i = 0) {
    const newItem = SlideObject.Eqs.getNewItem();
    items = [...items.slice(0, i + 1), newItem, ...items.slice(i + 1)];
  }
  function updateTimings() {
    timingsError = false;
    if (items.length === 0) return false;
    items[0].itemExtra.startTime = 0;
    for (let i = 1; i < items.length; i++) {
      items[i - 1].itemExtra.endTime = items[i].itemExtra.startTime;
    }
    for (let i = 0; i < items.length - 1; i++) {
      if (items[i].itemExtra.startTime >= items[i + 1].itemExtra.startTime) {
        timingsError = true;
      }
    }
    items = [...items];
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<svelt:head data-svelte-h="svelte-12ul5rv"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous"></svelt:head>  <div class="bg-gray-800 w-full text-white min-h-screen p-4 m-0 ">${timingsError ? `<h1 class="w-full text-center bg-orange-400 rounded-md px-2 text-lg" data-svelte-h="svelte-ofkztu">Timings Error</h1>` : ``} ${validate_component(TopToolbar, "TopToolbar").$$render($$result, { add: addEq }, {}, {})}  <div class="flex w-full bg-stone-700 justify-center text-lg rounded-md " data-svelte-h="svelte-6xcj4m"> <div class="w-1/12 text-center">Start Time</div> <div class="w-6/12 text-center">Editor</div> <div class="w-4/12 text-center">Display</div> <div class="w-1/12 text-center">Side Panel</div></div>   <div class="flex flex-col gap-2 my-1 p-1 ">${each(items, (item, i) => {
      return `${validate_component(Row, "Row").$$render(
        $$result,
        {
          updateTimings,
          currentTime,
          i,
          addEq,
          delEq,
          moveUpEq,
          moveDownEq,
          setEqType,
          item
        },
        {
          item: ($$value) => {
            item = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
async function loadBgImages() {
  const BASE_PATH = "system_images/bg_images/";
  const imageConfigs = [
    "paper01.jpg",
    "drywall.jpg",
    "black_board.jpg",
    "black_board_mat.jpg",
    "wood.jpg",
    "tinted.jpg",
    "black_mat.jpg",
    "white_mat.jpg",
    "granite.jpg",
    "gray_marble.jpg",
    "brown_stone.jpg",
    "gray_stone.jpg",
    "design_old.jpg",
    "blue_waves.jpg",
    "wall.jpg"
  ];
  async function loadSingleImage(imageName) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const fullPath = BASE_PATH + imageName;
      img.onload = () => resolve({ name: fullPath, img });
      img.onerror = () => reject(new Error(`Failed to load image: ${fullPath}`));
      img.src = fullPath;
    });
  }
  try {
    return await Promise.all(
      imageConfigs.map((imageName) => loadSingleImage(imageName))
    );
  } catch (error) {
    console.error("Error loading background images:", error);
    throw error;
  }
}
class Sprite3 {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.data = [];
    this.selectedData = null;
  }
  addItem(name, sx, sy, sw, sh) {
    this.data.push({
      name,
      sx,
      sy,
      sw,
      sh
    });
  }
  applyItem(name) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.name == name) {
        this.selectedData = item;
        return;
      }
    }
  }
}
const students = new Sprite3("students", "/sprites/students.png");
students.addItem("student_w_tablet", 183, 317, 225, 350);
students.addItem("student_red", 254, 0, 275, 250);
students.addItem("student_female", 424, 288, 220, 250);
students.addItem("student_black", 540, 0, 260, 266);
const w$1 = 90;
const h$1 = 100;
let y$1 = 0;
const figs = new Sprite3("figs", "/sprites/figs.png");
figs.addItem("flower1", 0, y$1, w$1, h$1);
figs.addItem("flower2", w$1 * 1, y$1, w$1, h$1);
figs.addItem("flower3", w$1 * 2, y$1, w$1, h$1);
figs.addItem("flowe4", w$1 * 3, y$1, w$1, h$1);
figs.addItem("female_stick", w$1 * 4, y$1, w$1, h$1);
figs.addItem("male_stick", w$1 * 5, y$1, w$1, h$1);
figs.addItem("bear_face", w$1 * 6, y$1, w$1, h$1);
figs.addItem("apple", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 1;
figs.addItem("plant_pot", 0, y$1, w$1, h$1);
figs.addItem("penguin", w$1 * 1, y$1, w$1, h$1);
figs.addItem("drum_face", w$1 * 2, y$1, w$1, h$1);
figs.addItem("carrot", w$1 * 3, y$1, w$1, h$1);
figs.addItem("dimond", w$1 * 4, y$1, w$1, h$1);
figs.addItem("spring", w$1 * 5, y$1, w$1, h$1);
figs.addItem("bomb", w$1 * 6, y$1, w$1, h$1);
figs.addItem("paw", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 2;
figs.addItem("line_design1", 0, y$1, w$1, h$1);
figs.addItem("line_design2", w$1 * 1, y$1, w$1, h$1);
figs.addItem("line_design3", w$1 * 2, y$1, w$1, h$1);
figs.addItem("line_design4", w$1 * 3, y$1, w$1, h$1);
figs.addItem("line_design5", w$1 * 4, y$1, w$1, h$1);
figs.addItem("line_design6", w$1 * 5, y$1, w$1, h$1);
figs.addItem("line_design7", w$1 * 6, y$1, w$1, h$1);
figs.addItem("line_design8", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 3;
figs.addItem("line_design9", 0, y$1, w$1, h$1);
figs.addItem("leaf_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("leaf_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("cherry", w$1 * 3, y$1, w$1, h$1);
figs.addItem("drop_face", w$1 * 4, y$1, w$1, h$1);
figs.addItem("spring2", w$1 * 5, y$1, w$1, h$1);
figs.addItem("clock", w$1 * 6, y$1, w$1, h$1);
figs.addItem("water_tap_face", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 4;
figs.addItem("smily_face_right", 0, y$1, w$1, h$1);
figs.addItem("frying_pan_right", w$1 * 1, y$1, w$1, h$1);
figs.addItem("spatula_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("fox_face_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("evil_moon_face_left", w$1 * 4, y$1, w$1, h$1);
figs.addItem("telephone", w$1 * 5, y$1, w$1, h$1);
figs.addItem("tram_right", w$1 * 6, y$1, w$1, h$1);
figs.addItem("train", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 5;
figs.addItem("car_left", 0, y$1, w$1, h$1);
figs.addItem("puff_right", w$1 * 1, y$1, w$1, h$1);
figs.addItem("signal_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("plane_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("sun", w$1 * 4, y$1, w$1, h$1);
figs.addItem("umbrella", w$1 * 5, y$1, w$1, h$1);
figs.addItem("ice_man", w$1 * 6, y$1, w$1, h$1);
figs.addItem("cat_face_normal", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 6;
figs.addItem("octopus_right", 0, y$1, w$1, h$1);
figs.addItem("bow", w$1 * 1, y$1, w$1, h$1);
figs.addItem("fish_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("ant_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("duck_left", w$1 * 4, y$1, w$1, h$1);
figs.addItem("chicken_left", w$1 * 5, y$1, w$1, h$1);
figs.addItem("heart", w$1 * 6, y$1, w$1, h$1);
figs.addItem("mouse", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 7;
figs.addItem("mouse_right", 0, y$1, w$1, h$1);
figs.addItem("ghost_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("leaf_big_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("pencil_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("fork", w$1 * 4, y$1, w$1, h$1);
figs.addItem("mickey_mouse_face", w$1 * 5, y$1, w$1, h$1);
figs.addItem("rabit_face", w$1 * 6, y$1, w$1, h$1);
figs.addItem("crown", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 8;
figs.addItem("smily_face_left", 0, y$1, w$1, h$1);
figs.addItem("frying_pan_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("spatula_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("fox_face_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("evil_moon_face_right", w$1 * 4, y$1, w$1, h$1);
figs.addItem("mobile_phone", w$1 * 5, y$1, w$1, h$1);
figs.addItem("tram_left", w$1 * 6, y$1, w$1, h$1);
figs.addItem("tv", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 9;
figs.addItem("car_right", 0, y$1, w$1, h$1);
figs.addItem("puff_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("signal_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("plane_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("cloud_face", w$1 * 4, y$1, w$1, h$1);
figs.addItem("cloud_rain", w$1 * 5, y$1, w$1, h$1);
figs.addItem("paw_big", w$1 * 6, y$1, w$1, h$1);
figs.addItem("cat_face_evil", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 10;
figs.addItem("octopus_left", 0, y$1, w$1, h$1);
figs.addItem("hot_tea", w$1 * 1, y$1, w$1, h$1);
figs.addItem("fish_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("ant_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("duck_right", w$1 * 4, y$1, w$1, h$1);
figs.addItem("chicken_right", w$1 * 5, y$1, w$1, h$1);
figs.addItem("shinning_star", w$1 * 6, y$1, w$1, h$1);
figs.addItem("robot", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 11;
figs.addItem("mouse_left", 0, y$1, w$1, h$1);
figs.addItem("ghost_right", w$1 * 1, y$1, w$1, h$1);
figs.addItem("leaf_big_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("pencil_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("spoon", w$1 * 4, y$1, w$1, h$1);
figs.addItem("octopus_wave", w$1 * 5, y$1, w$1, h$1);
figs.addItem("dimon2", w$1 * 6, y$1, w$1, h$1);
const w = 80;
const h = 75;
let y = 0;
const alphabets = new Sprite3("alphabets", "/sprites/alphabets.png");
alphabets.addItem("A", w * 0, y, w, h);
alphabets.addItem("B", w * 1, y, w, h);
alphabets.addItem("C", w * 2, y, w, h);
alphabets.addItem("D", w * 3, y, w, h);
alphabets.addItem("E", w * 4, y, w, h);
alphabets.addItem("F", w * 5, y, w, h);
alphabets.addItem("G", w * 6, y, w, h);
alphabets.addItem("H", w * 7, y, w, h);
alphabets.addItem("I", w * 8, y, w, h);
alphabets.addItem("J", w * 9, y, w, h);
alphabets.addItem("K", w * 10, y, w, h);
alphabets.addItem("L", w * 11, y, w, h);
y = h * 1;
alphabets.addItem("M", w * 0, y, w, h);
alphabets.addItem("N", w * 1, y, w, h);
alphabets.addItem("O", w * 2, y, w, h);
alphabets.addItem("P", w * 3, y, w, h);
alphabets.addItem("Q", w * 4, y, w, h);
alphabets.addItem("R", w * 5, y, w, h);
alphabets.addItem("S", w * 6, y, w, h);
alphabets.addItem("T", w * 7, y, w, h);
alphabets.addItem("U", w * 8, y, w, h);
alphabets.addItem("V", w * 9, y, w, h);
alphabets.addItem("W", w * 10, y, w, h);
alphabets.addItem("X", w * 11, y, w, h);
y = h * 2;
alphabets.addItem("Y", w * 0, y, w, h);
alphabets.addItem("Z", w * 1, y, w, h);
alphabets.addItem("a", w * 2, y, w, h);
alphabets.addItem("b", w * 3, y, w, h);
alphabets.addItem("c", w * 4, y, w, h);
alphabets.addItem("d", w * 5, y, w, h);
alphabets.addItem("e", w * 6, y, w, h);
alphabets.addItem("f", w * 7, y, w, h);
alphabets.addItem("g", w * 8, y, w, h);
alphabets.addItem("h", w * 9, y, w, h);
alphabets.addItem("i", w * 10, y, w, h);
alphabets.addItem("j", w * 11, y, w, h);
y = h * 3;
alphabets.addItem("k", w * 0, y, w, h);
alphabets.addItem("l", w * 1, y, w, h);
alphabets.addItem("m", w * 2, y, w, h);
alphabets.addItem("n", w * 3, y, w, h);
alphabets.addItem("o", w * 4, y, w, h);
alphabets.addItem("p", w * 5, y, w, h);
alphabets.addItem("q", w * 6, y, w, h);
alphabets.addItem("r", w * 7, y, w, h);
alphabets.addItem("s", w * 8, y, w, h);
alphabets.addItem("t", w * 9, y, w, h);
alphabets.addItem("u", w * 10, y, w, h);
alphabets.addItem("v", w * 11, y, w, h);
y = h * 4;
alphabets.addItem("w", w * 0, y, w, h);
alphabets.addItem("x", w * 1, y, w, h);
alphabets.addItem("y", w * 2, y, w, h);
alphabets.addItem("z", w * 3, y, w, h);
alphabets.addItem("0", w * 4, y, w, h);
alphabets.addItem("1", w * 5, y, w, h);
alphabets.addItem("2", w * 6, y, w, h);
alphabets.addItem("3", w * 7, y, w, h);
alphabets.addItem("4", w * 8, y, w, h);
alphabets.addItem("5", w * 9, y, w, h);
alphabets.addItem("6", w * 10, y, w, h);
alphabets.addItem("7", w * 11, y, w, h);
y = h * 5;
y += 5;
alphabets.addItem("8", w * 0, y, w, h);
alphabets.addItem("9", w * 1, y, w, h);
alphabets.addItem("fullstio", w * 2, y, w, h);
alphabets.addItem("comma", w * 3, y, w, h);
alphabets.addItem("semi_colon", w * 4, y, w, h);
alphabets.addItem("colon", w * 5, y, w, h);
alphabets.addItem("question_mark", w * 6, y, w, h);
alphabets.addItem("exclamation", w * 7, y, w, h);
alphabets.addItem("dash", w * 8, y, w, h);
alphabets.addItem("pound", w * 9, y, w, h);
alphabets.addItem("double_quote", w * 10, y, w, h);
alphabets.addItem("single_quote", w * 11, y, w, h);
y = h * 6;
alphabets.addItem("ampersand", w * 0, y, w, h);
alphabets.addItem("left_bracket", w * 1, y, w, h);
alphabets.addItem("right_bracket", w * 2, y, w, h);
alphabets.addItem("right_angle_bracket", w * 3, y, w, h);
alphabets.addItem("left_angle_bracket", w * 4, y, w, h);
alphabets.addItem("tilda", w * 5, y, w, h);
alphabets.addItem("backslash", w * 6, y, w, h);
alphabets.addItem("frontslash", w * 7, y, w, h);
alphabets.addItem("registered", w * 8, y, w, h);
alphabets.addItem("foot_mark", w * 9, y, w, h);
alphabets.addItem("degree_mark", w * 10, y, w, h);
alphabets.addItem("plus", w * 11, y, w, h);
y = h * 7;
alphabets.addItem("isequal", w * 0, y, w, h);
alphabets.addItem("multiply", w * 1, y, w, h);
alphabets.addItem("dollar", w * 2, y, w, h);
alphabets.addItem("greatherThan", w * 3, y, w, h);
alphabets.addItem("smallerThan", w * 4, y, w, h);
alphabets.addItem("divide", w * 5, y, w, h);
const people = new Sprite3("people", "/sprites/people.png");
people.addItem("man_tblt_stndg", 0, 0, 115, 258);
people.addItem("mf_wlk_biz", 150, 0, 200, 250);
people.addItem("mf_stnd_read", 380, 0, 180, 240);
people.addItem("gp_selfy", 570, 0, 250, 250);
people.addItem("boy_googles", 860, 0, 130, 250);
people.addItem("mf_travellers", 0, 280, 200, 250);
people.addItem("m_h_phone_wlk", 225, 275, 125, 255);
people.addItem("crowd", 355, 250, 400, 280);
people.addItem("mf_mbl_wlk", 530, 260, 230, 270);
people.addItem("old_cpl_jog", 800, 270, 200, 260);
people.addItem("mom_kids_study", 0, 530, 315, 250);
people.addItem("sofa_3people_rdng", 335, 550, 400, 240);
people.addItem("3teen_Students", 760, 530, 230, 260);
people.addItem("f_lazy_chair_tblt", 5, 800, 184, 218);
people.addItem("biz_dnr", 230, 790, 420, 228);
people.addItem("sun_bathing", 650, 800, 347, 221);
async function loadSprites() {
  const spriteConfigs = [
    { name: "students", config: students },
    { name: "figs", config: figs },
    { name: "alphabets", config: alphabets },
    { name: "people", config: people }
  ];
  async function loadSingleSprite({ name, config }) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        config.img = img;
        resolve(config);
      };
      img.onerror = () => reject(new Error(`Failed to load sprite: ${name}`));
      img.src = config.url;
    });
  }
  try {
    return await Promise.all(
      spriteConfigs.map((sprite) => loadSingleSprite(sprite))
    );
  } catch (error) {
    console.error("Error loading sprites:", error);
    throw error;
  }
}
class Icons3 {
  static ADD = " ➕";
  static ANGLE = " ∠";
  static BALANCE = "⚖️";
  static BAZIER = "🔷";
  static BARCHART = "📊";
  static BOOK = "📘";
  static BOOKS = "📚";
  static BUS = "🚌";
  static BULB = "💡";
  static CAR = "🚗";
  static CANVAS = "🖼️";
  static CHARTUP = "📈";
  static CHARTDOWN = "📉";
  static CIRCLE = "⭕";
  static CLOCK = "⏱️";
  static COG = "⚙";
  static COMPUTER = "💻";
  static COPY = "📋";
  static CODE = "📟";
  static COLD = "🥶";
  static CROSS = "❌";
  static CLIP = "📎";
  static CLONE = "🁜";
  static DARK = "🌃";
  static DEL = "🗑️";
  static DOOR = "🚪";
  static DOT = "🔘";
  static DOWN = "↓";
  static EMAIL = "📧";
  static EYE = "👁️";
  static EYES = "👀";
  static EXPLOSION = "💥";
  static ELLIPSE = "🥚";
  static FILESBOX = "🗃️";
  static FLOWER = "🌸";
  static FROWNFACE = "☹️";
  static HAMMER_AND_WRENCH = "🛠️";
  static HEART = "❤️";
  static HIDE = "🙈";
  static HOT = "🔥";
  static HOURGLASS = "⌛";
  static HOUSE = "🏠";
  static ICE = "🧊";
  static KEY = "🔑";
  static LOCK = "🔒";
  static LEFT = "←";
  static LINE = "➖";
  static MAGNIFYING_GLASS = "🔍";
  static MANAGER = "💼";
  static MCQ = "🔱";
  static MESSAGE = "📨";
  static MICROSCOPE = "🔬";
  static NET = "🌐";
  static NOTES = "📋";
  static NUMBER = "❶";
  static PALETTE = "🎨";
  static PENCIL = " ✏️";
  static PHONE = "📱";
  static QUESTIONMARK = "❓";
  static RULER = "📏";
  static RIGHT = "→";
  static RECYCLE = "♻️";
  static RECTANGLE = "▭";
  static RUN = "🏃";
  static ROCKET = "🚀";
  static SAVE = "💾";
  static SMILYFACE = "😊";
  static SPEECH = "🗣️";
  static SPEAKER = "📢";
  static NOSPEAKER = "🔇";
  static STAIRS = "🪜";
  static STAR = "⭐";
  static SHEEP = "🐑";
  static START = "▶";
  static STOP = "||";
  static STUDENT = "👨‍🎓";
  static SPRITE = "🕹️";
  static STUDENTCAP = "🎓";
  static SUN = "☀️";
  static SUNRISE = "🌅";
  static SUBTRACT = "➖";
  static TAG = "🏷️";
  static TEAM = "🧑‍🤝‍🧑";
  static TICK = "✔️";
  static TEMPRATURE = "🌡️";
  static TEMPLATE = "📜";
  static TEST = "🧪";
  static TEXT = "📃";
  static TEXT2 = "¶";
  static THUMBSUP = "👍";
  static THUMBSDOWN = "👎";
  static TRIANGE = "🔺";
  static TRIANGULAR_RULER = "📐";
  static TREE = "🌳";
  static TV = "📺";
  static WRENCH = "🔧";
  static UP = "↑";
  static MONEYBAG = "💰";
  static MAGNET = "🧲";
  static MAGICWAND = "🪄";
  static MAP = "🗺️";
  static MEDAL = "🎖️";
  static MEGAPHONE = "📣";
  static MICROPHONE = "🎤";
  static MILK = "🥛";
  static MOON = "🌙";
  static MOUNTAIN = "⛰️";
  static MUSIC = "🎵";
  static NETWORK = "🔗";
  static NEWSPAPER = "📰";
  static NOTEBOOK = "📓";
  static OIL = "🛢️";
  static PANDA = "🐼";
  static PARACHUTE = "🪂";
  static PEACE = "☮️";
  static PENGUIN = "🐧";
  static PET = "🐾";
  static PIGGYBANK = "🐖";
  static PINEAPPLE = "🍍";
  static PIZZA = "🍕";
  static PLANET = "🪐";
  static PRINTER = "🖨️";
  static PUZZLE = "🧩";
  static QUILL = "🖋️";
  static RAINBOW = "🌈";
  static RECORD = "🎙️";
  static ROSE = "🌹";
  static SAILBOAT = "⛵";
  static SATELLITE = "🛰️";
  static SCISSORS = "✂️";
  static SCROLL = "📜";
  static SHIELD = "🛡️";
  static SNOWFLAKE = "❄️";
  static SQUIRREL = "🐿️";
  static SUITCASE = "💼";
  static SUNGLASSES = "🕶️";
  static SURFBOARD = "🏄‍♂️";
  static TADA = "🎉";
  static TEA = "🍵";
  static TELESCOPE = "🔭";
  static TENT = "⛺";
  static TOOLS = "🛠️";
  static TORNADO = "🌪️";
  static TROPHY = "🏆";
  static UMBRELLA = "☂️";
  static UNLOCK = "🔓";
  static VAN = "🚐";
  static VIAL = "🧪";
  static VIKING = "🛡️";
  static WALLET = "👛";
  static WATERMELON = "🍉";
  static WHALE = "🐋";
  static WIFI = "📶";
  static WIND = "💨";
  static WOLF = "🐺";
  static YIN_YANG = "☯️";
  static AIRPLANE = "✈️";
  static ALARM = "⏰";
  static APPLE = "🍎";
  static AVOCADO = "🥑";
  static BALLOON = "🎈";
  static BANANA = "🍌";
  static BATTERY = "🔋";
  static BEACH = "🏖️";
  static BELL = "🔔";
  static BICYCLE = "🚲";
  static BIRD = "🐦";
  static BIRTHDAY_CAKE = "🎂";
  static BOMB = "💣";
  static BOOKMARK = "🔖";
  static BOW_AND_ARROW = "🏹";
  static BRIEFCASE2 = "👜";
  static BROOM = "🧹";
  static CACTUS = "🌵";
  static CALCULATOR = "📟";
  static CAMERA = "📷";
  static CANDY = "🍬";
  static CANDLE = "🕯️";
  static CARD = "💳";
  static CARROT = "🥕";
  static CAT = "🐱";
  static CHAMPAGNE = "🍾";
  static CHECK_MARK = "✅";
  static CHERRY = "🍒";
  static CHEESE = "🧀";
  static CHESS = "♟️";
  static CHICKEN = "🐔";
  static CLOUD = "☁️";
  static CLAPPERBOARD = "🎬";
  static COOKIE = "🍪";
  static CROWN = "👑";
  static CUPCAKE = "🧁";
  static CUTLERY = "🍴";
  static DAGGER = "🗡️";
  static DIAMOND = "💎";
  static DRUM = "🥁";
  static DUMBBELL = "🏋️";
  static ELEPHANT = "🐘";
  static ENVELOPE = "✉️";
  static FIREWORKS = "🎆";
  static FLAG = "🚩";
  static FLAME = "🔥";
  static FOOTBALL = "⚽";
  static FRIES = "🍟";
  static GEAR2 = "⚙️";
  static GIFT = "🎁";
  static GLOBE = "🌍";
  static GUITAR = "🎸";
  static HANDSHAKE = "🤝";
  static HELICOPTER = "🚁";
  static HONEY = "🍯";
  static HURRICANE = "🌀";
  static ICE_CREAM = "🍦";
  static JAM = "🍓";
  static JUICE = "🧃";
  static KITE = "🪁";
  static LAMP = "💡";
  static LEMONADE = "🍋";
  static LIGHTNING = "⚡";
  static LOCKED_BOOK = "🔏";
  static LOUDSPEAKER = "📢";
  static LUNCHBOX = "🍱";
  static MAGNETIC_TAPE = "📼";
  static MAPLE_LEAF = "🍁";
  static MASK = "🎭";
  static MEDICINE = "💊";
  static METEOR = "☄️";
  static MOLECULE = "🧬";
  static MOUSE = "🐭";
  static MUSHROOM = "🍄";
  static NUT_AND_BOLT = "🔩";
  static OCTOPUS = "🐙";
  static ORANGE = "🍊";
  static OWL = "🦉";
  static PAW_PRINT = "🐾";
  static PENCIL2 = "🖊️";
  static PILLOW = "🛏️";
  static PINE_TREE = "🌲";
  static POPCORN = "🍿";
  static RADAR = "📡";
  static ROBOT = "🤖";
  static RUBY = "💍";
  static SANDWICH = "🥪";
  static SATURN = "🪐";
  static SEA_SHELL = "🐚";
  static SHARK = "🦈";
  static SHOPPING_BAG = "🛍️";
  static SKULL = "💀";
  static SNORKEL = "🤿";
  static SPIDER = "🕷️";
  static SQUID = "🦑";
  static STETHOSCOPE = "🩺";
  static SWIMMING_POOL = "🏊";
  static SYRINGE = "💉";
  static TOOLBOX = "🧰";
  static TRAFFIC_LIGHT = "🚦";
  static TRAIN = "🚆";
  static TREE2 = "🌴";
  static TRUCK = "🚚";
  static VAMPIRE = "🧛";
  static WATERMELON_SLICE = "🍉";
  static ABACUS = "🧮";
  static ALIEN = "👽";
  static AMPHORA = "🏺";
  static ANCHOR = "⚓";
  static ANT = "🐜";
  static ASTRONAUT = "👨‍🚀";
  static ATOM = "⚛️";
  static AXE = "🪓";
  static BACKPACK = "🎒";
  static BADMINTON = "🏸";
  static BAGEL = "🥯";
  static BAGUETTE = "🥖";
  static BAMBOO = "🎍";
  static BANJO = "🪕";
  static BASKET = "🧺";
  static BAT = "🦇";
  static BEAVER = "🦫";
  static BENTO = "🍱";
  static BIOHAZARD = "☣️";
  static BLUEBERRY = "🫐";
  static BOAR = "🐗";
  static BOBSLED = "🛷";
  static BONE = "🦴";
  static BONSAI = "🎍";
  static BOOMERANG = "🪃";
  static BRAIN = "🧠";
  static BREAD = "🍞";
  static BRICK = "🧱";
  static BRIDGE = "🌉";
  static BROCCOLI = "🥦";
  static BROOM_AND_BALL = "🧹🏀";
  static BUBBLE_TEA = "🧋";
  static BUCKET = "🪣";
  static BUTTERFLY = "🦋";
  static CACTUS_IN_POT = "🌵🪴";
  static CALENDAR = "📅";
  static CAMEL = "🐪";
  static CANOE = "🛶";
  static CASTLE = "🏰";
  static CHAINSAW = "🪚";
  static CHAIR = "🪑";
  static CHESTNUT = "🌰";
  static CHIPMUNK = "🐿️";
  static CHOCOLATE_BAR = "🍫";
  static CHOPSTICKS = "🥢";
  static CLAMP = "🗜️";
  static CLOVER = "🍀";
  static COCONUT = "🥥";
  static COFFIN = "⚰️";
  static COIN = "🪙";
  static COMET = "☄️";
  static COMPASS = "🧭";
  static CORAL = "🪸";
  static CORN = "🌽";
  static CRAYON = "🖍️";
  static CRICKET = "🦗";
  static CROCODILE = "🐊";
  static CROISSANT = "🥐";
  static CRYSTAL_BALL = "🔮";
  static CUCUMBER = "🥒";
  static CUPID = "💘";
  static CURLING_STONE = "🥌";
  static CYCLONE = "🌀";
  static DANGO = "🍡";
  static DART = "🎯";
  static DEER = "🦌";
  static DESKTOP = "🖥️";
  static DICE = "🎲";
  static DINOSAUR = "🦕";
  static DIVIDER = "〰️";
  static DNA = "🧬";
  static DONUT = "🍩";
  static DOVE = "🕊️";
  static DRAGON = "🐉";
  static DRILL = "🛠️";
  static DROPLET = "💧";
  static DUCK = "🦆";
  static DUMPLING = "🥟";
  static EAR = "👂";
  static EGGPLANT = "🍆";
  static ELF = "🧝";
  static EVERGREEN = "🌲";
  static FAIRY = "🧚";
  static FALLEN_LEAF = "🍂";
  static FEATHER = "🪶";
  static FERRIS_WHEEL = "🎡";
  static FIRE_EXTINGUISHER = "🧯";
  static FIRECRACKER = "🧨";
  static FISHING_POLE = "🎣";
  static FLEUR_DE_LIS = "⚜️";
  static FLYING_DISC = "🥏";
  static FLYING_SAUCER = "🛸";
  static FOG = "🌫️";
  static FONDUE = "🫕";
  static FOOTPRINTS = "👣";
  static FOUNTAIN = "⛲";
  static FOX = "🦊";
  static FROG = "🐸";
  static GARLIC = "🧄";
  static GENIE = "🧞";
  static GERM = "🦠";
  static GHOST = "👻";
  static GIRAFFE = "🦒";
  static GLOVES = "🧤";
  static GOAT = "🐐";
  static GORILLA = "🦍";
  static GRAPES = "🍇";
  static GRASSHOPPER = "🦗";
  static HAMSA = "🧿";
  static HARMONICA = "🎹";
  static HEADSTONE = "🪦";
  static HEDGEHOG = "🦔";
  static HERB = "🌿";
  static HIBISCUS = "🌺";
  static HIPPOPOTAMUS = "🦛";
  static HOOK = "🪝";
  static HOURGLASS_DONE = "⌛";
  static IGLOO = "�iglq";
  static INFINITY = "♾️";
  static JELLYFISH = "🪼";
  static JIGSAW = "🧩";
  static JOYSTICK = "🕹️";
  static KANGAROO = "🦘";
  static KIWI = "🥝";
  static KNOT = "🪢";
  static KOALA = "🐨";
  static LABCOAT = "🥼";
  static LADDER = "🪜";
  static LADYBUG = "🐞";
  static LASSO = "🪃";
  static LEMON = "🍋";
  static LEOPARD = "🐆";
  static LEVITATE = "🕴️";
  static LIGHT_BULB = "💡";
  static LIZARD = "🦎";
  static LLAMA = "🦙";
  static LOBSTER = "🦞";
  static LOLLIPOP = "🍭";
  static LOTUS = "🪷";
  static LUGGAGE = "🧳";
  static LUNGS = "🫁";
  static MAGE = "🧙";
  static MANGO = "🥭";
  static MANTIS = "🦗";
  static MICROBE = "🦠";
  static MIRROR = "🪞";
  static MOAI = "🗿";
  static MOLE = "🐀";
  static MONKEY = "🐒";
  static MOSQUITO = "🦟";
  static MOTOR_SCOOTER = "🛵";
  static MOTORCYCLE = "🏍️";
  static MOUNTAIN_CABLEWAY = "🚠";
  static NAZAR_AMULET = "🧿";
  static NECKTIE = "👔";
  static NESTING_DOLLS = "🪆";
  static NINJA = "🥷";
  static ONION = "🧅";
  static ORANGUTAN = "🦧";
  static OTTER = "🦦";
  static OYSTER = "🦪";
  static PACKAGE = "📦";
  static PAINTBRUSH = "🖌️";
  static PALM_TREE = "🌴";
  static PANCAKES = "🥞";
  static PAPERCLIP = "📎";
  static PARROT = "🦜";
  static PEACH = "🍑";
  static PEACOCK = "🦚";
  static PEANUTS = "🥜";
  static PEARL = "🫠";
  static PEAR = "🍐";
  static PENCIL_AND_PAPER = "📝";
  static PEPPER = "🌶️";
  static PETRI_DISH = "🧫";
  static PICKAXE = "⛏️";
  static PIEZO = "🔊";
  static PIGEON = "🕊️";
  static PILL = "💊";
  static PINATA = "🪅";
  static PINCH = "🤏";
  static PINEAPPLE_SLICE = "🍍";
  static PING_PONG = "🏓";
  static PIRATE = "🏴‍☠️";
  static PLANT_IN_POT = "🪴";
  static PLATYPUS = "🦡";
  static PLUNGER = "🪠";
  static POPCORN_BUCKET = "🍿";
  static POTATO = "🥔";
  static PRETZEL = "🥨";
  static PROTOZOA = "🦠";
  static PUMPKIN = "🎃";
  static PUSHPIN = "📌";
  static RABBIT = "🐰";
  static RACCOON = "🦝";
  static RADIO = "📻";
  static RAIL_CAR = "🚃";
  static RAINBOW_FLAG = "🏳️‍🌈";
  static RAMEN = "🍜";
  static RAT = "🐀";
  static RECEIPT = "🧾";
  static RHINOCEROS = "🦏";
  static RICE = "🍚";
  static RING_BUOY = "🛟";
  static ROCK = "🪨";
  static ROOSTER = "🐓";
  static SAFETY_PIN = "🧷";
  static SAFETY_VEST = "🦺";
  static SALT = "🧂";
  static SANDAL = "👡";
  static SATELLITE_ANTENNA = "📡";
  static SAUROPOD = "🦕";
  static SCALES = "⚖️";
  static SCARF = "🧣";
  static SCORPION = "🦂";
  static SCREWDRIVER = "🪛";
  static SEAL = "🦭";
  static SEEDLING = "🌱";
  static SHAMROCK = "☘️";
  static SHRIMP = "🦐";
  static SKUNK = "🦨";
  static SLED = "🛷";
  static SLOTH = "🦥";
  static SNAIL = "🐌";
  static SNAKE = "🐍";
  static SNOWBOARDER = "🏂";
  static SNOWMAN = "☃️";
  static SOAP = "🧼";
  static SOCCER_BALL = "⚽";
  static SOCKS = "🧦";
  static SOFTBALL = "🥎";
  static SPADE = "♠️";
  static SPAGHETTI = "🍝";
  static SPARKLES = "✨";
  static SPARKLER = "🎇";
  static SPARKLING_HEART = "💖";
  static SPOON = "🥄";
  static SPORTS_MEDAL = "🏅";
  static STACKED_BOOKS = "📚";
  static STAPLER = "🗄️";
  static STOPWATCH = "⏱️";
  static STORM = "🌩️";
  static STRAWBERRY = "🍓";
  static SUNFLOWER = "🌻";
  static SUSHI = "🍣";
  static SWAN = "🦢";
  static SWEAT_DROPLETS = "💦";
  static T_REX = "🦖";
  static TACO = "🌮";
  static TAKEOUT_BOX = "🥡";
  static TAMALE = "🫔";
  static TANGERINE = "🍊";
  static TAXI = "🚕";
  static TEAPOT = "🫖";
  static TEDDY_BEAR = "🧸";
  static TENNIS = "🎾";
  static THERMOMETER = "🌡️";
  static THONG_SANDAL = "🩴";
  static THREAD = "🧵";
  static TICKET = "🎟️";
  static TIGER = "🐯";
  static TOILET = "🚽";
  static TOMATO = "🍅";
  static TONGUE = "👅";
  static TRACTOR = "🚜";
  static TROLLEYBUS = "🚎";
  static TSHIRT = "👕";
  static TULIP = "🌷";
  static TURKEY = "🦃";
  static TURTLE = "🐢";
  static UNICORN = "🦄";
  static VIOLIN = "🎻";
  static VOLLEYBALL = "🏐";
  static WAFFLE = "🧇";
  static WASTEBASKET = "🗑️";
  static WATCH = "⌚";
  static WATER_BUFFALO = "🐃";
  static WATER_POLO = "🤽";
  static WATER_WAVE = "🌊";
  static WATERFALL = "🧗‍♀️";
  static WINDMILL = "🏰";
  static WINDOW = "🪟";
  static WINE_GLASS = "🍷";
  static WOOD = "🪵";
  static WORM = "🪱";
  static WREATH = "🎍";
  static WRITING_HAND = "✍️";
  static X_RAY = "🦴";
  static YARN = "🧶";
  static YO_YO = "🪀";
  static ZEBRA = "🦓";
  static ZOMBIE = "🧟";
  ////////////////////////
}
async function loadAssets() {
  try {
    const bgImages = await loadBgImages();
    const spriteImages = await loadSprites();
    return { bgImages, spriteImages, icons: Icons3 };
  } catch (error) {
    console.error("Error loading assets:", error);
    throw error;
  }
}
class SlideObject {
  static Canvas = Canvas;
  static Eqs = Eqs;
  static EqPlayer = EqPlayer;
  static EqsEditor = EqsEditor;
  static loadAssets = loadAssets;
  static CanvasPlayer = CanvasPlayer;
  static CanvasEditor = CanvasEditor;
  static UnknownslideTypePlayer = UnknownslideTypePlayer;
  static UnknownslideTypeEditor = UnknownslideTypeEditor;
  // static upgrade2Basic(slides) {
  //     return upgrade2Basic(slides);
  // }
  static getNewItem(itemExtra = {}, name = "", content = "") {
    if (!name) {
      const uuidValue = uuid();
      const firstSegment = uuidValue.split("-")[0];
      name = firstSegment;
    }
    return {
      uuid: uuid(),
      //added on 31-may 2024 --not used yet 
      name,
      content,
      showAt: 0,
      hideAt: null,
      //added on 31-may 2024 --not used yet
      itemExtra
    };
  }
  static getNewSlide(type) {
    if (!this.availableSlideTypes().includes(type)) {
      throw new Error(`Invalid slide type: ${type}`);
    }
    if (type === "canvas") {
      return Canvas.getNewSlide();
    }
    if (type === "Eqs") {
      let slide = SlideObject.getDefaultSlide();
      slide.type = "Eqs";
      return slide;
    }
  }
  //This has the fields required at slide level.
  static getDefaultSlide() {
    return {
      uuid: uuid(),
      version: "basic",
      startTime: 0,
      endTime: 10,
      type: "",
      template: "",
      items: [],
      slideExtra: {}
    };
  }
  static availableSlideTypes() {
    return ["canvas", "Eqs"];
  }
}
export {
  CanvasPlayer as C,
  EqPlayer as E,
  SlideObject as S,
  ToolbarDiv as T,
  CanvasEditor as a,
  EqsEditor as b
};
