// Simple test runner for longestCommonPrefix
import longestCommonPrefix from './src/longestCommonPrefix.js';

console.log("=".repeat(60));
console.log("Longest Common Prefix - JavaScript Solution");
console.log("=".repeat(60));
console.log();

// Test Case 1: Example from problem
console.log("Test 1: Example 1");
const input1 = ["flower", "flow", "flight"];
const result1 = longestCommonPrefix(input1);
console.log(`Input: ${JSON.stringify(input1)}`);
console.log(`Output: "${result1}"`);
console.log(`Expected: "fl"`);
console.log(result1 === "fl" ? "✅ PASS" : "❌ FAIL");
console.log();

// Test Case 2: Example from problem
console.log("Test 2: Example 2");
const input2 = ["dog", "racecar", "car"];
const result2 = longestCommonPrefix(input2);
console.log(`Input: ${JSON.stringify(input2)}`);
console.log(`Output: "${result2}"`);
console.log(`Expected: ""`);
console.log(result2 === "" ? "✅ PASS" : "❌ FAIL");
console.log();

// Additional test cases
console.log("Test 3: All strings identical");
const input3 = ["test", "test", "test"];
const result3 = longestCommonPrefix(input3);
console.log(`Input: ${JSON.stringify(input3)}`);
console.log(`Output: "${result3}"`);
console.log(`Expected: "test"`);
console.log(result3 === "test" ? "✅ PASS" : "❌ FAIL");
console.log();

console.log("Test 4: Single string");
const input4 = ["hello"];
const result4 = longestCommonPrefix(input4);
console.log(`Input: ${JSON.stringify(input4)}`);
console.log(`Output: "${result4}"`);
console.log(`Expected: "hello"`);
console.log(result4 === "hello" ? "✅ PASS" : "❌ FAIL");
console.log();

console.log("Test 5: Empty array");
const input5 = [];
const result5 = longestCommonPrefix(input5);
console.log(`Input: ${JSON.stringify(input5)}`);
console.log(`Output: "${result5}"`);
console.log(`Expected: ""`);
console.log(result5 === "" ? "✅ PASS" : "❌ FAIL");
console.log();

console.log("=".repeat(60));
console.log("All tests completed!");

