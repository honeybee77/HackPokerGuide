---
sidebarDepth: 0
---
# Add to Hero-Range

Any range entered without specyfing a [Variable](/variablesgeneral) explicitly, gets added to <code>hero-range</code> system variable. Type in <code>hero-range</code> and press <code>Enter</code> to see a range it holds.<br/>

<div class="tip custom-block">
<p>

Shortcut for <code>hero-range</code> is <code>hr</code> 
 
</p>
</div>

Let's enter a command to select top 7% of starting hands <code>top7</code>:

<top7-1/>

If we enter <code>ATs</code> we'll see the exact same range as before. This happens because new range doesn't replace the old one, it simply adds to it and updates system variable <code>hero-range</code> with a new value: 

<top7at-1/>



Let's type in <code>J8s</code>, this time a new hand is added to <code>hr</code>. 
We can gradually add all the pocket hands we want in our range:

<top7andj8-1/>

