/**
 * @file
 * @brief A program to determine if a string is a palindrome or not
 */

#include <assert.h>   // for assert function (for tests)
#include <stdbool.h>  // for bool data type
#include <string.h>   // for strlen function

/**
 * @brief Determines if the input `string` is a palindrome or not
 * @param string the string (array of characters) to be checked
 * @returns true if `string` is a palindrome 
 * @returns false if `string` is not a palindrome
 */
bool isPalindrome(const char string[]) {
    int lengthOfString = strlen(string); // the length of `string`

    // iterates over the `string`
    for(int i = 0; i < lengthOfString / 2; i++) {
        // checks if elements at adjacent ends of `string` are different
        if(string[i] != string[lengthOfString - i - 1]) {
            // if they are different,
            return false;
        }
    }

    // otherwise,
    return true;
}

/**
 * @brief Self-test Implementations
 * @returns void
 */
void test(void) {
    char *str = "abbbba";
    assert(isPalindrome(str) == true);

    str = "randy";
    assert(isPalindrome(str) == false);
}

/**
 * @brief Main function
 * @returns 0 on exit
 */
int main(void) {
    test(); // runs self-test implementation of the program
    return 0;
}