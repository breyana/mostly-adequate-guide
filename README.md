## Description

This goal provides an introduction to functional programming concepts using JavaScript and gives you the opportunity to practice these concepts with a series of reinforcement exercises from the [Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) and a handful of automated challenges on [CodeWars](https://www.codewars.com/kata/latest/my-languages?tags=Functional+Programming).

## Context

Functional programming patterns are becoming increasingly popular in the web development community. Using these patterns results in code that is more adaptable and flexible, less buggy, and more scalable. 

The article [The Two Pillars of JavaScript : Pt 2: Functional Programming
How to Stop Micromanaging Everything](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.p9gfmzfel) goes into many of the reasons why you might want to consider learning how to write JavaScript as a functional programmer would.

## Specifications

- [ ] Read the [Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) through Chapter 8: Tupperware
- [ ] Complete the exercises in the Mostly Adequate Guide (note: there aren't exercises after each chapter - just the ones on Ch 4: Currying, Ch: 5: Coding by Composing, and Ch: 8 Tupperware).
- [ ] Practice these concepts by completing at least [5 Functional Programming exercises](https://www.codewars.com/kata/latest/my-languages?tags=Functional+Programming) on 
-OR-

- [ ] Refactor a previous project to use functional programming patterns (strongly recommended to review the Mostly Adequate Guide before starting) 

CodeWars (just a heads up: you're required to answer a couple of super basic JS questions to sign up for CodeWars). BONUS: Do more if you get through 5 exercises by the end of the cycle.

 
### Required

- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Quality Rubric

- All exercises in the Mostly Awesome Guide are completed and pushed to GitHub: 25 pts
- At least 5 exercises on CodeWars are completed: 25 pts

## Resources

[So You Want to Be a Functional Programmer](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536)

[Eloquent JavaScript Chapter 6: Functional Programming](http://eloquentjavascript.net/1st_edition/chapter6.html)

[Ramda](http://ramdajs.com/docs/) - similar to lodash, but for functional programming

[Functors, Applicatives, And Monads In Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)

[Category Theory for Programmers (advanced)](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/)

[Ramda REPL (read-evaluate-print-loop)](http://ramdajs.com/repl/)

[Professor Frisby Introduces Composable Functional JavaScript](https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript)


[![cover](images/cover.png)](SUMMARY.md)

## About this book

This is a book on the functional paradigm in general. We'll use the world's most popular functional programming language: JavaScript. Some may feel this is a poor choice as it's against the grain of the current culture which, at the moment, feels predominately imperative. However, I believe it is the best way to learn FP for several reasons:

 * **You likely use it every day at work.**

    This makes it possible to practice and apply your acquired knowledge each day on real world programs rather than pet projects on nights and weekends in an esoteric FP language.


 * **We don't have to learn everything up front to start writing programs.**

    In a pure functional language, you cannot log a variable or read a DOM node without using monads. Here we can cheat a little as we learn to purify our codebase. It's also easier to get started in this language since it's mixed paradigm and you can fall back on your current practices while there are gaps in your knowledge.


 * **The language is fully capable of writing top notch functional code.**

    We have all the features we need to mimic a language like Scala or Haskell with the help of a tiny library or two. Object-oriented programming currently dominates the industry, but it's clearly awkward in JavaScript. It's akin to camping off of a highway or tap dancing in galoshes. We have to `bind` all over the place lest `this` change out from under us, we don't have classes (yet), we have various work arounds for the quirky behavior when the `new` keyword is forgotten, private members are only available via closures. To a lot of us, FP feels more natural anyways.

That said, typed functional languages will, without a doubt, be the best place to code in the style presented by this book. JavaScript will be our means of learning a paradigm, where you apply it is up to you. Luckily, the interfaces are mathematical and, as such, ubiquitous. You'll find yourself at home with swiftz, scalaz, haskell, purescript, and other mathematically inclined environments.


### Gitbook (for a better reading experience)

* [Read it online](https://drboolean.gitbooks.io/mostly-adequate-guide/content/)
* [Download EPUB](https://www.gitbook.com/download/epub/book/drboolean/mostly-adequate-guide)
* [Download Mobi (Kindle)](https://www.gitbook.com/download/mobi/book/drboolean/mostly-adequate-guide)

### Do it yourself

```
git clone https://github.com/DrBoolean/mostly-adequate-guide.git

cd mostly-adequate-guide/
npm install gitbook-cli -g
gitbook init

brew update
brew install Caskroom/cask/calibre

gitbook mobi . ./functional.mobi
```


# Table of Contents

See [SUMMARY.md](SUMMARY.md)

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

### Translations

See [TRANSLATIONS.md](TRANSLATIONS.md)

### FAQ

See [FAQ.md](FAQ.md)



# Plans for the future

* **Part 1** (currently chapters 1-7) is a guide to the basics. I'm updating as I find errors since this is the initial draft. Feel free to help!
* **Part 2** (currently chapters 8+) will address type classes like functors and monads all the way through to traversable. I hope to squeeze in transformers and a pure application.
* **Part 3** will start to dance the fine line between practical programming and academic absurdity. We'll look at comonads, f-algebras, free monads, yoneda, and other categorical constructs.
