import Logger from "../utils/Logger";
import BaseClass from "../base/BaseClass";

/**
 * Controller管理类
 *  by jhj
 * 2018-11-11
 * QQ:8510001
 */
export default class ControllerManager extends BaseClass {
    private _modules: any;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._modules = {};
    }

    /**
     * 清空处理
     */
    public clearAll() {
        this._modules = {};
    }

    /**
     * 动态添加的Controller
     * @param {any} controllerKey 唯一标识
     * @param {BaseController} controller
     */
    public register(controllerKey, controller) {
        if (this.isExists(controllerKey))
            return;
        this._modules[controllerKey] = controller;
    }

    /**
     * 动态移除Controller
     * @param {any} controllerKey 唯一标识
     */
    public unregister(controllerKey) {
        if (!this.isExists(controllerKey))
            return;
        this._modules[controllerKey] = null;
        delete this._modules[controllerKey];
    }

    /**
     * 是否已经存在Controller
     * @param {any} controllerKey 唯一标识
     * @return {Boolean}
     */
    public isExists(controllerKey) {
        return !!this._modules[controllerKey];
    }

    /**
     * 跨模块消息传递
     * @param {any} controllerKey Controller唯一标识
     * @param {any} key 消息唯一标识
     * @param ...param:any[]
     */
    public dispatchController(controllerKey, ...args) {
        let controller = this._modules[controllerKey];
        if (controller) {
            return controller.dispatch.apply(controller, args);
        }
        else {
            Logger.trace("模块" + controllerKey + "不存在");
            return null;
        }
    }

    /**
     * 获取指定Controller的Model对象
     * @param {any} controllerKey Controller唯一标识
     * @returns {BaseModel}
     */
    public getControllerModel(controllerKey) {
        let manager = this._modules[controllerKey];
        if (manager) {
            return manager.getModel();
        }
        return null;
    }

    /**
     * 获取指定Controller对象
     * @param {any} controllerKey Controller唯一标识
     * @returns {BaseController}
     */
    public getController(controllerKey) {
        let controller = this._modules[controllerKey];
        if (controller) {
            return controller;
        }
        return null;
    }
}
