//定义一个函数 功能是根据id查找页面元素
function $id( id ){
	return document.getElementById( id );
}

//封装一个取整值范围
function rand(min,max){
		return Math.round(Math.random()*(max-min)+min); 
	}

//创建元素
//ele 元素名
function create(ele){
	return document.createElement(ele);
}

//获取任意区间的随机整数
function rand( min , max ){
    return Math.round( Math.random()*(max-min) + min );
}

//时间差(秒)
function timerDiff(start,end){
		return Math.abs(start.getTime()-end.getTime())/1000;
	}

//随机获取六位十六进制颜色值 （不需传参）
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

//自定义日期时间格式
//sign 连接符的样式
//now 获取的系统时间
function dateToString(now,sign){
	//默认日期的间隔符为  -  如果用户传递的是/  就使用/  .  如果用户不传递任何参数 默认是-
	sign = sign || "-";
	var y = now.getFullYear();
	var m = toTwo(  now.getMonth()+ 1  ) ;
	var d = toTwo(  now.getDate() );
	var h = toTwo(  now.getHours() );
	var _m = toTwo(  now.getMinutes() );
	var s = toTwo( now.getSeconds() ) ;
	var str = y + sign + m + sign + d + " " + h + ":" + _m + ":" + s;
	return str;
}
//判断得到的结果是否小于10 如果小于10，前面拼接0，上边已调用
function toTwo(val){
	return val < 10 ? "0"+val : val;
}

//验证码 ： 字母和数字组成
function yzm(){
	//小写字母   大写字母   数字
	//48--122 随机获取一个code值  判断编码值如果在 58--64   91--96 两个区间，就重新抽取
	//如果不在上面的两个区间内，就将code转成字符， 拼接到字符串中
	var str = "";//拼接6位的验证码
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand( 48 , 122 );
		if( code >= 58&&code <= 64 || code >= 91 && code <= 96 ){
			//就重新抽一次
			i--;
		}else{
			var ch = String.fromCharCode( code );
			str += ch;
		}
	}
	return str;
}

//碰撞函数
//d1 d2获取的两个盒子
function pz(d1,d2){
	R1 = d1.offsetWidth+d1.offsetLeft;
	L1 = d1.offsetLeft;
	T1 = d1.offsetTop;
	B1 = d1.offsetHeight + d1.offsetTop;
	
	R2 = d2.offsetWidth+d2.offsetLeft;
	L2 = d2.offsetLeft;
	T2 = d2.offsetTop;
	B2 = d2.offsetHeight + d2.offsetTop;
	
	//如果碰不上 返回false 
	if( R1 < L2 || B1 < T2 || T1 > B2 || L1 > R2 ){
		return false;
	}else{
		return true;
	}
}
//存 cookie  document.cookie = "键=值"  时间
function setCookie(name,val,day){
	var d = new Date();
	d.setDate(d.getDate() + day);
	document.cookie = name + "=" + val + ";expires=" +  d;
}

//取cookie
function getCookie(name){
	
	var str = document.cookie;//uname=张三; upwd=123456;
	var arr = str.split("; "); // [uname=张三，upwd=123456];
	for(var i = 0; i < arr.length; i++){
		var cur = arr[i].split("=");
		if(cur[0] == name){
			return  cur[1];
		}
	}
	
	return "";
	
}

// 删除cookie  设置cookie的时候给个过期时间
function removeCookie(name){   
	setCookie(name,"",-1);
}