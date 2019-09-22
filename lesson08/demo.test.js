import { runCallback, createObject, getData } from './demo';
import axios from 'axios';
jest.mock('axios');

test.only('测试runCallback',()=>{
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
    // // func.mockReturnValue('Dell');
    // func.mockImplementation(() => {
    //     console.log('122');
    //     return 'Dell'
    // });
    // func.mockImplementation(() => {
    //     return this;
    // });
    // func.mockReturnThis();
    runCallback(func);
    runCallback(func);
    // expect(func).toBeCalled();
    // expect(runCallback(func)).toBe('hello');
    // expect(func.mock.calls.length).toBe(2);
    expect(func.mock.calls[0]).toEqual(['abc']);
    expect(func).toBeCalledWith('abc');
    // expect(func.mock.results[0].value).toBe('Dell');
    // expect(func.mock.results[0].value).toBeUndefined();
    console.log(func.mock);
});

test('测试 createObject', ()=>{
    const func = jest.fn();
    createObject(func);
    console.log(func.mock);
});

test('测试 getData', async ()=>{
    //单次请求返回
    axios.get.mockResolvedValueOnce({data: 'hello'})
    //多次请求返回
    axios.get.mockResolvedValueOnce({data: 'world'})
    //不希望发真正的ajax请求
    await getData().then((data) => {
        expect(data).toBe('hello');
    })
    await getData().then((data) => {
        expect(data).toBe('world');
    })
});