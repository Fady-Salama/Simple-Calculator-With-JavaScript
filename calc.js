
     			var one = document.getElementById('one'),
     			    two = document.getElementById('two'),
     			    three = document.getElementById('three'),
     			    four = document.getElementById('four'),
     			    five = document.getElementById('five'),
     			    six = document.getElementById('six'),
     			    seven = document.getElementById('seven'),
     			    eight = document.getElementById('eight'),
     			    nine = document.getElementById('nine'),
     			    zero = document.getElementById('zero'),
     			    plus = document.getElementById('plus'),
     			    minus = document.getElementById('minus'),
     			    times = document.getElementById('times'),
     			    divide = document.getElementById('divide'),
     			    equal = document.getElementById('equal'),
     			    point = document.getElementById('point'),
     			    clear = document.getElementById('clear');

     			 var cal = '';
     			     res = '';
     			     x = 0;
     			 function fady2(){
     			 	res+='1'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='1'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='1'
     			 		x=0
     			 	}
     			 }
     			  function fady3(){
     			 	res+='2'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='2'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='2'
     			 		x=0
     			 	}
     			 }
     			  function fady4(){
     			 	res+='3'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='3'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='3'
     			 		x=0
     			 	}
     			 }
     			  function fady6(){
     			 	res+='4'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='4'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='4'
     			 		x=0
     			 	}
     			 }
     			  function fady7(){
     			 	res+='5'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='5'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='5'
     			 		x=0
     			 	}
     			 }
     			  function fady8(){
     			 	res+='6'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='6'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='6'
     			 		x=0
     			 	}
     			 }
     			  function fady10(){
     			 	res+='7'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='7'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='7'
     			 		x=0
     			 	}
     			 }
     			  function fady11(){
     			 	res+='8'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='8'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='8'
     			 		x=0
     			 	}
     			 }
     			  function fady12(){
     			 	res+='9'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='9'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='9'
     			 		x=0
     			 	}
     			 }
     			  function fady15(){
     			 	res+='0'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='0'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='0'
     			 		x=0
     			 	}
     			 }
     			  function fady17(){
     			 	res+='+'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='+'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='+'
     			 		x=0
     			 	}
     			 }
     			  function fady13(){
     			 	res+='-'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='-'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='-'
     			 		x=0
     			 	}
     			 }
     			  function fady16(){
     			 	res+='*'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='x'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='x'
     			 		x=0
     			 	}
     			 }
     			  function fady9(){
     			 	res+='/'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='/'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='/'
     			 		x=0
     			 	}
     			 }
     			  function fady14(){
     			 	res+='.'
     			 	if(x==0){
     			 		document.getElementById('cal').innerHTML+='.'
     			 	}
     			 	else if(x==1){
     			 		document.getElementById('cal').innerHTML ='.'
     			 		x=0
     			 	}
     			 }
     			  function fady1(){
     			 	res =''
     			 		document.getElementById('cal').innerHTML =''
     			 	}
     			 	function fady5(){
     			 	   if(res == ''){
     			 	   	document.getElementById('cal').innerHTML =''
     			 	   }
     			 	   else{
     			 	   	x = 1
     			 	   	document.getElementById('cal').innerHTML = eval(res)
     			 	   	res = ''
     			 	   }
     			 		
     			 	}