// document.getElementById("button").addEventListener("click", function(event){
//     event.preventDefault();
//     var weight = document.getElementById("weight").value;
//     var height = document.getElementById("height").value;
//     var bmi = weight / (height * height);
//     var weight_value="" ;
//     if (bmi < 18.5){
//         weight_value = "underweight";
//     }
//     else if (bmi > 18.5 && bmi < 25){
//         weight_value = "normalweight";
//     }
//     else if (bmi > 25 && bmi < 30){
//         weight_value = "overweight";
//     }
//     else{
//         weight_value = "obese";
//     }
//     alert( "your bmi is " + bmi+"You are "+  weight_value);
// })

$("#button").click(function(){
    // var weight = document.getElementById("weight").value;
    // var height = document.getElementById("height").value;
    var weight = $("#weight").val();
    var height = $("#height").val();
    var bmi = weight / (height * height);
    var weight_value="" ;
    if (bmi < 18.5){
        weight_value = "underweight";
    }
    else if (bmi > 18.5 && bmi < 25){
        weight_value = "normalweight";
    }
    else if (bmi > 25 && bmi < 30){
        weight_value = "overweight";
    }
    else{
        weight_value = "obese";
    }
    alert( "your bmi is " + bmi+"You are "+  weight_value);
})