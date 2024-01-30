function calculate(opt){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var res=0;
    switch (opt) {
        case 'add':
            res=(+a)+(+b);
            break;
        case 'sub':
            res=a-b;
            break;
        case 'mul':
            res=a*b;
            break;
        case 'div':
            res=a/b;
            break;
        default:
            break;
    }
    document.getElementById("result").innerHTML = res;

}
function reloading(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    if (!(a==''&&b=='')) {
      location.reload();  
    } 
}