//禁止选择，防止空白被选中
document.onselectstart = new Function("return false");

//计算器逻辑：eval函数负责计算，利用button的value属性传值
var flag=true;
function claculator(btn){	
	var num =btn.value;
	var inner = document.getElementById('inner');
	switch (num){
		case "=":
			try{
				inner.innerHTML=eval(inner.innerHTML);
				inner.scrollLeft = 0;
			}catch(e){
				
				inner.innerHTML="0";
			}
			flag=false;
			break;
		case "C":
			inner.innerHTML="0";
			break;
		case ".":
		if(flag==false){
			inner.innerHTML="";
			flag=true;
		}
			inner.innerHTML = inner.innerHTML + num;
			break;
		case "+":
		case "-":
		case "*":
		case "/":
		case "%":
		if(flag==false){
			inner.innerHTML="";
			flag=true;
		}	
			inner.innerHTML = inner.innerHTML + num;
			break;
		default:
		if(flag==false||inner.innerHTML=='0'){
			inner.innerHTML="";
			flag=true;
		}
			inner.innerHTML = inner.innerHTML + num;
			break;
	}
	//长度超过显示，进度条在最右面
	inner.scrollLeft = inner.scrollWidth;
}
