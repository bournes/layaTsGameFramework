/*
* HomeController
* jhj
* 2018-11-11
* QQ:8510001
*/
import { SceneConst } from "./../../consts/SceneConst"
import AppL from "../../../core/AppL";
import BaseController from "../../../core/mvc/controller/BaseController";
import BaseProxy from "../../../core/mvc/proxy/BaseProxy";
import HomeView from "./HomeView";
import { ViewConst } from "../../consts/ViewConst";
export default class HomeController extends BaseController {
    public homeView;
    public homeProxy;
    public homeScene;

    constructor() {
        super();
        this.homeView = null;
        this.homeProxy = null;
        this.homeScene = null;

        this._init();
    }

    private _init() {
        this.homeScene = AppL.SceneManager.getScene(SceneConst.HOME);

        this.homeView = new HomeView(this, this.homeScene);
        AppL.ViewManager.register(ViewConst.HOME, this.homeView);

        this.homeProxy = new BaseProxy(this);
    }

}