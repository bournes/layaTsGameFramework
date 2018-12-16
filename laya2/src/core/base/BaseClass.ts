/**
 * 获取一个单例
 * by jhj
 * 2018-11-11
 * QQ:8510001
 **/

export default class BaseClass {

    public constructor() { }

    /**
     * 获取一个单例
     * @returns {any}
     */
    
    public static getInstance(...args: any[]): any {
        let Class: any = this;
        if (!Class._instance) {
            let argsLen: number = args.length;
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