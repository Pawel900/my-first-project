import React from "react";
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { getUserListFromCache, saveUserListToCache } from "./utils";
import "./App.css";




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
        placeholder="Dodaj zadanie"
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
            alert("Przepraszamy, zadanie już jest dodane do listy.");
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
      <h1>Lista zadań:</h1>
       
      <List>
     
        {usernameList.map(username => {
          return (
           
            <ListItem alignItems="flex-start" key={username}>
               <IconButton> <div
           
           className='button'
           
           ></div>
         
        {
          
      document.addEventListener('click', function(event)
        
          {

          
            if (event.target.className === 'button') 
                event.target.classList.toggle('buttonChange');  
        
                
          }, true )}


          </IconButton>
          
              <ListItemText
                primary={username}/>

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
