# MR
==

## Overview

It's an AngularJS proof-of-skills project based on an excercise. It contains main two features:

* a user list, stored in localStorage (masked as an back-end API by using promises resolved after a timeout)
* a login system that allows to log in as any of the users

## Usage

To use, deploy this project on any web server or if on Windows, just start micro http server (mongoose) bundled with the project.

To simplify, every user has the same password: "**showoff**". For convenience there is already one user defined: **admin**.

## Things to notice:

1. The project uses ui-router which causes URL to change in the URL bar of your browser depending on what application state is active. Application states are defined in monterail-test-app.js file.
2. If the user has not logged in, he won't be able to see the table part, as URL route rewriting is implemented and will take the user to login screen if he tries to browse private content.
3. You can add other users to the system, and they will remain there, and you can log in as them as long as you don't clear the localStorage.
4. The table view is implemented as a directive with isolated scope. It uses all three types of isolated scope's attributes: '=', '@', and '&'. It's completely reusable and can be used to show any kind of data, provided that passed rows match passed columns.
5. Currently logged user is selected in the table. This is table directive's feature that could be used to highlight any row on arbitrary criteria (that could even be bound to from outside).
6. Searching, sorting and pagination are implemented by filtering the bound data, so that it requires almost no more developer attention. Additionally, you could construct all kinds of different table funcionalities using those already written, modular filters.
7. Using filters to do the above mechanics was possible thanks to relatively unknown ng-repeat expression syntax:

`<tr ng-repeat="row in paginated = (filteredRows = (rows | tableRowFilter:searchExpr | orderBy:orderId:orderReverse) | paginationFilter:currentPage:rowsPerPage) track by $index"`

That allows to store filtered data in scope at every step, which is better than advertised "item in items as alias" syntax, which allows only one alias per directive instance.

8. Downloading users from back-end API is simulated by returning a promise, that resolves one second after it was requested. Requesting other data is simulating download as well.
