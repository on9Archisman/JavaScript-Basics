console.log("After a decade");
console.log("Operators and Conditional Statements");

let a = 5;
let b = 2;
console.log("a =", a, "& b =", b);

/* Arithmetic Operator */
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

/* Unary Operator */
console.log("a++ =", a++);
console.log("a =", a);
console.log("++a =", ++a);
console.log("a =", a);

console.log("a-- =", a--);
console.log("a =", a);
console.log("--a =", --a);
console.log("a =", a);

/* Asignment Operator */
{
    let aa = 5;
    console.log("aa =", aa);
    aa += 4;
    console.log("aa += 4 =", aa);
}
{
    let aa = 5;
    console.log("aa =", aa);
    aa -= 4;
    console.log("aa -= 4 =", aa);
}
{
    let aa = 5;
    console.log("aa =", aa);
    aa /= 4;
    console.log("aa /= 4 =", aa);
}
{
    let aa = 5;
    console.log("aa =", aa);
    aa %= 4;
    console.log("aa %= 4 =", aa);
}
{
    let aa = 5;
    console.log("aa =", aa);
    aa **= 4;
    console.log("aa **= 4 =", aa);
}

/* Comparison Operator */
{
    let aa = 5;
    let bb = 5;
    console.log("aa =", aa, "& bb =", bb, "NOW aa == bb =", aa == bb);
    console.log("aa =", aa, "& bb =", bb, "NOW aa != bb =", aa != bb);
}
{
    let aa = 5;
    let bb = "5";
    // During check this bb string converts into number then it compares with aa
    console.log("aa =", aa, "& bb =", bb, "NOW aa == bb =", aa == bb);
    console.log("aa =", aa, "& bb =", bb, "NOW aa != bb =", aa != bb);
}
{
    let aa = 5;
    let bb = "5";
    // === first check the type then the value inside of it
    console.log("aa =", aa, "& bb =", bb, "NOW aa === bb =", aa === bb);
    console.log("aa =", aa, "& bb =", bb, "NOW aa !== bb =", aa !== bb);
}
{
    let aa = 5;
    let bb = 4;
    console.log("aa =", aa, "& bb =", bb, "NOW aa > bb =", aa > bb);
    console.log("aa =", aa, "& bb =", bb, "NOW aa < bb =", aa < bb);
    console.log("aa =", aa, "& bb =", bb, "NOW aa >= bb =", aa >= bb);
    console.log("aa =", aa, "& bb =", bb, "NOW aa <= bb =", aa <= bb);
}

/* Logical Operator */
{
    let aa = 5;
    let bb = 4;
    console.log("aa > bb && aa === bb =", aa > bb && aa === bb);
    console.log("aa > bb || aa === bb =", aa > bb || aa === bb);
    console.log("!(aa === bb) =", !(aa === bb));
}

// Conditional Statements

let num = prompt("Enter a number !!");

if (num > 1) {
    if (num % 2 === 0) {
        console.log(num, "is multiple of 2");
    } else if (num % 3 === 0) {
        console.log(num, "is multiple of 3");
    } else if (num % 5 === 0) {
        console.log(num, "is multiple of 5");
    } else if (num % 7 === 0) {
        console.log(num, "is multiple of 7");
    } else {
        console.log(num, "We cover it later !!");
    }
} else {
    console.log("The entered number must be grated than 1");
}

// Ternary Operator
num % 2 === 0 ? console.log("EVEN") : console.log("ODD");