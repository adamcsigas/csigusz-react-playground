## The reason behind this project
[Quacks of Quedlinburg](https://boardgamegeek.com/boardgame/244521/quacks-quedlinburg) is a board game with a lengthy setup process. This randomizer aims to reduce setup time
by generating a random selection of books, patients, and witches based on the extensions you own or want to 
include in the next game.

## Status of the project

2023.04.09: (project starting date)
- Some basic README documentation has been written.

2023.04.10:
- I created a randomizer button and some basic UI which will generate a random set of books. 
However, this implementation does not yet take into consideration certain aspects of the setup process,
such as owned extensions of the game.

## Features
- `Randomizer`: Click the button to generate a set of books, patients, and witches for your next game based on 
your selected expansions.

## Planned features
- `Selection`: Choose which extensions to include in the randomizer.
- language options
- Randomize which witches to use, in case you own and want to play with 'The Herb Witches' extension.
- Randomize which three patients are available, in case you own and want to play with 'The Alchemists' extension.

## Planned dev stuff
- add material ui
- save `generateIngredientBooks()` result to localStorage
- update UI
- solve type issue in `Randomizer.tsx` x)
