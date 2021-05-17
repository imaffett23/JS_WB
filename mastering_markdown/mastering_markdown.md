Separate lines with a blank space if you want them on different lines!

See...full space between them here.

One set of asterisks or underscores makes it *italics*; two makes it **bold**

Double tilda for ~~strikethrough~~

---

# Heading One

Also Heading One
==============

## Heading Two

Also Heading Two
--------------------

### Heading Three (and etc.)

---

# Various Ways to Link

<http://wesbos.com>

[My GitHub account](http://github.com/wesbos)

[Hackeryou.com](http://hackeryou.com "This is where Wes teaches")

Make sure you check out [Wes'][1] Site.

If you want to learn React, you can learn at React for Beginners - [Wes][1] did a great job on this.

[Wes][1] also teaches at [HackerYou][hack] where you can come learn with him in person. Check
out there site for more information.

[1]: http://wesbos.com
[hack]: http://hackeryou.com

---

# Images in Markdown

![Wow great pic](https://unsplash.it/500/500?random "This is the tootip")

![Cute pup!][pup]

[![](http://unsplash.it/50/50?image=1000)](http://unsplash.it/500/500?image=1000)

[<img src="http://unsplash.it/50/50?image=1000">](http://unsplash.it/500/500?image=1000)

[pup]: http://unsplash.it/500/500?image=1012

---

# Lists in Markdown

"-" and "+" also work!

* Milk
* Bread
* Eggs

1. Combine Ingredients
   * Sift the Flower
2. Gently Stir Together
   1. Stir until just right

        This is not inline

   2. Stop
3. Bake at 350 for 20 minutes

---

# Line Breaks, Horizontal Rules, and Block Quotes

Line break can be a full line between lines or use the br tag.<br>
See it works!

Used horizontal rules above (at least 3 "=" or "-"; careful with headings though)

> Block quote like this!
> Can have it on multiple lines
>
> And line breaks
>
> * **Wes Bos**

---

# Code Blocks

Here is my code (indented):

    var x = 100;
    const dog = 'Snickers';

Also more code (specifies language too) - use backticks instead

```php
$age = 50;
$name = "wes";
echo strtoupper($name);
```

Can try it inline as well: `var x = 100;`

Can also show diffs (a la git)

```diff
- var y = 200;
+ var x = 300;
```

---

# Tables

Can build tables with pipes (The pipes with colons and dashes are what tell markdown it's a table)

* Left colon means left-aligned; right means right aligned; both means centered!

| Dog's Name | Dog's Age |
| :--------: | :-------: |
|  Snickers  |     2     |
|  Prudence  |     8     |

---

# Github Treats

Checkboxes

* [ ] Milk
* [ ] Bread
* [ ] Eggs

Can also link issues and pull requests in github using ("#XX").  Can also "@" people
on GitHub.
