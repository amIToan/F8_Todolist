# Some syntax
git init
git remote add origin git://github.com/cmcculloh/repo.git
git fetch --all
git pull origin master
and
git clone git://github.com/cmcculloh/repo.git
git clone :  is how you get a local copy of an existing repository to work on. It's usually only used once for a given repository, unless you want to have multiple working copies of it around. (Or want to get a clean copy after messing up your local one...)
git pull: git pull (or git fetch + git merge) is how you update that local copy with new commits from the remote repository. If you are collaborating with others, it is a command that you will run frequently.

As your first example shows, it is possible to emulate git clone with an assortment of other git commands, but it's not really the case that git pull is doing "basically the same thing" as git clone (or vice-versa).