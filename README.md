![Image description](https://github.com/harakeke-2020/WalkLand/blob/dev/server/public/images/mainlogo.png?raw=true)

## 🌏 Welcome to WalkLand 🌏


WalkLand is a final group projected created by students at Dev Academy.

## DEVELOPMENT

##GIT AND GITHUB

###Fixing merge conflicts###
--KEEP CURRENT CHANGES: Deletes all incoming changes from the incoming branch, and keeps your code.
--ACCEPT INCOMING CHANGES: Replaces your code with the incoming changes
--ACCEPT BOTH CHANGES: Keeps your code and adds the code from the incoming branch.

###PULLING FROM DEV:
####--YOU WANT TO UPDATE YOUR BRANCH WITH CHANGES FROM DEV AND KEEP WORKING

Checkout to your branch, add and commit your changes. Then

`git pull origin dev`

Fix any merge conflicts, update dependencies if needed with npm i, test everything works by running the server with `npm run dev`, and if everything works, add & commit changes and keep working.

###PUSHING TO DEV:
####--YOU WANT TO PUSH YOUR CHANGES TO THE DEV BRANCH SO YOU CAN ADD THEM TO THE WORKING VERSION OF THE PROJECT

 add and commit changes in the branch you're working on. Then:
 
 `git checkout dev`        puts you in the local dev branch.
 `git pull origin dev`      pulls down any changes from the repo on github.
 
 Fix any merge conflicts.
 
 Make sure to run `npm i` to update dependencies, and run the server with `npm run dev` to test that your local dev branch is working.
 Add and commit once merge conflicts are fixed and you've tested that the local dev branch is working.
 
 THEN,
 `git merge <your local branch name>`
  Fix merge conflicts
  Install dependencies if packagelock.json changed
  Run the server with `npm run dev` to test that dev works with your changes
  If everything works great, then:
  
  -run `git pull origin dev` if you think the remote dev branch has changed while you were merging your branch. 
  Fix any merge conflicts, add & commit, then run `git push origin dev`. 
  Otherwise:
  
  add & commit your changes, the run `git push origin dev`
