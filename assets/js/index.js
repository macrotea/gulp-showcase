/**
 * 类定义
 */
(function(window){
    var me = "macroteadd";

    /**
     * 定义人
     * @type {{age: number, name: string, getInfo: Function}}
     */
    var person = {
        age:123,
        name:me,
        getInfo:function(){
            return this.age + this.name;
        }
    };
    window.who = person;
})(window);
