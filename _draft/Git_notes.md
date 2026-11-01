# Git Notes

## Common operations

git push -u origin main:main

### create new branch and push code

```
# check remote branches
git branch -r
# create new branch
git checkout -b <new-branch>
# push code to remote repository
git push --set-upstream <remote repository name> <new-branch>
# cover remote repository forcely
git push <remote repository name> <new-branch> --force
```

```
# create local branch
git branch <new branch>
# switch branch
git checkout <new-branch>
# pull code
git config pull.rebase false # default merge code
git pull <remote repository> <remote branch> --allow-unrelated-histories

```

## Force pull from remote repository

```
git reset --hard <remote repository name>/<branch>
```
