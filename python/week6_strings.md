## What are strings
Strings are character based values, think sentences and letters. Denoted by quotation marks ('' and "" are the same in this context) (e.g. "string") they store letter characters in an array.
As it is an array with a primary index of zero we can call specific characters by calling specific elements in the array
e.g.
word="this is a string"
print(word[3])
//this will output s

Like standard arrays the length method can be used to get the length of the array. e.g.


##### Multiline strings
You make them by using triple quotation marks e.g.
m=""" The quick brown fox
	jumps over the  lazy
	dog"""

remember quotation marks don't make a difference
m=''' The quick brown fox
		jumps over the lazy
		dog'''
- Mutable vs immutable strings
##### Concatenate strings
You can combine strings with the "+" operator
e.g.
word1="an"
word2 = "imal"
word3=word1+word2
print(word3)
//this will output animal

##### Checking strings
You can check whether or not a word, or letter are or are not in a string.
To check if the word is in you would use the in keyword
e.g.
myStr="The quick brown fox jumps"
print("brown" in myStr)
// this returns true, and false if it is not there


You can also check if a word is **not** in the string
e.g.:
myStr="The quick brown fox jumps"
print("lazy" not in myStr)
// this returns true, and false if it is not there
