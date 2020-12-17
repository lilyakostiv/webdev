var best,average;

runRatingStudents()


function runRatingStudents(){
    let greatArray = getArrayes();
	greatArray = sortArray(greatArray);
	let multyArray = getThreeArray(greatArray);
	//let multyArray=getMultyArray(objectWithThreeArray)
    displayData(multyArray)
    //if( confirm(" start work with groups again ?") ) runRatingStudents();
}


function getArrayes() {
	let countArrayes = parseInt(prompt("Enter count arrayes"));
	let bigArray = [];
	for(let i=0;i<countArrayes;i++){
		let mass = [];
		let len = parseInt(Math.random()*20)+15;
		for(let j=0;j<len;j++){
			mass.push(Math.ceil(Math.random()*100));
		}
		for(let j=0;j<len;j++){
			bigArray.push(mass[j]);
		}
	}
    return bigArray 
}

function sortArray(bigArray) {
	for(let i=bigArray.length-1;i>0;i--) //сортування по спаданню методом бульбашки
		for(let j=0;j<=i;j++)
			if (bigArray[j]>bigArray[j-1]) {
				let d = bigArray[j];
				bigArray[j] = bigArray[j-1];
				bigArray[j-1] =d; 
			}
	return bigArray 
}

function getThreeArray(bigArray) {
	let array1,array2,array3;
	array1=[];array2=[];array3=[];
	for(let i=0;i<bigArray.length;i++) {
		if (bigArray[i]>=89) array1.push(bigArray[i])
		else if (bigArray[i]>=65) array2.push(bigArray[i])
			 else array3.push(bigArray[i]);
	}	
	return [array1,array2,array3]
}
/*function getMultyArray(threeArray) { 
	let i;
	let multyArray = [];
	for (i of threeArray) 
		multyArray.push(i);				
	return multyArray 
}*/

function bestAndAverageMarks(multyArray){ 
	best =multyArray[0][0];
	average = 0;
	let l = 0;
	for(let i of multyArray)  {
		l += i.length;
		for (let j of i) 
			average+=j;
	}
	average = Math.round(average/l);
}

function displayData(multyArray){    //як задати розділення даних на сторінці
    bestAndAverageMarks(multyArray);
	document.write("Максимальна оцінка "+best+" <br>");
	document.write("Середня оцінка "+average+" <br><br>");
	let rating=['Good students','Average students','Weaken students'];
    for(let i=0;i<multyArray.length;i++) { 
		document.write(rating[i]+"<hr>");
		for (let j of multyArray[i]) {
			document.write(j+"<br>");
		}
	}
}

