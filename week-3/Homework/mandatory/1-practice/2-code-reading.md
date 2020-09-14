# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    {
3        let x = 2;
4        console.log(x);
5    }
6    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

The reason for the two different outputs is because they are in different scopes. The x in line 4 has a value of 2 because that x is defined/assigned the value 2.


## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

The output will be 10 & undefined. X is global and y is only available locally in the function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x); //10
console.log(x); //9

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

The output of f1(x) will be 10, the value is manipulated in the function and returned.
the first console.log(x) will output 9 as its in the same scope and also a const.

The output of f2(y) is x:10 because the function alters the value in its scope but the console.log(y) equals x:9 due to being in the same scope and a const.
