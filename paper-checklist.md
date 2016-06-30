# Checklist for forwarding a paper to LWG

## Normal papers

- [ ] Explains the use case, in the main paper.
- [ ] Describes any use experience the proposed design has.
- [ ] Names have been bikeshedded. (You can save time by writing down any technical reasons to use or avoid certain names.)
- [ ] Suggests a shipping vehicle (e.g. C++XY, TS Z)
- [ ] Has wording that's roughly correct.
- [ ] Suggests a feature-test macro & example code for using it, or explains why no feature test is needed.

## Papers that move a feature from a TS->IS: (n4437 is an example of this)

- [ ] Enumerate reasons it was originally put into a TS (ie instead of C++Next), and summarizes TS findings/conclusions
- [ ] Check for namespace changes
- [ ] Describe use experience
- [ ] Any necessary changes to appendix C (changes since last std)
- [ ] Suggests a feature-test macro & example code for using it, or explains why no feature test is needed.
