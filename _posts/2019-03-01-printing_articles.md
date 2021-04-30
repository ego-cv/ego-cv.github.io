---
title: Printing Articles
layout: post
---

Printing articles to read.

1. [Madness](#madness)
2. [Method](#method)
3. [Cost](#cost)

## Madness

An article saved to instapaper is sure to be ignored, a pile of paper has a certain weight. It exists in the same space as we do: printed writing wants to be picked up and flipped through, a passage catches your eye, you are drawn in.

I have recently bought a new laser printer, so have started printing articles out, like an old man.

The cost and hassle of actually doing this is enough friction that I only print things I think are worth it, adding a valuable layer of filter onto the `internet → instapaper → brain` pipeline. The printed articles are getting read while the unprinted ones can continue to rot in instapaper.

_(This is a similar idea to the recently launched https://waldenpond.press/ They are a paid service that prints articles for you and sends you a monthly booklet.)_

## Method

For instapaper, the following stylesheet applied using Stylus improves the layout

```css
@media print {
    /* hide link urls */
    a[href]:after {
        content: "";
    }

    #story a {
        text-decoration: underline;
    }
    
    /* increase padding slightly */
    #story {
        padding: 15px;
    }
}
```

This gives a comfortable line length and larger margins giving more space for notes. It also hides the URL, just showing an underlined link title.

The article should be printed in booklet mode, both sided, it comes out something like this (this was before the custom stylesheet was added, so you can see the horrible URL in the body)

![](pics/printing-articles-slack.jpg)

The paper in folded in half, and stapled through the stack into a piece of cardboard, then the legs of the staple folded over to 'bind' the booklet.

For PDFs, the adobe acrobat printing interface is better than the system one. "fit to page" in booklet mode works well. Below is a test of the 60 page "On grace and dignity" (15 sheets of paper). The booklet is quite thick at this point on standard weight paper. This method might not work well above 60 pages. Any more and it would be better to try to find a professionally printed book version.

![](pics/printing-articles-grace.jpg)

Staplers struggle with this many pages, so it has been bound with paperclips. I'm sure you could sew it beautifully, but I don't need a new hobby right now, and I'm pretty sure book-binding would become a hobby if I dared try it once.

## Cost
Some will see this as a waste of paper. My response is that I also use bottled water to make my coffee.
- Toner £53 for 2,600 pages (depending on the amount of print on the page)
- Paper £20 for 2,500 sheets
- Each printed page is around 2.92p
- In booklet mode, we get 4 pages per sheet, so 1.3p per page
- For example, a _22 page article uses 6 pieces of paper, and costs 29p to print_.
