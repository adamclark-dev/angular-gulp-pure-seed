Angular Gulp Seed
=================

This repository is designed to provide a seed application to give a headstart when building an Angular application.

The app is at a bare bones stage and has example modules from the pure framework installed to give you an idea of the layout and how to get started.

[Demo Site](http://178.62.26.101/)

## Installation 

### Prerequisites

You need git to clone the angular-seed repository.

The app uses node.js to initialize and compile the seed, you must have node.js and
its package manager (npm) installed.

### Clone the repository into your working directory

```bash
git --depth=1 clone https://github.com/adamclark-dev/angular-gulp-seed.git .
```

### Install Dependencies

Ruby and Sass are required for gulp to run properly

```
sudo apt-get install ruby
sudo gem install sass
```

This application is built around node and bower. NPM has been configured to install bower.

```
npm install
```

### Usage

To run the application, type

```
Gulp
```
This will build the build directory, you will need to point your web server to this directory.

### Installed Components

- Restangular (Provides restful api requests)
- Toaster (Growl style messages)
- UI Router (Angular Routing Provider)

## License

This package is licensed under the [BSD 3-Clause license](http://opensource.org/licenses/BSD-3-Clause).
