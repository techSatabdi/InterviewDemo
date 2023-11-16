// To find the character count in a string

let str = "satabdimahanta";\

function occuranceCntCheck(data){
if(data.length > 0 && !Array.isArray(data)){
  let splittedData = str.split('');
  let sortedData = splittedData.sort();
  console.log(sortedData);
  let current = null;
  let cnt = 0;
  for(var i = 0; i<sortedData.length; i++){
  	if(sortedData[i]!=current){
    	if(cnt > 0){
      	console.log(current +" comes: " +cnt +" times")
      }
    	current = sortedData[i];
      cnt = 1;
    }else{
    	cnt++
    }
  }
  if(cnt > 0){
    console.log(current +" comes: " +cnt+ " times")
  }
}else{
	alert("Not a valid input")
}

}
occuranceCntCheck(str);
