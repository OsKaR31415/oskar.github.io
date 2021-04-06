from random import random


class Cell:
    symbol_alive = "#"
    symbol_dead = " "

    def __init__(self, __state__: bool):
        self.__state__ = bool(__state__)
        self.__next__ = False

    def get_state(self):
        return self.__state__

    def rule(self, neighbours):
        nb_neighbours = sum(neighbours)
        self.__next__ = False
        if nb_neighbours == 3 or (self.__state__ and nb_neighbours == 2):
            self.__next__ = True

    def __str__(self):
        return self.symbol_alive if self.__state__ else self.symbol_dead

    def __bool__(self):
        return self.__state__

    def __add__(self, other):
        return self.__state__ + other.__state__


class Game:
    def __init__(self, width: int, height: int, proportion: float = .3):
        self.width = int(width)
        self.height = int(height)
        self.grid = list()
        self.__init_grid__(proportion)

    def __init_grid__(self, proportion: float):
        grid = [[Cell(random() < proportion) for _ in range(width)]
                for _ in range(height)]

    def __str__(self):
        string = ""
        for line in self.grid:
            string += "".join(map(str, line))
        return string

    def get_cell(row: int, col: int) -> Cell:
        return self.grid[row][col]

    def __get_neighbours_of__(row: int, col: int) -> list[Cell]:
        return [
            self.grid[row-1][col-1], self.grid[row][col-1], self.grid[row+1][col-1],
            self.grid[row-1][col], self.grid[row+1][col],
            self.grid[row-1][col+1], self.grid[row][col+1], self.grid[row+1][col+1]
        ]

    def step(self):
        for row, line in enumerate(self.grid):
            for col, elt in enumerate(line):
                self.__get_neighbours_of__(row, col)
