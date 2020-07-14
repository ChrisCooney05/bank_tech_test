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
