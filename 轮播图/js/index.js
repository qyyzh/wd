class lbt{
	constructor(selector) {
	    this.box = document.querySelector("#box"),
		this.ul = box.querySelector("#ul"),
		this.lis = box.querySelector("ul").children,
		this.index = 0,
		this.lastindex = 0,
		
				
		this.onboxclick();
		this.times()
	}
	// 点击box上下切换
	onboxclick(){
		box.onclick = e =>{							 
			let y = e.offsetY;
			if(y>300){								
				this.change();
				this.lastindex = this.index;
				this.index++;
				if((-this.index*600 +3600) == 0){		
					this.index = 0;									
				}									
			}
			else{
				if((this.index*600) == 0){		
					this.index = 5;									
				}
				--this.index;												
				this.change();
				this.lastindex = this.index;																	
			}		
		}
	}	
	// 负责切换的函数
	change(){				
			this.ul.style.top = -this.index*600 + 'px';			
		}	
	// 负责自动切换的函数																				
	times(){		
		this.timer = setInterval(this.fun.bind(this),2000);
		this.box.onmouseenter = this.onmouseboxenter.bind(this);
		this.box.onmouseleave = this.onmouseboxleave.bind(this);
	}
	onmouseboxenter(){		
		clearInterval(this.timer);
	}	
	onmouseboxleave(){
		this.timer = setInterval(this.fun.bind(this),2000);
	}
	fun(){		
		this.ul.style.transition = "top 1s";
		this.change();					
		this.lastindex = this.index;
		this.index++;								
		if((-this.index*600 +3600) == 0){		
			this.index = 0;									
		}						
	}			
}

new lbt()