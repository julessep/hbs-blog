Requirements

In this exercise you will use the technology you've learned to this point ( Browserify, SASS, Grunt) to
create a blog page with three short articles (You can use placeholder text for the articles).

Handlebars will be used to create your view -- a template and a JavaScript object bound together and rendered as HTML

Make sure you have a package.json file in your lib folder, either by running npm init in that folder or repurposing a package.json from a previous project that used browserify and SASS. Add the necessary packages with
npm install handlebars hbsfy --save.
Create a blog page with three short articles.
Store each article's title, author, copy/content, and published date in an object in a json file.
The blog page should be a handlebars template that will be bound to the json data.
Use the following Gruntfile.js configuration in order to precompile your template(s). Be sure to match/update this info to match your project's file structure.

