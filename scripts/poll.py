#! /usr/bin/env python3

"""Produces input for http://civs.cs.cornell.edu/ test polls.

Takes a file of choices, of the form:

    P0123 Paper title
    P1234 Other paper title
    ...
    NAD: Description of what NAD means

And a stdin of "votes", of the form

    P0123 First choice
    NAD: Description of what NAD means
    P1234 Second choice

    P1234 First choice
    P0123 Second choice
    NAD: Description of what NAD means

And prints to stdout one line for each vote. The line is a
comma-separated list of numbers, where the Nth number is the rank
given to the Nth choice.

"""

import sys

choices = []
with open(sys.argv[1]) as choices_file:
    for line in choices_file:
        choices.append(line.split()[0])

def find(list, item, default):
    for i, elem in enumerate(list):
        if elem == item:
            return i
    return default

vote = []
for line in sys.stdin:
    if line.strip() == '':
        nad_index = find(vote, 'NAD:', len(vote))
        print(','.join([str(find(vote, choice, nad_index) + 1) for choice in choices]))
        vote = []
    else:
        line = line.split()[0]
        if line not in choices:
            continue
        vote.append(line)
