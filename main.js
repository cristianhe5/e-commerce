import nav from "./src/components/nav/nav.js";
import toggleVisibilityOnClick from "./src/components/cart/toggleVisibilityOnClick.js";
import header from "./src/components/header/header.js";
import ulApi from "./src/components/ulApi/ulApi.js";
import cart from "./src/components/cart/cart.js";

nav()
header()
ulApi()
cart()


const cartNav = document.getElementById('cart')

const menuCart = document.getElementById('menu_cart')

const x = document.getElementById('x')




toggleVisibilityOnClick(cartNav, menuCart)
toggleVisibilityOnClick(x, menuCart)
