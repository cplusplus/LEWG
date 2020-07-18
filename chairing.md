*Author:* @brycelelbach

## Chairing Theory

### Discussion Drives Decisions

Your role as chair is to ensure that we efficiently use our time to build consensus and make clear, concise and actionable decisions. "Decision" here is a broad term that encompasses design selection, feedback, guidance, requests to investigate or explore.

The goal of discussion is to:

* Identify what decisions need to be made.
* Provide the room with the information needed to confidently make decisions.

You should constantly be evaluating whether the current discussion is achieving one of these two goals. If not, you should move the discussion back on target.

Sometimes, discussion is insufficient to inform the room, because we lack the information. In this case, we still need to make a decision - we need to decide how we will obtain the information needed before the next discussion of the topic.

### Always Be Polling

Polls allow you to concretely estimate the consensus decision from the room at a particular point in time with a particular set of information available. Always be thinking about what you should poll on.

Aside from polls that forward a proposal, all polls are non-binding and may be revisited and overturned at a future date when more information or insight is available. Take non-forwarding polls liberally.

If attendees do not feel that we have information to take a poll, they can vote neutral. It is generally best to not take a poll if you believe the consensus is that the room lacks enough information to take a poll. If it is unclear if the room is sufficiently informed, then just take the poll.

If attendees do not feel that they personally are qualified or attentive enough to participate in a poll, they can choose to note vote.

It is often best for polling to occur right after discussion relevant to the poll, even if there are other matters to discuss on the topic, unless that additional discussion is believed to inform the decision you are polling. You want to poll when the discussion is still in people's mental cache.

## Record and Distribute Outcomes

As chair, it is your job to summarize the discussion, both during the discussion and after the discussion to those who were not present.

It is also your job to summarize the decisions made by the room. This is more nuanced than just writing down poll results; you must look at all the poll results and discussion and combine all the individual decisions into one clear, consistent consensus outcome.

You must also ensure that records are kept. Minutes must be taken, and the identity of the minute taker must be clear. Polls and attendance must be recorded with double-entry bookkeeping (you and the minute taker should separately record each). Summaries and outcomes must be posted on the wiki, on the GitHub for the work item, and if applicable on mailing lists.

## Aim for "approval by committee" and not "design by committee"

Problems should be discovered and explored during meetings, but resist the temptation to spend time _solving_ the problems during the meeting.  Ensure the authors and the room have the information needed to make forward progress, but give the author the opportunity to unite the decisions into a cohesive design.

## Checklists

### Pre-Meeting Checklist

0. Make an agenda.
0. Assign each agenda item a time budget.
0. Ensure each agenda item has a champion.
0. Distribute a draft agenda at least two weeks ahead of time.
0. Send a reminder about the meeting 24 to 48 hours before the meeting.

### Start-of-Meeting Checklist

