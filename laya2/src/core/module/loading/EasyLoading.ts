import AppL from "../../AppL";
import BaseClass from "../../base/BaseClass";
import ResourceType from "../../consts/ResourceType";

/**
 * 动态加载类
 * by jhj
 * 2018-11-11
 * QQ:8510001
 **/

export default class EasyLoading extends BaseClass {

    private content: Laya.Sprite = null;
    private uiBg = null;
    private uiImageContainer = null;


    constructor() {
        super();
        this.initView();
    }

    /**
     * 显示加载旋转界面
     */
    public show() {
        AppL.StageUtils.stage.addChild(this.content);
        this.onResize();
        Laya.timer.clearAll(this);
        Laya.timer.loop(200, this, this.enterFrame);
        AppL.StageUtils.stage.on(Laya.Event.RESIZE, this, this.onResize);
    }

    /**
     * 关闭加载旋转界面
     */
    public close() {
        AppL.StageUtils.stage.off(Laya.Event.RESIZE, this, this.onResize);
        Laya.timer.clearAll(this);
        if (this.content) {
            this.uiBg.graphics.clear();
            this.uiImageContainer.rotation = 0;
            this.content.removeSelf();
        }
    }

    /**
     * 更新背景黑色
     */
    public initBG() {
        let _width = AppL.StageUtils.stageW;
        let _height = AppL.StageUtils.stageH;
        this.uiBg.graphics.clear();
        this.uiBg.graphics.drawRect(0, 0, _width, _height, "#000000");
        this.uiBg.size(_width, _height);
        this.content.size(_width, _height);
    }

    /**
     * 旋转
     */
    public enterFrame() {
        let rota = this.uiImageContainer.rotation + 30;
        rota = rota % 360;
        this.uiImageContainer.rotation = rota;
    }

    /**
     * 适配
     */
    public onResize() {
        this.initBG();
        this.uiImageContainer.pos(this.uiBg.width >> 1, this.uiBg.height >> 1);
    }

    initView() {
        let self = this;

        self.content = AppL.DisplayUtils.createSprite(0, 0, null);
        self.content.mouseEnabled = true;

        self.uiBg = AppL.DisplayUtils.createSprite(0, 0, self.content);
        self.uiBg.alpha = 0.4;
        self.uiImageContainer = AppL.DisplayUtils.createSprite(0, 0, self.content);

        let url = AppL.ResourceUtils.getUrl("res/loading", "load_Reel", ResourceType.PNG);
        AppL.DisplayUtils.imageUrlLoad(url, function () {
            let img = AppL.DisplayUtils.createImage(0, 0, url, self.uiImageContainer);
            img.pivot(img.width >> 1, img.height >> 1);
        }, null);
    }




}