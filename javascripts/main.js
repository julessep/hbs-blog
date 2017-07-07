"use strict";
let $ = require('jquery');

let Handlebars = require('hbsfy/runtime');
Handlebars.registerPartial("nav", require('../templates/partials/header.hbs'));
// Handlebars.registerPartial("footer", require('../templates/partials/footer.hbs'));

let testTemplate = require('../templates/test.hbs');
$(".output").append(testTemplate());

let homeTemplate = require('../templates/home.hbs');
$(".output").append(homeTemplate());

let aboutTemplate = require('../templates/about.hbs');
$(".outputAbout").append(aboutTemplate());

let blogPostTemplate = require('../templates/blog.hbs');
$(document).ready( function(){
	$.ajax({
		url: "data/entries.json"
	})
	.done( function(entry){
		printPosts(entry);
		console.log('hi');
	})
	.fail( function(error){
		console.log('!', error.responseText);
	});
});

function printPosts(entry) {
	$(".outputBlog").append(blogPostTemplate(entry));
}

let $linkHome = $("#link-home");
let $linkBlog = $("#link-blog");
let $linkAbout = $("#link-about");
let outputHome = $("#home-view");
let outputAbout = $("#about-view");
let outputBlog = $("#blog-view");

function showHome() {
  	$linkHome.click(function() {
		outputBlog.addClass("hidden");
		outputAbout.addClass("hidden");	
		outputHome.removeClass("hidden");
	  console.log("biiiiy");
	});
}

showHome();

function showBlog() {
  	$linkBlog.click(function() {
	  // homeView.classList.add("hidden");
	  outputHome.addClass("hidden");
	  // homeView.classList.add("visible");
	  outputAbout.addClass("hidden");
	  outputBlog.removeClass("hidden");
	  console.log("by");
	});
}

showBlog();

function showAbout() {
  	$linkAbout.click(function() {
	  // homeView.classList.add("hidden");
	  outputHome.addClass("hidden");
	  // homeView.classList.add("visible");
	  outputBlog.addClass("hidden");
	  outputAbout.removeClass("hidden");
	  console.log("by");
	});
}

showAbout();


