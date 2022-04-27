function join_para_1(){
    input1=[];
    for(var i=1; i<=5;i++){
        input1.push(document.getElementById("box"+i).value);

    }
    document.getElementById("output_para_1").innerHTML=input1.join(" ");


}
function join_para_2(){
    input2=[];
    for(var i=6; i<=10;i++){
        input2.push(document.getElementById("box"+i).value);

    }
    document.getElementById("output_para_2").innerHTML=input2.join(" ");


}