import AppL from "../AppL";

/**  
* SwitchButton工具类
* jhj
* 2018-11-11
* QQ:8510001
*/
export default class SwitchButton extends Laya.Sprite {
    private _btn;
    private _bg;
    private _isOpen;
    private _downPointX;
    //开关按钮事件
    public static OPEN = 'open';
    public static CLOSE = 'close';

    constructor() {
        super();

        this._btn = null;
        this._bg = null;
        //是否开状态
        this._isOpen = true;
        //记录按钮点下时间x位置
        this._downPointX = null;
        this._initView();
    }

    //事件处理
    private _onHandle(event) {
        event.stopPropagation();
        let target = event.target;
        let type = event.type;
        switch (target) {
            case this._bg:
                if (type == Laya.Event.CLICK) {
                    this._switch();
                }
                else {
                    this._mouseMove(event.stageX);
                }
                break;
            case this._btn:
                if (type == Laya.Event.MOUSE_DOWN) {
                    this._downPointX = event.stageX;
                    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._onHandle);
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this._onHandle);
                    this._btn.on(Laya.Event.CLICK, this, this._onHandle);
                }
                else if (type == Laya.Event.MOUSE_UP) {
                    this._closeStageEvent();
                }
                else if (type == Laya.Event.CLICK) {
                    this._closeStageEvent();
                    this._switch();
                }
                break;
            default:
                if (type == Laya.Event.MOUSE_UP) {
                    this._closeStageEvent();
                }
                else {
                    this._mouseMove(event.stageX);
                }
                break;
        }
    }

    /**
     * 判断移动逻辑
     * @param {number} mouseStageX
     */
    private _mouseMove(mouseStageX) {
        if (this._downPointX) {
            let _x = this._downPointX - mouseStageX;
            if (_x > 30) {
                if (!this.isOpen) {
                    this._openBtn();
                    this._downPointX = mouseStageX;
                }
            }
            else if (_x < -30) {
                if (this.isOpen) {
                    this._closeBtn();
                    this._downPointX = mouseStageX;
                }
            }
        }
    }

    /**
     * 关闭舞台滑动事件
     */
    private _closeStageEvent() {
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._onHandle);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._onHandle);
        this._downPointX = null;
    }

    /**
     * 开动画
     */
    private _openBtn() {
        this.isOpen = true;
        Laya.Tween.clearAll(this._btn);
        Laya.Tween.to(this._btn, { x: 0 }, 200);
        AppL.DisplayUtils.imageToTexture("res/switchButton/openBG.png", this._bg);
        let event = new Laya.Event();
        event.type = SwitchButton.OPEN;
        event.target = this;
        this.event(SwitchButton.OPEN, event);
    }

    /**
     * 关动画
     */
    private _closeBtn() {
        this.isOpen = false;
        Laya.Tween.clearAll(this._btn);
        Laya.Tween.to(this._btn, { x: 100 }, 200);
        AppL.DisplayUtils.imageToTexture("res/switchButton/closeBG.png", this._bg);
        let event = new Laya.Event();
        event.type = SwitchButton.CLOSE;
        event.target = this;
        this.event(SwitchButton.CLOSE, event);
    }

    /**
     * 开关控制
     */
    private _switch() {
        if (this.isOpen) {
            this._closeBtn();
        }
        else {
            this._openBtn();
        }
    }

    /**
     * 设置开关状态
     */
    public setStatus(isOpen) {
        Laya.Tween.clearAll(this._btn);
        this.isOpen = isOpen;
        if (isOpen) {
            this._btn.x = 0;
            AppL.DisplayUtils.imageToTexture("res/switchButton/openBG.png", this._bg);
        }
        else {
            this._btn.x = 100;
            AppL.DisplayUtils.imageToTexture("res/switchButton/closeBG.png", this._bg);
        }
    }

    public set isOpen(isOp) {
        this._isOpen = isOp;
        this._btn.off(Laya.Event.CLICK, this, this._onHandle);
    }

    public get isOpen() {
        return this._isOpen;
    }

    public initEvent() {
        this._bg.on(Laya.Event.CLICK, this, this._onHandle);
        this._btn.on(Laya.Event.MOUSE_UP, this, this._onHandle);
        this._btn.on(Laya.Event.MOUSE_DOWN, this, this._onHandle);
    }

    public removeEvent() {
        this._downPointX = null;
        this._bg.off(Laya.Event.CLICK, this, this._onHandle);
        this._btn.off(Laya.Event.MOUSE_UP, this, this._onHandle);
        this._btn.off(Laya.Event.MOUSE_DOWN, this, this._onHandle);
        this._btn.off(Laya.Event.CLICK, this, this._onHandle);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._onHandle);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._onHandle);
    }

    private _initView() {
        this._bg = AppL.DisplayUtils.createImage(0, 0, "res/switchButton/openBG.png", this);
        this._btn = AppL.DisplayUtils.createImage(0, -6, "res/switchButton/btn.png", this);
    }

}
