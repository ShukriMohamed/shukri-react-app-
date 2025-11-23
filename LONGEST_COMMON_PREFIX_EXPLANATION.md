# Longest Common Prefix - Solution Explanation

## Problem Statement
Find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `""`.

## Approach

### Algorithm Strategy
The solution uses a **horizontal scanning** approach:

1. **Start with the first string** as the initial prefix candidate
2. **Iterate through remaining strings** and compare character by character
3. **Update the prefix** to only include characters that match in all strings seen so far
4. **Early exit** if the prefix becomes empty (no common prefix exists)

### Step-by-Step Example

**Example 1:** `["flower", "flow", "flight"]`

1. Start: `prefix = "flower"`
2. Compare with "flow":
   - Compare characters: `f==f` ✓, `l==l` ✓, `o==o` ✓, `w==w` ✓, `e!=w` ✗
   - New prefix: `"flow"`
3. Compare with "flight":
   - Compare characters: `f==f` ✓, `l==l` ✓, `o!=i` ✗
   - New prefix: `"fl"`
4. Result: `"fl"`

**Example 2:** `["dog", "racecar", "car"]`

1. Start: `prefix = "dog"`
2. Compare with "racecar":
   - Compare characters: `d!=r` ✗
   - New prefix: `""`
3. Early exit (prefix is empty)
4. Result: `""`

## Time Complexity
- **O(S)** where S is the sum of all characters in all strings
- In the worst case, we compare each character of each string once

## Space Complexity
- **O(1)** extra space (excluding the output string)
- We only use a few variables: `prefix`, `i`, `j`

## Edge Cases Handled

1. **Empty array**: Returns `""`
2. **Single string**: Returns that string itself
3. **Empty strings**: Returns `""`
4. **No common prefix**: Returns `""`
5. **All strings identical**: Returns the common string
6. **First string is shortest/longest**: Algorithm handles both cases

## Alternative Approaches

### 1. Vertical Scanning
Compare characters at the same index across all strings:
```javascript
for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || strs[j][i] !== char) {
            return strs[0].substring(0, i);
        }
    }
}
```

### 2. Divide and Conquer
Split the array in half, find prefixes recursively, then combine:
- More complex but same time complexity
- Useful for parallel processing scenarios

### 3. Trie (Prefix Tree)
Build a trie and find the longest common path:
- Better for multiple queries
- More space overhead

## Why This Solution?

The horizontal scanning approach is chosen because:
- ✅ Simple and intuitive
- ✅ Easy to understand and implement
- ✅ Efficient for this problem
- ✅ Handles edge cases naturally
- ✅ Early exit optimization when no prefix exists

