## StickyScroll

A javascript sticky "scroll to top" button script .

## Requires
Jquery 1.9+

### Methods
Method | Argument(s) | Description
------ | ------- | -----------
init | object:optional | Optional object of properties
onScroll | none | 
scrolltop | none | 


Methods are triggered on the StickyScroll Object.
```javascript
   StickyScroll.init({ .. optional ..} );
 ```
 
### Properties
Property | Default | Description
------ | ------- | -----------
stickyButton | '.top-btn':string | Class of "scroll to top" button
lockTo | '.sitemap':string | Class of element we will stick to
wrap | 'body':string | Class or ID of wrapping element
padding | 10:number | Number of pixels to pad button from edge
minScroll | 500:Number | Pixels to scroll before showing button 