1. What is the return value of `document.createElement`? And what does it accept as an argument?

    // The return value is the new element. The argument is a string what specifies the type of the new element. (e.g. 'h1')

2. What is the return value of `document.querySelector`? And what does is accept as an argument?

    // The return value is an html element what represents the first element in the document that matches a specified CSS selector(s). Or null if there aren't any matches. The arguement is a CSS selector string (id, class, e.g. '#fellowship')

3. What is the return value `document.querySelectorAll`?

    // A list of all elements matching with the specified CSS selector(s). Or null if there aren't any matches.

4. What is the difference between using `textContent` and `appendChild`?

    // Using textContent we can the change an element's text value.
    // With appendChild we are bascially adding new elements (children elements) to an existing element (parent element). It's like when we use .push on an array.

5. What is the event we handle to access the values of a form, and how do we access the values?

    // The event is 'submit', it fires when we press the submit button. To get access the values we use the event.target.value keywords. Or at least think this is the way how it works :D
