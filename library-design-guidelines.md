# Standard Library Guidelines

These guidelines from the ISO C++ Library Working Group recommend conventions for writing the text (i.e. standardese) that describes components of the C++ standard library.
If you are proposing a library component for standardization, you should follow these guidelines for proposed wording unless there is a strong technical reason to do otherwise.

For information on the overall proposal and how to submit it, see the [Call for Library Proposals](http://cplusplus.github.com/LWG/call-for-library-proposals.html).

## Status of the guidelines

These guidelines began as a braindump by about 30 standards committee members at the committee's October, 2012, meeting in Portland, Oregon, US.
Organizing these random ideas into a coherent set of guidelines is an ongoing project.

## Understanding the guidelines

Certain words have very specific applicability when used in guidelines:

 + **Always** -- without exception, other than as noted by the guideline.
 + **Prefer** -- deviate from the guideline only with good reason.
 + **Consider** -- Your call; this is essential a neutral recommendation.
 + **Avoid** -- deviate from the guideline only with good reason.
 + **Never** -- without exception, other than as noted by the guideline.

## Scope of library text

Some topics are appropriate subject matter for library text, while other topics are
best left for front matter, implementers, educators, or others.

   + The specification for a library component describes its observable behavior, and does not describe a particular implementation.
   * A specification defines the permissible range of implementation.
   * Specification for a function shall tell you enough to implement it.
   + Library text is not a tutorial and is not a style-guide (although it should follow a consistent style).
   + Library components must always be implementable by hosted implementations, and must always be implementable by freestanding implementations if the containing header is identified as a header for freestanding implementations.
   + The specification for a library component must always be precise, unambiguous, and clear, in roughly that order.
   + Clause 17 of the C++ standard, Library introduction, always applies. In particular, the specification of your library component should always follow the conventions of 17.5, Method of description.
   + Never specify the core language support required by a library component; support for the full core language is always assumed.
   + Avoid dependencies on external libraries. If the whole purpose of a library component is to gain access to some external library, then a dependency on that library may be unavoidable.
   + Avoid target assumptions. The committee will decide whether the C++ standard itself, a separate standard, a technical specification, or a technical report is the final target for your proposal. However, a proposal that involves changes to an existing library component always targets the document of the component being modified.


## How We Say It

When we document a library for the standard, there are some conventions on how
we document things, how the code is formatted in examples, and so forth.  While
the library is not a style-guide, this section is effectively the style-guide
on how code is written in the standard library clauses, among other documentation
conventions.

   * Follow the [editorial guidelines](https://github.com/cplusplus/draft/wiki/Specification-Style-Guidelines).
   * Template parameter names in the specification indicate concepts.
   * Operators come in groups: (`==`, `!=`), (`<`, `>`, `<=`, `>=`), preincrement/postdecrement, etc.
   * Outputs in the algorithms library go to the right.
   * Algorithms always specify complexity guarantees.
   * Header have to be self-contained (i.e., no need to include header before including another header).
   * Headers should be topic specific (`<utility>` is a counter-example).
   * Use SFINAE to constrain templates: "This constructor shall not participate in overload resolution unless `<some-condition>` is true".
   * Where C++ 2003 syntax can be used, that is preferred over C++ 2011 features.
   * Specify both `const` and `constexpr`, where appropriate.
   * Make it clear what the customization points are.
   * For templates, make it clear what the concepts are.
   * Use clause `[structure.specifications]` to determine what specification clauses to use.
   * Exception guarantees: blanket statement for basic, stronger statement should be explicitly specified.
   * If there is a virtual function you need to distinguish between its contract and its default implementation.
   * Don't use code to specify behavior.
   * When the specification uses code an implementation isn't required to use the code.
   * Generic components should be written to use minimal requirements while maintaining an efficient implementation.


## How We Design It

General design guidelines for successful library components.  As the standard
library we document is a specification, and not an implementation, these
guidelines will naturally focus on the public interface of components and how
they fit together, along with some more nebulous ideas of 'usability'.

   * Don't be clever.
   * Don't be stupid.
   * Naming matters.
   * Generic components should be aware of move-only types.
   * We are thread-compatible `[res.on.data.races]`.
   * Exceptions are used for error conditions (there are some exceptions).
   * Do not gratuitously overload operators.
   * Classes allocating memory get an allocator (inconsistently applied).
   * Containers get allocators unless they don't allocate.
   * Containers use allocator through allocator traits.
   * Allocators are part of type unless there is already type-erasure for other reasons.
   * `const`-correctness is observed and is used as a proxy for thread-safety in the standard library.
   * Class signatures want to be near minimal (the obvious counter-example is std::basic_string).
   * Destructors shall not throw.
   * Things should be `constexpr` where reasonable.
   * Avoid inheritance and virtual functions where possible.
   * Prefer function objects (i.e., deduced templates) to function pointers.
   * Types should be allowed to be different rather than assuming they are same.
   * Generic components should take advantage of parameters with stronger concepts.
   * When designing a class type, where possible it should be a "regular type" (to be defined), e.g., different objects are independent.
   * Use `std::addressof()` to obtain addresses based on generic parameters.
   * Prefer to specify nested types as a typedef for an _unspecified_ or _implementation-defined_ type, rather than as a class or enumeration type. This avoids over-constraining implementations.


## How We Code It

Some very specific guidelines on coding conventions and use of language features
in library component interfaces.

   * Model-type for move-only type: `std::unique_ptr`.
   * model-type for value type: `std::vector`.
   * Bad example: `std::vector<bool>`.
   * Names are all lower case separating words by underscores (except `Init`).
   * Avoid abbreviations except for common words: `_ptr`, `std`, etc. (apply common sense).
   * Everything is nested into `std`.
   * Official names don't start with an underscore (only hidden names); exception: `_1`, `_2`, etc.
   * No trailing underscores on names.
   * Operators are overloaded where it is close to their original meaning.
   * Do not overload unary address-of operator, nor the comma operator.
   * Do not overload logical `and` operator, nor the logical `or` operator.
   * Generic code should only assume `==` and `<` out of their respective group.
   * Operators are preferred as non-member functions where there is a choice; inconsistently applied.
   * Single argument callable constructors are explicit unless there is a good reason.
   * Non-fundamental types are passed by `const` reference.
   * Types passed by value: iterators, function objects (including predicates), built-in types.
   * Complex objects are returned by value.
   * Where there are output parameters the parameters are passed by reference, not by pointer.
   * Exception specification: we try to use `noexcept` for wide contracts (Madrid paper), not dynamic-exception-specifications otherwise.
   * The library will leave any rvalue argument in a valid but possibly unspecified state.
   * When defining a type stronger guarantees for moved from objects can be given.
   * Standard library headers don't use file suffixes.
   * Provide a no-throw ADL `swap()` where possible.
   * Have a member-`swap()`.
   * Containers can `emplace()` objects.
   * Avoid macros as part of the interface (use, e.g., inline functions).
   * Predicate type-traits derive from `integral_constant`.
   * Identifiers come from the basic source character set.
   * Don't use virtual destructors in non-polymorphic classes.
   * Virtual functions are normally non-public.
   * If there is a virtual function, the destructor is virtual.
   * Exception types must inherit from `std::exception` or, preferably, from one of its existing derived types.
   * You shouldn't have multiple inheritance for exception classes.
   * If arguments can be deduced, use perfect forwarding; if arguments are part of the enclosing type provide the right set of overloads (see `std::vector<...>::emplace_back()` vs. `push_back()`).
   * When possible build on existing low-level library facilities rather than building new ones.


## How we develop it

The process of developing the standard library publications.

   * Papers in mailings
   * Issues lists
   * Prior art (e.g., Boost)
   * Face-to-face meetings
   * Consensus driven process
   * Study groups
