import React from 'react';
import MicroFrontend from '../MicroFrontend'

const {
    REACT_APP_RAM_HOST: RamHost,
} = process.env;

const ListRickAndMorty = ({ history }) => {
    return <MicroFrontend history={history} host={RamHost} name="Ram" />;
}

export default ListRickAndMorty;
