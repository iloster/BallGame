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
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    onStartGame:function(){
        cc.log("start game");
        cc.director.loadScene('GameScene');
    }
});
