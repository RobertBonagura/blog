---
title: How to push to GitHub and actually understand what you're doing
author: Bobby Bonagura
date: "4/26/20"
featuredImage: ../img/pushing-up-hill_1280.png
description: "Being able to share projects on GitHub is a must for any developer. Despite how easy it is to copy/paste your way through a tutorial, a thorough understanding of basic Git commands is still essential."
---
There are countless tutorials and StackOverflow answers supplying all the commands you need. However,
### Copying-and-pasting can only get you so far.

It may allow you to push your project onto GitHub. But once it comes time to manage a merge conflict, you're going to need to have a better understanding of these Git commands.

If you have no idea what I'm talking about, and just want to learn how to push your project to GitHub, then this article is for you. 

If you've already pushed to GitHub before, consider whether or not you can answer these questions.
* Why does an index need to be staged for commit?
* How can I revert my changes from HEAD to a previous commit?
* What are the differences between pushing, merging and fetching?

If these questions sound confusing, or if you are unsure of their answers, you probably haven't had anyone explain them to you properly. And that's okay, that's just what I'm here for.

## First Things First

My biggest piece of advice starts with a simple reminder. Git is such a powerful tool that one can go down a rabbit hole in search of understanding all of it's nuanced details. That is not what this article is for.

The goal of this article is **not** to tell you everything there is to know about Git. Instead, the goal is show you all of the neccessary commands so that you can get started sharing your Git repository to GitHub -- and actually understand what is going on in the process.

If you want to one day be a Git Ninja, start here. Proficiency in the basics alone is enough to make you stand out among the crowd of new developers. As a student at Rutgers University, it's amazing how many students I have encoutered in classrooms and hackathons that have heard of, or even used Git before, but struggle with some of the basic concepts.

By teaching the other students what I am about to share with you now, I helped developers gain confidence and an understanding of Git. This not only makes for a better team, but gave them a vital skill that is in demand by employers right now.

## Initializing Your Repository

The first thing we want to do is make sure you have Git installed on your machine by running
```
$ git --version
```
If your terminal doesn't output your current Git version, or doesn't recognize the `git` command for that matter, you are going to need to download it from [Git's official website](https://git-scm.com/downloads).

Once you can can confirm that you have Git on your machine, we can now choose where to place our repository.

To follow along with this tutorial, I recomend choosing an actual project on your computer to push to GitHub. Just keep in mind that we are going to push to repository to GitHub, so make sure that if there is not any private data in this folder. To learn more about keeping files within your repository private, see freeCodeCamp's guide on [how to use .gitignore files](https://guide.freecodecamp.org/git/gitignore/).

### Now that you have a folder selected
Run the below command in the root directory of the project you wish to place under version control.
```
$ git init
```
Voilà! It is a thing of beauty, is it not?

So what happened? Let's take a look. Your repository shouldn't seem any different at first. Let's see what happens if we you run the `ls` command with the `-a` flag to reveal all hidden files.
```
$ ls -a
```
We can now see there is sneaky hidden directory within our project now.

This confirms that we have successfully created our repository. You're more than welcome to snoop around in there, but for now I suggest coming back to it later. 

Right now all you need to understand is that within this special little folder resides all of the magic that makes Git happen. 

With each commit you make, you take a snapshot of the current state of your project. In response, any change is then recorded into this folder. 

## Making Your First Commit

Because we just initialized our repository, the .git folder doesn't contain any snapshots. Let's create one. 

## Conclusion
So my suggestion is to follow along to this tutorial. Along the way I will do my best explain what is happening and why. 

Then after learning these commands and going through this tutorial, it's important to use them.

I suggest using Git and GitHub for all personal projects. Even essays or word documents. After incorporating it into your workflow becomes natural, it will be much easier to pursue learning some of the more advanced features and functionality that Git has to offer.

---

This is why in this tutorial, I have provided a tutorial to push one of your projects on GitHub, where every one every step of the way we will explain uand understand what is happening. turn one of your projects into a **working directory**. This what Git calls a folder on your local machine that has a Git **repository** in it.

Once you have a working directory 

This repository is a hidden folder in your working directory that allows you to use the Git command line tool.

This gives you complete control over your working directory. 

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
Using the Git command line tool gives you complete control over any directory on your computer. In fact, you're not limited to just the directories on your computer... but we'll get to that part later.

To use Git, you create a **local repository** with the command `git init `. This creates a local repository because it will reside on your local machine.

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