# Key questions
- What are my options when I need to bind an event handler to something that isn't in the DOM yet?
- What is event bubbling and why is it useful and necessary? 
- What is delegation? What does delegation have to do with event bubbling?
- What is a stable parent, and what role does it play in delegation?

## Handy links
- Event bubbling: https://codepen.io/telegram/pen/maJxVV

## Delegation: a love story
1. Find a stable parent (lowest parent that will always be on the DOM)
2. Bind an event listener to that stable parent
3. In the event handler, figure out if you clicked on a child of the type you're after
4. Do the thing (or not, if it's the wrong type of child)


















