---
sidebarDepth: 0
---
# Хак Покер Cheat Sheet

## 1. Abbreviations

<code>AK</code> Ace and King.

<code>AKs</code> Ace and King suited.

<code>AKo</code> Ace and King offsuited.

<code>AhKs</code> Ace hearts and King spades.

<code>QQ+</code> Pair of qeens and higher, i.e. QQ, KK, AA.

<code>AJ+</code> AJ or higher, i.e. AJ, AQ, AK.

<code>22-66</code> Pairs from deuces to sixes.

<code>A5-A2</code> Aces with the second card from five to deuce.

<code>JT-76s</code> Suited connectors from 76s to JTs, i.e. 76s, 87s, 98s, T9s, JTs.

<code>J9-75s</code> Suited connectors with one gap from 75s to J9s, i.e. 75s, 85s, 97s, T8s, J9s.

<code>top 20%</code> The best 20% preflop hands. 

<code>top20</code> The best 20% preflop hands (shorter variant).

<code>top20 not JJ+, AK</code> The best 20% preflop hands except JJ+ and AK.

<code>top20 not top5</code> The best 20% preflop hands except the best 5% preflop hands.

## 2. Suit Selection

<code>AK[dh cs]</code> Specifying suits directly, i.e. AdKh, AcKs.

<code>AKs[d c]</code> Specifying only suited hands, i.e. AdKd, AcKc.

<code>AcdKhc</code> Specifying suites for the first card then for the second one. Suited hands are excluded from the result, i.e. AcKh, AdKc, AdKh

<code>A2-AKs[c d]</code> Range from A2 to AK suited clubs or suited diamonds, i.e. Ac2c Ac3c ... AcKc Ad2d Ad3d ... AdKd

<code>78-9T[cd ss]</code> Connectors from 78 to 9T with suit pairs directly specified, i.e. 7c8d 9c8d Tc9d 7s8s 9s8s Ts9s

## 3. Boards

<code>Td9d8c</code> Exact cards Td9d8c on the board.

<code>T98</code> Cards T98 on the board with arbitrary suits.

<code>Axx</code> Ace and two random cards on the board.

<code>xxx</code> Random flop.

<code>xxxx</code> Random turn.

<code>J[T-2][T-2]</code> Jack high board.

<code>7c8c9cA|Kc|2 </code> Turn is either any A or Kc or any 2

<code>7+8+J- </code> First flop card is 7 or higher, second card is 8 or higher, third one is J or lower.

<code>2c2dAchd </code> Third flop card is either of the following: Ac, Ah, Ad

<code>2c2d[Q-Ahd] </code> Third flop card is either of the following: Qh, Qd, Kh, Kd, Ah, Ad

## 4. Compute Equity

<code>AK vs QQ</code> computes equity between AK and QQ.    

<code>AK vs QQ vs TT</code> computes equity between AK, QQ and TT.    

<code>AK vs QQ on T98</code> computes equity between AK and QQ on the board T98.

<code>AK vs QQ on Tc9h8s dead Ac</code> computes equity between AK and QQ on the board Tc9h8s given that Ac is a dead card.

<code>AK vs QQ sd</code> computes equity between AK and QQ in short deck (6+ holdem).

<code>top20 vs QQ</code> computes equity of top 20% preflop hands versus QQ.

<code>AJ+ KQ+ 66+ 65-AKs 8T-AQs KTs A6s+ vs 7c6c</code> computes equity of a specified range versus 7c6c.


## 5. Hand Strength Distrubution

<code>top20 on xxx</code> shows possible hand values on a random flop of the top 20% preflop hands.

<code>top5 98-KQs KJs on Axx</code> shows possible hand values on a flop with an ace and two random cards.

<code>top20 on T98 sd</code> shows possible hand values on a flop T98 in 6+ hold'em (short deck)..

<code>top20 on T98 dead AcKd</code> shows possible hand values on a flop T98 given that cards Ad and Kd are dead.

## 6. Working with preflop ranges. 

_To be continued..._

## 7. Variables 

You may use variables to define and store preflop ranges. Variables are stored between web sessions, meaning you can close the browser, turn of computer and they will still be available next time you use HackPoker.

<code>myrange JJ+</code> Append JJ, QQ, KK, AA to a variable called 'myrange'.

<code>myrange</code> Show the value of the variable called 'myrange'.

<code>myrange vs AK</code> Compute equity between range stored in 'myrange' and AK.

<code>myrange on A87</code> Show hand strength distribution of 'myrange' on the board A87.

<code>myrange another-variable</code> Append range stored in 'another-variable' to the range in 'myrange'.

## 8. Other

<code>game sd</code> switch to the Short Deck mode (6+ Hold'em).

<code>game h</code> switch back to Texas Hold'em mode.

<code>game</code> Get current game mode.

<code>clean</code>, <code>Ctrl+X</code> clean the output. 

<code>Alt -></code> create a parallel workning pane.

<code>Tab</code> navigate between parallel panes.

## 9. User Variables Export & Import 

<code>Alt+S</code> Export User Variables to Clipboard. 

<code>Alt+Q</code> Export User Variables to a file. 

To import user variables paste exported text into command input and press <code>Enter</code>


