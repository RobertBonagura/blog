---
title: How to use Git and actually understand what you're doing 
date: "4/26/20"
description: "What is Git? And why should anyone should use it or GitHub? To answer these questions, this blog dives into what makes Git so useful and provides a tutorial for initializing your first repository."
---

Being able to share projects on GitHub has become a Must Know-How for any developer. 

There are alot of great IDE's out there that make it easy to push and pull your project, however it is my opinion that learning Git on the Command Line first trumps all other options.

Git has some terminology that feels bizarre, if not overly redundant at first. 

Want to push? Okay, just first know you have to commit your branch first. And before that, stage your index. But make sure there isn't merge conflict.

See what I mean? If you can learn what each command does, it will make understanding this puzzling language a lot easier to digest.

Plus, what developer doesnt love being able to work from their command line?

## What we will cover
* What is Git?
* What is GitHub?
* Why use them?

### What is Git?
Straight from git-scm.com, "Git is a free and open source distributed version control system". 

Using the Git command line tool gives you complete control over any directory on your computer. Actually... not just the directories on your computer... but we'll get to that part later.

When using Git, this directory controlled by Git is known as a "repository", specifically a local repository because it will reside on your local machine.

Initalizing a local repository gives you the power of version control. This means that you can take a snapshot of your project at any point. When using git, taking a snapshot like this is called a commit.
* Your first commit saves the state of every file within your repository.
* If its not your first commit, only the changes since your last commit are saved.

Not only is using version control the best way for devlopers to contribute and collaborate with each other, it makes for a smooth landing the next time your application crashes from an erronous change to your code. 

### Why use version control?

If you make a change to a working version of your project that you later dislike, or find out has a some bug in it, you can revert all or any specific files to that previous working version.

Pretend you are me back in May 2019 with no git experience. It's 9pm and you have a project due at midnight. You have a working version of your program, but you have three more hours still to tinker with it and make it even more robust. 

Wouldn't it be nice to take a snapshot of this now? Don't make the same mistake I made by breaking a working version of this project in the pursuit of something better. As midnight approached, I wasted so much time trying to fix what was previously working that I missed my deadline completely. Don't be like the old me. Use version control.

## Initializing your Git repository

Find a folder or project on your computer and use your Terminal to change directories into the root directory. 

```
cd ~/Path/To/directory
```
Confirm that you have Git installed on your computer by running the following:
```
git --version
```
If your terminal does not output the version of Git you're running, or if your terminal doesn't recognize the git command, you are going to have to refer to the link below to download Git on to your machine.

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Once you've got a working version of Git, we can begin to create out first repository. Again, make sure you are in the root repository of the 
```
git init
```
With the above command, you will be able to initialize the current folder as a git repository. Woo-hoo! Now the real fun begins.

Once a Git repository is initialized much is going to look the same. However, take a look at all of your hidden files in this current directory.
On Mac and Linux to do this just run the command
```
ls -a
```
If you initialized the repository correctly, you should be able to see a new friend in the newly created folder `.git`. You can take a peek under the hood of Git by poking around through this folder, but we will save that for another day.

For now, lets just review some of the most essential git commands to get started working today.

## git status

The first important command is `git status`. You can execute this now to see read significant details. Your terminal is probably displaying the following two statements:

1. "On branch master"

2. "Your branch is up to date with 'origin/master'"

Origin is the name of the remote repository by default and master is the name of the branch on the remote repository that we just cloned.

Wait a second, what's a branch? It's just what is sounds like. A single repository can branch off into multiple branches. This is useful for preserving a working version of a project like I mentioend earlier. By creating new branches, you can tinker and experiment new features of your project while preserving your recent most working version in a seperate branch. By default, every repository starts with a single branch named master.

Because we just cloned this repository, it should make sense why our new local repository is up to date with origin/master.

## Branches

Generally it is good practice to use multiple branches when collaborating with other developers. Imagine what might happen if we both pull from the same branch and make conflicting changes. For this reason, it is generally best practice never to push directly into the master branch. 

To create a new branch just enter:

```
git checkout -b <branch-name>
```
What this does is take everything in your current branch and makes a copy into a new branch.

After youve created the branch you can drop the `-b` flag and use `git checkout` to switch between branches. Use `git checkout master` and `git checkout <branch-name>` to go back and forth from master to your newly created branch. You can also use `git status` to confirm you are switching successfully.

## Commiting files

In order to add files to a remote repository, you have to first **commit** any changes you make. In order to commit those changes, you have to first indicate with `git add` what files you want to be **staged** for commit.

Let's make a change to this file....

To stage files to be commited use:
```
git add <file-name>
```
When staging files for commit you can simply use `git add .` to add all files that have any changes.

You can use `git status` to confirm that you added files successfully.

You can also use `git add <file-name>` and `git rm <file-name>` to have more control of what specific files you want to stage. 
I sometimes find myself working on a bunch of changes at once but then stage and commit certain files seperately so that they can have a clear and meaningful commit message.

Once you have staged files, you can then use:
```
git commit -m "Brief message describing changes made in this commit"
```
Once you have commited changes, you can finally push those changes to the remote repository using:
``` 
git push origin <branch-name>
```

Reminder, we should try to avoid executing `git push origin master`. It is good practice to NEVER push to master. We can think of the master branch as our shared branch, that will only contain changes we agree on together. 

Instead, with the `git push` command, you can create a new branch on the remote repo. I like to name the remote branch after the branch im pushing from locally. 

For instance, you can use
```
push origin <your-branch-name>
```
But wait a second. What is origin?
1. show remote 
2. lets change this
3. Make a new repository
4. update origin branch



### What is GitHub?
Once youve downloaded Git onto your computer, you can manage the projects on your local machine using git commands.

By linking your local repository with a remote repository on GitHub, you can now take advantage of free cloud storage. Creating an account will allow you to follow along to the tutorial I've created which will introduce you to all of the required commands necessary to start using Git to push your projects to a remote repository.

## Merges and Pulling 
Push to new origin

create pull request

pull updated version into master

To clone a Github repository use the following command:
```
git clone https://github.com/RobertBonagura/CS213-Program1.git
```

You can view a repository first however. Just use your browser to visit the repository first. Not a bad idea to check some foreign source out first before downloading to your computer. Each GitHub repository has a link of the form:<br>

```
https://github.com/<username>/<repository-name>
```

So mine for the previously mentioned respository is: 

```
https://github.com/RobertBonagura/CS213-Program1<br>
```

If you visit a remote repository, you will see a green icon on the right hand side to clone or download. It will then give you the option to either clone with SSH or HTTPS. You can look into SSH but I will describe using HTTPS because it is quicker to setup.

Using HTTPS basically just means you have to provide you Github credentials anytime you push a local repository to a remote one. By taking the time to set up your SSH credentials, you can bypass this process.

Copy the link to clone with HTTPS and then you can use your terminal to execute the `clone` command mentioned above.

Note the above command will create a folder in whichever directory you are in. Executing this command creates a *local* git repository on your machine.