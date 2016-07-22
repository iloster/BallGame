var GameData = cc.Class({
    extends: cc.Component,

    properties: {
        gameTime:{
            get: function () {
                return this._gameTime;
            },
            set: function (value) {
                this._gameTime = value;
            }
        },   //游戏时间
        gameChance:{
             get: function () {
                return this._gameChance;
            },
            set: function (value) {
                this._gameChance = value;
            }
        }  //游戏次数
    },

    statics: {
        instance: null
    },

    onLoad: function () {
        GameData.instance = this;
    },
    
    // getInstance:function(){
    //     return GameData.instance
    // }
    
});
