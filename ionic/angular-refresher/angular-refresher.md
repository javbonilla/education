# An Angular refresher

## What's Angular?

![01](img/01.png)

What exactly is Angular? Angular is a client-side, which means it runs in the browser, Javascript framework which is used to build engaging and reactive user interfaces.

This is a definition we could come up with but what exactly does it mean? Well the first important part is that it's a client-side Javascript framework, that means it runs in the browser, not on the server. It's not using NodeJS or any other server-side programming language, it uses Javascript as it runs in the browser. Well actually as it will turn out, you will learn that Angular uses Typescript which is a superset to Javascript but that is just so that we as a developer have a more convenient way of developing Angular applications. We will in the end just get a bunch of Javascript code even though we don't write that Javascript code directly.

The next important part is that it's a framework and that simply means it's a set of rules and utility tools and utility helpers which we use in our Javascript code or our Typescript code which we write that makes our life easier and that will take care about things like sending HTTP requests, routing, so rendering different pages, different content depending on where the user went in our application and managing the state, the data our application needs. This would all be possible without Angular or without a framework like Angular too but using a framework simply makes it easier and always keep in mind, in the end what we will get is a bunch of Javascript code that we could have written like this but that is very complex and very sophisticated and hence is easier to write when using a framework like Angular.

And last but not least, we are using frameworks or tools like Angular to build engaging and reactive user interfaces and that is important. We don't use Angular to build very trivial applications most of the time because it really shines when we have more complex applications, more complex web apps, more complex user interfaces where a lot of things are happening and where we therefore want to control a lot of stuff with Javascript which allows us to update things in the browser without reloading the page, without fetching a new HTML page and where at the same time all this complexity means that we would have to write very complex Javascript code and that is where a framework like Angular simply helps us a lot.

## Angular SPAs & Ionic

![02](./img/02.png)

Now one important thing about Angular is that typically, we use it to build web applications, so websites that run in the browser. In this course however, we use it to build native mobile applications as well, we do this with the help of the extra tool we're covering in this course, Ionic.

Now if we take a step back and we have a look at a regular web application built with Angular, then there we typically build a so-called single page application and that simply means that we only have one single HTML page which we really create and which we serve on our web server to our clients, our users visiting the page in their browser and on this HTML page, we load the Angular script and the Angular script is not just the framework script, it is our code built with Angular as well. Because we will use a project setup which actually gives us quite a nice way of building our Angular application, writing our code in a very structured and easy to read way and it will then take all this code which uses Typescript as I mentioned before, which does not run in the browser but it will compile Typescript to Javascript and bundle up all our code, so our own application logic as well as the Angular framework logic, so all these utility functions and so on, all that will be bundled up and will be imported in that single `index.html` file. And single page application then means that Angular will take care about constantly re-rendering the user interface, so what the user sees, re-rendering all these HTML elements so that to the user, it can definitely seem like we are using multiple pages but technically, we control all that through Javascript and the huge advantage of that is the performance, the speed because Javascript runs in the browser, it even works if we temporarily lose our internet connection and more than that, it happens instantly. We don't need to download anything from a server other than this initial page, thereafter everything can be re-rendered quickly and that of course feels good to the user because it's very reactive, it's the feeling we know from mobile apps typically where we also can press and tap stuff and things change instantly and if we happen to reach out to a server because we maybe want to download new data from a database, we do this behind the scenes and Angular allows us to achieve the same in a web app. And that of course makes it a perfect candidate to be used together with Ionic to then build a real native mobile app as well but still use our Angular knowledge to build all our business logic, all the logic we want to execute in our application.

## Understanding **Components**

![03](img/03.png)

Now one core idea that is built into Angular the framework is that we build our application with so-called components and what does this mean? Well let's have a look at a web page, how it could look like. Let's say we have a page which has a header, maybe a side navigation bar and then maybe an area with a couple of list items and obviously, you will find many pages that have a pattern like this or some related pattern. Now clearly, we can think of all these pieces as individual components which we then take to compose a rich user interface. We have a header component, we have a side nav component, we have our list item components and on the list item component, we can already see one advantage of thinking in components, if we build such components with Angular and I will show you how to do that with Angular in a second, then we only need to set up the general logic and the look for such a list item once and we can reuse it in our application, like on this screen where I use it four times and that's the idea behind component driven development. We see that in a lot of frameworks and a lot of tools and Angular is no exception, there we think in components too because it allows us to reuse code and define logic once and then use it as often as we want to.

