import * as app from "../lib/app.js";
import Model from "./Model.js"
import View from "./View.js"
import Controller from "./Controller.js"

"use strict"

/*
  Example module
*/
export default class {

    constructor() {
        return app.add("commentForm", Model, View, Controller);
    }

};