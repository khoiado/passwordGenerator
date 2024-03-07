
// My functions

function foo(a: number, b: number, c: boolean) {    
    let d = 0;
    if (c) {
        d = bar(a);
    } else {
        d = bar(b) + ding(a);
    }

    b = bar(a);

    console.log("a: " + a + ", b: " + b + ", c: " + c + ", d: " + d);
}

function bar(a: number) {
    return a * 2;
}

function ding(a: number) {
    return a + 2;
}


// Main

function main() {
    foo(4, 7, false);
}
main();