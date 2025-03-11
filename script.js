alert("Hello");




function calculate(){
    console.clear();
    var i = parseInt(document.getElementById("num1").value);
    var j = parseInt(document.getElementById("num2").value);
    console.log("Addition : "+(j+i));
    console.log("Substraction : "+(i-j));
    console.log("Division : "+(i/j));
    console.log("Multiplication : "+(i*j));

}


function printNumbers(){
    console.clear();
    var k = document.getElementById("num1").value;
    var j = document.getElementById("num2").value;

    for(let i = k; i<=j; i++)
        {
            console.log(i+" ");
        }
}

function printNumbersInReverse(){
    console.clear();
    var k = document.getElementById("num1").value;
    var j = document.getElementById("num2").value;

    for(let i = j; i>=k; i--)
        {
            console.log(i+" ");
        }
}

function printOddNumbersInbetween(){
    console.clear();
    var k = document.getElementById("num1").value;
    var j = document.getElementById("num2").value;

    for(let i = k; i<=j; i++)
        {
            if(i%2==1)
                {
                    console.log(i+" ");
                }
        }

    
}

function task(){
    console.clear();
    var number = document.getElementById("numtask").value;

    for(let i=parseInt(number/2); i>0; i--)
    {
        console.log(i);
    }

    console.log("-");
    console.log(parseInt(number/2)+1)
    console.log("-");

    for(let i=number; i>parseInt(number/2)+1; i--)
        {
            console.log(i);
        }
}

