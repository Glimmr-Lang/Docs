# Get Glimmr

## Pre-built Binaries

> Glimmr is currently only available through source, pre-built binaries are not available, so in order to try out glimmr you will have to build it yourself. Luckily the build process is very simple. Follow the build steps below.

## Build from source

>  To compile the glimmr compiler you have to first get the source code.

```sh
$ git clone https://github.com/Glimmr-Lang/Glimmr
```

Then run the following commands:
```sh
$ cd Glimmr
$ mvn package
```

The glimr compiler should then be compiled and packaged into a `.jar` file that is ready to use. There is a very useful shell script on the root of the directory, named `glmr`, this script is the entry point of the compiler. An install script will be included in future releases.

## Install
You can copy the glimmr folder to any place on your computer and make sure to add it to the path so that the glimmr compiler can be invoked from any working directory in the terminal. If everything went well try running the following command on your terminal. 
```sh
$ glmr --h
```

If glimmr is installed properly you should see a wall of text scroll up, quickly followed by a word art created in ASCII. If not try following the build steps one more time. 

You can also test the installation by running the following command

```glmr
$ glmr --version
```

**IMPORTANT** : Please note that glimmr is still a work in progress, so bugs and unfinished features are expected. If you would like to contribute to glimmr submit a pull request on [github](https://github.com/Glimmr-Lang). Thank you

## Whats next?
Now that your are ready to start your glimmr journey let me not hold you back. Its coding time!
