import React from "react";
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { getUserListFromCache, saveUserListCache } from "./utils";

function Welcome() {
  const [inputValue, setInputValue] = React.useState("");
  const [usernameList, setUsernameList] = React.useState(
    getUserListFromCache()
  );

  React.useEffect(() => {
    saveUserListCache(usernameList);
  }, [usernameList]);

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
        }}
        placeholder="Wpisz imie i nazwisko"
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => {
          if (usernameList.includes(inputValue)) {
            alert("The name already exist");
          } else {
            setUsernameList(previousUsernameList => {
              return [...previousUsernameList, inputValue];
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
              <ListItemText primary={`Hi ${username}, nice to meet you 🎉`} />
            </ListItem>
          );
        })}
      </List>
    </form>
  );
}

export default Welcome;
