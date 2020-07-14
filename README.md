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

For this challenge, I focused on producing good code quality and making sure all the tests were mocking and stubbing correctly.

I decided to go with two classes, one to represent the Bank and one to hold the transaction history.
The Bank class is the main controller where a user can deposit, withdraw and request statements, it also tracks the current balance.
The History class is responsible for storing arrays with information regarding transactions. The user just needs to specify how much is being withdrawn or deposited and the program does the rest (captures a date stamp, formats the input so we have a number with two decimal places and formats the array input accordingly).
