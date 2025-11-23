import longestCommonPrefix from './longestCommonPrefix.js';

/**
 * Simple test runner
 */
function runTests() {
    let passed = 0;
    let failed = 0;
    
    function test(name, input, expected) {
        const result = longestCommonPrefix(input);
        if (result === expected) {
            console.log(`✅ PASS: ${name}`);
            console.log(`   Input: ${JSON.stringify(input)}`);
            console.log(`   Expected: "${expected}", Got: "${result}"\n`);
            passed++;
        } else {
            console.log(`❌ FAIL: ${name}`);
            console.log(`   Input: ${JSON.stringify(input)}`);
            console.log(`   Expected: "${expected}", Got: "${result}"\n`);
            failed++;
        }
    }
    
    console.log("=".repeat(60));
    console.log("Testing longestCommonPrefix Function");
    console.log("=".repeat(60) + "\n");
    
    // Test Case 1: Example from problem
    test(
        "Example 1: ['flower','flow','flight']",
        ["flower", "flow", "flight"],
        "fl"
    );
    
    // Test Case 2: Example from problem
    test(
        "Example 2: ['dog','racecar','car']",
        ["dog", "racecar", "car"],
        ""
    );
    
    // Test Case 3: All strings identical
    test(
        "All strings identical",
        ["test", "test", "test"],
        "test"
    );
    
    // Test Case 4: Single string
    test(
        "Single string",
        ["hello"],
        "hello"
    );
    
    // Test Case 5: Empty array
    test(
        "Empty array",
        [],
        ""
    );
    
    // Test Case 6: One empty string
    test(
        "One empty string",
        ["", "abc", "def"],
        ""
    );
    
    // Test Case 7: All empty strings
    test(
        "All empty strings",
        ["", "", ""],
        ""
    );
    
    // Test Case 8: Common prefix of one character
    test(
        "Single character prefix",
        ["a", "ab", "abc"],
        "a"
    );
    
    // Test Case 9: No common prefix
    test(
        "No common prefix",
        ["abc", "def", "ghi"],
        ""
    );
    
    // Test Case 10: First string is shortest
    test(
        "First string is shortest",
        ["a", "ab", "abc", "abcd"],
        "a"
    );
    
    // Test Case 11: First string is longest
    test(
        "First string is longest",
        ["abcdef", "abc", "ab"],
        "ab"
    );
    
    // Test Case 12: Mixed lengths with common prefix
    test(
        "Mixed lengths",
        ["interspecies", "interstellar", "interstate"],
        "inters"
    );
    
    // Test Case 13: Single character strings
    test(
        "Single character strings - all same",
        ["a", "a", "a"],
        "a"
    );
    
    // Test Case 14: Single character strings - different
    test(
        "Single character strings - different",
        ["a", "b", "c"],
        ""
    );
    
    console.log("=".repeat(60));
    console.log(`Test Results: ${passed} passed, ${failed} failed`);
    console.log("=".repeat(60));
    
    return failed === 0;
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}` || import.meta.url.includes('longestCommonPrefix.test.js')) {
    runTests();
}

export { runTests };

