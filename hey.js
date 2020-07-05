function check(){
    var c=0;
    var q1=document.quiz.quastion1.value;
    var q2=document.quiz.quastion2.value;
    var q3=document.quiz.quastion3.value;
    var q4=document.quiz.quastion4.value;
    var q5=document.quiz.quastion5.value;
    if(q1=="JAVA SCRIPT"){c++}
    if(q2=="java script object notation"){c++}
    if(q3=="Ada Lovelace"){c++}
    if(q4=="solid state Disk"){c++}
    if(q5=="1024kb"){c++}
    document.write(c);
}