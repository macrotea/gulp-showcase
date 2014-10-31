/**
 * 类定义
 */
(function(){
    var name = "macrotea";
    /**
     * 人
     * @type {{age: number, showInfo: Function}}
     */
    var person = {
        age:123,
        showInfo:function(){
            console.log(this.age + name);
        }
    };
    person.showInfo();
})();