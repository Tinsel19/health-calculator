



// alert('hello')

var metric = document.getElementById('metric');
var imperial = document.getElementById('imperial');
var feet = document.getElementById('feet');
var inches = document.getElementById('inches');
var weight = document.getElementById('weight').value;
var sex = document.getElementById('gender').value;
var goal = document.getElementById('goal').value;
var age = document.getElementById('age').value;
var activity = document.getElementById('activity').value;
var adjustProtein = document.getElementById('adjust-protein').value;
var calculate = document.getElementById('calc');


imperial.style.backgroundColor = 'white';
imperial.style.color = 'rgb(33, 165, 165)';

var calories = 0;
var pweight = 0;
var height = 0;
var daily_cal = 0;
var carbs = 0;
var protons = 0;
var fats = 0;
var heightTens = 0;
var heightUnits = 0;
var weights = 0;
var pCalories = 0;
var fCalories = 0;
var pfCalories = 0;
var units_x = 'EN';

// change units to metric scale 
metric.addEventListener('click', () => {
    feet.placeholder = 'Meters';
    inches.placeholder = 'Centimeters';
    weight.placeholder = 'Kilograms';
    metric.style.backgroundColor = 'white';
    metric.style.color = 'rgb(33, 165, 165)';
    imperial.style.backgroundColor = 'rgb(33, 165, 165)';
    imperial.style.color = 'white';
    units_x = 'IN';


})

// change units to imperial scale 
imperial.addEventListener('click', () => {
    feet.placeholder = 'Feet';
    inches.placeholder = 'Inches';
    weight.placeholder = 'Pounds';
    imperial.style.backgroundColor = 'white';
    imperial.style.color = 'rgb(33, 165, 165)';
    metric.style.backgroundColor = 'rgb(33, 165, 165)';
    metric.style.color = 'white';
    units_x = 'EN';
})

// calculate function 
calculate.addEventListener('click', () => {
    // alert('ji');

    metric = document.getElementById('metric');
    imperial = document.getElementById('imperial');
    feet = document.getElementById('feet');
    inches = document.getElementById('inches');
    weight = document.getElementById('weight').value;
    sex = document.getElementById('gender').value;
    goal = document.getElementById('goal').value;
    age = document.getElementById('age').value;
    activity = document.getElementById('activity').value;
    adjustProtein = document.getElementById('adjust-protein').value;


    calories = 0;
    pweight = 0;
    height = 0;
    daily_cal = 0;
    carbs = 0;
    protons = 0;
    fats = 0;
    heightTens = 0;
    heightUnits = 0;
    weights = 0;


    heightTens = parseInt(feet.value);
    if (inches.value == '') {
        heightUnits = 0;
    } else {
        heightUnits = parseInt(inches.value);
    }
    

    if (units_x == "EN") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    } else if (units_x == 'IN' ){
        height = (heightTens * 100) + heightUnits;
    }

    if (units_x == "EN") {
        pweight = weight;
        weight = (weight * 0.453592);
    } else if (units_x == 'IN') {
        pweight = weight * 2.205;
    }

    if (sex == "M") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
        daily_cal = Math.round(calories);
    } else if (sex === "F") {
        calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
        daily_cal = Math.round(calories);
    }

    switch (activity) {
        case "sedentary":
            calories = Math.round(calories * 1.2);
            break;
        case "moderate-1-3":
            calories = Math.round(calories * 1.375);
            break;
        case "moderate-4-5" :
            calories = Math.round(calories * 1.466);
            break;
        case "daily":
            calories = Math.round(calories * 1.55);
            break;
        case "intense":
            calories = Math.round(calories * 1.725);
            break;
        case "v-intense":
            calories = Math.round(calories * 1.9);
            break;
        }
    
    // console.log(calories)
    console.log(goal)
    switch (goal) {
        case "fat-loss":
            if (calories <= 2000)
                calories = Math.round(0.9 * calories);
            if (calories > 2000)
                calories = Math.round(0.8 * calories);
            fats = Math.round(pweight * 0.3);
            break;
            

        case "maintenance":
            fats = Math.round(pweight * 0.4);
            break;

        case "muscle-gain":
            calories += 200;
            fats = Math.round(pweight * 0.5);
            break;
        }

    switch (adjustProtein) {
        case "minimum":
            protons = Math.round(pweight * 0.72);
            break;
        case "standard":
            protons = Math.round(pweight * 1);
            break;
        case "high":
            protons = Math.round(pweight * 1.4);
            break;
        }
    
    // calories = calories;
    pCalories = protons * 4;
    fCalories = fats * 9;
    pfCalories = pCalories + fCalories;
    console.log(fats)

    carbs = Math.round((calories - pfCalories) / 4);
    // console.log(calories);

    document.getElementById('calories').innerHTML = 'Total Calories: '+ calories + ' Per Day';
    document.getElementById('prot').innerHTML = protons + ' (g)';
    document.getElementById('carb').innerHTML = carbs + ' (g)';
    document.getElementById('fats').innerHTML = fats + ' (g)';
})

function changeDefault(event) {
    event.preventDefault();
}

const form = document.getElementById('myForm');
form.addEventListener('submit', changeDefault);