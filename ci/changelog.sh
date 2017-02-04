LAST_TAG=$(git tag --list | tail -1);
ISSUE_URL='https:\/\/github.com\/yoga1290\/VideoQuotes\/issues\/';

git log $LAST_TAG..HEAD --oneline \
  | egrep -o "#([0-9]+) (.+)" \
  | sed -E "s/#([0-9]*) (.*)/(\1)[$ISSUE_URL\1] \2/g";
