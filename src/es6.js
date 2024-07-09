// Destructuring
// Destructuring is the process of extracting parts of a complex value in a compact way
const someObject = {a: 1, b: 3, c: 9}
const {a,b} = someObject

function log({ message, level}) {
  console.log(level.toUpperCase(), "Message:", message)
}
log({message: "Unknown Product", level: "error"})