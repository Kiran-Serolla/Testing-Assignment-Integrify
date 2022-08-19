// unit test

import { addNumber } from "../function/addNumber";

test("check add function", () => {
  const result = addNumber(1, 2);
  expect(result).toBe(3);
});
