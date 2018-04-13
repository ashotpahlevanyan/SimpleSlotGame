# Overview

  Code assignment from [NETENT](https://www.netent.com/en/).

## The assignment is to build a small, **full stack javascript application**.

   The application is a simple game which can display a random outcome generated on the server.

## Requirements

### General

    * The application must work in major desktop and mobile devices (please state which devices/
      browsers the application has been tested on)
    * The general principles by which the application will be evaluated are maintainability, testability and
      reusability.
    * Unit Tests are not mandatory but encouraged; the key is that the code is testable.


### Client
    * Not external libraries or framework can be used
    * ES6 is not mandatory but encouraged
    * The user must be able to trigger a request for outcome to the server
    * The outcome must be displayed to the user using the provided graphical resources (Symbol_0.png,
    * Symbol_1.png,...)
    * The type of win must be displayed to the user (No Win, Small Win, Big Win)
    * A bonus feature must be implemented. If the server returns bonus,
      the client must first display any win to the user, then trigger an additional
      request without any user input (this must also be indicated to the user in some form)

### Server
    * Server must be a Node.js application
    * Server must be written in ES6
    * Server must be able to serve needed resources to client.
    * Server must be able to receive requests from client and return an
        outcome (three random integers between 0-5).
      - There must be three types of outcomes: No Win, Small Win, Big Win.
      - Two equal integers constitutes a Small Win.
      - Three equal integers constitutes a Big Win.
    * Server must randomly (in addition to the outcome) return if
        bonus feature should be triggered or not.

### Submission
    * Link to private Github or Bitbucket repo
    * Zip file per email (change file ending to get through firewall)
    * USB-stick on homing pigeon


## Prerequisites

To **start playing** with the application you need to install some recent version of node.js
Here **Node.js v.9.8** is used. Then install the packages with

 ```
 npm install
 ```

To **test** the application, please use

 ```
 npm test
 ```

To **run** the application, please use

 ```
 npm start
 ```

## Tested

### Application was tested on the following systems/devices

    * MacBook Pro (Sierra) / Firefox, Safari, Chrome
    * Ubuntu 16.04 / Firefox , Chrome
    * iPhone 6 Plus / Firefox, Safari, Chrome
    * iPad Air 2 / Firefox, Safari, Chrome

## Availability

### Working version of the app is available at [https://slotgameashot.herokuapp.com/](https://slotgameashot.herokuapp.com/)


## Author

   **[Ashot Pahlevanyan](https://www.linkedin.com/in/ashot-pahlevanyan-b2a22747/)** - *Initial work* - [ashotpahlevanyan](https://github.com/ashotpahlevanyan)

## License

   This project is licensed under the **MIT License**

**Happy Coding ;)**