export function greet(name) {
  return `hello, ${name}`;
}
if (typeof document !== "undefined") {
  document.getElementById("out").textContent = greet("sandbox");
}
