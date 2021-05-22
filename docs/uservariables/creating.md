# Creating Variables

### Create variable from range.

Type in variable name followed by a [range](ranges/introduction), press <code>Enter</code>. 

E.g, <code>btnopenraise top33</code>, now variable <code>btnopenraise</code> contains top 33% of starting hands. Enter <code>btnopenraise</code> into Command Line to see those hands. 

### Create variable from board. 

E.g, <code>Ahigh Axx</code>, now variable <code>Ahigh</code> contains board -  A high flop with two random cards. 

### Create variable from another variable

Let's assume we have created a variable <code>broadway TT+ AT+ KT+ QT+ JT</code> and a variable <code>pairs 22+</code>. Now we can create a new variable <code>broadwayNoPairs broadway not pairs</code>

<bwnopairs-1/>

We can combine any number of variables and ranges to create a new variable, e.g., <code>myvar broadway pairs 9Ts</code>





