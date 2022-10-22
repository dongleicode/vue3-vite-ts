export function saveLocalData(key, data) {
    var saveObj = {}
    if (typeof (data) === 'object') {
      saveObj = { 'type': 'object', data: JSON.stringify(data) }
    } else {
      saveObj = { 'type': 'string', data: data }
    }
    localStorage.setItem(key, JSON.stringify(saveObj))
  }
  
  export function clearLocalData(key) {
    localStorage.removeItem(key)
  }
  
  export function clearAllLocalData(key) {
    localStorage.clear()
  }
  
  export function getLocalData(key) {
    var obj = localStorage.getItem(key)
    if (obj) {
      obj = JSON.parse(obj)
      var type = obj['type']
      var data = obj['data']
      if (type === 'object') {
        return JSON.parse(data)
      }
      return data
    } else {
      return null
    }
  }
  
  export function setCookie_log (c_name, value, domain, hours){
    var exdate = new Date();
    // exdate.setDate(exdate.getDate() + days);
    exdate.setTime(exdate.getTime() + hours * 3600000);
    //判断是否需要跨域存储
    if (domain) {
        document.cookie = c_name+ "=" +escape(value)+((hours==null) ? "" : ";expires="+exdate.toGMTString())+";path=/;domain=0071515.com";
    } else {
        document.cookie = c_name+ "=" +escape(value)+((hours==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
    }
  }
  
  export function getCookie_log(name) {
    //读cookie属性，这将返回文档的所有cookie   
    var allcookies = document.cookie;          
    //查找名为name的cookie的开始位置
    name += "=";   
    var pos = allcookies.indexOf(name);     
    //如果找到了具有该名字的cookie，那么提取并使用它的值   
    if (pos != -1) {                                             //如果pos值为-1则说明搜索"version="失败   
      var start = pos + name.length;                  //cookie值开始的位置   
      var end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置   
      if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie   
      var value = allcookies.substring(start,end);  //提取cookie的值   
      return value;                       //对它解码         
    } else {
      return ""
    }
  }