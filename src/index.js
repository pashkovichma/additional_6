module.exports = function zeros(expression) {
    var arr = expression.split('*');
    var two = 0;
    var five = 0;
    var rez;

    for (var i = 0; i < arr.length; i++) {
    	var number = arr[i];

    	if (number.slice(-2) == "!!") {
    		number = number.slice(0,number.length-2);

    		if (number == '100'){
    			two += 12;
    			five += 12;
    		}
    		else{
    			if (number%2 == 0){
    				two += number/2;
    				if (number.length == 2) {
    					five += Math.floor(number/10);
    				}
    				if (number >= 50) {
    					five++;
    				}

	    		}
	    		else {
	    			if (number.substr(-1)>=5){
	    				five += 1;
	    			}
	    			if (number.length == 2){
	    				five += Math.floor(number/10);
	    				if (number >= 25){
	    					five += 1;
	    				}
	    				if (number >= 75){
	    					five += 1;
	    				}
	    			}
	    		}
	    	}
    	}
    	else {
    		number = number.slice(0,number.length-1);

    		if (number == '100'){
    			two += 24;
    			five +=24;
    		}
    		else {
    			two += Math.floor(number/2);
    			
	    		if (number.substr(-1)>=5){
	    			five ++;
	    		}
	    		if (number.length == 2){
	    			five += Math.floor(number/10)*2;
	    			five += Math.floor(number/25);
	    		}
    		}
    	}
	}
	rez = Math.min(two, five);
return(rez);	
}