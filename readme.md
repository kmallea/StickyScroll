## StickyScroll

A javascript sticky "scroll to top" button script .

## Requires
Jquery 1.9+

## Methods

Methods are triggered on the StickyScroll Object.

```javascript
   StickyScroll.init({ .. optional ..} );
 ```

## Public Methods
Method | Argument(s) | Description
------ | ------- | -----------
init | object:optional | Optional object of properties
onScroll | none | Manually call the function thats triggered when the page scrolls
scrolltop | none | Manually trigger the scroll to top function

 
## Properties
Property | Default | Description
------ | ------- | -----------
stickyButton | '.top-btn':string | Class of "scroll to top" button
lockTo | '.sitemap':string | Class of element we will stick to
wrap | 'body':string | Class or ID of wrapping element
padding | 10:number | Number of pixels to pad button from edge
minScroll | 500:Number | Pixels to scroll before showing button 

## Download
[Get StickyScroll via Github][downLoadLink]

[downLoadLink]: https://github.com/kmallea/StickyScroll  "Get StickyScroll via Github"