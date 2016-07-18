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
       cc.log("GameScene.onLoad");
       this.initOtherBall();
       this.initMyBall();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    initOtherBall: function(){
        cc.log("GameScene.initOtherBall");
        this.m_otherBall = cc.find("Canvas/otherBall");
        this.m_otherBall.setPosition(-320,0);
        var action = cc.repeatForever(
             cc.sequence(
                 cc.moveBy(1, 640, 0), 
                 cc.moveBy(1, -640, 0)
             ));
        this.m_otherBall.runAction(action);
    },
    
    initMyBall:function(){
        cc.log("GameScene.initMyBall");
        this.m_myBall = cc.find("Canvas/myBall"); //获取自己的球
         this.m_myBall.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("touch start");
        }, this);
        this.m_myBall.on(cc.Node.EventType.TOUCH_END, function (event) {
            cc.log("touch end");
        }, this);
          this.m_myBall.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
             //console.log("touch move:"+event.getLocation().x);
             this.m_myBall.x += event.getDeltaX();
             this.m_myBall.y += event.getDeltaY();
        }, this);
        this.m_myBall.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
             cc.log("touch cancel");
        }, this);
    },
    
});
