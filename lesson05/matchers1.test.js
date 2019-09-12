//String匹配器
test('toMatch', () => {
    const str = 'http://www.dell-lee.com';
    expect(str).toMatch(/dell-lee/);
});

//Array  Set
test('toContain', () => {
    const arr = ['dell','lee','imooc'];
    const data = new Set(arr);
    expect(data).toContain('dell');
});


//异常
const throwNewErrorFunc = () => {
    throw new Error('this  is an new error');
}
test('toThrow', () => {
    // expect(throwNewErrorFunc).not.toThrow('this is a new error');
    expect(throwNewErrorFunc).toThrow('this  is an new error');
});
//两处的error信息要一致，否则报错