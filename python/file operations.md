Python gives a very powerful and versatile user interface that allows you to interact with files very efficiently.
It follows the general syntax:

	f = open(filename, mode)


## Operations
There are certain modes you can open a file in, and good rule of thumb on their usage is the type of operation you are trying to complete
### Read
r: This is to open a file in your program
r+:This allows you to read and write to a file, it does not overwrite any pre-existing data in the file
allowing you to primarily read but

	file = open('pyData.txt','r')
	print(file.readline(1))
	#This will read the first line in your file, and is one of the methods you can use
You can use plain read to extract the contents of the file:

	file = open('pyData.txt','r')
	fileContent=file.read()
	print(fileContent)
### Write:
w: This is to primarily write, giving you full writing privileges allowing you to also overwrite any pre-existing data in the program

	file=open('myData.txt','w')
	file.write("The quick brown fox jumps over the lazy dog")
	
w+: This is extended writing, allowing you to create a file if it does not exist ,you can also read data from a given file with the intent to write to it, it will effectively reset the file allowing you to write to it.


	file=open('myData.txt','w+')
	file.write("The quick brown fox jumps over the lazy dog")
	print(file.read())

### Append:
a: This is to append, or add to the file without overwriting any pre-existing data

	file=open('myData.txt','a')
	file.write("The quick brown fox jumps over the lazy dog again")
	
a+:  This is to append and read data from the file, without overriding any pre-existing data in the file.

	file=open('myData.txt','a+')
	file.write("The quick brown fox runs from the lazy dog")
	print(file.read())
## Create
x+: this creates the file and will return an error if the file already exists
e.g.:

	file=open('myData.txt','x')
	file.write("The quick brown fox jumps over the lazy dog")
	newfile=open('myData.txt','r')
	print(myData.read())


