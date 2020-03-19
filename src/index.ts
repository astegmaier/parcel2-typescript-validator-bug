const message: string = "Hello World!";
console.log(message);

// @ts-ignore
process.browser = false;
// @ts-ignore
module.exports = function() {
  // @ts-ignore
  return (process as any).browser && test((process as any).browser);
};

function test(val: any) {
  return val;
}
