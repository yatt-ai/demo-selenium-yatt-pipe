import { assert } from "chai";

describe("Basic tests", function () {
    it("should pass a simple assertion", function () {
        assert.strictEqual(1 + 1, 2);
    });

    it("should handle string operations", function () {
        const str = "Hello, world!";
        assert.strictEqual(str.length, 13);
        assert.isTrue(str.includes("world"));
    });

    it("should work with arrays", function () {
        const arr = [1, 2, 3, 4, 5];
        assert.strictEqual(arr.length, 5);
        assert.strictEqual(
            arr.reduce((a, b) => a + b, 0),
            15
        );
    });
});
