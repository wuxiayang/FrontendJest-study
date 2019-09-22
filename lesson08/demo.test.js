import { runCallback, createObject } from './demo';

test('测试runCallback',()=>{
    // const func = () => {
    //     return 'hello';
    // }
    // const func = jest.fn(()=>{
    //     return '456'
    // });  //mock函数，捕获函数的调用
    const func = jest.fn();  //mock函数，捕获函数的调用
    // func.mockReturnValueOnce('Dell');
    // func.mockReturnValueOnce('Lee');
    // func.mockReturnValueOnce('Hello');
    //链式调用
    // func.mockReturnValueOnce('Dell').mockReturnValueOnce('Lee').mockReturnValueOnce('Hello');
    func.mockReturnValue('Dell');
    runCallback(func);
    runCallback(func);
    // expect(func).toBeCalled();
    // expect(runCallback(func)).toBe('hello');
    // expect(func.mock.calls.length).toBe(2);
    expect(func.mock.calls[0]).toEqual(['abc']);
    expect(func.mock.results[0].value).toBe('Dell');
    console.log(func.mock);
});

test('测试 createObject', ()=>{
    const func = jest.fn();
    createObject(func);
    console.log(func.mock);
});