[![BCH compliance](https://bettercodehub.com/edge/badge/ChrisCooney05/bank_tech_test?branch=master)](https://bettercodehub.com/)
![coverage](https://img.shields.io/badge/coverage-100%25-green)

# Bank Tech Test

[Challenge outline](CHALLENGE.md)

## Using this repo

If you would like to run the tests:

1. Clone this repository
2. Install dependencies

```
npm install
```

3. run the 'test' command

```
npm test
```

Tests are run with Jest, you will get an outline of what each test is doing along with total coverage.
if you would like to view the test files they can be seen [here](src/__test__).

If you would like to try the code in the console:

1. Clone this repository
2. Use the following commands

```
npm install
node
.load bank_node.js
```

This will load up the REPL and load the bank file, you can then use the following commands to use the bank.

```
bank.deposit(add_number_here)
bank.withdraw(add_number_here)
bank.statement()
```

![preview](public/bank.gif)

## My approach

**For this challenge, I focused on producing good code quality and making sure all the tests were mocking and stubbing correctly.**


I decided to go with three classes:

**Bank:** This is controller class that the user will interface with. This class is responsible for receiving user input(funds), updating the balance accordingly and producing a snapshot of the current date.
Once we have this information we pass it to the next class, History.

**History:** This class is responsible for formatting some of the inputs and holding the full transaction history. On receipt of a deposit or withdrawal, the number is formatted into a string with two decimal places. it is also responsible to displaying a copy of the statement when requested by the user. Once all the information has been formatted it is stored in an instance of my next class, Transaction

**Transaction:** This class is here just to help keep things neat, instead of an array of arrays each instance of transaction holds a string. all arguments passed in are interpolated into a string and stored ready to be retrieved when needed.
