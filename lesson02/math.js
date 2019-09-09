
function add(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function multiple(a, b){
    return a * b;
}

//按模块的形式把方法导出，才能测试
try{
    module.exports = {
        add,
        minus,
        multiple
    }
}catch(e){}   //解决在浏览器上打不了的问题
