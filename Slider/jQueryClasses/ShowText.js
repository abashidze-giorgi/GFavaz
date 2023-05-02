$.fn.TextClass = function(){

    this.text = "Hello, World!";
    return this;
};


$.fn.TextClass.prototype.getText=function(){
    return this.text;
}