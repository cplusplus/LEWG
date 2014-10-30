# Guidelines for the https://issues.isocpp.org/ Bugzilla

## Status meanings

|Status|Meaning|
|------|-------|
|UNCONFIRMED/CONFIRMED|new, uncategorized bugs|
|NEEDS_DISCUSSION|LEWG should discuss this, but it's not a concrete proposal.|
|NEEDS_WORDING|Someone needs to propose wording that would fix the issue before LEWG discusses it.|
|NEEDS_PAPER|Someone needs to write a paper about this issue before LEWG discusses it.|
|DESIGN_REVIEW|There's a concrete proposal, and LEWG (or an SG idenfied by a keyword) should review the design.|
|WORDING_REVIEW|LEWG is happy with the design of the proposal, and LWG should review the wording.|
|READY|LWG is happy with the wording.|
|ADOPTED|This got into the standard or became an official policy somewhere.|
|CLOSED|This didn't get into the standard.|

An issue will go through these roughly in order, although any issue created for a paper will skip straight to `DESIGN_REVIEW`.

## Keyword meanings

The keywords are described at https://issues.isocpp.org/describekeywords.cgi and summarized here.

`needs_X_input`, where X is the name of another WG or SG, means that the X group needs to have a chance to weigh in on the proposal before it's proposed to a plenary session.
The X group doesn't necessarily need to get to weigh in before LEWG or LWG discusses and/or approves the paper, although getting their input early may save time.

`sgN_Name` with a status of `DESIGN_REVIEW` or earlier means that SG N is in charge of progress on the issue, rather than LEWG.
The `sgN_Name` keywords shouldn't coexist with statuses of `WORDING_REVIEW` or later.

`needs_updated_proposal` means the issue has been discussed and won't be discussed again until a new paper or wording is published that responds to feedback. This is used at the `DESIGN_REVIEW` and `WORDING_REVIEW` stages.

`postponed` means everything is set to discuss the proposal, except that we've decided for some reason to wait until the next meeting to do so. For example, maybe the author isn't present or we don't have time.

## Polls

We're using the [Bugzilla flags system](http://www.bugzilla.org/docs/4.4/en/html/flags-overview.html) to run polls for tentative status changes.

|Flag|Proposed transition|
|----|-------------------|
|`tentative_good_design`|`DESIGN_REVIEW` -> `WORDING_REVIEW`|
|`tentative_ready`|`WORDING_REVIEW` -> `READY`; LWG isn't using this poll|
|`tentative_nad`|Any -> `CLOSED`|

To start a poll, add a `+` mark to a flag, and announce the poll on c++std-lib-ext@accu.org.
If the poll gets 5 `+` votes and no `-` votes, it passes, and will be listed on the LEWG consent agenda at the next meeting.
