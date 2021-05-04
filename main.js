var array_1=[];
function result_1() {
    for (let index = 1;  index<=6 ; index++) {
        array_1.push(document.getElementById("para_input_box_"+index).value);
        
    }
document.getElementById("para_1").innerHTML =array_1.join(". ");
}
var array_2=[];
function result_2() {
    for (let index = 7;  index<=12; index++) {
        array_2.push(document.getElementById("para_input_box_"+index).value);
        
    }
    document.getElementById("para_2").innerHTML =array_2.join(". ");
}
