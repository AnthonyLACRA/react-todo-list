import React from 'react';

// Sous la forme d'une fonction si celui-ci n'a pas de donnée et de changement de donnée, donc pas de state. 
// Si on lui a passer des props alors passé par une fonciton

const Todo = ({ details, onDelete }) => (
      <li>
        {details.description}<button onClick={() => onDelete(details.id)}>X</button>
    </li>
);


export default Todo