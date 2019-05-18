function Login () {
	this.btn = tools.$("#btn");
	this.container = tools.$("#container");
	this.inp = tools.$("#inp");
	this.bindEvents();
	this.ol = tools.$(".ol");
	this.li = tools.$(".li");
	this.l1 = tools.$("#l1");
	this.l2 = tools.$("#l2");
	this.l3 = tools.$("#l3");
	this.box = tools.$("#box"); 
	this.licontextmenu();
}

Login.prototype = {
	constructor: Login, 
	bindEvents: function () {
		this.btn.onclick = function () {
			this.popBox();
		}.bind(this);
		this.container.onclick = e => {
			switch(e.target.id) {
				case "loginBtn": this.loginBtnClick();
				case "closeBtn": this.closeBtnClick(); break;
			}
		}
		
	},
	
	popBox: function () {
		this.container.innerHTML = '<h3>用户发布</h3><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p>用户名:<input id="input" type="text"  value="" /></p><p><textarea id="username" rows="" cols=""></textarea></p><p><button id="loginBtn" class="loginBtn" type="button">点击发布</button></p>';

		tools.showCenter(this.container);
		this.modal = document.createElement('div');
		this.modal.className = "modal";
		document.body.appendChild(this.modal);		
		new Drag(this.container, "h3");
	},
	closeBtnClick: function () {
		this.container.style.display = "none";
		this.modal.remove();
	},

	loginBtnClick: function () {
		let input = tools.$("#input").value;
		let username = tools.$("#username").value;		
		if(username === "") {
			alert("请输入你的内容");
		}else{
		
			this.li = document.createElement("li");
			this.li.className = "li";
			this.span = document.createElement("span");
			let time = new Date();
			let year = time.getFullYear(),
			month =  time.getMonth(),
			day = time.getDate(),
			hours = time.getHours(),
			minutes = time.getMinutes(),
			miao = time.getSeconds();
						
			this.span.innerHTML = `${input}&nbsp在${year}年${month}月${day}日${hours}时${minutes}分${miao}秒发布的消息是:`;					
			this.li.innerHTML = username;
			this.inp.appendChild(this.li);
			this.li.appendChild(this.span);
			
			this.inp.style.display = "block";
		}
	},
	
	licontextmenu : function () {	
		this.ol = document.createElement("ol");	
		this.ol.className = "ol";
		document.oncontextmenu = (e) =>{									
			this.ol.innerHTML = `<li id="l1">增加</li><li id="l2">修改</li><li id="l3">删除</li>`;
			this.ol.style.left = e.clientX + "px";
			this.ol.style.top = e.clientY + "px";
			document.body.appendChild(this.ol);												
			if(e.preventDefault){
				e.preventDefault()
			}else{
				window.event.returnValue = false;
			}
		}			
		this.ol.onclick = (e)=> {
			switch(e.target.id) {
				case "l1": console.log(this.ol); break;
				case "l2": console.log(this.ol); break;
				case "l3": e.target.parentNode.remove(),this.inp.remove(this.li) ; break;
			}						
		}
	}
		
}

new Login()