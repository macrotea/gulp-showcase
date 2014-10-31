/**
 * 插件定义
 */
(function(){
    var name = "tea-plugin";
    /**
     * 插件
     * @type {{version: number, showInfo: Function}}
     */
    var plugin = {
        version:123,
        showInfo:function(){
            console.log(this.version + name);
        }
    };
    plugin.showInfo();
})();