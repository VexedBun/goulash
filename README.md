# Goulash
A library of reusable JavaScript modules, written in ES2015 (and a little ES7).

This library has been designed to be as minimalistic and customizable as possible, trying not to force any particular markup or CSS on the end user but allowing for often used JavaScript to be reused in such a way that the end bundled file is as small as possible. Every function and module in the framework has it's own file, and is imported and included by _Browserify_ only once if used in the code meaning that the final bundle contains only code that has been used, and not thousands of lines of bloat like other frameworks.

Currently there is only a few utility functions, and a Modal class. As I develop websites I'll add to this repository any components I create, in a similar manner to the existing ones.

Some sample file are included in the _samples_ directory. They include a _gulpfile.js_ and _package.json_ that can get you started. Just change the _config_ variable at the top of the _gulpfile.js_ to reflect the correct paths to your assets, and ensure the entire _modules_js_ folder has been added as a subfolder of your JavaScript.

Sample SASS and HTML has been included for some modules, which will give you a barebones and minimalistic starting point. The SASS follows the _BEM_ standard, but most modules have a _settings_ variable where you can change the default class names if you desire to use a different standard like _SMACSS_, for example.

## Changelog
- __0.1.0__
    + Added code from my _ModularJS_ example.
    + Split utilities into separate files to avoid importing lots of unused code.
    + Commented out _ESDoc_ documentation function from _gulpfile.js_, until a decision can be made on whether to use _ESDoc_ or _JSDoc_.
