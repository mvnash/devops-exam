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

describe("validations tests suites - isValidGamerTag", () => {
    test("should return boolean", () => {
        const result = isValidGamerTag("Maxime2003");
        expect(typeof result).toEqual("boolean");
    });

    test("should return true if the string is >= 8", () => {
        const result = isValidGamerTag("Maxime2@");
        expect(result).toEqual(true);
    });

    test("should return false if the string is < 8", () => {
        const result = isValidGamerTag("Maxime");
        expect(result).toEqual(false);
    });

    test("should return true if the string contains a special caracter", () => {
        const result = isValidGamerTag("Maxi#me2003");
        expect(result).toEqual(true);
    });

    test("should return false if the string doesn't contains a special caracter", () => {
        const result = isValidGamerTag("Maxime2003");
        expect(result).toEqual(false);
    });

    test("should return false if the string doesn't contains int", () => {
        const result = isValidGamerTag("Maximeaaaaaaa@");
        expect(result).toEqual(false);
    });

    test("should return true if the string contains a int", () => {
        const result = isValidGamerTag("Maxime2003@");
        expect(result).toEqual(true);
    });
});
