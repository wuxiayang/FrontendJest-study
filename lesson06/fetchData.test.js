import  { fetchData } from './fetchData';

// test('fetchData 返回结果为 ｛ success："ok" ｝', (done) =>{
//     fetchData((data) => {
//         expect(data).toEqual({
//             Success: "ok"
//         });
//         done();
//     });
// });

// test('fetchData 返回结果为 ｛ success："ok" ｝', () =>{
//     return fetchData().then((response) => {
//         expect(response.data.Success).toEqual({
//             Success: "ok"
//         })
//     });
// });

// test('fetchData 返回结果为 404', () =>{
    // expect.assertions(1);
//     //添加预期必须通过的expect个数
//     //当返回的结果为404的时候，必须执行一次expect，expect.assertions(1);满足条件才算测试完成
//     return fetchData().catch((e) => {
//         console.log(e.toString());
//         expect(e.toString().indexOf('404')> -1).toBe(true);
//     });
// });

// test('fetchData 返回结果为 ｛ success："ok" ｝', () =>{
//     //expect(fetchData()).resolves拿到的是返回的所有请求结果
//     return expect(fetchData()).resolves.toMatchObject({
//         data: {
//             Success:"ok"
//         }
//     });
//     // return fetchData().then(res =>{
//     //     console.log(res);
//     // })
// });

// test('fetchData 返回结果为 404', () =>{
//     return expect(fetchData()).rejects.toThrow();
// });

// test('fetchData 返回结果为 ｛ success："ok" ｝', async() =>{
//     await expect(fetchData()).resolves.toMatchObject({
//         data: {
//             Success:"ok"
//         }
//     });
// });

// test('fetchData 返回结果为 404', async() =>{
//     await expect(fetchData()).rejects.toThrow();
// });

// test('fetchData 返回结果为 ｛ success："ok" ｝', async() =>{
//     const response = await fetchData();
//     expect(response.data).toEqual({
//         Success:"ok"
//     })
// });

test('fetchData 返回结果为 404', async() =>{
    expect.assertions(1);
    try {
        await fetchData();
    } catch(e) {
        expect(e.toString()).toEqual('Error: Request failed with status code 404');
        console.log(e.toString());
    }
    
});