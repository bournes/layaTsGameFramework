import BaseClass from "../base/BaseClass";

/**  
* Debug工具类
* jhj
* 2018-11-11
* QQ:8510001
*/
export default class DebugUtils extends BaseClass {
    private _isDebug;
    constructor() {
        super();
        this._isDebug = null;
    }

    get isDebug() {
        return !!this._isDebug
    }

    set isDebug(value) {
        this._isDebug = value;
    }

}