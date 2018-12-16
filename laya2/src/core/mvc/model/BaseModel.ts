import BaseController from "../controller/BaseController";

/**
 * Model基类
 *  by jhj
 * 2018-11-11
 * QQ:8510001
 * 
 */
export default class BaseModel {
    private _controller:BaseController;

    /**
     * 构造函数
     * @param $controller 所属模块
     */
    public constructor($controller:BaseController) {
        this._controller = $controller;
        this._controller.setModel(this);
    }
}
