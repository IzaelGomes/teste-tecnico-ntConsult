import { describe, expect, test } from "vitest";
import { formatDate } from "./utils";

describe("utils", () => {
  test("it should return data formated", () => {
    expect(formatDate(new Date("2025-01-05T03:24:00").toString())).toBe(
      "05/01/2025"
    );
  });
});
