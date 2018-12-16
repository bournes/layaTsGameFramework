/**
 * Sprite
 * jhj
 * 2018-11-11
 * QQ:8510001
 **/

export default class BaseSprite extends Laya.Sprite {

    public constructor() {
        super();
    }

    /**
     * 添加子对象，如果该view被摧毁不添加
     */
    // addChild(node: Node) {
    //     if (this.destroyed)
    //         return;
    //     super.addChild(node);
    // }

    /**
     * 获取单例
     */
    public static getInstance(...args) {
        var Class: any = this;
        if (!Class._instance) {
            var argsLen: number = args.length;
            switch (argsLen) {
                case 0:
                    Class._instance = new Class();
                    break;
                case 1:
                    Class._instance = new Class(args[0]);
                    break;
                case 2:
                    Class._instance = new Class(args[0], args[1]);
                    break;
                case 3:
                    Class._instance = new Class(args[0], args[1], args[2]);
                    break;
                case 4:
                    Class._instance = new Class(args[0], args[1], args[2], args[3]);
                    break;
                case 5:
                    Class._instance = new Class(args[0], args[1], args[2], args[3], args[4]);
                    break;
                case 6:
                    Class._instance = new Class(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
            }
        }
        return Class._instance;
    }

}