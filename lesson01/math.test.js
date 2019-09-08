//01.编写测试文件
var result = add(3, 7);
var expected = 10;
if(result !== 10){
    throw Error(`3 + 7 应该等于 ${expected},但是结果却是 ${result}`);
}
var result = minus(3, 3);
var expected = 0;
if(result !== 0){
    throw Error(`3 - 3  应该等于 ${expected},但是结果却是 ${result}`);
}

//02.封装测试方法
 function expected(result) {
     return {
         toBe: function(actual) {
             if(result !== actual) {
                 throw new Error(`预期值和实际值不相等，预期${expected}-结果却是 ${result}`);
             }
         }
     }
}
//运行测试用例
expected(add(3,7)).toBe(6);
expected(minus(3,3)).toBe(0);



//03.为封装的测试方法添加情况判断和提示
function test(desc, fn) {
    try {
        fn();
        console.log(`${desc} 通过测试`);
    }catch(e) {
        //将函数报出的异常放到捕捉的错误提示里面
        console.log(`${desc} 没有通过测试，${e}`);
    }
}

//运行测试用例
test('测试加法 3+7', () => {
    expected(add(3, 7)).toBe(10);
});

test('测试减法 3-3', () => {
    expected(minus(3,3)).toBe(0);
});

