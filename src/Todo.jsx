import React from 'react';
import { List, Typography } from 'antd';

// Sous la forme d'une fonction si celui-ci n'a pas de donnée et de changement de donnée, donc pas de state. 
// Si on lui a passer des props alors passé par une fonciton

const Todo = ({ details, onDelete }) => (
    <List.Item>
        {details.description}<button style={{ marginLeft: '25px'}} onClick={() => onDelete(details.id)}>X</button>
    </List.Item>
);


export default Todo