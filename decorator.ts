
function MyParameterDecorator(target){
	target.prototype.shape='triangle';
	console.log(target);
}


@MyParameterDecorator
class parameter{

	shape: String;
}

var t = new parameter();
console.log(`method is ${t.shape}`);





export module math{
    
 export class add{
	constructor(){



		}
	}

	export class multiply{
	constructor(){
          
		}
	}
}
	
var t1 = new math.add();
var t2 = new math.multiply();
