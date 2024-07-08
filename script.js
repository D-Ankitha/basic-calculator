function Refer(Value){
    document.getElementById('display').value += Value;
    display.scrollLeft = display.scrollWidth;
}
function Clear(){
    document.getElementById('display').value = '';
}
document.addEventListener('keypress', function(event){
    if(event.key >= '0' && event.key <= '9' ){
        Refer(event.key);
    }
    if(event.key == '/' || event.key == '+' || event.key == '-' || event.key == '*'){
        Refer(event.key);
    }
});
document.addEventListener('keydown', function(event){
    if(event.key == 'Backspace'){
        Clear();
    }
    if(event.key == 'Enter'){
        Equal()
    }
});
function Equal() {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
