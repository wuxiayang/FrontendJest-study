//运行测试用例 jest自带test和expect方法
//测试用例
// test('测试加法 3+7', () => {
//     //toBe为匹配器  matchers
//     // expect(10).toBe(10);
//     //toBe相当于js中的 object.is  ===
//     const a = { one : 1 };
//     expect(a).toBe({ one : 1 });
// });

// test('测试加法 3+7', () => {
//     //toEqual为匹配器  
//     const a = { one : 1 };
//     expect(a).toEqual({ one : 1 });
// });

// test('测试加法 3+7', () => {
//     //toEqual为匹配器 
//     // const a = null;
//     const a = undefined;
//     expect(a).toBeNull();
// });

//真假有关的匹配器
//toBeUndefined为匹配器 
// test('toBeUndefined', () => {
//     const a = undefined;
//     expect(a).toBeUndefined();
// });

//toBeDefined为匹配器 
// test('toBeDefined', () => {
//     const a = 1;
//     expect(a).toBeDefined();
// });

//toBeTruthy为匹配器 
// test('toBeTruthy', () => {
//     const a = 1;
//     // const a = null;
//     expect(a).toBeTruthy();
// });

//toBeFalsy为匹配器 
// test('toBeFalsy', () => {
//     // const a = 1;
//     const a = 0;
//     expect(a).toBeFalsy();
// });

// test('not', () => {
//     const a = 1;
//     // const a = 0;
//     expect(a).not.toBeFalsy();
// });

//数字相关的匹配器
// test('toBeGreaterThan', () => {
//     const count = 10;
//     expect(count).toBeGreaterThan(3);
// });
// test('toBeLessThan', () => {
//     const count = 10;
//     expect(count).toBeLessThan(13);
// });
// test('toBeGreaterThanOrEqual', () => {
//     const count = 10;
//     expect(count).toBeGreaterThanOrEqual(8);
// });
// test('toBeLessThanOrEqual', () => {
//     const count = 10;
//     expect(count).toBeLessThanOrEqual(14);
// });
// test('toBeCloseTo', () => {
//     const firstNumber = 0.1;
//     const secondNumber = 0.2;
//     // expect(firstNumber + secondNumber).toEqual(0.3);
//     expect(firstNumber + secondNumber).toBeCloseTo(0.3);
// });

//String匹配器
// test('toMatch', () => {
//     const str = 'http://www.dell-lee.com';
//     expect(str).toMatch(/dell-lee/);
// });

//Array  Set
// test('toContain', () => {
//     const arr = ['dell','lee','imooc'];
//     const data = new Set(arr);
//     expect(data).toContain('dell');
// });


//异常
const throwNewErrorFunc = () => {
    throw new Error('this  is a new error');
}
test('toThrow', () => {
    // expect(throwNewErrorFunc).not.toThrow('this is a new error');
    expect(throwNewErrorFunc).not.toThrow(/this is a new error/);
});
//两处的error信息要一致，否则报错