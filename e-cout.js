//---------task4 e cout--------\\

var text = prompt("enter your message");
var eNumb = 0 ;
for (i in text)
{
if (text[i] == "e"||text == "E"){
eNumb++}
}
document.write(`number of leter e is ${eNumb}`)