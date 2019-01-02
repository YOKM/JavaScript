<!DOCTYPE html>
<html>
<body>

<h2>The Button Element</h2>
<table border="1" cellpadding="5">
    <tbody>
        <tr>
            <td id="cell1">-</td>
            <td id="cell2">-</td>
            <td id="cell3">-</td>
        </tr>
        <tr>
            <td id="cell4">-</td>
            <td id="cell5">-</td>
            <td id="cell6">-</td>
        </tr>
        <tr>
            <td id="cell7">-</td>
            <td id="cell8">-</td>
            <td id="cell9">-</td>
        </tr>
    </tbody>
</table>

<p id ="Count">0</p>

<script>
var winConditions = ["123","456","789","147","258","367","159","357","369"];
var XArray ="";
var OArray ="";
var playerTurn = 1;
var td = document.getElementsByTagName("td");
var w ="";
var win ="";
 w = winConditions.join(",");

for (I=0; I < td.length; I++){
td[I].addEventListener("click", function() {



  var Xor0inCell = document.getElementById(this.id).innerHTML;
  var cellNum = (document.getElementById(this.id).id).replace("cell", "");
   
   if (Xor0inCell == "X" || Xor0inCell == "0")
   {
   exit;
   }
		if (playerTurn === 1){
		document.getElementById(this.id).innerHTML= "X";
		playerTurn = 2;
       
             var re = RegExp(cellNum, 'gi');
           	 win = (w.replace(re, "X"));
           	 w= win;
         
     
         var WinArray = w.split(',');
         if (WinArray.indexOf("XXX") > -1)
          {alert("X Won");
          exit;}
		
        }
		else if (playerTurn === 2){
		document.getElementById(this.id).innerHTML= "0";
		playerTurn = 1;
         
         var re = RegExp(cellNum, 'gi');
         win = (w.replace(re, "0"));
         w= win;
        
        var WinArray = w.split(',');
         if (WinArray.indexOf("000") > -1)
          {alert("O Won");
          exit;}
		}
 });
}

</script>
 
</body>
</html>
