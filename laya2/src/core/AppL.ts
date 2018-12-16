/*
* APPL入口
* jhj
* 2018-11-11
* QQ:8510001
*/
import ControllerManager from "./mvc/ControllerManager";
import EasyLoading from "./module/loading/EasyLoading";
import MessageCenter from "./net/MessageCenter";
import DisplayUtils from "./utils/DisplayUtils";
import FontManager from "./utils/FontManager";
import ViewManager from "./mvc/ViewManager";
import SceneManager from "./mvc/SceneManager";
import StageUtils from "./utils/StageUtils";
import ClassManager from "./utils/ClassManager";
import AudioManager from "./sound/AudioManager";
import ArrayUtils from "./utils/ArrayUtils";
import CommonUtils from "./utils/CommonUtils";
import EffectUtils from  "./utils/EffectUtils";
import DateUtils from "./utils/DateUtils";
import DebugUtils from "./utils/DebugUtils";
import MathUtils from "./utils/MathUtils";
import StringUtils from "./utils/StringUtils";
import RandomUtils from "./utils/RandomUtils";
import ResourceUtils from "./utils/ResourceUtils";


export default class AppL {

    public constructor() { }

    /**
     * 生成获取类
     */
    public static get ClassManager() {
        return ClassManager.getInstance();
    }

    /**
     * font字体注册
     */
    public static get FontManager() {
        return FontManager.getInstance();
    }

    /**
     * view控制
     */
    public static get ViewManager() {
        return ViewManager.getInstance();
    }

    /**
     * 场景控制
     */
    public static get SceneManager() {
        return SceneManager.getInstance();
    }

    /**
     * 消息控制中心
     */
    public static get MessageCenter() {
        return MessageCenter.getInstance();
    }

    /**
     * 游戏socket
     */
    public static get Socket() {
        //  return GameSocket.getInstance();
        return;
    }

    /**
     * 单例音乐控制类型
     */
    public static get AudioManager() {
        return AudioManager.getInstance();
    }

    /**
     * 单例获取控制类
     */
    public static get ControllerManager() {
        return ControllerManager.getInstance();
    }

    /**
     * 单例获取protobuf控制类
     */
    // public static get ProtobufManager() {
    //     return ProtobufManager.getInstance();
    // }

    /**
     * 单例获取公共加载旋转界面类
     */
    public static get EasyLoading() {
        return EasyLoading.getInstance();
    }

    /**
     * 单例获取数组工具类
     */
    public static get ArrayUtils() {
        return ArrayUtils.getInstance();
    }

    /**
     * 单例获取其他工具类
     */
    public static get CommonUtils() {
        return CommonUtils.getInstance();
    }

    /**
    * 单例获取时间工具类
    */
    public static get DateUtils() {
        return DateUtils.getInstance();
    }

    /**
     * 单例获取调试工具类
     */
    public static get DebugUtils() {
        return DebugUtils.getInstance();
    }

    /**
     * 单例获取显示容器工具类
     */
    public static get DisplayUtils() {
        return DisplayUtils.getInstance();
    }

    /**
     * 单例获取特效工具类
     */
    public static get EffectUtils() {
        return EffectUtils.getInstance();
    }

    /**
     * 单例获取number处理工具类
     */
    public static get MathUtils() {
        return MathUtils.getInstance();
    }

    /**
     * 单例获取随机工具类
     */
    public static get RandomUtils() {
        return RandomUtils.getInstance();
    }

    /**
     * 单例获取加载工具类，注：所有加载都通过这个加载
     */
    public static get ResourceUtils() {
        return ResourceUtils.getInstance();
    }

    /**
     * 单例获取舞台工具类（包含：舞台初始化、舞台宽高获取等）
     */
    public static get StageUtils() {
        return StageUtils.getInstance();
    }

    /**
     * 单例获取字符串工具类
     */
    public static get StringUtils() {
        return StringUtils.getInstance();
    }

    /**
     * 单例获取md5加密工具类
     */
    // public static get MD5() {
    //     return MD5.getInstance();
    // }

    /**
     * 单例获取sha1加密工具类
     */
    // public static get SHA1() {
    //     return SHA1.getInstance();
    // }

}