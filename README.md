# odin-project-jkp
rock paper scissors

notes to self
1. understand the problem.
- make a js game that plays rock paper scissors with the computer in browser console

2. plan
- no UI, strictly in browser console
- inputs: player selection, computer selection, strings
- outputs: winner of the round (player or computer), a string message indicating the winner and how it was won

3. pseudo
- it should take an input from the user of either rock, paper, or scissor in a typed string format
- the input should only take 1 correct spelling or variation of that string. e.g. rock and not rocks
- the input should ignore case of input string. e.g. Rock ROCK rOcK are all valid inputs
- it should calculate a computer selection randomly from the same input strings as the user
- it should compare the user input and the computer input
- if the user chose rock and the computer chose scissor, then the user wins
- if the user chose rock and the computer chose paper, then the computer wins
- if the user chose rock and the computer chose rock, then it is a tie
- and so on for the other inputs...
- finally, it will print the result of the comparison and which player won.


