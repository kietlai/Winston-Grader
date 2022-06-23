#Name: Kiet Lai and Nathan story


from pydoc import render_doc
from flask import Flask, render_template, request, flash, redirect, url_for


app = Flask('app')

@app.route('/')
def home():
  return render_template('content/home.html')

@app.route('/gpa')
def gpa():
  return render_template('dashboard/gpa.html')

@app.route("/grader")
def grader():
  return render_template('dashboard/grader.html')



#todo: Add more routes and use redirects to change some things. 
#todo: add in a home page, gpa, grade affect, save it to a server/database. 
#todo: use jinja to create templates. 
#todo: finish up the README markdown file
#todo: far future create a sign up page + login page.
#todo: later create a system to take notes that will be on a contender with others. 
#todo: create a user saved page. 
#Open source???