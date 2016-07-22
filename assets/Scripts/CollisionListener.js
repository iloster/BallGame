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
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    },
    
    onCollisionEnter: function (other) {
        this.node.color = cc.Color.RED;
    },
    
    onCollisionStay: function (other) {
        // console.log('on collision stay');
    },
    
    onCollisionExit: function () {

    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
