import React from "react";

export default function UserTable(props) {
  return (
    <table>
      <thread>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thread>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td className="actions">
                <button
                  className="button add"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  edit
                </button>
                <button
                  className="button delete"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Del
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
