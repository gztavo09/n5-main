import React from 'react';
import MicroFrontend from '../MicroFrontend'

const {
    REACT_APP_HP_HOST: HpHost,
} = process.env;

const ListHarryPotter = ({ history }) => {
    return <MicroFrontend history={history} host={HpHost} name="Hp" />;
}

export default ListHarryPotter;
