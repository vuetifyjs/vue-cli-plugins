workflow "Publish" {
  on = "push"
  resolves = "publish"
}

action "master-branch-filter" {
  uses = "actions/bin/filter@master"
  args = "branch chore/add-workflow"
}

action "tag-filter" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "publish" {
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
