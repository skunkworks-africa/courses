
# Why program?

## What is a program?

A program is a collection of instructions for operations the computer must perform. In modern computers, programs contain sequential commands for the computer to perform. This is usually in a programming language that is either compiled (converted to machine code before running) or interpreted (converted into machine code while running). The computer reads these commands one-at-a-time, storing the current instruction in the CIR(current instruction register) and the later instructions in other memory to be fetched. Note that a program is also a special kind of data that indicates how to operate on application or user data.

Computer programs can be characterized as interactive or batch in terms of what drives them and how continuously they run.

##  What is the importance of a program

Being a collection of predetermined and defined instructions, programs can be used to complete a diverse range of tasks, with greater efficiency and accuracy. We go more in depth in the following tables. More efficient for certain tasks.

#### Automation:

Programs can automate simple (and in some occasions complex) repetitive tasks. An example would include uploading files to various different **repositories**  you may be  a part of, it would be tedious to submit the files to each one and a program can simplify that by uploading it to them all.

#### Efficiency:

Thanks to the more rigid nature of programs, there is less unexpected variables that affect execution increasing the efficiency. A good example would be a calculator program, which calculates greater amounts of data at a greater velocity and with greater accuracy than a human as programs do not get distracted. They can also enable **batch processing** which allows multiple inputs into a particular program. This may be done through running various instances of the same program or having batch processing directly integrated int o the program.

#### Re-usability:

Programs can be called in various environments almost on demand. This allows their usage to be more widespread and applicable. Along with that this allows them to be reused on various occasions with decreased efficiency because of tiredness. This also helps simplify the creation of a future software as the program can be called upon again.

#### Compartmentalization:

Though to some extent dependent on the programming paradigm, programs can be broken down into simpler portions such as functions and objects. This can be exported to other programs as modules, helping accelerate the development of other programs.

## What types of programs should you expect to create?

#### Machine Learning

Machine learning can be the first step for someone interested in artificial intelligence. Machine learning studies algorithms that change in relation to their input or ‘learn’. These algorithms are used to build models based on samples of training data to make predictions and decisions. A great example would be Chat GPT which uses back propagation and transformer algorithm(/architectures) in order to train on its given dataset.

Machine learning can be an intimidating field to get started with because of its relatively young nature in relation to its recent boom, drawing a lot attention and development in the field. This giving it a breakneck pace of innovation, however this also makes it one of the most exciting

#### Scientific Computing

Another field is scientific computing. Scientists use advanced computing capabilities available through supercomputers clusters of computers, and even desktop and laptop computers to understand and solve complex problems.

 Thanks to pythons advanced built in data manipulation features it is useful in the development of simulated environments. This is because Simulated environments especially in scientific computing have a diverse range of interacting variables which need to be accounted for and their management is ideal in python.

#### Data Analysis and Visualization

Data analysis is a process of collecting, inspecting, cleansing, and modeling data to discover useful information, make predictions, arrive at conclusions, support decision-making processes, and more. Data analysis is closely related to data visualization, which deals with the graphical representation of data.

Libraries like MatPlotlib and others assist in the simplification of data visualization especially within a mathematical or scientific context. Considering data formats like spreadsheets, arrays and so on and so forth, python allows programmers to dynamically analyze and visualize data thanks to its plethora of supporting libraries

#### Web Development

Web development is one of the most in-demand skills, with a lot of opportunities for you out there. In this field, you’ll find several useful Python frameworks, libraries, and tools for developing cool web applications, APIs, and more.

This only scratches the surface of the types of software you can create with Python. Thanks to its flexible nature the possibilities are almost endless. However its shares many of the same pitfalls of high-level languages, such as not being ideal for the creation of drivers or any form of low-level software for hardware.
# Hardware Architecture
- Hardware requirements
- Hardware optimizations
- Pros and Cons to hardware specs
- Hardware limitations
### Minimum hardware requirements for development

Minimum hardware requirements are very dependent on the particular software being developed. Applications that need to store large arrays/objects in memory will require more RAM, whereas applications that need to perform numerous calculations or tasks more will require a more capable processor.

That  said, we find that the following list represents the minimum requirements needed to install Enthought Python and associated applications:

- Modern Operating System:

- Windows 10 or higher
- Mac OS 11 or higher, 64-bit, ideally the latest model of your operating system
- Linux: RHEL 6/7, 64-bit (almost all libraries also work in Ubuntu)

