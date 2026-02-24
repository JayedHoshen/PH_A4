###### Answers to Questions

### Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# Solution-1: All are used to select elements from the DOM, but they are difference in how flexible they are and what they return.

# getElementById() is used to select a single element by its unique id and returns one element or null.

# getElementsByClassName() selects all elements that share a given class name and returns an HTMLcollection. which is also called live list.

# querySelector() returns one specific elements and querySelectorAll() returns all specific elements. They are more powerful because they accept any valid CSS selector.

#### Question-2: How do you create and insert a new element into the DOM?

## Solution-2: To create and insert a new element into the DOM, first use document.createElement() to create the element, then set its content or attributes as needed, and finally insert it into the document using methods like appendChild(), append().
