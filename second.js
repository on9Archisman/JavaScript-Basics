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