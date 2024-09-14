## What is a loop
When dealing with data there are many instances in which you have to repeat an action on a dataset. The bounds of this repetition(iteration) are conditional, these iterations are  known as loops. The for loop is for when the bounds of the condition are well known. The while loop if for when it is unknown. 
Where the bounds of the condition are unknown use a while loop.
When the bounds of the condition are known use a for loop.

## Loops
### For loops
For loops are loops that iterate over finite predefined lists under a specific condition. The data types it acts on are lists, tuples, dictionaries, set or strings. In the case where a string is used , it will convert strings into character arrays.

General syntax:
for variable in list
     code to be executed
In python you do not have to initialize an indexing variable for the loop, it just assumes it begins at 0.
e.g.

animals = ["cat", "dog", "rat"]  
for x in animal:  
  print(x)
  /* expected output:
  cat
  dog
  rat*/
  

The variable x, is just that a variable, you can use a or b if you see fit, but as measure of good practice use x.

and if you were to perform the same function on a string
animals="animals"
for x in animals:
	print(x)
/* expected result:
a
n
i
m
a
l*/
The problem with this is that it iterates across the whole list, and that may not always be necessary in that case you  can specify the range, there are three important ways to do this, break, continue and the range method. 

#### break
for x in animals:
	if x== "dog":
		break
	print(x)
	/* expected result
	cat*/


What this does is it goes through the array, and the if statement  checks  the elements, and if the element is  the specified element it concludes the execution. It goes through the animals array, to print the elements in the array that precede dog

#### continue

for x in animals:
	if x== "dog":
		continue
	print(x)
	/* expected result
	cat
	rat*/
This skips the specified element, its useful to think of it as performing the code block to be executed on everything except the identified element.

#### range
range function general syntax
	range(starting number, ending number, step)
    or range(ending number), assumes the start is 0
    or range(starting number, ending number)
The range function selects the first n elements within a given range
for x in range(3):
	print(x)
This will print the values with the indexes 0-2.

for x in range(2,5):
	print(x)
This will print elements with the indexes 2-5, 2 inclusive

for x in range(2,50,4):
	print(x)
This will print elements  with the indexes 2-49, 2 inclusive, with a step of 4. So it will be outputing every 4th element.

#### else
The else keyword in a for loop specifies a block of code to be executed when the loop is finished:
for x in range(6):  
  print(x)  
else:  
  print("Finally finished!")
This only occurs once every element has been parsed in the array

#### pass statements

In the rare case where there is no code block to execute in the for loop you can use the pass statement.
e.g.
myArr=[0,1,2,3]
for x in myArr:
	pass
/* expected result:

* /
This statement lets the program know to pass the for loop and continue with the program.
## While loops
The while loop is used when we dont know the bounds of the execution, in other words when we dont know the exact number executions that need to be performed, thus we define the number of executions by whether or not a certain condition is true. The typical syntax:
while condition:
	code to be executed
Unlike for loops you have to initialize the index/count variable
e.g.:
count=0
while (count <= 5):
	print(count)
	count = count+1
	# you can also increment with count+=1#

break and continue function the same as they did in the for loop, allowing you to skip any unwanted  values or stop execution if an alternate condition has been met.


# Iterators
Iter objects perform part of the iteration for you without the necessity of creating a loop.

myArray = [ "apple", "banana", "cherry"]
myit = iter(myArray)  
  //basically the iterable will move through the array, and when the next keyword is used it moves to the next item in the list
print(next(myit))  
// this will be apple
print(next(myit))  
//this will be banana
print(next(myit))
//this will be cherry
The for loop actually creates an iterator object and executes the next() method for each loop.


