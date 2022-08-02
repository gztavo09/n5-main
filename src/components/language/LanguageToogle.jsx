import React from 'react';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

import LngContainer from '../../styles/language/Lng__Container';
import LngButton from '../../styles/language/Lng__button';

const Idiom = ({ t }) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <LngContainer>
            <p>{t('Idioma')}:</p>
            <LngButton onClick={() => changeLanguage('es')}>es</LngButton>
            <LngButton onClick={() => changeLanguage('en')}>en</LngButton>
        </LngContainer>
    );
}

export default withNamespaces()(Idiom);
