 ```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let ex1 = ex * 1
  let p = p1 * 2
  let pp = p2 * 3 
  
  let media = (ex1 + p + pp) / 6
  
   if (media > 9) {
     return("A")
 } else if (media < 9 && media >= 7.5){
     return("B")
 } else if (media < 7.5 && media >= 6){
     return("C")
 } else if(media < 6) {
     return("D")
 }
}
```