- x86 64-bit CPU (Intel / AMD architecture). Modern ARM CPUs like the M1 or higher can be used 
- 8 GB RAM or higher
- 10 GB free disk space or more

These should server as a suitable  Guideline for device requirements.

### Hardware optimization

At its core, hardware optimization is about enhancing the performance of computer systems to meet the demands of modern applications. Programs, whether they are simple utilities or complex, resource-intensive applications, rely heavily on the CPU, memory, storage, and other hardware components. High-quality, well-optimized hardware can drastically reduce processing times, improve response times, and ensure smoother execution of tasks.

1. **CPU Efficiency**: The CPU is the heart of any computing system, and its performance directly affects how quickly and efficiently programs execute instructions. Optimizing CPU usage through better design, higher clock speeds, and efficient instruction sets ensures that programs run faster and more effectively, reducing latency and increasing throughput.
2. **Memory Management**: Adequate and fast memory is essential for the smooth operation of applications. Optimizing memory usage involves ensuring that the system has sufficient RAM and that it is used efficiently. High-speed memory modules and effective memory management techniques can prevent bottlenecks, reduce swapping, and enhance the overall performance of programs.
3. **Storage Speed**: The speed of storage devices, such as SSDs versus traditional hard drives, significantly impacts program performance. Fast storage solutions reduce load times, decrease data retrieval times, and improve the responsiveness of applications. Optimizing storage systems ensures that data-intensive applications perform at their best, enhancing user experience and productivity.

In conclusion, hardware optimization is a cornerstone of modern computing, crucial for enhancing the performance, reliability, security, and scalability of software applications. By investing in high-quality, well-optimized hardware, users and developers can ensure that programs run efficiently, reliably, and securely, providing a seamless and enjoyable experience. As technology continues to evolve, the importance of hardware optimization will only grow, making it an indispensable aspect of software development and system design.

### How programs use hardware

Almost all modern computers utilize some form of the Von Neumann computer architecture. Having an understanding of how hardware uses such an architecture to execute programs  will give us the intuition to understand where we may go wrong.

In the von Neumann architecture, programs are described as instruction sets executed by a computer to perform specific tasks. Conceptualized as a computer system where both program instructions and data share the same memory space. The main components of the von Neumann architecture are:

1. Memory: Stores both instructions (programs) and data.

2. Central Processing Unit (CPU): Executes instructions. It includes:

·       Control Unit (CU): Directs the operation of the processor.

·       Arithmetic Logic Unit (ALU): Performs arithmetic and logical operations.

3. Input/Output (I/O) Devices: Allow interaction with the external environment.

4. Bus System: Facilitates communication between the CPU, memory, and I/O devices.

## Pros and cons of hardware specs

#### Pros of hardware specs

Simply if your device meets the previously described standards you should have a relatively fluid development experience with little to no hiccups.

#### Cons of inadequate hardware resources

·       CPU: Low-quality or underperforming CPUs can lead to slow processing speeds, increased execution time for programs or on occasion complete failure to execute, along with reduced system performance which can make development unnecessarily tedious.

·       Memory (RAM): Insufficient or slow RAM can cause frequent delays as the system and may result in an increase of **swap** usage. Which is the usage of the storage drive as RAM and in cases were the storage is also slow int may lead to sluggish program execution.

·       Storage: Slow or unreliable storage (e.g., hard drives instead of SSDs) can increase the time it takes to load and save data, affecting program responsiveness.

### Hardware limitations

An understanding of the complexity and resource intensity of the program you wish to create is crucial when choosing for software. Imagine you are attempting to train a neural (though considering that this is an introduction you most likely are not) you wouldn’t be able to do so. As the amount of processing power storage and network capabilities required to do so are not housed in your typical machine and requires specialized hardware.

Keeping this in mind you would be exponentially increasing the difficulty of your programming experience if you were to attempt to program a modern program on a legacy machine.

Ultimately, understanding your goal is crucial in the creation of you program which hardware is the heart of.


# Python as a language

## What is python?

Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or “bridging” language to connect existing components together. With a simple syntax that emphasizes readability it is ideal for greater degrees of collaboration, as less linguistic complexity allows for more program complexity with the same cognitive cost. This also makes it ideal for more collaborative projects that require others to read your code and reduces the cost of program maintenance.

 Supporting a diverse range of  modules and packages, which encourages program modularity and code reuse (which plays a huge role in developmental time efficiency).

