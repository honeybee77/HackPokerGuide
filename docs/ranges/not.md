---
sidebarDepth: 0
---
# Not

### Use <code>not</code> to specify which range should be excluded from the result. 

Type <code>top20 not JJ+, AK</code> and press Enter.

<top20notjj-1/>

Type <code>top20 not top5</code> and press Enter. The result shows top 20% starting hands except top 5%. 

<top20nottop5-1/>

### Use <code>not</code> with variables. 

Let's create two variables. Type <code>pairs 88+</code> press Enter, type <code>broadway ATo-ATs</code> press Enter. We can create a new variable with <code>broadway</code> range except <code>pairs</code> range.<br/> <code>broadwayNoPairs broadway not pairs</code> 
<broadwaynotpairs-1/>




