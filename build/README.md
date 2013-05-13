#Grunt Build Scripts

This build script uses Grunt (<https://github.com/cowboy/grunt>), a task-based command line build tool for JavaScript projects.

##  What you need beforehand:

You'll need the following libraries. Project verified with the versions in parentheses.

1. Node (0.8.22)
2. NPM (1.2.14)

Download and install node by grabbing an installer from the project site: <http://nodejs.org>. NPM comes along with it. You can also install Node via Homebrew:

```brew install node```

## Grunt:

Grunt and the Grunt command line tool should be installed globally: 

```sudo npm install -g grunt grunt-cli```

### Grunt Dependencies:

Each grunt project has a set of dependencies specified in `package.json`.

Install the grunt dependencies by running the following from the project root directory:

```npm install```

## Stylus

Grunt has already been configured to compile the app.styl and print.styl files. To compile non-minified CSS simply run:

```grunt css```

To compile production ready, minified CSS, run

```grunt cssmin```

### Stylus Organization

The stylus grunt configuration allows one to easily segment their CSS into separate logically organized files. For example, saving the mobile specific media queries and related styles in *mobile.styl* will keep code clean and nicely organized. This also has the advantage of helping teams to avoid merge conflicts.

To use this, notice the folder structure in *www/stylesheets/stylus*:

    app/
    |- main.styl
    |- mobile.styl
    print/
    |- print.styl

The stylus grunt configuration will automatically discover all folders and files. In the structure above, *main.styl* and *mobile.styl* will be compiled and concatenated into *www/stylesheets/generated/app.css* and *print.styl* will be compiled into *www/stylesheets/generated/print.css*

Therefore, if you want a separate .css file for IE, just create an *ie* folder containing at least one *.styl* file.

To segment sections of the primary *app.css* file in a team setting, simply add more files to *www/stylesheets/stylus/app* as needed.

### JS Unit Testing

We use Grunt's built-in QUnit task for this, which utilizes a headless webkit instance (PhantomJS). You'll need to have PhantomJS installed - the easiest way to do this is with Homebrew:

```brew install phantomjs```

More info [here](http://code.google.com/p/phantomjs/wiki/Installation).

Once you have PhantomJS installed, just run:

```grunt jstest```

This command will also build a detailed report at 'test/test.html'

#### Building JS Documentation

Just run:

```grunt docs```

#### Beautify JS

Just run:

```grunt beautify```