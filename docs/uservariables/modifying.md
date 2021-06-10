# Modifying Variables

### Adding Range to a Variable

Type in your variable name followed by a range, press Enter. For example, <code>MyVariable 67s 89s</code> will add 67s and 89s to MyVariable. If the variable <code>MyVariable</code> doesn't exist it will be created. 

### Remove a Variable 

Type in <code>remove</code> followed by a variable name. E.g, <code>remove btnopenraise</code>, now variable <code>btnopenraise</code> is removed.</br>

Type in <code>remove all</code> to remove all user variables. 

<div class="warning custom-block">
<p>

<code>remove all</code> command will delete all User Variables. It is recommended to [Export Variables](/uservariables/importexport) if you think you might need them later. 
 
</p>
</div>

### Subtract range from a Variable.

Use [<code>not</code>](/range/not) to subtract a range from a variable. E.g., <code>myvariable not AA</code>.

### Replace Variable value with a range

Enter Variable name followed by a range followed by <code>-r</code>. E.g., <code>myvariable A2+ -r</code>. Now variable <code>myvariable</code> contains a new range A2 - AK.