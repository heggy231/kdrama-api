# handy links and resources

## style
1. background img to cover:
* [responsive cover page background img article](https://codepen.io/heggy231/pen/oNZXWRq)
```css
body {
  background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/rectangle-overlay.png), url('https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fwinter-calm-background.jpeg?v=1620561758843'); 
/*   How to Create a Responsive Full Background Image Using CSS [Tutorial]
  
  https://www.webfx.com/blog/web-design/responsive-background-image/#:~:text=Use%20background%2Dsize%20property%20to,%2C%20the%20viewport's%20width%2Fheight. 
*/
  /* A background image of an HTML element will scale proportionally when its background-size property is set to cover.
scale the background img, cover 
the entire background of the element, 
keep the img proportion
  */
/* Background image is centered vertically and horizontally at all times */
background-position: center center;

/* Background image doesn’t tile */
background-repeat: no-repeat;

/* Background image is fixed in the viewport so that it doesn’t move when
the content’s height is greater than the image’s height */
background-attachment: fixed;

/* This is what makes the background image rescale based
on the container’s size */
background-size: cover;

/* Set a background color that will be displayed
while the background image is loading */
background-color: #464646;
}
```
* [live code](https://codepen.io/heggy231/pen/oNZXWRq)