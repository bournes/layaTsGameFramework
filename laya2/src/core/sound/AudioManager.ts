import BaseClass from "../base/BaseClass";

/*
* Audio基类
* jhj
* 2018-11-11
* QQ:8510001
*/
export default class AudioManager extends BaseClass {

    private _isMute;
    private _isMuteMusic;
    private _isMuteSound;

    private _volumeMusic;
    private _volumeSound;
    /**
     * 存储在本地声音有关的设置key（字段字符串）
     * IS_MUTE 是否所有都静音{boolean}
     * IS_MUTE_MUSIC 是否背景音乐静音{boolean}
     * IS_MUTE_SOUND 是否音效静音{boolean}
     * VOLUME_MUSIC 背景音乐音量大小{number}
     * VOLUME_SOUND 音效音量大小{number}
     */
    public static IS_MUTE = "isMute";
    public static IS_MUTE_MUSIC = "isMuteMusic";
    public static IS_MUTE_SOUND = "isMuteSound";
    public static VOLUME_MUSIC = "volumeMusic";
    public static VOLUME_SOUND = "volumeSound";


    public constructor() {
        super();

        this._isMute = false;
        this._isMuteMusic = false;
        this._isMuteSound = false;

        this._volumeMusic = 1;
        this._volumeSound = 1;

        this._initData();
        this.save();
    }

    /**
     * 获取初始音乐基础信息，存储在本地浏览器中
     */
    private _initData() {
        let isMuteMusic = Laya.LocalStorage.getItem(AudioManager.IS_MUTE_MUSIC);
        this._isMuteMusic = isMuteMusic === "true" ? true : false;
        let isMuteSound = Laya.LocalStorage.getItem(AudioManager.IS_MUTE_SOUND);
        this._isMuteSound = isMuteSound === "true" ? true : false;
        let isMute = Laya.LocalStorage.getItem(AudioManager.IS_MUTE);
        this._isMute = isMute === "true" ? true : false;

        let volumeMusic = Laya.LocalStorage.getItem(AudioManager.VOLUME_MUSIC);
        this._volumeMusic = volumeMusic ? parseFloat(volumeMusic) : 1;
        let volumeSound = Laya.LocalStorage.getItem(AudioManager.VOLUME_SOUND);
        this._volumeSound = volumeSound ? parseFloat(volumeSound) : 1;

        Laya.SoundManager.muted = this.isMute;
        Laya.SoundManager.musicMuted = this.isMuteMusic;
        Laya.SoundManager.soundMuted = this.isMuteSound;
        Laya.SoundManager.musicVolume = this.volumeMusic;
        Laya.SoundManager.soundVolume = this.volumeSound;
    }

    /**
     * 销毁一个音乐
     * @param 音乐地址
     */
    public destroySound(url) {
        Laya.SoundManager.destroySound(url);
    }

    /**
     * 关闭所有音乐
     */
    public stopAll() {
        Laya.SoundManager.stopAll();
    }

    /**
     * 关闭所有音效
     */
    public stopAllSound() {
        Laya.SoundManager.stopAllSound();
    }

    /**
     * 关闭所有背景音效
     */
    public stopMusic() {
        Laya.SoundManager.stopMusic();
    }

    /**
     * 关闭单个音效
     * @param 音乐地址
     */
    public stopSound(url) {
        Laya.SoundManager.stopSound(url);
    }

    /**
     * 播放音效
     */
    public playSound(url, loops = 1, complete = null, soundClass = null, startTime = 0) {
        Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
    }

    /**
     * 播放背景音乐
     */
    public playMusic(url, loops = 0, complete = null, startTime = 0) {
        Laya.SoundManager.playMusic(url, loops, complete, startTime);
    }

    /**
     * 设置获取背景声音大小
     */
    public get volumeMusic() {
        return this._volumeMusic;
    }
    public set volumeMusic(value) {
        this._volumeMusic = value;
        Laya.SoundManager.setMusicVolume(value);
        this.save();
    }

    /**
     * 设置获取音效声音大小
     */
    public get volumeSound() {
        return this._volumeSound;
    }
    public set volumeSound(value) {
        this._volumeSound = value;
        Laya.SoundManager.setSoundVolume(value);
        this.save();
    }

    /**
     * 设置获取是否静音背景音乐
     */
    public get isMuteMusic() {
        return this._isMuteMusic;
    }
    public set isMuteMusic(value) {
        this._isMuteMusic = value;
        Laya.SoundManager.musicMuted = value;
        this.save();
    }

    /**
     * 设置获取是否静音音效音乐
     */
    public get isMuteSound() {
        return this._isMuteSound;
    }
    public set isMuteSound(value) {
        this._isMuteSound = value;
        Laya.SoundManager.soundMuted = value;
        this.save();
    }

    /**
     * 设置获取是否所有静音
     */
    public get isMute() {
        return this._isMute;
    }
    public set isMute(value) {
        this._isMute = value;
        Laya.SoundManager.muted = value;
        this.save();
    }

    /**
     * 保存数据到本地
     */
    public save() {
        Laya.LocalStorage.setItem(AudioManager.IS_MUTE, this.isMute);
        Laya.LocalStorage.setItem(AudioManager.IS_MUTE_MUSIC, this.isMuteMusic);
        Laya.LocalStorage.setItem(AudioManager.IS_MUTE_SOUND, this.isMuteSound);
        Laya.LocalStorage.setItem(AudioManager.VOLUME_MUSIC, this.volumeMusic);
        Laya.LocalStorage.setItem(AudioManager.VOLUME_SOUND, this.volumeSound);
    }

}

