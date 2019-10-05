# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.
Username and password to generate Token 
admin admin 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Test Requirements
You need to create a login page and a client page
The login page should have a login form using the request service provided with the function login (username, password)
The login will return a token to use on the get states/cities request as getJson(token)

The client page must be a table with all the client attributes
 - first name
 - last name
 - city
 - state
 - id
 - companies

The companies object must be created by the user and should contain this attributes:
 - company name
 - id
 
Each client can have multiple companies 
The client add form should have validation, every field is required, it must have at least 1 company and you cant select city until the state is selected

Everything must be responsive
Each page for the crud must be on a separate url/page
example 
url/client
url/client/add
url/client/edit/:id


