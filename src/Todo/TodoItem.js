import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

/* <span className="title">{todo.title}</span> */

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },

  input: {
    marginRight: '1rem'
  }
};

function TodoItem({ todo, onChange }) {
  const {removeTodo} = useContext(Context);
  const classes = [];

  if(todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input id="checkbox" type="checkbox" checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)}></input>        
        <label for="checkbox" className="title"> {todo.title} </label>
      </span>
      <button className="delete-button" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
