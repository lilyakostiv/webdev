var studentsGroupA = [{
    categoryId: 1,
    id: 1,
    name: "John Smith",
    mark: 78,
    course: "Math"
},{
    categoryId: 1,
    id: 2,
    name: "Felix Jackson",
    mark: 65,
    course: "Langulage"
},{
    categoryId: 1,
    id: 3,
    name: "Chantelle Hasan",
    mark: 12,
    course: "Phisics"
},{
    categoryId: 1,
    id: 4,
    name: "Joel Francis",
    mark: 56,
    course: "Phisics"
},{
    categoryId: 1,
    id: 5,
    name: "Justin Francis",
    mark: 67,
    course: "Astronomy"
},{
    categoryId: 1,
    id: 6,
    name: "Carlos Oskar",
    mark: 92,
    course: "Phisics"
},{
    categoryId: 1,
    id: 7,
    name: "Francis Lucas",
    mark: 95,
    course: "Language"
},{
    categoryId: 1,
    id: 8,
    name: "Sonny Carys",
    mark: 98,
    course: "Astronomy"
}];
var studentsGroupB = [
{
    categoryId: 2,
    id: 1,
    name: "Cleo Seth",
    mark: 23,
    course: "Math"
},{
    categoryId: 2,
    id: 2,
    name: "Hugo Francis",
    mark: 56,
    course: "Langulage"
},{
    categoryId: 2,
    id: 3,
    name: "Mary Brett",
    mark: 90,
    course: "Phisics"
},{
    categoryId: 2,
    id: 100,
    name: "Sana Jenna",
    mark: 56,
    course: "Phisics"
},{
    categoryId: 2,
    id: 5,
    name: "Victoria Willard",
    mark: 67,
    course: "Astronomy"
},{
    categoryId: 2,
    id: 6,
    name: "Tomas Dale",
    mark: 74,
    course: "Phisics"
},{
    categoryId: 2,
    id: 7,
    name: "Nathaniel Rowan",
    mark: 12,
    course: "Language"
},{
    categoryId: 2,
    id: 8,
    name: "Anne Marshall",
    mark: 67,
    course: "Astronomy"
}];


var best,average;

runRatingStudents(studentsGroupA, studentsGroupB)


function runRatingStudents(){
    //let greatArray = getArrayes();
	var greatArray = [].concat(...arguments);
	greatArray = sortArray(greatArray);
	let multyArray = getThreeArray(greatArray);
	//let multyArray=getMultyArray(objectWithThreeArray)
    displayData(multyArray)
    //if( confirm(" start work with groups again ?") ) runRatingStudents();
}


/*function getArrayes() {
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
}*/

function sortArray(bigArray) {
	for(let i=bigArray.length-1;i>0;i--) //сортування по спаданню методом бульбашки
		for(let j=1;j<=i;j++)
			if (bigArray[j].mark>bigArray[j-1].mark) {
				let d = bigArray[j];
				bigArray[j] = bigArray[j-1];
				bigArray[j-1] =d; 
			}
	return bigArray 
}

function getThreeArray(bigArray) {
	let array1,array2,array3;
	array1=[];array2=[];array3=[];
	for(let i of bigArray) {
		if (i.mark>=89) array1.push(i)
		else if (i.mark>=65) array2.push(i)
			 else array3.push(i);
	}	
	return [array1,array2,array3]
}

function bestAndAverageMarks(multyArray){ 
	best =multyArray[0][0].mark;
	for(let i of multyArray)  {
		for (let j of i) 
			if (j.mark>best) best=j.mark;
	}
	average = 0;
	let l = 0;
	for(let i of multyArray)  {
		l += i.length;
		for (let j of i) 
			average+=j.mark;
	}
	average = Math.round(average/l);
}

function displayData(multyArray){    //як задати розділення даних на сторінці
    bestAndAverageMarks(multyArray);
	document.write("Максимальна оцінка "+best+" <br>");
	document.write("Середня оцінка "+average+" <br><br>");
	
	var userLIstDisplay = document.querySelector("#user-list-display");
	rowBestAverage =  createElement("h3", "user-header", `<br> Best mark: ${best} <br> Average mark: ${average}`);
	userLIstDisplay.appendChild(rowBestAverage);
	
	let rating=['Good students','Average students','Weaken students'];
    for(let i=0;i<multyArray.length;i++) { 
		//document.write(rating[i]+"<hr>");
		let rowHeader =  createElement("h1", "user-header", `<br> ${rating[i]}`);
		userLIstDisplay.appendChild(rowHeader);
		let classDisplay = (i == 0)? "green-list" : (i == 1)? "yellow-list" : "red-list";
		for (let j=0;j<multyArray[i].length;j++) {
			let studData = multyArray[i][j];
			let innerText = `
                <div>
                    ${studData.name} from list ${studData.categoryId}
                    <p><mark>${studData.mark}</mark> <span>${studData.course}</span></p>
                </div>`;
			let newStudentElement = createElement("li", `student-card ${classDisplay}`, innerText);
            userLIstDisplay.appendChild(newStudentElement);
			
			//document.write(`category : ${studData.categoryId} - course : ${studData.course} <br>`);
			//document.write(`${studData.id} ) ${studData.name} : ${studData.mark} <br>`);
		}
		//document.write("<br><br>");
	}
}

function createElement(tag, className, innerText){
    var newObject = document.createElement(tag);
    newObject.className = (className)? className : false;
    newObject.innerHTML = (innerText)? innerText : false;

    return newObject
}