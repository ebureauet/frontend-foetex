# Frontend for Foetex

The frontend project for the Foetex client site.

## Tools

### Development

1. LibSass (NodeJS CSS Preprocessor, alternative to the ruby powered sass)
2. Bootstrap-Sass
3. Susy + Breakpoint (Grid System optional)
4. Browserify
5. HTML File Includes
6. Source Maps
7. Minify CSS, Uglify JS
8. Autoprefix CSS
9. Image Compression Tools
10. JSHint, HTMLhint, CSSLint
11. Icon Font Generation
12. BrowserSync
13. Notifier

### Production

1. Jquery
2. Normalize (CSS Reset)
3. OwlCarousel (Slideshows, Carousels)

## Project Setup  

### System Requirements:

* Node.js [download link](https://nodejs.org/download/)
* Git Commandline Tools
  * GitBash [download link](http://git-scm.com/downloads)
  * GitShell [download link (also has windows gui of github)](https://windows.github.com/index.html)
* Phyton [download link](https://www.python.org/downloads/) (required for browsersync)
* Visual Studio 2013 update 4 (required for browsersync and libsass)
* Install Node-GYP (required by libsass)
~~~
$ npm install -g node-gyp
~~~

### Clone This Repository

If you wish to collaborate with this project then you will need to clone this repository to your local machine. First, open up Git Bash or any Git commandline tool, and point `cd` the command prompt to a directory where you want this project to be located (e.g. 'D:/projects/'):

in GitBash
~~~
$ cd D:/projects/
~~~
then it should like something like this:
~~~
USER@USER-PC /d/projects
$ _
~~~
then type in and enter this:
~~~
$ git clone https://github.com/ebureauet/frontend-foetex.git
~~~
This will download the repository to your 'D:/projects'. When done downloading, `cd` in to the folder like so:
~~~
cd frontend-foetex
~~~
(power tip: type in first 3 letter of the file or folder and push 'tab' in your keyboard, it will autocomplete the filename or folder name for you.)

### Setting Up the Project Workflow

Now, that your repository is created you must next set up the project workflow system by doing the following:

1. Install Node dependencies
~~~
$ npm install
~~~
2. Install Bower dependencies
~~~
$ bower install
~~~

## Usage

The gulpfile in this project is setup to run `gulp-sass` and to watch the scss file for changes. Use the `gulp` command to start the process.

~~~
$ gulp
~~~

That's it!

## Browse the Documentations:

* [About](https://github.com/ebureauet/website-starter/blob/master/docs/documentation.md)
* [Cheat Sheets](https://github.com/ebureauet/website-starter/blob/master/docs/thecheatsheets.md)
* [Working Folders](https://github.com/ebureauet/website-starter/blob/master/docs/workingdirectory.md)
* [Working with HTML](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithhtml.md)
* [Working with SASS](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithsass.md)
* [Working with JS](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithjs.md)
* [Working with Icon Fonts](https://github.com/ebureauet/website-starter/blob/master/docs/workingwithiconfonts.md)
