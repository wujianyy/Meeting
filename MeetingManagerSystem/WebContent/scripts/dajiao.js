//*****global function*********
function badgeDispose(event){
	var element = event.srcElement.getElementsByTagName('span')[0];
	console.log(element.html());
}

function navload(index){
	document.getElementsByTagName('li')[index].setAttribute('class', 'active');
}


//*****meetingManager.jsp******

function showAlert() {
    bootbox.alert("你TM还没登陆呢！！！！");
	bootbox.center();
}

// use for note if login fail
function getUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
} 

function homeLoad(){
	if(getUrlParam('fail') == '1'){
		bootbox.alert("用户名或密码错误！");
	}
	
	if(getUrlParam('register') == '1'){
		bootbox.alert("注册成功，等待管理员审批");
	}else if(getUrlParam('register') == '0'){
		bootbox.alert("注册失败，请重新注册");
	}
}

//****end of meetingManager.jsp******


//****myNotification.jsp***********
// set active for navbar item

//****end of myNotification.jsp****