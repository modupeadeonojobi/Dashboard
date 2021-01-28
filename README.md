# Dashboard
>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Table of contents
* [General info](#general-info)
<!--* [Screenshots](#screenshots) -->
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Inspiration](#inspiration)


## General info
This is a simple user dashboard. It generate users information and filter according to sex(male and female).

<!--## Screenshots
![Example screenshot](stil in progress) -->

## Technologies
* Angular  - version 11.0.6.
* Materian Angular  - version 11.1.0
* Bootstrap - version 3.0

## Setup
* Download the source code using git or else download and unzip the zip file.
* Open a terminal window and go to the project root folder.
* You need to have npm installed globally.
* Run npm i to install the required libraries.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

`<div class="main">
    <div class="wrapper">
        <div class="container-fluid">
            <p class="greeting">Hello, <span>Emerald</span></p>
            <p class="info">Welcome to your dashboard, kindly sort through the user base</p>
        </div>
        <form class="form-inline" [formGroup]="SearchForm">
            <input formControlName="search" class="form-control" size="44"  type="search" placeholder="Find a user" aria-label="Search">
        </form>
        <p class="user mt-3">Show Users</p>
        <div class="example-button-container">
            <button mat-fab color="accent" aria-label="icon">
                <mat-icon>groups</mat-icon>
            </button>
            <small>All Users</small>
            <button mat-fab color="primary" aria-label="icon">
                <mat-icon>groups</mat-icon>
            </button>
            <small>Male Users </small>
            <button mat-fab aria-label="icon" class="male">
                <mat-icon>groups</mat-icon>
            </button>
            <small>Female Users</small>
        </div>
        <div class="router">
            <router-outlet></router-outlet>
        </div>
    </div>`

## Status
Project is: _in progress_.

## Inspiration
Inspired by Devplacement Assestment by Decagon 
