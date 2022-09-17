// import { foo } from './input.js'
// /*#__PURE__*/foo()  //这段代码不会产生副作用，你可以移除它

//rollup 打包方法命令：npx rollup index.js -f esm -o dist.js
//这句命令的意思是，以input.js 文件为入口，输出ESM，输出的文件叫作dist.js

import utils from 'utils.js'
//注册错误处理程序
utils.registerErroeHandler((e) => {
    console.log(e)
})

utils.aoo(()=>{})
utils.boo(()=>{})