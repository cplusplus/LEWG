# Guidelines for the https://issues.isocpp.org/ Bugzilla

Anyone should feel free to file feature requests or design-scale bug reports in https://issues.isocpp.org/, even if you're not on the C++ committee.
File wording-level bug reports according to the instructions in the [LWG issues list](http://cplusplus.github.io/LWG/lwg-active.html) instead.
If the issue isn't given a status within a couple days, ping the c++std-lib-ext or [std-proposals](https://groups.google.com/a/isocpp.org/forum/#!forum/std-proposals) mailing list.
We won't necessarily discuss issues without wording or a paper, but they can help gauge interest.
You can use the issue tracker to point out questions that need discussion, but please try to keep the discussion itself on a mailing list.

Shortly after each [mailing](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/), we update or file an issue on https://issues.isocpp.org/ for each paper.

Before each [meeting](https://isocpp.org/std/meetings-and-participation/upcoming-meetings), we need to find presenters for each paper.
We can loosely track the presenter by assigning the bug to them.

We also need to collect issues into the [C++ wiki](http://wiki.edg.com/). The queries below can help with that.

During a committee-meeting session, the person taking notes should record the gist of what people say into the [wiki](http://wiki.edg.com/).
The person running the meeting should collect the URL of the notes, and any action items and straw polls into a comment on the [issue](https://issues.isocpp.org/).
It can be helpful to project the comment containing the straw polls while you're taking them, since that makes sure everyone remembers the wording.

## Useful queries

* [Study group issues](https://issues.isocpp.org/buglist.cgi?columnlist=component%2Cbug_status%2Cshort_desc%2Cassigned_to%2Ckeywords%2Cflagtypes.name&keywords=sg.%2A&keywords_type=regexp&list_id=392&order=bug_status%2Cchangeddate%20DESC&query_based_on=&query_format=advanced) (Doesn't necessarily reflect all issues for a study group unless that SG actively uses the bugzilla.)
* [Issues on LEWG's Plate](https://issues.isocpp.org/buglist.cgi?bug_status=NEEDS_DISCUSSION&bug_status=DESIGN_REVIEW&columnlist=component%2Cassigned_to%2Cbug_status%2Cshort_desc%2Cchangeddate&f1=keywords&keywords=needs_updated_proposal%2C%20postponed&keywords_type=nowords&known_name=LEWG%27s%20Plate&list_id=287&o1=notregexp&query_based_on=LEWG%27s%20Plate&query_format=advanced&v1=%5Esg%5B0-9%5D%2B_.%2A)
* [Issues on LWG's Plate](https://issues.isocpp.org/buglist.cgi?bug_status=WORDING_REVIEW&columnlist=component%2Cbug_status%2Cshort_desc%2Cassigned_to%2Ckeywords%2Cflagtypes.name&component=Library&keywords=needs_updated_proposal%2C%20postponed%2C%20&keywords_type=nowords&list_id=390&query_format=advanced)
* [Open polls](https://issues.isocpp.org/buglist.cgi?columnlist=component%2Cbug_status%2Cshort_desc%2Ckeywords%2Cflagtypes.name&f1=flagtypes.name&f2=flagtypes.name&f3=flagtypes.name&j_top=OR&list_id=385&o1=substring&o2=substring&o3=substring&query_format=advanced&v1=tentative_good_design&v2=tentative_ready&v3=tentative_nad)
* [Issues waiting for a paper or wording](https://issues.isocpp.org/buglist.cgi?columnlist=component%2Cbug_status%2Cshort_desc%2Ckeywords%2Cflagtypes.name%2Cassigned_to&f1=bug_status&f2=bug_status&f3=keywords&j_top=OR&list_id=393&o1=equals&o2=equals&o3=substring&query_based_on=&query_format=advanced&v1=NEEDS_WORDING&v2=NEEDS_PAPER&v3=needs_updated_proposal)
* [Postponed issues](https://issues.isocpp.org/buglist.cgi?keywords=postponed%2C%20&keywords_type=allwords&list_id=394&query_format=advanced)

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
