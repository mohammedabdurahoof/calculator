var c=2
var value1=0
var opr=0
var value2=0
function btnclick(val){
    
    if(c==1){
        document.getElementById("screen").value=val
        c=2
    }else{
        document.getElementById("screen").value+=val
        
    }
    
}
function btnclear(){
    document.getElementById("screen").value=""
}
function oprclick(val){
    value1=document.getElementById("screen").value
    opr=val
    c=1
    
}
function btnequle(){
    value2=document.getElementById("screen").value
    var text=value1+opr+value2
    var result=eval(text)
    document.getElementById("screen").value=result
    c=1
    
}
function btnclearOne(){
    var lastval=document.getElementById("screen").value
   var str=lastval/10
   var v=Math.floor(str)
   function abc(){
  if (v==0) {
       return ""
   }else{
       return v
   }}
   document.getElementById("screen").value=abc(v)
}
    

