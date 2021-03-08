
 exports.min=function min (array) {
	if (array == null || array.length<1) {return 0; }
	else {	
	var minim=10000;

	for (var i=0;i<array.length; i++){
		array[i]<minim? minim=array[i] : minim=minim ;
			}

			
  return minim;}
}
	

exports.max = function max (array) {
	var maxi=0;
	if (array == null || array.length<1) {return 0; }
	else {
	for (var i=0;i<array.length; i++){
		array[i]>maxi? maxi=array[i] : maxi=maxi ;
		
	}
  return maxi;
}
}

exports.avg = function avg (array) {
 if (array == null || array.length<1) {return 0; }
 else{
 var sum=0;
 for (var i=0;i<array.length; i++){
	sum=sum+array[i];
	 
 }
return sum/array.length;
}}
