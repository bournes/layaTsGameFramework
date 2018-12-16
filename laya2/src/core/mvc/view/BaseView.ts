import AppL from "../../AppL";
import BaseSprite from "../../base/BaseSprite";
import ViewType from "./ViewType";

/*
 * View基类接口
 * by jhj
 * 2018-11-11
 * QQ:8510001
*/
export default class BaseView extends BaseSprite {

    private _controller;
    public _scene;
    private _isInit;
    private _resouce;

    /**
     * 构造函数
     * @param {BaseController} controller
     * @param {BaseScene} scene
     */
    public constructor(controller?:any, scene = AppL.StageUtils.stage) {
        super();

        this._controller = controller;
        this._scene = scene;
        this._isInit = false;
        this._resouce = null;
        //初始化这个view需要的资源
        this.initRes();
    }

    /**
     * 触发本模块消息
     * @param {any} key 唯一标识
     * @param ...args:any[]
     */
    public dispatch(...args: any[]) {
        return this._controller.dispatch.apply(this._controller, args);
    }

    /**
     * 触发其他模块消息
     * @param {number} controllerKey 模块标识
     * @param {any} key 唯一标识
     * @param ...args:any[]
     */
    public dispatchController(...args: any[]) {
        return this._controller.dispatchController.apply(this._controller, args);
    }

    /**
     * 子类继承必须实现，赋值加载资源
     * @param [{url: , type: }]
     */
    public initRes() {

    }

    /**
     * 对面板进行显示初始化，用于子类继承
     */
    public initView() {

    }

    /**
     * 对面板数据的初始化，用于子类继承
     */
    public initData() {

    }

    /**
     * 面板开启执行函数，用于子类继承
     * @param {BaseScene} scene 场景如果不需要更换指定场景，传值为null
     * @param {boolean} center 居中处理
     * @param ...param:any[]
     */
    public show(scene = null, center = false): void {
        //该view界面居中情况
        if (center) {
            this.x = (AppL.StageUtils.stageW - this.width) / 2;
            this.y = (AppL.StageUtils.stageH - this.height) / 2;
        }
        if (scene) {
            this.scene = scene;
        }
        if (this.scene) {
            this.scene.addView(this);
        }
        //resize尺寸变化监听事件
        this.onResize();
        AppL.StageUtils.stage.on(Laya.Event.RESIZE, this, this.onResize);
    }

    /**
     * 面板关闭执行函数，用于子类继承
     * @param ...args:any[]
     */
    public close(...args: any[]): void {
        if (this.scene) {
            this.scene.removeView(this);
        }
        else {
            this.removeSelf();
        }
        AppL.StageUtils.stage.off(Laya.Event.RESIZE, this, this.onResize);
    }

    /**
     * 屏幕尺寸变化时调用
     */
    public onResize() {

    }

    /**
     * 获取view窗口级别
     */
    public getLayer() {
        return ViewType.LAYER_WINDOW;
    }

    /**
     * 加载面板所需资源
     * @param {Function} callback
     * @param {any} thisObj
     */
    public loadResource(callback?: any, thisObj?: any): void {
        if (!this.resouce || this.resouce.length <= 0) {
            return;
        }
        AppL.EasyLoading.show();
        if (!this.isInit) {
            AppL.ResourceUtils.loadResource(this.resouce, () => {
                this.isInit = true;
                this.initView();
                AppL.EasyLoading.close();
                (callback) && (callback.call(thisObj));
            }, null, null);
        }
        else {
            AppL.EasyLoading.close();
            (callback) && (callback.call(thisObj));
        }
    }

    /**
     * 摧毁
     */
    public destroy(isDesChild = true): void {
        this._isInit = false;
        this._resouce = null;
        this._controller = null;
        this._scene = null;
        AppL.StageUtils.stage.off(Laya.Event.RESIZE, this, this.onResize);
        super.destroy(isDesChild);
    }

    /**
     * 获取设置是否初始化
     */
    public get isInit() {
        return this._isInit;
    }
    public set isInit(value) {
        this._isInit = value;
    }

    /**
     * 获取设置是否初始化
     */
    public get resouce() {
        return this._resouce;
    }
    public set resouce(value) {
        this._resouce = value;
    }

    /**
     * 获取view界面场景
     */
    public get scene() {
        return this._scene;
    }
    public set scene(value) {
        this._scene = value;
    }

}