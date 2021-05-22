---
sidebarDepth: 0
---
# Syntax

### Space, Coma Requirements

<code>AKs, top 10%, 55+, 67o</code> is a valid range. But <code>AKstop10%55+67o</code> is also valid. If you want to use <code>top10</code> without specifying <code>%</code> sign you need to put space after <code>top10</code> , i.e., <code>AKstop10 55+67o</code> is a valid range. 

You can use either  <code>Space</code> or  <code>Coma</code>. E.g., <code>AKs, top 10%, 55+, 67o</code> and <code>AKs top 10% 55+ 67o</code> are the same. 

<div class="warning custom-block">
<p>

When computing [Equity](/equitygeneralrules) or [Hand Strength Distribution](/hsdgeneralrules), keywords <code>vs</code>, <code>on</code> have to be seperated by <code>Spaces</code> 
 
</p>
</div>

### Range overriding rules

<code>top 30% top 5%</code> will select <code>top 30%</code> range. <code>top 5%</code> will be added to the result, but because <code>top 30%</code> range already includes <code>top 5%</code> the result will not change.

### Lowercase, Uppercase Requirements

You can use any lowercase or uppercase letters when constructing a range, except the command <code>not</code> which has to lowercased. <code>ToP30 not Aa</code> is a valid range. 
