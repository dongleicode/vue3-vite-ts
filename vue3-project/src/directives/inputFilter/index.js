/**
 *  实现功能
 *  1、默认情况下只禁止空格输入
 *  2、限制只能输入整数
 *  3、限制只能输入整数和小数（价格类）
 *  4、限制只能输入手机号
 *  5、限制最大值和最小值(抛出错误给回调函数)
 *  6、限制不能输入中文
 */
// import { ElMessage } from 'element-plus'

const ElMessage = {
  error: function(msg){
    const dom = `<p style="position: fixed: left: 50%; top: 50%; border: 1px solid #ccc; background: lightblue; color: #222;">${msg}</p>`
    setTimeout(function(){
        document.body.appendChild(dom)
    }, 2000)
    document.body.removeChild(dom)
  }
}

const addListener = function (el, type, fn) {
  el.addEventListener(type, fn, false)
}
// 去空白
const spaceFilter = function (el) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/\s+/, '')
  })
}
/**
 *
 * @param {element} el dom元素
 * @param {object} binding 操作对象 name String set Function
 */
// 数字
const intFilter = function (el, binding) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/\D/g, '')
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// 价钱
const priceFilter = function (el, binding) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/[^\d.]*/g, '')
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(el.value)) {
      // el.value = ''
    }
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// 特殊符号
const specialFilter = function (el, binding) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g, '')
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// 非中文
const enFilter = function (el, binding) {
  addListener(el, 'keyup', () => {
    el.value = el.value.replace(/[\u4E00-\u9FA5]/g, '')
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// 手机号
const phoneFilter = function (el, binding) {
  // 添加键盘抬起事件，不允许输入非数字
  intFilter(el, binding)
  // 失焦事件，判断手机号
  addListener(el, 'blur', () => {
    if (!el.value) {
      ElMessage.error('手机号不能为空')
      return
    }
    const phoneReg = new RegExp('^(13|14|15|16|17|18|19)[0-9]{9}$')
    if (!phoneReg.test(el.value)) {
      ElMessage.error('手机号输入错误')
      // el.value = ''
    }
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// url地址
const urlFilter = function (el, binding) {
  addListener(el, 'blur', () => {
    if (!el.value) {
      return
    }
    const urlReg = new RegExp('(^#)|(^http(s*)://[^s]+.[^s]+)')
    if (!urlReg.test(el.value)) {
      ElMessage.error('url输入错误')
      // el.value = ''
    }
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// ip地址
const ipFilter = function (el, binding) {
  addListener(el, 'blur', () => {
    if (!el.value) {
      return
    }
    // ipv4 , ipv6
    const ipReg = /^((\d{0,3})($|(?!\.$)\.)){4}$|^((\d{0,3})($|(?!\.$)\.)){6}$/
    if (!ipReg.test(el.value)) {
      ElMessage.error('IP输入错误')
      // el.value = ''
    }
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// git路径
const gitPathFilter = function (el, binding) {
  addListener(el, 'blur', () => {
    if (!el.value) {
      return
    }
    // /^([A-Za-z]{1}:\/[\w\/]*)?\w+\.{1}[a-zA-Z]+$/ // 全路径正则 c:/a/b/c.txt
    // /^(\/[\w\/]*)?\w+\.{1}[a-zA-Z]+$/  // 相对路径正则 /a/b/c.txt
    // /^(\/[\w\/]*)?\w+\.git+$/  // 相对路径正则 /a/b/c.git
    // const ipReg = /^\/([A-Za-z0-9_\-]+\/)+[A-Za-z0-9_\-]+\.git$/
    const ipReg = new RegExp('^/([A-Za-z0-9_-]+/)+[A-Za-z0-9_-]+.git$')
    if (!ipReg.test(el.value)) {
      ElMessage.error('路径输入错误')
      // el.value = ''
    }
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
// 路径
const pathFilter = function (el, binding) {
  addListener(el, 'blur', () => {
    if (!el.value) {
      return
    }
    // /^\/$|^(\/[A-Za-z0-9_\-]+)*$/ /a/b/c
    // const ipReg = /^\/$|^(\/[A-Za-z0-9_\-]+)*$/
    const ipReg = new RegExp('^/$|^(/[A-Za-z0-9_-]+)*$')
    if (!ipReg.test(el.value)) {
      ElMessage.error('路径输入错误')
      // el.value = ''
    }
    const obj = {
      name: binding.value.name,
      value: el.value
    }
    binding.value.set(obj)
  })
}
export default {
  bind(el, binding) {
    if (el.tagName.toLowerCase() !== 'input') {
      // eslint-disable-next-line prefer-destructuring
      el = el.getElementsByTagName('input')[0]
    }
    switch (binding.arg) {
      case 'int':
        spaceFilter(el)
        intFilter(el, binding)
        break
      case 'price':
        spaceFilter(el)
        priceFilter(el, binding)
        break
      case 'special':
        spaceFilter(el)
        specialFilter(el, binding)
        break
      case 'phone':
        spaceFilter(el)
        phoneFilter(el, binding)
        break
      case 'url':
        spaceFilter(el)
        urlFilter(el, binding)
        break
      case 'en':
        enFilter(el, binding)
        break
      case 'ip':
        spaceFilter(el)
        ipFilter(el, binding)
        break
      case 'gitPath':
        spaceFilter(el)
        gitPathFilter(el, binding)
        break
      case 'path':
        spaceFilter(el)
        pathFilter(el, binding)
        break
      default:
        break
    }
  }
}
