import { describe, it } from "node:test"
import { strict as assert } from 'node:assert'

const sum = (a, b) => a + b

describe("[test cases]", () => {
    it("should do something", () => {
        assert.equal(sum(1, 1), 2)
    })
})