## Installing Angular with the CLI

Install Angular:

``` bash
npm install -g @angular/cli
```

Create an Angular sample app:

``` bash
cd workspace
ng new ng-refresher # ng-refresher is the project name

? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```

Use VS Code as source code editor, with extensions:

- Angular essentials
- Material icons
- Angular official extension

To start to serve Angular:

``` bash
ng serve -o 
# -o, --open Opens the url in default browser.
```

## Understanding the folder structure

- _node_modules_: all the dependencies and libraries of the project, such as everything related to Angular dependencies, TypeScript... It is managed through npm.
- _src_: the entire source code of our application. In the _app_ subdirectory, you will find the source code of the main component of the application.
  - _app_: the entire source code of the main component.
    - Component's style sheets, which only affect this main component.
    - Template or HTML view.
    - `app.component.spec.ts`: unit test file for the main component.
    - `app.component.ts`: source code of the component.
    - `app.module.ts`: repository or container where our components, pipes, service classes, modules, etc. are registered. [Introduction to modules](https://angular.io/guide/architecture-modules#introduction-to-modules).
  - _assets_: directory where all the static content of our application is stored.
  - _environments_: environments of our application. By default, development or production.
  - `index.html`: root HTML file of our application.
  - `main.ts`: main class of our application, which bootstraps our application (App Module).
  - `polyfills.ts`: configuration file to increase the compatibility of our application.
  - `test.ts`: required by Karma, it is the configuration file for the test runner.
- `.editorconfig`: editor configuration.
- `angular.json`: main configuration file of the Angular project.
  - Project name.
  - `sourceRoot`: root folder.
  - `build`: information for generating the project.
  - `polyfills`: compatibility with all browsers.
  - `assets`: static resources of our site.
  - `styles`: style sheets to be included in our site when it starts.
  - `scripts`: JS scripts to be included in our site when it starts.
- `package.json`: npm configuration. It contains the project name, version, scripts, dependencies...
  - `dependencies`: production dependencies.
  - `devDependencies`: development dependencies.
- `README.md`: a brief user manual about the application.
- `tsconfig.json`: TypeScript configuration file. It helps us with compilation alerts during TypeScript code writing.

## The App Component

``` ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-refresher';
}
```

We're almost done going through that startup process and I know that this is a lot of new knowledge to digest but it's important to have an idea of the big picture and of what happens here in general. So I left when I pointed at this app component which seems to be a somewhat important component in our Angular app. Well therefore let's have a look at it and remember that we are importing it from ./app.component, so from this file. Now in here what you can see is again a class which we export with that app component name we are importing in app module and just as our app module, the app component has a decorator but here it's not the ngModule decorator but the component decorator which again is imported from Angular, from the Angular framewore, here from angular/core and if you're wondering how you can know from which part of Angular you can import what, it's basically the same set of features all the time, so you will learn it throughout this course, throughout this refresher of course. Now we add this decorator to this class for a similar reason as we added @ngModule to this class in the app module, to provide metadata behind the scenes which allows Angular to treat this code in a certain way and execute it correctly in our browser so to say because you always have to keep in mind that we write the code here in a relatively structured and easy-to-read way. This is not code that will run in the browser but it is code that is transpiled to code that runs in the browser and therefore, we for example need to add certain metadata as we do with this add component decorator. The add component decorator takes a Javascript object to configure this component and here we configure three important parts - the first part is the so-called selector and this is basically your own HTML tag by which you will be able to use this component in your application and you see, it's app root here. Now before I talk about the other two parts, let's for a second check where we actually use app root. Well maybe we do in our single page, in index.html and indeed, we do, if you check this file, you see app root being thrown into our body here. Now Angular scans this document body for us you could say and it scans it for this selector. Now it does this because in app module we define the app component as a Bootstrap, so as a root component for the application. It does not scan index.html for any other component we might create, we only have one here but we can and will create more components soon. It only scans it for the selector of app component because this was added to Bootstrap and yes, you could add multiple components here, this is advanced though and typically you only have one root component, other components are added differently. So this is why the selector is important, because of that selector and the selector matching this tag here, Angular is able to mount a root component in this place, in our HTML file. Now this component does not just have a selector, it also needs some definition of which HTML code Angular should actually render when it mounts this component and that is defined in the so-called template of this component. Here, we have the template URL key which points at a file, a HTML file which contains the HTML code for this component and here, this is this app.component.html code. If we have a look at this, we see a bunch of normal HTML tags here and this is actually the HTML code which is responsible for what you're seeing here, a h1 tag, an image and then an unordered list for example. Well that is exactly what you can find here, an h1 tag, an image and an unordered list. Now it's important to understand that this is not a HTML page which is shipped to the browser and just rendered like this, instead Angular behind the scenes parses this and creates a couple of Javascript instructions that render these HTML elements wherever this component gets mounted to the DOM. And you can check this by going back to your page and inspecting your page source with view page source here in Chrome. What you will see is that you only have app root in here, you see none of the other HTML elements which you can see here in your app.component.html code. This is the page, the HTML page we got back from the server, so it's not containing all these HTML elements. That changes however if you inspect your DOM, so the actually rendered DOM, there you can see all this extra content inside of app root. Here is app root and inside of that, you got that H2 tag and the div with the H1 tag and so on. So here you can see that is the content that is rendered but not the content that is initially loaded and the reason for this difference is that Angular is just Javascript that runs on your loaded page and then it will render all this content, all this template content here dynamically. Now last but not least, our component also can take some styling and here we use style URLs which actually holds an array of paths to CSS files that should be applied to this components template. So any HTML code in there can be styled with regular CSS written in this app.component.css file. Here we have no styles but you could add your own one and by default, the styles you set up here only apply to elements in this component. So if we add a h1 style in here and we give this a red color, then all h1 tags in this component will be red but if we had another component which also uses h1, there it would not be red because the styles defined in the components stylesheet are scoped to this component. So that is how the Angular app starts and how these core features, modules and components work together. Now that was a lot of talking, let's now create our own components and dive a bit deeper into how Angular works in its basics.

## Creating our first Component

To create a component:

``` bash
ng generate component persons
```

What has Angular done for us?

- It has created the _persons_ directory with the source code for the component, starting from an empty template:
  - `persons.component.css` for custom styles. It could be removed.
  - `persons.component.html` for the HTML view of the component.
  - `persons.component.spec.ts` for unit tests.
  - `persons.component.ts` for the source code of the component.
- It has included it in the Angular modules file `app.module.ts`:

Now that we had a detailed tour through how Angular works and starts, let's start building our own components and we can do this by, in the app folder in the source folder, adding a new component file. Now we could do this right here or store the separate sub-folder, I will actually create a sub-folder and name it persons and that name is totally up to you but I want to create a persons component. Now you can name this file however you want but the naming convention is to have the name of your component, then .component and then .ts and in there, we now export a class which you also typically name persons component. So first the name of your component with a capital starting character and then also with a capital starting character but in the same word, component. Now here again to tell Angular that this class should be treated as a component, we add the @component decorator and here my IDE added the import automatically but you need to make sure that you do add it as well. You need to add it in every file where you use this, so just because you are already important component here doesn't mean you don't have to import it here anymore. Every file works on its own and every dependency of that file, so every object or class you're using from another file needs to be imported into this file. Now we definitely need a selector here, so our own tag by which we can use that. Now you're relatively free regarding the naming but it should be a name with a dash in it so that you have something like app something or my something, so that you're not clashing with default names, like h1. So I will name it app-persons and that is kind of the convention, you use app- as your prefix and then again your component name. Now I also will add a template URL and point at ./ to construct a relative path, ./persons.component.html. Now that file doesn't exist yet, so let's add a persons.component.html file next to the persons.component.ts file and there, I'll add a paragraph where I simply say some persons, nothing fancy but it'll do for now. Now last but not least, let's save these files and now we need to register this component in our module or in some Angular module. Now let's use the app module for now and let's add an import here at the top where I import persons component and you have to make sure that the name you use here matches your class name you used here, so persons component from and then you point at your file and this has to be a relative path, so ./ and then it's in the persons sub-folder and there persons component, again without .ts, that is added automatically for you. Now we add it to declarations because we have to declare all the components we are using in this module. We don't add it to Bootstrap because you only add your root component here, the question then of course is, where will Angular look for the selector of this component then? And the answer is in all other components of this declaration list here basically. So we can go to the app.component.html file and delete all the default code in there and now add app-persons as an HTML tag. And if you now save that all, you will see that if you go back to your browser, you see some persons here and that of course is the content of your own persons component.

## Cross component communication with property binding

``` ts persons.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  @Input() personList: string[] = [];
  title: string = 'Persons list';
}
```

[Input](https://angular.io/api/core/Input)

`@Input` is an Angular decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.

Now we can go to the `AppComponent` where we use that tag and here, we can set this just as we can set attributes on normal HTML elements, at least it's kind of comparable to that. There's just one special thing, for property binding to tell Angular that you are now binding the property of that other component, you add square brackets here and then the name of the property you want to bind and there I'll bind to person list which is the name of the property I have in person component, this one.

``` html app.component.html
<app-persons [personList]="persons"></app-persons>
```

``` ts app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-refresher';
  persons: string[] = ['Michael', 'Jane', 'John'];
}
```

And now we can output the persons using the `ngFor` directive, a structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.

[*ngFor](https://angular.io/api/common/NgFor)

``` html
<ul>
  <li *ngFor="let person of personList">{{ person }}</li>
</ul>
```

The result is:

![04](img/04.png)

## Handling user input

Create a new component called _PersonInputComponent_ inside the _persons_ folder:

``` bash
ng generate component persons/person-input
```

## Property binding and event binding

### Property binding

```html
<input type="text" id="name" [defaultValue]="John"> <!-- Property binding, assign a value to the property 'defaultValue' -->
```

### Event binding

``` html
<button (click)="onCreatePerson()">Create</button> <!-- Event binding, between (). Capture click event and call a method -->
```

### Two-way binding

We add an input element to require the person name:

``` html person-input.component.html
<label for="name">Name</label>
<input type="text" id="name" [(ngModel)]="enteredPersonName">
<button (click)="onCreatePerson()">Create</button>
```

[ngModel](https://angular.io/api/forms/NgModel) Creates a FormControl instance from a domain model and binds it to a form control element. This is a directive exposed by Angular which supports the two-way binding syntax as it is called because this actually listen to the value and output changes into a property of our choice and update it with the latest value and on the other hand it will pass back changes into the value of this input.

When hit the button, we want to add the person as a new element:

``` ts person-input.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
```

## Passing data around with custom events

We want to pass our entered name up to the app component from inside our person input component and for this, we can set up our own event binding or our own bindable event to be precise. Now for our own property binding, we used input as a decorator, for our own event binding, we use output. So let's import output from @angular/core in the person input component and now we just need to use a property which will basically be turned into our own event transmitter you could say, our own event emitter. I'll add this property here as the first property maybe but that's up to you, the order doesn't matter and I'll name it person create, the name is totally up to you. Now in front of that, I'll add @output with parentheses and now I will initialize this with a default value which we also have to import from @angular/core and that's the event emitter object. This actually is a class or a constructor function and therefore we can use the new keyword to create a new event emitter object based on that class, that is what we store in person create. Now this is a so-called generic type which means we can add this strange smaller than, greater than signs here and in between, we defined the type of data our event will eventually hold as data when we emit it because you can pass some data along with your event and I want to pass a string because I want to pass the entered name with my event and that is what we defined with this syntax here. Now down there before we reset the input, I can therefore then call this person create and then call emit and this is a method made available by the event emitter and then as an argument here, we pass the data we want to pass along with our event and here, this is our enteredPersonName.

``` ts persons-input-component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
```

Now we're emitting this and thanks to @output, we can listen to this from outside, so from the parent component of this component, the component where we use this selector. So let's go to the app component where we do use it and now here with the parenthesis syntax, we can listen to person create and then again, execute a function like onPersonCreated. Let's add this here in app.component.ts, onPersonCreated and of course we now want to get that name that was created. We do pass it in person input, I do pass it to the emit method and in app component, to pass it along as an argument to this method, we can use a special reserved variable name, $event and that is a name automatically created by Angular, it holds the data our event carries. If we don't pass it, our data will basically be lost, if we pass this special name here, Angular will forward the data of the event to which you're listening, so the data of the person create event in this case. This means our data will now reach our method here and there, it will be the name of that person which will be a string in the end. Well and here, we can now simply use persons and push, that's a default Javascript method, push the name onto this array. And with this if we go back and I add Michael here, you see it's added and the DOM automatically updates and the page never reloads. All of that happens behind the scenes through Javascript, thanks to Angular.

``` html app.component.html
<app-person-input (personCreate)="onPersonCreated($event)"></app-person-input>
<app-persons [personList]="persons"></app-persons>
```

``` ts app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
```

## Implementing Routing

[Common routing tasks](https://angular.io/guide/router)

We want to set up different pages and technically you still have one single page, the `index.html` file, but you want to give the user the illusion of having multiple pages. Now you can do this with an Angular feature called **routing**. This esentially allows Angular to read the URL of your browser and render different components based on that URL.

To setup routing is necessary a router module. To generate the routing module you can use the Angular CLI:

``` bash
ng generate module app-routing
```

``` ts app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from '../persons/persons.component';
import { PersonInputComponent } from '../persons/person-input/person-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component:PersonInputComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
```

In this module I want to set up the routes my Angular app knows, so the URLs it understands and for which it knows which component to render. I'll define these routes in the `routes` array.

It's also necessary to register the new module in the Angular configuration:

``` ts app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

And now we can use on our main HTML file with an Angular directive:

``` html app.component.html
<router-outlet></router-outlet>
```

Now we can load data to our component using **services**.

## Setting up services

A service is essentially a class which can act as a middleman between components or as a data storage for other components or even interact with other services.

I will create the _persons service_ into _persons_ folder using the Angular CLI:

``` bash
ng generate service persons/persons
```

``` ts persons.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  // We can inject services into other components using a feature called 'dependency injection'
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  constructor() { }

  addPerson(name: string) {
    this.persons.push(name);
  }
}
```

The service will be registered in our app module file as a **provider**:

``` ts app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonsService } from './persons/persons.service';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [PersonsService], // Angular is aware of the service and allows Angular to inject it into components that need it
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Using services with dependency injection

We are going to inject the service of Persons into the _Persons_ component:

``` ts persons.component.ts
import { Component, Input } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  personList: string[];
  title: string = 'Persons list';

  // Angular will inject the service, because it is decorated with @Injectable
  constructor(personsService: PersonsService) {
    this.personList = personsService.persons;
  }
}
```

And now if we execute the project we can see the persons list again:

![05](./img/05.png)

## Working with Angular LifeCycle Hooks

[Angular component lifecycle](https://angular.io/guide/lifecycle-hooks)

Each Angular component goes through a lifecycle and going through the entire lifecycle and how it works. These are essentially methods you can add to your component and Angular will execute them for you when it reaches that hook.

We are going to use the lifecycle of _Persons_ component to load the data:

``` ts persons.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  personList: string[];
  title: string = 'Persons list';

  constructor(private personsService: PersonsService) {
    // With 'private' in the 'personsService' method parameter Angular is creating a private class attribute with the same name as the method parameter.
    // We could use the attribute 'this.personsService' in the rest of the component source code.
    this.personList = [];
  }

  ngOnInit(): void {
    this.personList = this.personsService.persons;
  }
}
```

## Adding a person with services

``` ts persons-input.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personsService: PersonsService) {
  }

  onCreatePerson() {
    console.log('Created a person. Name: ' + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
  }
}
```

## Navigating between components

We create a very simple routing header:

[Router link](https://angular.io/api/router/RouterLink)

``` html app.component.html
<a [routerLink]="'/'">Persons List</a> | <a [routerLink]="'/input'">Input</a>
<hr>
<router-outlet></router-outlet>
```

## Removing items upon a click

Use a new method `removePerson()` on our _Persons_ service and capture click event to make the deletion:

``` ts persons.service.ts
  removePerson(name:string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
  }
```

``` html persons.component.html
<h1>{{ title }}</h1>
<ul>
  <li *ngFor="let person of personList" (click)="onRemovePerson(person)">{{ person }}</li>
</ul>
```

``` ts persons.component.ts
  onRemovePerson(person: string) {
    this.personsService.removePerson(person);
  }
```

This code works, but Angular didn't update this correctly.

## Pusing data around with subjects

When we delete a person this is not picked up automatically. Now we can set up a mechanism where we push changes to places interested in the update, so push changes to components for example and to do that we will use **observables**:

[Understanding RxJS](https://academind.com/tutorials/understanding-rxjs)

``` ts persons.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  // We can inject services into other components using a feature called 'dependency injection'
  providedIn: 'root'
})
export class PersonsService {
  private persons: string[] = ['Max', 'Manuel', 'Anna', 'Jane'];

  constructor() { }

  // Subject is very similar to an event emitter. Is a generic type and we can use it to manage and emit data.
  personsChanged = new Subject<string[]>();

  addPerson(name: string) {
    console.log('Persons service: adding a person: ' + name);
    this.persons.push(name);
    this.personsChanged.next(this.persons); // next is used for emit a value
  }

  removePerson(name:string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons); // next is used for emit a value
  }
}
```

And now we have to listen to this subject:

``` ts persons.component.ts
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  title: string = 'Persons list';
  private personsListSubscription: Subscription;

  constructor(private personsService: PersonsService) {
    // With 'private' in the 'personsService' method parameter Angular is creating a private class attribute with the same name as the method parameter.
    // We could use the attribute 'this.personsService' in the rest of the component source code.
    this.personList = this.personsService.getPersons();
    this.personsListSubscription = new Subscription();
  }

  ngOnInit(): void {
    // Set up a listener to the personsService
    this.personsListSubscription = this.personsService.personsChanged.subscribe((persons) => {
      this.personList = persons;
    });
  }

  ngOnDestroy(): void {
    // It's VERY IMPORTANT to unsuscribe to subjects to prevent memory leaks
    this.personsListSubscription.unsubscribe();
  }

  onRemovePerson(person: string) {
    this.personsService.removePerson(person);
  }
}
```

## Sending HTTP requests

We are going to use SWAPI to make this example:

[SWAPI - The Star Wars API](https://swapi.dev/)

How do we send the HTTP request on Angular and transform the response data to use it in our project? Let's go:

First, we will unlock the `HttpClient` in our app configuration:

``` ts app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonsService } from './persons/persons.service';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [PersonsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

We will use a new service called `StarWarsPersonsService` to work with Star Wars persons:

``` ts star-wars-persons-service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsPersonsServiceService {
  private starWarsPersons: string[];
  starWarsPersonsChanged = new Subject<string[]>();

  constructor(private httpClient: HttpClient) {
    this.starWarsPersons = [];
  }

  fetchPersons() {
    // Use Http with a GET method to retrieve Star Wars persons
    this.httpClient.get<any>('https://swapi.dev/api/people')
    .pipe(map(response => {
      // Transform data and return it
      return response.results.map((result: { name: string; }) => result.name);
    })) // The pipe method is for chaining observable operators
    .subscribe(mappedResponse => {
      console.log(mappedResponse);
      this.starWarsPersonsChanged.next(mappedResponse);
    });
  }
}
```

And use our new service in _Persons_ component:

``` ts persons.component.ts
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarWarsPersonsServiceService } from './services/star-wars-persons-service.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  title: string = 'Persons list';
  private personsListSubscription: Subscription;

  constructor(private starWarsPersonsService: StarWarsPersonsServiceService) {
    // With 'private' in the 'personsService' method parameter Angular is creating a private class attribute with the same name as the method parameter.
    // We could use the attribute 'this.personsService' in the rest of the component source code.
    this.personList = [];
    this.personsListSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.starWarsPersonsService.fetchPersons();
    this.personsListSubscription = this.starWarsPersonsService.starWarsPersonsChanged.subscribe(starWarsPersons => {
      this.personList = starWarsPersons;
    });
  }

  ngOnDestroy(): void {
    // It's VERY IMPORTANT to unsuscribe to subjects to prevent memory leaks
    this.personsListSubscription.unsubscribe();
  }

  onRemovePerson(person: string) {
    // this.personsService.removePerson(person);
  }
}
```

## Showing a placeholder whilst waiting for a response

While we're waiting for the HTTP request response we're showing nothing, instead it would be nice to have some text noticing the data is being loaded.

We implement it with a boolean flag called `isLoading` that will show a text in the web page while data is being loaded:

``` html persons.component.html
