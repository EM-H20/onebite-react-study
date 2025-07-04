// 1. 비동기 작업 처리하기

function task(){
    setTimeout(() => {
        console.log("Task completed!");
    }, 3000);
}

task();


function add(a, b, callback){
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
}

add(1, 2, (value) => {
    console.log(value);
});

//음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(()=>{
        const food = "Burger";
        callback(food);
    }, 3000);
}

function coolDownFood(food, callback){
    setTimeout(() => {
        const coolDownedFood = `식은 ${food}`;
        callback(coolDownedFood);
    }, 2000);
}

function freezenFood(food, callback){
    setTimeout(() => {
        const freezenFood = `냉동된 ${food}`;
        callback(freezenFood);
    }, 2000);
}

// 콜백 지옥
orderFood((food) => {
    console.log(food);
    coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);
        freezenFood(coolDownedFood, (freezenedFood)=> {
            console.log(freezenedFood);
        });
    });
});

// 해결방안 Promise