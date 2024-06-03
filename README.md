# EcommerceBack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Description

EcommerceBack is an Angular-based e-commerce application that provides a platform for listing products, managing a shopping cart, and handling orders. The application includes features such as product listing, adding products to the cart, updating product quantities, and viewing order details.

## Installation
To install the dependencies, run:
- npm install

## Folder Structure

The project follows a modular structure for better organization and scalability:

- **src/app/core**: This folder contains the core modules, including models and interfaces.
  
- **src/app/modules**: This folder contains the feature modules of the application. Each module represents a distinct feature or section of the application.
  - Example: `home`, `order`, and `product` modules are found here.

- **src/app/shared**: This folder contains shared components, directives, and services that are used across multiple modules in the application. This folder has its own module.
  - Example: Shared components like the shopping cart, directives, and global services.

- **src/app/material**: This folder contains components and modules related to Angular Material, used for UI components and styling.

- **src/environments**: This folder contains the environment configuration files, such as `environment.ts`, which includes endpoints and settings for different environments (development, production).


## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Routes

The application has the following main routes:

- **Product Listing and Cart**: [http://localhost:4200/home/products](http://localhost:4200/home/products) - This route displays the list of available products and allows users to add products to their cart.
- **Order Listing**: [http://localhost:4200/home/order](http://localhost:4200/home/order) - This route shows the list of orders that have been placed.
- **Order Details**: [http://localhost:4200/home/order/detalle/1](http://localhost:4200/home/order/detalle/1) - This route provides the details of a specific order.

## Further Help

To get more help on the Angular CLI, use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
