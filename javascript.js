var value1 = 0;
		var value2 = 0;
		var ans = 0;
		var calc ="";
		var overWrite=false;
		var memory = 0;
		var numScreen;
		//var value1Set=false;
		var decimalPoint =false;
		var decimalPointCount=1;
		function load(){
			numScreen=window.document.getElementById("screen1");
		}

		function decimalPointC() {
			if (decimalPoint == false) {
				decimalPoint=true;
				decimalPointCount=1;
			}
			

		}

		function screenUpdate(input) {
			if (overWrite == false) {
				if(decimalPoint==false){
					numScreen.value = (numScreen.value * 10) + input;
				}else{
					input = input / ((10**decimalPointCount));
					input = Math.round(input * 10**decimalPointCount)/ 10**decimalPointCount;
					numScreen.value = parseFloat(numScreen.value) + input;
					decimalPointCount++;
					

				}
			}else{
				numScreen.value = input;
				overWrite =false;
			}
		}

		function memoryClear() {
			decimalPoint = false
			memory=0;
			document.getElementById("butMemory").classList.add('buttonCon');
			document.getElementById("butMemory").classList.remove('button');
		}

		function memoryUpdate() {
			decimalPoint = false
			if (memory == 0 && numScreen.value!=0) {
				memory = numScreen.value;
				document.getElementById("butMemory").classList.add('button');
				document.getElementById("butMemory").classList.remove('buttonCon');
				numScreen.value=0;
			}else{
				numScreen.value = memory;
			}	
		}

		function calculationType(input) {
			decimalPoint = false
			if(value1!=0){
				solve()
				value1 = parseFloat(numScreen.value);
				calc = input;
				overWrite=true;
			}else{
				value1 = parseFloat(numScreen.value);
				calc = input;
				numScreen.value=0;
			}
		}

		function solve() {
			decimalPoint = false
			value2 = parseFloat(numScreen.value);
			switch(calc){
				case "add": ans = value1+value2;
							break;
				case "minus": ans = value1-value2;
							break;
				case "times": ans = value1*value2;
							break;
				case "divide": ans = value1/value2;
							break;
			}

			numScreen.value = ans;
			value1 = value2;
			value2 = 0;
			overWrite = true;
			//calc="";
		}

		function clear1(){
			decimalPoint=false;
			value1=0;
			value2=0;
			ans=0;
			calc="";
			overWrite=false;
			numScreen.value = 0;

		}

function changeColor(x){		
	var c = x.style.backgroundColor;
	var s = window.document.getElementById('screen1');
	s.style.color=c;
}
