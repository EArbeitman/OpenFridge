# OpenFridge

/** Overview **/

Provide an on demand web application that allows users to manage their food stock.
Seamlessly search for recipes based on ingredients you have saved in your Open Fridge instance. 


/** Branching Strategy **/
Step 1 -  Clone the new repo to your computer:
_git clone https://github.com/EArbeitman/OpenFridge.git_

Step 2 - Pull and checkout the develop branch
_git pull origin develop_

This will give you a copy of all the code pushed to develop so far. The develop branch
will consist of all individual changes we make. Since this is a small project, we will be working on the same files and we will run into merge conflicts.

Step 3 - Create a local branch off of develop:
_git checkout -b evansBranch_ (substitute your name)

All of your work for that day will be tracked under your branch

If you heard me talk to Anthony at the end of Wednesdays class, he suggested that we periodically update individual branches each time a change is pushed to develop. I have a better way to manage this (so I think)

Step 4 - Merge changes into developStep 4 - Merge changes into develop

a. Once you are finished with your work for the day, stage and commit your changes on your local branch. For example

_git add file1, file2_
_git commit -m "added file1 and file2"_

NOTE: Do not push at this step. You could create a remote copy of your branch by doing this:
_git push -u origin evansBranch_
Afterwards, you could create a pull request to merge your code into develop. Instead, let's do this:

Step 4 continued...
_git checkout develop_ //Again,you are checking out the remote branch
_git pull_ // update develop. You should not get merge conflicts here.

This git pull will bring down any code changes that were made earlier

_git merge yourBranch develop_ // you may get merge conflicts here, which is okay

You can reconsile merge conflicts by validating the changes with a partner. This 
is the "testing" Anthony was referring to

Step 5: Push develop back to github
_git push_

---------------------------------------------------------------------

Resources:

GIT Tutorial: https://www.atlassian.com/git/tutorials
Slick Framework: http://kenwheeler.github.io/slick/
Heroku Link: https://open-fridge.herokuapp.com/



