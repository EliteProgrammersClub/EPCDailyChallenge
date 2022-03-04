""" written on march 4 2022 by
@BertinAm
the program below can detect the most frquent character in a list of them!
"""
from statistics import mode  # statistics module that provides methods like the mode, median, mean etc


def most_common(lits):  # function definition
    common = mode(lits)
    return common


print(most_common(["c", "d", "t", "c", "c", "r"]))  # calling of the function most_common
