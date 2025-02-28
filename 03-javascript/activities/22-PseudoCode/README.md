### File

* _None_

### Instructions

* With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock paper scissors.

* Try to break it down into steps that you could code out.

* Think of basic elements like loops, if-else statements, arrays, alerts, etc.

* Be prepared to share your outlines approach.

## Psuedocode
``` title rock paper scissors

    array rock, scissors, paper

    variables players player 1 and player 2

    //main

        //have p1 pick a choice

        //p2 randomly picks choice

        //if p1 chooses paper
        if p1 chooses paper and player 2 chooses rock
            then p1 wins
        if p1 chooses paper and player 2 chooses scissors
            then p2 wins
        if p1 === paper p2 === paper
            then repeat

        //if p1 chooses scissors
        if p1 === scissors && p2 === rock
            then p2 wins

        if p1 === scissors && p2 === scissors
            then repeat
        
        if p1 === scissors && p2 === paper
            then p2 loses
        
        ```

### Rock Paper Scissors Pseudocode
1. Prompt user to enter r, p, or s representing rock, paper, or scissors.
2. Computer chooses a random value in a list of r, p, or s.
3. We determine if the user wins or not.
   * If user picks rock and if computer picks scissors then user wins.
   * If user picks rock and if computer picks paper then user loses.
   * If user picks scissors and if computer picks rock then user loses.
   * If user picks scissors and if computer picks paper then user wins.
   * If user picks paper and if computer picks rock then user wins.
   * If user picks paper and if computer picks scissors then user loses.
   * If user picks the same as computer then they tie.
4. We then add to their score.
   * If user wins then we add one to their wins.
   * If user loses then we add one to their losses.
   * If user ties then we add one to their ties.
5. Prompt user to play again.
