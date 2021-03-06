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
       cc.log("GameScene.onLoad");
       this.initOtherBall();
       this.initMyBall();
       GameData.gameTime = new Date().getTime();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    initOtherBall: function(){
        cc.log("GameScene.initOtherBall");
        this.m_otherBall = cc.find("Canvas/otherBall");
        this.m_otherBall1 = cc.find("Canvas/otherBall1");
        this.m_otherBall2 = cc.find("Canvas/otherBall2");
        this.m_otherBall3 = cc.find("Canvas/otherBall3");
        
        this.m_otherBall.setPosition(-320,-240);
        this.m_otherBall1.setPosition(320,-80);
        this.m_otherBall2.setPosition(-320,80);
        this.m_otherBall3.setPosition(320,240);
        //this.m_otherBall4.setPosition(-320,320);
        
        var action = cc.repeatForever(
             cc.sequence(
                 cc.moveBy(2, 640, 0), 
                 cc.moveBy(2, -640, 0)
             ));
        var action1 = cc.repeatForever(
             cc.sequence(
                 cc.moveBy(2, -640, 0),
                 cc.moveBy(2, 640, 0)
             ));
        var action2 = cc.repeatForever(
             cc.sequence(
                 cc.moveBy(2, 640, 0), 
                 cc.moveBy(2, -640, 0)
             ));
        var action3 = cc.repeatForever(
             cc.sequence(
                 cc.moveBy(2, -640, 0),
                 cc.moveBy(2, 640, 0)
             ));
        this.m_otherBall.runAction(action);
        this.m_otherBall1.runAction(action1);
        this.m_otherBall2.runAction(action2);
        this.m_otherBall3.runAction(action3);
          
    },
    
    initMyBall:function(){
        cc.log("GameScene.initMyBall");
        this.m_myBall = cc.find("Canvas/myBall"); //获取自己的球
        this.m_myBall.setPosition(-220,-420);
         this.m_myBall.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("touch start");
        }, this);
        this.m_myBall.on(cc.Node.EventType.TOUCH_END, function (event) {
            cc.log("touch end "+this.m_myBall.y);
            this.checkGameOver()
        }, this);
          this.m_myBall.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
             //console.log("touch move:"+event.getLocation().x);
             if(this.checkBox(event))
             {
                this.m_myBall.x += event.getDeltaX();
                this.m_myBall.y += event.getDeltaY();
             }
        }, this);
        this.m_myBall.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
             cc.log("touch cancel");
        }, this);
    },
    checkBox:function(event){
      var x = this.m_myBall.x + event.getDeltaX();
      var y = this.m_myBall.y + event.getDeltaY();
      cc.log("x="+x+",y="+y);
      if(x<-270||x>270||y<-430||y>430)
        return false;
      if(x>-210&&(y>-480&&y<-310))
        return false;
      else if(x<210&&y>310&&y<480)
        return false;
      else
        return true;
    },
    checkGameOver:function(){
        if(this.m_myBall.y>320){
            GameData.gameResult = 1;
            cc.director.loadScene('GameOverScene');
        }
    }
});
