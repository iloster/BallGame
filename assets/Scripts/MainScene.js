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
        cc.director.preloadScene('GameScene', function () {
            cc.log('Next scene preloaded');
        });
        this.m_bg = cc.find("Canvas/bg");
        this.m_bg.on(cc.Node.EventType.TOUCH_END, function (event) {
          // this.checkGameOver()
          this.onStartGame();
        }, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    onStartGame:function(){
        cc.log("start game");
        cc.director.loadScene('GameScene');
    }
});
