import {compose} from 'redux';
import {connect} from 'react-redux';

import LanguageActions from '@library/redux/store/Language/Reducer';
import {Selectors as AuthSelectors} from '@library/redux/store/Auth/Reducer';
import {injectIntl} from 'react-intl';
import HomeLayout from './HomeLayout';

const mapDispatchToProps = {
    changeLocale: LanguageActions.changeLocale,
};

const mapStateToProps = state => ({
    locale: state.language.locale,
    isAuth: AuthSelectors.isAuth(state),
});

export default compose(
    injectIntl,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(HomeLayout);

