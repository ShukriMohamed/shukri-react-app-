/**
 * Finds the longest common prefix string amongst an array of strings.
 * 
 * Algorithm:
 * 1. Handle edge cases (empty array, single string)
 * 2. Use the first string as the initial prefix candidate
 * 3. Compare each subsequent string character by character
 * 4. Update the prefix to the common part found so far
 * 5. Return the final common prefix
 * 
 * Time Complexity: O(S) where S is the sum of all characters in all strings
 * Space Complexity: O(1) excluding the output string
 * 
 * @param {string[]} strs - Array of strings to find common prefix from
 * @return {string} - The longest common prefix, or "" if none exists
 */
var longestCommonPrefix = function(strs) {
    // Edge case: empty array
    if (strs.length === 0) {
        return "";
    }
    
    // Edge case: single string, it is its own prefix
    if (strs.length === 1) {
        return strs[0];
    }
    
    // Start with the first string as the initial prefix
    let prefix = strs[0];
    
    // Compare with each subsequent string
    for (let i = 1; i < strs.length; i++) {
        const currentString = strs[i];
        
        // Find the common prefix between current prefix and current string
        let j = 0;
        while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
            j++;
        }
        
        // Update prefix to the common part found
        prefix = prefix.substring(0, j);
        
        // Early exit: if prefix becomes empty, no need to check further
        if (prefix === "") {
            return "";
        }
    }
    
    return prefix;
};

export default longestCommonPrefix;

