import add from "./calculator";

test("should add two numbers", () => {
  expect(add(10, 2)).toBe(12);
  expect(add("A", "A")).toBe(130);
});

// test("should sub two numbers", () => {
//   expect(sub(5, 3)).toBe(2);
// });