It is a favorite amongst programmers for the aforementioned reasons which help to increase productivity and efficiency. As an interpreted language, it is more space efficient as it takes up less storage space since it does not have to be compiled, this is also why it has a rapid and efficient edit-test-debug cycle. Debugging programs is easy: a bug or bad input will never cause a segmentation fault. Instead, when the interpreter discovers an error, it raises an exception. When the program doesn't catch the exception, the interpreter prints a stack trace. A source level debugger allows inspection of local and global variables, evaluation of arbitrary expressions, setting breakpoints, stepping through the code a line at a time, and so on. The debugger is written in Python itself, testifying to Python's introspective power. On the other hand, often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.

## What is an interpreter?

All programs are written in coding languages, which have the characteristic of being more legible than binary (1’s and 0’s), however cannot be directly executed by hardware. This is where compilers and interpreters come in, they act as translation layers which convert the code into binary.

With compiler converting the whole program to machine code and then executing it, this contrasts the way it is done by an interpreter. An interpreter converts each line of code to machine code, doing so line by line, executing while it does so. A good analogy to keep on mind is that if a program where a book compiling would be translating the whole book into the  necessary language and  then reading it, whereas interpreting it would be reading it live while translating it. With the analogy in mind you can conclude which method would be faster.

|   |
|---|
||
||![](file:///C:/Users/4ndil/AppData/Local/Packages/oice_16_974fa576_32c1d314_eaf/AC/Temp/msohtmlclip1/01/clip_image001.png)|

  
(Insert visual) _Python, Ruby, and JavaScript are classic examples. They offer flexibility and faster development but might sacrifice some performance due to runtime translation_

The interpreter checks the source code line-by-line, if an error is encountered on a particular line it halts execution providing a line-by-line error. This helps with error detection allowing ease of debugging.

|   |
|---|
||
||![](file:///C:/Users/4ndil/AppData/Local/Packages/oice_16_974fa576_32c1d314_eaf/AC/Temp/msohtmlclip1/01/clip_image003.png)|

  
_This is an example of a line error_

This however results in the program taking more time to complete its execution successfully. Interpreters were first used in 1952 to ease programming within the limitations of computers at the time. It translates source code into some efficient intermediate representation and executes them immediately.

Now machine code is machine specific and this is why python is interpreted to byte code which further has the ability to converted into the appropriate machine code on various machines. This increases the cross-compatibility of python applications allowing them to run on various software without running into errors as a result of code specificity.

The following table is a record of the most popular python interpreters

|   |
|---|
||
|CPython|
|The most popular python interpreter written in C and has a built interface  to interact with c based modules. Each CPython interpreter for Python, the process uses a GIL(Global Interpreter Lock). This serves as a limitation as it disables concurrent Python threads for a process. This also makes it harder for concurrent CPython processes to communicate.|
|Jython|
|ython is JPython’s successor. It is an implementation of Python that runs on the Java platform. Jython takes Python code and compiles it to Java bytecode. This means we can run Python on any machine that runs a JVM (Java Virtual Machine). Jython supports static and dynamic compilation and let’s extend Java classes.|
|IronPython|
|This is a Python implementation around the .NET Framework and Mono. IronPython supports dynamic compilation and an interactive console. Python scripts are capable of interacting with .NET objects.|
|ACTIVE Python|
|ActivePython is a Python distribution from ActiveState. It makes installation easy and cross-platform compatibility possible. Apart from the standard libraries, it has many different modules.|
|PyJS|
|PyJS is an internet application framework that will let you use Python to develop client-side web and desktop applications. You can run such an application in a web browser and also as a standalone desktop application. Earlier, it was called Pyjamas. It translates your  Python code into JavaScript to let it run in a browser. PyJS ships with an AJAX framework and a Widget Set API.|

**_In summary:_** _Interpreted Languages are executed line by line, with the program being translated and executed simultaneously. Python, Ruby, and JavaScript are classic examples. They offer flexibility and faster development but might sacrifice some performance due to runtime translation._

  

# What is object oriented programming?

Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well suited for software that is large, complex and actively updated or maintained. This includes programs for manufacturing and design, as well as mobile applications. For example, OOP can be used for manufacturing system simulation software.

The organization of an object-oriented program also makes the method beneficial for collaborative development, where projects are divided into groups. Additional benefits of OOP include code reusability, scalability and efficiency. The first step in OOP is to collect all of the objects a programmer wants to manipulate and identify how they relate to each other  an exercise known as data modeling. Examples of an object can range from physical entities, such as a human being who is described by properties like name and address, to small computer programs, such as widgets.

Once an object is known, it is labeled with a class of objects that defines the kind of data it contains and any logic sequences that can manipulate it. Each distinct logic sequence is known as a method. Objects can communicate with well-defined interfaces called messages.

# What is a dynamically typed language?

Typing refers to the method the programming  language uses to assign a variables ‘type’. Types of variables include Boolean, integer and string to name a few.  For static typing the type checking occurs at compile time however for dynamically typed language the type checking occurs at runtime. A good example would be an input field in your program (a space for you to enter some text ). In a statically typed language the variable type would have to be declared along with the variable

String inputvar;

declaring variable type in c++ a statically typed language.

Inputvar=none

Declaring a variable in python.

If you have an integer as the input in your c++ program it will be registered as a string unless you later convert it in your program. In contrast the variable type in your python program is dependent on the nature of the input. If a string is input it will be of the string type and if an integer is input it will be of the integer type.

Dynamically typed languages have a characteristic called type inference, meaning the type is inferred by the nature of the value of the variable. A better way to demonstrate this would be:

Inputvar=”Ivan”

Here you notice that the variable type is not specified in the creation of the variable but is inferred by the value of the variable which in this case is a string. However it is strongly typed, this means that variables do have a type and that the type matters when performing operations on a variable. This helps prevent errors as a result of the “malleability” of a variable or it being inappropriately defined for its purpose. This one of the things that add to the brevity of python and its general appeal.

However in cases where dynamic typing is not ideal **type hints**  can be used. This does not affect the typing of the language however they can act as a key in increasing the legibility of your code for any collaborators.

Eg.

X: str =”String”

Or

A: int

(this will create empty variable of the type integer)

This will indicate to the programmer the type of this variable is meant to be a string, and it having a string value makes it so that any future values of this variable are also of the type string.

My
# Elements of Python

## What makes python different

### It’s a high level language

High-level programming languages empower individuals to create computer programs and engage with computer systems without requiring knowledge of the specific processor or hardware on which the program will execute.

High-level languages use command words and syntax that are similar to everyday language, making them easier to learn and apply. High-level languages also provide developers with development tools like libraries and built-in functions.

high-level programming languages have revolutionized the way we develop software applications. They offer many advantages over low-level languages, including ease of use, portability, and efficiency. However, they also have some disadvantages, such as slower execution and higher memory usage.

### Its unique syntax

Pythons easy legible and comprehensible syntax is one of the reasons it’s a favorite amongst programmers.

It has open ended expressions:

Python expressions do not require a semicolon in order to conclude an expressions as every expression is expected to be on one line.

Eg.

Print(“Hello world”)

This contrasts languages like C++

Std::cout<<”Hello world”;

(This is only looking at the line responsible for the command not the whole necessary block of code)

It uses indentation to denote blocks of code:

Indentation refers to the spaces at the beginning of a code line. Instead of existing exclusively for the legibility of code as in other programming languages it has the role of denoting blocks of code.

eg.

If x==y:

     Print(x+” is greater than ”+ y)

 The standard is the usage of four spaces however the amount is up to you as a programmer. I would recommend refraining from using tab in a collaborative environment as the amount of spaces that make up a tab space may vary from device to device and you have to use the same number of spaces in the same block of code, otherwise you will receive an error.

### It can use various programming paradigms

Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behaviour.

OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well suited for software that is large, complex and actively updated or maintained. This includes programs for manufacturing and design, as well as mobile applications. For example, OOP can be used for manufacturing system simulation software.

The organization of an object-oriented program also makes the method beneficial for collaborative development, where projects are divided into groups. Additional benefits of OOP include code reusability, scalability and efficiency.  Its ability to support multiple paradigms, including both imperative and object-oriented programming, makes it an attractive choice for programmers with diverse needs.

Other paradigms include:

·       Functional programming: This includes languages such as Erlang and Scala, which are used for telecommunications and fault-tolerant systems.

·       Structured or modular programming: This includes languages such as PHP and C#.

·       Imperative programming: This alternative to OOP focuses on function rather than models

·       Declarative programming: This programming method involves statements on what the task or desired outcome is but not how to achieve it. 

·       Logical programming: This method, which is based mostly on formal logic, it contains a set of sentences that express facts or rules about a problem domain. It focuses on tasks that can benefit from rule-based logical queries.

## Pros and cons of Python

### It’s a high-level language

##### Advantages of High-Level Programming Languages are:

·       **Abstraction and Simplification**: High-level languages provide a higher level of abstraction, allowing programmers to focus on the logic and functionality of their programs rather than the intricate details of hardware or low-level operations.

·       **Readability and Maintainability:** Code written in high-level languages is often more readable and understandable, making it easier for programmers to collaborate, debug, and maintain software projects over time.

·       **Productivity:** High-level languages offer built-in functions, libraries, and frameworks that expedite the development process. This boosts productivity and enables faster creation of complex applications.

·       **Portability:** Programs written in high-level languages are generally more portable, as they are not tightly bound to a specific hardware architecture. This allows code to be executed on different platforms with minimal modifications.

·       **Reduced Errors:** The abstraction and automation provided by high-level languages reduce the likelihood of human errors, such as memory management issues, that are common in low-level languages.

·       **Rapid Development:** High-level languages often provide features like dynamic typing, automatic memory management, and concise syntax, enabling rapid prototyping and development of software applications.

·       **Community and Resources:** Popular high-level languages have large and active communities, resulting in extensive documentation, tutorials, and online resources that aid programmers in learning and problem-solving.

·       **Enhanced Security:** Many high-level languages include security features and mechanisms that help prevent common vulnerabilities, contributing to safer software development.

·       **Easier Learning Curve:** High-level languages are typically easier to learn for newcomers to programming, as they abstract away low-level complexities and allow beginners to focus on coding concepts and problem-solving.

#### Disadvantages of High-level languages:

·       **Slower execution:** High-level languages are generally slower than low-level languages, as they require more processing time to convert their code into machine code.

·       **Less control:** High-level languages abstract away low-level details and hardware-specific functions, making it difficult to optimize code for specific hardware or systems.

·       **Higher memory usage:** High-level languages require more memory than low-level languages, as they use additional functions and structures to provide more organization and structure to code.

### It is object oriented

##### Advantages of OOP (Object oriented programing):

·       **Modularity:** Encapsulation enables objects to be self-contained, making troubleshooting and collaborative development easier.

·       **Reusability:** Code can be reused through inheritance, meaning a team does not have to write the same code multiple times.

·       **Productivity:** Programmers can construct new programs quickly through the use of multiple libraries and reusable code.

·       **Easily upgradable and scalable:** Programmers can implement system functionalities independently.

·       **Interface descriptions:** Descriptions of external systems are simple, due to message-passing techniques that are used for object communication.

·       **Security:** Using encapsulation and abstraction, complex code is hidden, software maintenance is easier and internet protocols are protected.

·       **Flexibility:** Polymorphism enables a single function to adapt to the class it is placed in. Different objects can also pass through the same interface.

·       **Code maintenance:** Parts of a system can be updated and maintained without needing to make significant adjustments.

·       **Lower cost:** Other benefits, such as its maintenance and reusability, reduce development costs.

##### Disadvantages of OOP:

·       **Complexity**: It may be more complex to program as everything has to be contained within an object.

·       **Inheritance:** It comes with the drawback of fragile base class

·       **Clarity:** Though each object is more isolated from the general program allowing more particularization it does not assist in the readability of the code and make the role of the object hard to understand when looking at the whole program.

·       **Overemphasizes the object:** The prioritization of objects may not always be ideal in the more general creation of code. However this limitation is not as prevalent in python as it is in other languages as objects are not absolutely necessary.

Python allows developers to combine programming paradigms because they can be used for different programming methods.

### It is dynamically typed

##### Advantages:

·       **Flexibility:** Dynamic typing removes the need to explicitly declare variable types. Developers can focus purely on the functionality of their application – without being bogged down by minor inconsistencies in the source code. This approach can be useful if, for example, the data type of a variable is unknown or subject to change later.

·       **Fast Development:** Dynamic typing is generally considered to be faster than static typing. Since type checking occurs later, at runtime, developers do not have to address syntactic and semantic errors at compile time.

##### Disadvantages

·       **High Maintenance:** Data mismatches can be harder to diagnose and resolve at runtime (When the application is executable) than earlier in compile time. This may increase the time and effort required to clean up errors ignored at compile time. New developers who are unfamiliar with the existing code may also struggle to work with complex, incomplete code.

Some code compromises are expected. However, if too many issues arise, they could mitigate the benefits of using static typing to speed up development in the first place. Therefore, striking the right balance between code quality and speed is essential.

·       **Lazy Coding Practices:** Dynamic typing can increase the risk of normalizing lazy coding practices, resulting in typos, inconsistent naming conventions, and conflicting formatting approaches. As a result, the code repository may suffer from a lack of consistency, readability, and maintainability, leading to potential runtime errors and system failures.



