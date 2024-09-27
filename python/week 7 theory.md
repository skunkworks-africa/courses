# Lists
#### what is a python list
A python list is pythons form of arrays, it can hold multiple values  and of varying data types.
#### How do lists work
Lists are initialized like other variable types however you use square brackets to denote that its an array. e.g.:

	myArr=[Bryan, Michael , Ian, 5]

The elements of an array dont have to be the same type
You can call an array element by its index

	print(myArr[0])
	#This should outout Bryan

The first element is always going to have an index of 0 , and you can use negative indexing to use the end of a list as a reference point

	print(myArr[-1])
	#This should output 5

## List methods
### Pop

The pop method allows you to remove elements from a list, you do this by targeting the element with its index, building upon the previous examples

	myArr.pop(0)
	print(myArr)
	#Will output your list with the first element removed

### Append
This allows you to add elements to the end of a list

	myList=[Dog,Cat, Monkey]
	print(myList)
	myList.append('Rat)
	print(myList)
	#This will output your list so you can visualize the change in the array


## Multi-dimensional arrays
	myMultiples=[[1,2,3],[2,4,6],[3,6,9]]
	#You reference these arrays similarly to how you would a standard list
	print(myMultiples[0][0])
	#this will output 1

# Dictionaries

Dictionaries differ from lists in the sense that they allow users to allocate identities to a particular elements of the dictionary. Giving these identities makes it significantly easier to target elements in the dictionary.

	myDict = {'Name': Michael,  'Surname': 'Reeves"}
	They are denoted useing curly braces.
You can also initialize it using the built in dict function in puthon

	newDict=dict(Name="Michael",Surname='Reeves')

You can target elements of a dictionary in a similiar manner to how you would do so with typical arrays

	print(myDict[name])
	#this will print michael

You can view all of the keys in your dictionary using the keys() method
e.g.

		myDict={'name':'jackson','surname':"wang"}
		print(myDict.keys())
		#this will output name and surname as they keys

You can also get exclusive the value held using the get method

	print(myDict.get('name'))
	#this will output the value stored with the name key

## Adding to dictionaries
You can add elements to a dictionary by defining them
e.g.

	myDict['new key']='this is a new key in the dictionary'

You can also merge two different dictionaries, using the merge | operator (you get this using shift+\)
e.g.

	dict1={'name':'Clark'}
	dict2={'surname':'Kent'}
	dict3=dict1|dict2
	print(dict3)
	#This will output {'name': 'Clark', 'surname': 'Kent'}

## Removing from dictionaries

### Removing using the del keyword

	newDict={1:'one',2:'two',3:'three'}
	del newDict[3]
	print(newDict)
### Removing using the pop() method
You  can remove elements from a dictionary using the pop() keyword
This is done by describing and addressing the key 
e.g.

	myDict={1:'one',2:'two',3:'three'}
	myDict.pop(3)
	#this will remove the key and its value
	print(myDict)

# Tuples

Tuples are like lists. however they are immutable, meaning once they have been initialized they can not be edited. This is useful for cases were you want your data to remain unchanged through out the runtime of your program.
You initialize tuples using brackets

	myTuple=(1,2,3,4,5)
	print(myTuple[1])
	print(myTuple[-2])
Tuples  use standard indexing like lists and so on
You can also convert lists to tuples using the tuple() method.

	myList=[1,2,3,4,5]
	myTuple=tuple(myList)
Tuples like lists, can also be multidimensional.
