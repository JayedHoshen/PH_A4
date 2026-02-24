###### Answers to Questions

### Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# Solution-1: All are used to select elements from the DOM, but they are difference in how flexible they are and what they return.

# getElementById() is used to select a single element by its unique id and returns one element or null.

# getElementsByClassName() selects all elements that share a given class name and returns an HTMLcollection. which is also called live list.

# querySelector() returns one specific elements and querySelectorAll() returns all specific elements. They are more powerful because they accept any valid CSS selector.

#### Question-2: How do you create and insert a new element into the DOM?

## Solution-2: To create and insert a new element into the DOM, first use document.createElement() to create the element, then set its content or attributes as needed, and finally insert it into the document using methods like appendChild(), append().

### Question_3: What is Event Bubbling? And how does it work?

## Solution_3: Event bubbling is a process where an event starts on the clicked element and then moves upward to its parent elements, one by one.

### Question_4: What is Event Delegation in JavaScript? Why is it useful?

## Solution-4: Event delegation in JavaScript means adding one event listener to a parent element instead of adding separate listeners to many child elements. When you click a child element, the event bubbles up to the parent, and the parent handles it. It is useful because it makes the code simpler, uses less memory, and also works for elements that are added to the page later.

### Question_5: What is the difference between preventDefault() and stopPropagation() methods?

## Solution_5: preventDefault() stops the browser’s normal action, like stopping a link from opening or a form from submitting. stopPropagation() stops the event from moving to parent elements, so the event only works on the element you clicked.
