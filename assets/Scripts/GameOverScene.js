var GameData = require("GameData")
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var startTime = GameData.gameTime;
        var endTime = new Date().getTime();
        cc.log("cost time:"+(endTime - startTime));
        this.m_gameResultTxt = cc.find("Canvas/gameResultTxt").getComponent(cc.Label);
        if(GameData.gameResult == 1){
            this.m_gameResultTxt.string = "Successful!";
        }else{
            this.m_gameResultTxt.string = "Failed!";
        }
        this.m_gameTimeTxt = cc.find("Canvas/gameTimeTxt").getComponent(cc.Label);
        this.m_gameTimeTxt.string = (endTime - startTime)/1000 + "s";
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
