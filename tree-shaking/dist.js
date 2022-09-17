import utils from 'utils.js';

// import { foo } from './input.js'
//注册错误处理程序
utils.registerErroeHandler((e) => {
    console.log(e);
});

utils.aoo(()=>{});
utils.boo(()=>{});
