/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.


Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"
*/

let shirtWidth = 30;
let shirtLength = 33;
let shirtSleeve = 9.63;

let shirtWidthSize = null;
let shirtLengthSize = null;
let shirtSleeveSize = null;

if (shirtWidth >= 18 && shirtWidth < 20) {
  shirtWidthSize = "S"
} else if (shirtWidth >= 20 && shirtWidth < 22) {
  shirtWidthSize = "M"
} else if (shirtWidth >= 22 && shirtWidth < 24) {
  shirtWidthSize = "L"
} else if (shirtWidth >= 24 && shirtWidth < 26) {
  shirtWidthSize = "XL"
} else if (shirtWidth >= 26 && shirtWidth < 28) {
  shirtWidthSize = "2XL"
} else if (shirtWidth >= 28) {
  shirtWidthSize = "3XL"
}

if (shirtLength >= 28 && shirtLength < 29) {
  shirtLengthSize = "S"
} else if (shirtLength >= 29 && shirtLength < 30) {
  shirtLengthSize = "M"
} else if (shirtLength >= 30 && shirtLength < 31) {
  shirtLengthSize = "L"
} else if (shirtLength >= 31 && shirtLength < 33) {
  shirtLengthSize = "XL"
} else if (shirtLength >= 33 && shirtLength < 34) {
  shirtLengthSize = "2XL"
} else if (shirtLength >= 34) {
  shirtLengthSize = "3XL"
}

if (shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  shirtSleeveSize = "S"
} else if (shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
  shirtSleeveSize = "M"
} else if (shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
  shirtSleeveSize = "L"
} else if (shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
  shirtSleeveSize = "XL"
} else if (shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
  shirtSleeveSize = "2XL"
} else if (shirtSleeve >= 10.13) {
  shirtSleeveSize = "3XL"
}

if (shirtWidthSize === shirtLengthSize && shirtLengthSize === shirtSleeveSize) {
  console.log(`This T-shirt size is ${shirtLengthSize}`);
} else {
  console.log(`N/A`)
}