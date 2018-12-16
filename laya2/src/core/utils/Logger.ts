import AppL from "../AppL";

/**  
* Log工具类
* jhj
* 2018-11-11
* QQ:8510001
*/
export default class Logger {

    constructor() { }

    public static trace(...args: any[]) {
        if (AppL.DebugUtils.isDebug) {
            console.log.apply(console, args);
        }
    }

}