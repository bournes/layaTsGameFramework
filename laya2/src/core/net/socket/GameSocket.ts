// import BaseSocket from "./BaseSocket";
// import AppL from "../../AppL";

// /** 
//  * GameSocket
// * jhj
// * 2018-11-11
// * QQ:8510001
// */
// class GameSocket extends BaseSocket {

//     public constructor() {
//         super();
//     }

//     /**
//      * 继承重写发送类，改为向消息中心发送消息
//      * cmd, data
//      */
//     public event(...args: any[]) {
//         super.event.apply(this, args);
//         AppL.MessageCenter.dispatch.apply(AppL.MessageCenter, args);
//     }

// }