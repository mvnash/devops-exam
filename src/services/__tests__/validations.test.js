const { isEmpty } = require("../validations");
const { isValidGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function

describe("validations tests suites - isValidGamerTag", () => {
    test("should return boolean", () => {
        const result = isValidGamerTag("Maxime2003");
        expect(typeof(result)).toEqual("boolean");
    });
});