// try catch finally
console.log('before try-catch');
// probabilly an error could occur
try {
    console.log('before error');
    console.log(asd);
    console.log('after error');
}
// execute block when error occurs
catch {
    console.log('error');
}
// execute block after try/catch has been executed
finally {
    console.log('final msg');
}
console.log('after try-catch');