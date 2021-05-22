---
sidebarDepth: 0
---
# Not

Use <code>not</code> to specify which range should be excluded from the result. 

<code>top20 not JJ+, AK</code>

<top20notjj-1/>

<code>top20 not top5</code> The best 20% preflop hands except the best 5% preflop hands.

<top20nottop5-1/>

Use <code>not</code> with variables. Let's say we have a variable <code>pairs 88+</code> and a variable <code>broadway ATo-ATs</code>. We can create a new variable which will contain a range from <code>broadway</code> except a range from <code>pairs</code>. <code>broadwayNoPairs broadway not pairs</code> : 
<broadwaynotpairs-1/>




