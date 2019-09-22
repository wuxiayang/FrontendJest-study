import Counter from './Counter';

describe('Counter的测试代码', () => {
    console.log('describe 1');
    let  counter = null;
    //在测试之前对一些内容进入初始化，使用jest的钩子函数
    beforeAll(() => {
        console.log('生命周期---BeforeAll--在测试用例执行之前')
    })
    
    beforeEach(() => {
        console.log('生命周期---BeforeEach--在每一个测试用例执行之前');
        //实例化对象
        counter = new Counter();
    })
    
    afterEach(() => {
        console.log('生命周期---AfterEach--在每一个测试用例执行之后');
    })
    
    afterAll(()=> {
        console.log('生命周期---AfterAll--在测试用例执行结束之后')
    })
    
    describe('测试增加相关的代码', () => {
        console.log('describe 2');
        beforeEach(() => {
            console.log('生命周期---BeforeEach--testadd');
            //实例化对象
            counter = new Counter();
        })

        test.only('测试Counter中的 addOne方法',()=>{
            console.log('测试Counter中的 addOne方法');
            counter.addOne();
            expect(counter.number).toBe(1);
        });
        
        test('测试Counter中的 addTwo方法',()=>{
            console.log('测试Counter中的 addTwo方法');
            counter.addTwo();
            expect(counter.number).toBe(2);
        });
    });
    
    describe('测试减少相关的代码', () => {
        console.log('describe 3');
        test('测试Counter中的 minusOne方法',()=>{
            console.log('测试Counter中的 minusOne方法');
            counter.minusOne();
            expect(counter.number).toBe(-1);
        });
        
        test('测试Counter中的 minusTwo方法',()=>{
            console.log('测试Counter中的 minusTwo方法');
            counter.minusTwo();
            expect(counter.number).toBe(-2);
        });
    });    
});




