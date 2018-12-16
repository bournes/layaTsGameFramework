import AppL from "../../AppL";
import BaseModel from "../model/BaseModel";
import Logger from "../../utils/Logger";

/**
 * Controller基类
 *  by jhj
 * 2018-11-11
 * QQ:8510001
 */
 export default class BaseController {
    private _messages: any = {};
    private _model: BaseModel = null;

    public constructor() {
        this._messages = {};

    }

    /**
     * 注册本模块消息
     * @param {any} key 唯一标识
     * @param {Function} callback 侦听函数
     * @param {any} thisObj 侦听函数所属对象
     */
    public addListener(key: any, callback: Function, thisObj: any): void {
        this._messages[key] = [callback, thisObj];
    }

    /**
     * 注销本模块消息
     * @param {any} key 唯一标识
     */
    public removeListener(key: any): void {
        if (this._messages && this._messages[key]) {
            delete this._messages[key]
        }
    }

    /**
     * 触发本模块消息
     * @param {any} key 唯一标识
     * @param ...args:any[]
     */
    public dispatch(key: any, ...args: any[]): any {
        let listen: any = this._messages[key];
        if (listen) {
            return listen[0].apply(listen[1], args);
        }
        else {
            Logger.trace("消息" + key + "不存在侦听");
            return null;
        }
    }

    /**
    * 触发其他模块消息
    * @param {any} controllerKey 模块标识
    * @param {any} key 唯一标识
    * @param ...param:any[]
    */
    public dispatchController(controllerKey: number, key: any): any {
        return AppL.ControllerManager.dispatchController.apply(AppL.ControllerManager, arguments);
    }

    /**
     * 设置该模块使用的Model对象
     * @param {BaseModel} model
     */
    public setModel(model: BaseModel): void {
        this._model = model;
    }

    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    public getModel(): BaseModel {
        return this._model;
    }

    /**
     * 获取指定Controller的Model对象
     * @param {any} controllerKey Controller唯一标识
     * @returns {BaseModel}
     */
    public getControllerModel(controllerKey: number): BaseModel {
        return AppL.ControllerManager.getControllerModel(controllerKey);
    }
}
