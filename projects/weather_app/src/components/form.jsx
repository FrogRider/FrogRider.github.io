import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.getInputValue}>
          <input type="text" name="userName" placeholder="Type you city"/>
          <button type="submit">Get weather</button>
        </form>
      );
}

export default Form;
