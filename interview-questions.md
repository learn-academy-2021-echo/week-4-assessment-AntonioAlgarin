# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props refer to the properties of an object.

  Researched answer: Props are arguments passed into React components. Props are how you pass data from one component to another as parameters and can be thought of like arguments that are passed to a function. Props can be accessed as an entire object or they can be destructured into separate variables. If prop values are not passed a certain component, no error message gets returned. Instead, within the component, that prop will have a value of undefined.

2. What is a DOM event?

  Your answer: DOM events are used to respond to user interaction.

  Researched answer: DOM events are certain actions that are performed either by the end user or by the web browser itself. DOM events act as triggers that run JavaScript commands and are typically used in combination with functions. The function will not be executed before the event occurs.

3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming refers to programming languages that use objects.

  Researched answer: Object-oriented programming is a programing paradigm that uses the concept of classes and objects. Classes are blueprints that are used to create individual instances of an object. Each object can have unique values to the properties defined in the class. Classes can also contain functions, called methods that are only available to objects of that type.

  Functional programming is different because in a functional program, the output of a function should always be the same, as long as the inputs remain the same. This is because functional programming attempts to avoid changing state and mutable data. Functional programming thrives in situations where the state is not a factor and there is minimal involvement with mutable data.

4. What is the difference between a Float and an Integer in Ruby?

  Your answer: Integers are whole numbers, Floats contain decimals.

  Researched answer: Integers are whole numbers that can be positive, negative, or 0. A Float represents a real number and can either be a rational or irrational number, or numbers that contain a fractional part (e.g. 4.30). Ruby will consider any number written without decimals as an integer and any number written with decimals as a float. If you're performing calculations with two integers, the result will also be an integer. If you introduce a Float to the calculation, the result will also become a Float.

5. Ruby has an implicit return. What does that mean?

  Your answer: Return statements are not required in Ruby.

  Researched answer: The implicit return means that Ruby does not require the developer to add a return statement, since Ruby will return the value of the last line automatically.

## Looking Ahead: Terms for Next Week

1. Instance Variable: In Ruby, an instance variable refers to a type of variable that starts with an `@` symbol. Instance variables give objects their own private space to store data. If you have a Car class, you may want to store additional details of the car object such as make, model, and year. These attributes are instance variables.

2. PostgreSQL: PostgreSQL is an open-source object-relational database system that uses and extends the SQL language and is used to safely store and scale complex data workloads. PostgreSQL is highly extensible an is used as a primary database for many web applications as well as mobile and analytics applications.

3. Ruby on Rails: Ruby on Rails is the most popular open-source web application framework built with the Ruby programming language that helps developers build websites. A few notable company websites built using Ruby on Rails include Github, Shopify, Kickstarter, Twitch, and Instacart.

4. ORM: Object Relational Mapping is a programming technique used for converting data between incompatible type systems in object-oriented programming languages. Active Record is the ORM that comes out-of-the-box with Rails. A few highlights of ORM include: no need to learn a database query language, propagates the idea of data abstraction, and reduces the hassles for developers by reducing the database query part handling.

5. Active Record: Active Record helps you read, create & update records in your database with ease. Active Record is included with Rails and can also be installed as an independent gem. Some of the notable features of Active Record include: data is represented as models, object oriented approach to database operations, validation of data before being saved into the database, and inheritance can be achieved through related models.
