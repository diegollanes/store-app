import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './Header.scss'; 
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './Header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
               <OptionLink to='/shop'>SHOP</OptionLink>
               <OptionLink to='/contact'>CONTACT</OptionLink>
               {
                   currentUser ?
                   <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                   :
                   <OptionLink to='/signin'>SIGN IN</OptionLink>
               }
               <CartIcon />
            </OptionsContainer>
            {
              hidden ? null
              : <CartDropdown/>
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

/* Otra manera de ponerlo sin el structured
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})
*/