import React from "react";
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { getUserListFromCache, saveUserListToCache } from "./utils";

function Welcome() {
  const [inputValue, setInputValue] = React.useState("");
  const [usernameList, setUsernameList] = React.useState(
    getUserListFromCache()
  );

  React.useEffect(() => {
    saveUserListToCache(usernameList);
  }, [usernameList]);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input
        value={inputValue}
        placeholder="Wpisz imie i nazwisko"
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => {
          if (usernameList.includes(inputValue)) {
            alert("Sorry, the name already exist ¯\\_(ツ)_/¯");
          } else {
            setUsernameList(previousState => {
              return [...previousState, inputValue];
            });

            setInputValue("");
          }
        }}
      >
        Dodaj
      </Button>

      <List>
        {usernameList.map(username => {
          return (
            <ListItem alignItems="flex-start" key={username}>
              <ListItemAvatar>
                <Avatar
                  alt={username}
                  src={`https://eu.ui-avatars.com/api/?name=${username}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`Hi ${username} 👋`}
                secondary="Nice to meet you 🎉"
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    setUsernameList(previousState => {
                      return previousState.filter(name => name !== username);
                    });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </form>
  );
}

export default Welcome;
