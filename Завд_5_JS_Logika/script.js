

let query = window.location.search.substring(1); // userName=jgjhg&userTown=kjhjh&userAge=54

let parameters = query.split('&');
let variables = {};
parameters.forEach(element => {
    let x = element.split('=');
    variables[x[0]] = x[1];
});
let t1=true;
for (let i = 0; i<variables['userName'].length; i++) {
    let c = variables['userName'][i];
    if (i == 0)  {
        if (c<'A' || 'Z'<c)
            t1=false;
        } else {
             if (c<'a' || 'z'<c)
                t1=false;
    }
}

let t2=true;
for (let i = 0; i<variables['userTown'].length; i++) {
    let c = variables['userTown'][i];
    if (i == 0)  {
        if (c<'A' || 'Z'<c)
            t2=false;
        } else {
             if (c<'a' || 'z'<c)
                t2=false;
    }
}

if  (t1 && t2)   //чи всі дані введені правильно
    if (variables['userAge'] >=21 && variables['userAge']<=45) 
        alert('Ласкаво просимо в клуб міста '+ variables['userTown'])
    else if (variables['userAge']<18) 
            alert('Виклик поліції міста'+variables['userTown']+': особа до 18р намагалась зайти в клуб')
         else if (variables['userAge']>=18 && variables['userAge']<21)
                    alert('Недостатній вік для входу в клуб')
              else alert('Ви застарі для розваг у клубі')
else if (!t1) alert("Неправильно введене ім'я")
     else if (!t2) alert("Неправильно введене місто")
         