0. Start a chair notes document (see templates below).
0. Find a minute taker.
0. For face-to-face meetings, record attendance.
0. Record the agenda, date, time, and minute taker identity.
0. Ensure you have sufficient quorum (# of attendees + relevant stakeholders).
0. Remind everyone about the Code of Conduct.

### Polling Checklist

0. Draft wording for a statement (not a question) that you wish to poll on.
0. Describe the intent of your poll.
0. Ensure the minute taker is recording the poll.
0. Ask the room for input or clarifying questions on the poll.
0. Decide whether you wish to make any changes to the poll wording based on input.
0. Inform the room that you are now taking the poll, and discussion must cease until the poll is over.
0. If applicable, ask if there is any objection to unanimous consent/dissent.
0. Take the poll.
0. Record the number of attendees present, number of authors present, author position, date, and time.
0. Ask if anyone wishes to explain how they voted or if anyone wants to request an explanation for a certain vote (attendees may always decline such a request).
0. State and record what the outcome of the poll was, which will be one of the following:
   * No objection to unanimous consensus in favor.
   * No objection to unanimous consensus against.
   * Unanimous consensus in favor (no neutral or against votes).
   * Unanimous consensus against (no neutral or for votes).
   * Strong consensus in favor (no against votes).
   * Strong consensus against (no for votes).
   * Consensus in favor.
   * Consensus against.
   * Weak consensus in favor.
   * Weak consensus against.
   * No consensus.

### Post-Meeting Checklist

0. Acquire the minutes from the minute taker.
0. Finalize chair notes.
0. Create a wiki page for the discussion (see templates below).
0. Post the attendance, minutes, and chair notes to the wiki.
0. Update the relevant GitHub issues. The issues must be either closed or marked with the "needs-revision" tag unless the outcome of the discussion was inconclusive and the same topic needs to be discussed again without any new information.

## Templates

These templates use syntax that is compatible with both TWiki and GitHub Markdown, so you can paste them to both the meeting wiki and the Github for paper tracking:

```
   * Lists that start with 3 spaces and use `*` to start items are recognized by both TWiki and GitHub.
```

```
__Double underscores denote bold italics text in TWiki and bold text in GitHub Markdown.__
```

### Poll Templates

#### Five-way Poll

```
__POLL:__

|Strongly Favor|Weakly Favor|Neutral|Weakly Against|Strongly Against|
|-|-|-|-|-|
| | | | | |

__Attendance:__ 

__# of Authors:__

__Author Position:__

__Outcome:__
```

#### Approval Poll

```
__POLL:__ (vote for all the options you find acceptable, vote as many times as you like)

|Options|Votes|
|-|-|
| | |

__Attendance:__ 

__# of Authors:__

__Author Position:__

__Outcome:__
```

#### Forwarding Poll

```
__POLL: Send PNNNNRM (<FEATURE>) to LEWG for C++XY, with priority PP.__

|Strongly Favor|Weakly Favor|Neutral|Weakly Against|Strongly Against|
|-|-|-|-|-|
| | | | | |

__Attendance:__ 

__# of Authors:__

__Author Position:__

__Outcome:__
```

#### Prioritization Poll

```
__POLL: We should promise more committee time to pursuing <FEATURE>, knowing that our time is scarce and this will leave less time for other work.__

|Strongly Favor|Weakly Favor|Neutral|Weakly Against|Strongly Against|
|-|-|-|-|-|
| | | | | |

__Attendance:__ 

__# of Authors:__

__Author Position:__
```

### TWiki Minutes Page Template

The name of the page should be `PNNNN`.

For simultaneous discussion of multiple papers or subjects without a specific paper:
   * Include links for all relevant papers and their GitHub issues.
   * Either name the wiki page after one key paper or give it a descriptive name for the topic. 

```
---+ [[https://wg21.link/PNNNN][PNNNN]]: DESCRIPTION

*[[https://wg21.link/PNNNN/github][PNNNN GitHub Issue]]*

<h2 id="Library-Evolution-YYYY-MM-DD">Library Evolution Telecon YYYY-MM-DD</h2>

*[[https://wg21.link/PNNNNRM][PNNNNRM]]*

*Chair:*

*Champion:*

*Minute Taker:* 

---+++ Attendees

   * 

---+++ Minutes

INSERT MINUTES HERE

__POLL: Example poll wording.__

|Strongly Favor|Weakly Favor|Neutral|Weakly Against|Strongly Against|
|-|-|-|-|-|
| | | | | |

__Attendance:__

__# of Authors:__

__Author Position:__

__Outcome:__

---+++ Zoom Chat Log

<verbatim>
</verbatim>

---+++ Chair Notes and Outcome
```

### Chair Notes Template

Usage with GitHub issues and the TWiki minutes template:
   * Copy everything below the line `## PNNNNRM: DESCRIPTION` into GitHub issues.
   * Copy everything below the line `__Chair:__` into the "Chair Notes" section of the TWiki minutes template.

For simultaneous discussion of multiple papers or subjects without a specific paper:
   * Include links for all relevant papers and their GitHub issues.
   * Either name the wiki page after one key paper or give it a descriptive name for the topic.

`__SUMMARY:__` should be a few sentences summarizing the discussion.

`__OUTCOME:__` should be a summary of the consensus of the room: decisions, guidance, feedback, etc. See templates below.

```
# ISO C++ Library Evolution Telecon

*Date:* YYYY-MM-DD

*Attendance:*
   * 

## Agenda

   * Code of Conduct reminder.
   * Find minute taker.

## PNNNNRM: DESCRIPTION

[PNNNNRM](https://wg21.link/PNNNNRM): DESCRIPTION

[2020-MM-DD Library Evolution Telecon Minutes](http://wiki.edg.com/bin/view/Wg21summer2020/PNNNN#Library-Evolution-YYYY-MM-DD)

__Chair:__ 

__Champion:__ 

__Minute Taker:__

__Start:__ YYYY-MM-DD HOUR:MINUTE TIMEZONE

Does this proposal have:
   * Examples?
   * Implementation experience?
   * Usage experience?
   * Deployment experience?
   * Discussion of prior art?
   * Wording?

__End:__ HOUR:MINUTE

__SUMMARY:__ 

__OUTCOME:__
```

### Outcome Templates

#### Decline to Pursue

When this outcome is used the GitHub issue should be closed.

```
__OUTCOME: We will not pursue PNNNNRM (<FEATURE>).__
```

#### Needs Revision

When this outcome is used the GitHub issue(s) should be tagged "needs-revision".

```
__OUTCOME: Bring a revision of PNNNNRM (<FEATURE>), with the guidance below, to Library Evolution for further review.__
```

#### Forward

When this outcome is used the GitHub issue(s) should have the "LEWG" tag removed and the "GGG" tag added.

```
__OUTCOME: Library Evolution sends PNNNNRM (<FEATURE>), with the guidance below, to GGG, for SHIP.__
```
