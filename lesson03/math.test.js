import  { add, minus, multiple }  from './math.js';

//运行测试用例 jest自带test和expect方法
test('测试加法 3+7', () => {
    expect(add(3, 7)).toBe(10);
});

test('测试减法 3-3', () => {
    expect(minus(3,3)).toBe(0);
});

