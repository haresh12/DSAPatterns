/*
If you need to find the majority element without using extra space, you can use a variation of Moore's Voting Algorithm.

The basic idea is to keep track of a potential majority element as you traverse the given list. You start with an assumption that the first element is the majority element, and then you iterate through the list, updating the potential majority element only when necessary.

Here's how the algorithm works:

Initialize two variables: one for the potential majority element and one for its count. Start with the first element of the list.

Iterate through the list starting from the second element:

If the current element is equal to the potential majority element, increment the count.
If the current element is different from the potential majority element, decrement the count.
If the count becomes zero, update the potential majority element to the current element and set the count to 1.
After iterating through the entire list, the potential majority element that remains is the candidate for the majority element. However, we need to verify if it truly occurs more than half of the time.

Iterate through the list once more to count the occurrences of the candidate element. If the count exceeds half the length of the list, then the candidate is indeed the majority element.

Here's an example to illustrate the process:

Given the list: [3, 3, 4, 2, 4, 4, 2, 4, 4]

Initialize the potential majority element as 3, and the count as 1.

Iterate from the second element:

The second element is 3 (same as the potential majority element), so increment the count to 2.
The third element is 4 (different from the potential majority element), so decrement the count to 1.
The fourth element is 2 (different from the potential majority element), so decrement the count to 0. Update the potential majority element to 2 and the count to 1.
The fifth element is 4 (different from the potential majority element), so decrement the count to 0. Update the potential majority element to 4 and the count to 1.
The sixth element is 4 (same as the potential majority element), so increment the count to 2.
The seventh element is 2 (different from the potential majority element), so decrement the count to 1.
The eighth element is 4 (same as the potential majority element), so increment the count to 2.
The ninth element is 4 (same as the potential majority element), so increment the count to 3.
After iterating through the list, the potential majority element is 4 with a count of 3.

Iterate through the list again to count the occurrences of the candidate element, 4.

The count is 5, which is more than half the length of the list (9/2 = 4.5), so 4 is indeed the majority element.
By using this modified Moore's Voting Algorithm, you can find the majority element in the list without using extra space.


//// MUST DO ALL QUESTIONS 

Majority Element:

Problem Link: Majority Element
Description: Given an array of integers, find the majority element, which appears more than ⌊n/2⌋ times.
Majority Element II:

Problem Link: Majority Element II (https://leetcode.com/problems/majority-element-ii/)
Description: Given an integer array, find all elements that appear more than ⌊n/3⌋ times. The algorithm should run in linear time and use only constant extra space.
Find All Duplicates in an Array:

Problem Link: Find All Duplicates in an Array (https://leetcode.com/problems/find-all-duplicates-in-an-array/)
Description: Given an array of integers, 1 ≤ a[i] ≤ n (n is the size of the array), some elements appear twice, and others appear once. Find all the elements that appear twice in the array.
*/