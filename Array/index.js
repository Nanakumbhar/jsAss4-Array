1.Find the Product.

const Find_Prod = (array, N) => 
{ 
  let product=1;

 for (let i=0; i< array.length; i++) {
    
      
    product*=array[i]
 }
 return product;
};
 
2.Find the Sum.

const Find_Sum = (array, N) => 
{
  let sum=0;
  for(let i=0; i< array.length;  i++) {
    sum+= array[i];
}
return sum;
}
 
3.Count Occurrences


const findCount = (N, K, Arr) => 
{
    let count = 0;
    for(let i = 0; i < N; i++) {
      if(Arr[i] == K) {
        count++;
      }
    }
    
    return count;
};

4.Even Odd

const findEvenOdd = (N, Arr) => 
{
  let count1 = 0, count2 = 0;
    let B = [];
    for(let i = 0; i<N; i++) {
      if(Arr[i]%2 == 0) {
        count1 += Arr[i];
      }
       else{
        count2 += Arr[i];
      }
    }
    // console.log(arr[0] + " " + arr[1]);
    
    B[0] = count1;
    B[1] = count2;
    return B;
    
};

5.Find whether the number is present or not


const Find_Num = (array,N,M) => 
{
   for(let i = 0; i < N; i++) {
    if(array[i] === M) {
      return "YES"
    }
  }
  
  return "NO";
   
  
};

6.Higher Age

const highAge = (N, Arr) => 
{  
  const arr = [];
    for (let i=0;  i< N; i++) {
    if (Arr[i] >=18) {
      arr.push(Arr[i]);
    }
    };
    return arr;
};

7.Increment the Array Elements

const Inc_Arr = (array,N) => 
{
  let arr ="";
  for (let i = 0; i<N ; i++){
    arr+=(array[i] + 1) + " " ;
    
  }
  console.log (arr)
};
 
8.Pass or Fail


const isAllPass = (N, Arr) => 
{
    for (let i = 0; i < N; i++) {
    if (Arr[i] < 32 ){
      return "NO"
      
     }
    }
     return "YES"
};

9.Unique Color Shirt

function Unique_Shirts (arr,N) {

    let a = arr, count = 0, repeat = 0;
        let first = true;
        a.sort();
        
        for(let i = 1; i < N; i++) {
          if(a[i] === a[i - 1]) {
            count++;
            if(first) {
              count++;
              first = false;
            }
          }
          
          else{
              first = true;
            }
          
        }
          return arr.length - count;
     
    }

    10.Min and Max

    function arrayMin(arr) {

    
        return Math.min(...arr);
        
      
      }
      
      function arrayMax(arr) {
      
        
        return Math.max(...arr);
      
      }

      11.Birthday Game

      function Birthday_Game(arr,D ,M) {
 
        let counter = 0;
             for(let i = 0; i < arr.length - 1; i++){
                  let subArray = arr.slice(i, i+M);
                  if (subArray.length === M) {
                     let sum = subArray.reduce((a,b) => a + b, 0);
                     if(sum === D){
                          counter += 1;
                      }
                   }
             }
             return counter;
        
        }