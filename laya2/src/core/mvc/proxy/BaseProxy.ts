import AppL from "../../AppL";
import BaseController from "../controller/BaseController";

/**
 * Proxy基类
 * by jhj
 * 2018-11-11
 * QQ:8510001
 */
export default class BaseProxy {
    private _controller: BaseController;

    /**
     * 构造函数
     * @param $controller 所属模块
     */
    public constructor($controller: BaseController) {
        this._controller = $controller;
    }

    /**
     * 触发本模块消息
     * @param {any} key 唯一标识
     * @param ...args:any[]
     */
    public dispatch(key: any, ...args: any[]): any {
        return this._controller.dispatch.apply(this._controller, arguments);
    }

    /**
     * 触发其他模块消息
     * @param {number} controllerKey 模块标识
     * @param {any} key 唯一标识
     * @param ...param:any[]
     */
    public dispatchController(controllerKey: number, key: any): any {
        return this._controller.dispatchController.apply(this._controller, arguments);
    }

    /**
     * 注册从服务器返回消息的监听
     * @param {any} cmd 消息标识
     * @param {Function} callback 处理函数
     * @param {any} thisObj 处理函数所属对象
     */
    public addListener(cmd: any, callback: Function, thisObj: any): void {
        AppL.MessageCenter.addListener(cmd, callback, thisObj);
    }

    /**
     * 注册从服务器返回消息的监听，仅一次，执行完成后删除
     * @param {string} cmd 消息标识
     * @param {Function} callbackFunc 处理函数
     * @param {any} callbackObj 处理函数所属对象
     */
    public addListenerOnce(cmd: any, callbackFunc: Function, callbackObj: any): void {
        let callback: Function = function (): void {
            this.removeListener(cmd, callback, this);
            callbackFunc.apply(callbackObj, arguments);
        }
        this.addListener(cmd, callback, this);
    }

    /**
     * 移除服务端返回消息的监听
     * @param {string} cmd 消息标识
     * @param {Function} callbackFunc 处理函数
     * @param {any} callbackObj 处理函数所属对象
     */
    public removeListener(cmd: any, callbackFunc: Function, callbackObj: any): void {
        AppL.MessageCenter.removeListener(cmd, callbackFunc, callbackObj);
    }

    /**
     * 发送消息到Socket服务器
     * @param {string} cmd 指令
     * @param {Object} msg 消息参数内容
     */
    public sendSocketMsg(cmd: any, msg: any): void {
      //  AppL.Socket.post(cmd, msg);
    }

    /**
     * 发送消息到Http服务端
     * @param {string} cmd 消息标识 例如: User.login
     * @param {Object} msg 消息参数 例如: let msg:any = {"uName":uName, "uPass":uPass};
     */
    public sendHttpMsg(cmd, msg) {

    }
}
