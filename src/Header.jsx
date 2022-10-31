import './Header.scss'
const Header = (props) => {
return(
<div className='header'>
    <div className='header__in-cart'>In cart: {props.cart_items_nr}</div>
</div>
)}

export default Header