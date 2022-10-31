  let lab1=[5,5,5,5,10,10]; 
  let lab2=[5,5,5,5,5,5,10];
  let lab3=[5,10,10,15];
  let lab4_5=[10,5,5,5,5,5,10,10,10,10,4];
  let lab6=[5,5,10,5,5,10];
  let lab8=[5,10,10,10,5];
  let quiz1=34;

  function get_sum(lab){
  let sum =0;
  for (let i=0; i<lab.length; i++) {
    sum+=lab[i];
  }
  let sums= 0;
  return sum;
  }

  let sumstotal= [get_sum(lab1), get_sum(lab2), get_sum(lab3), get_sum(lab4_5), get_sum(lab6), get_sum(lab8)];
  let total_score= [((get_sum(lab1)+ get_sum(lab2)+get_sum(lab3)+get_sum(lab4_5)+get_sum(lab6)+get_sum(lab8))*60)/280+(quiz1)];

function main(lab1,lab2, lab3, lab4_5, lab6, lab8){
  const obj={
    lab1: lab1,
    lab2: lab2,
    lab3: lab3,
    lab4_5:lab4_5,
    lab6:lab6,
    lab8:lab8,
    quiz1:quiz1,
    sumstotal:sumstotal,
    total_score:total_score,
  }
return obj;
}
  
  let results= main(lab1,lab2,lab3,lab4_5,lab6,lab8)
  console.log(results)