import HomeController from "../module/home/HomeController";
import BaseScene from "../../core/mvc/scene/BaseScene";
import AppL from "../../core/AppL";
import { ControllerConst } from "../consts/ControllerConst";
import { ViewConst } from "../consts/ViewConst";

/*
* name;
*/
export default class HomeScene extends BaseScene {

    constructor() {
        super();
    }

    /**
     * 进入Scene调用
     */
    public onEnter() {
        super.onEnter();

        //注册控制类
        AppL.ControllerManager.register(ControllerConst.HOME, new HomeController());

        //控制显示view
        AppL.ViewManager.show(ViewConst.HOME, this);
    }

    /**
     * 退出Scene调用
     */
    public onExit() {
        super.onExit();
    }

}