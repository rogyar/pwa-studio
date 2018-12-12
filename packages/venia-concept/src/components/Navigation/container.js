import { connect } from 'react-redux';

import { closeDrawer } from 'src/actions/app';
import { getAllCategories } from 'src/actions/catalog';
import { createAccount, resetPassword } from 'src/actions/user';
import Navigation from './navigation';

const mapStateToProps = ({ catalog, user }) => {
    const { categories, rootCategoryId } = catalog;
    const { firstname, email, isSignedIn, lastname } = user;

    return {
        categories,
        firstname,
        email,
        isSignedIn,
        lastname,
        rootCategoryId
    };
};

const mapDispatchToProps = {
    closeDrawer,
    createAccount,
    getAllCategories,
    resetPassword
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
