# User management App

This crud app keeps a track of all the users along with their name and username.
The main features of this app are as follows:

- Add an user along with its username.
- Delete an existing user and its data.
- Update an user and its username, while also cancelling the update prompt without any changes
- Display the list of users in the system.

## How each feature in the system is developed.

### Create

- addUser function is passed as a prop to the component
- The component uses a form which will take two inputs
  - Name of the user
  - Username of the user
- onChange will be handled by handleInputChange function

- Working of the handleInputChange function: - an event is passed when calling the function - this event is destructured to get the name and value
  in this case for name input
  name would be name
  & value would be user input

            for username input
                name would be username
            &   value would be user input

        this destructured name and value are used to create a user object which in turn is passed to the adduser function passed down to the add user component through props.

        This will update the users list in the main app.

### Read

- users array is passed as prop in usertable component
  If the length of the array is > 0, the array is iterated to show all the users in the users array.

### Update

- To update the user, while iterating over the users prop, user object is passed to the editUser function(also passed as a prop) this will update the edit mode state to true while also mutating current user state.

- edit user form component will take in current user, function to mutate edit mode state and update user function as props.

- If the submit button is clicked, the form component will update the user in the users array.

### Delete

- to delete user, while iterating over the users array, pass delete user function which will take in the id and if the id matches to any entries in the array, will filter it out of the array.

## Future updates

- Delete prompt asks for a confirmation along with alert
- localstorage is used instead of Ram for data storage
- Repo pattern will be used to send and receive data using Firebase backend for permanent data storage.
