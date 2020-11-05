- to show start logo (fullscreen) - add 'wrapper_logo' to 'wrapper' block
- side menu link hrefs, titles: js folder -> sideMenuItems.js file -> linkTo, lable, subtitle

--- HEADER ---
- remove 'lable' property to show logo
- add :items-amount="1" to show green circle on cart button

--- DROPDOWN ---
- add :disabled="true" to disable dropdown from opening

--- CART ITEM ---
- provide each item with: 
  ' name=... ', 
  ' code=... ', 
  ' image=*picture name here, without path* ', 
  ' price=... ' 
(default values will be shown othervise);

- add ' spain=true ' to show bottom sign
- add ' old-price = "*price value here*" ' to add discount to an item

--- CART ---
- promo code cross button classes: 
  - 'cart__promo-discard_danger';

- promo code check mark button classes: 
  - 'cart__promo-discard_hide';
  - 'cart__promo-discard_success';

- add 'cart__price_discount' class to show new price

--- SEARCH ---
- add 'search__item-price_discount' to show new price on item

--- SEARCH ITEM ---
- provide each item with: 
  ' name=... ', 
  ' code=... ', 
  ' image=*picture name here, without path* ', 
  ' price=... ' 
(default values will be shown othervise);

- add ' new-price = "*price value here*" ' to add discount to an item

--- ITEM ---
- green title icon class: 'item__title-icon_active'
- image 360 icon: 'item__image-icon_360'
- show new price: 'item__prices_discount'

--- CONSTRUCT ---
- active item in small images carousel: 'construct__image_active'

--- AUTHORIZATION ---
- remove 'authorization__inputs_error' class to hide error

--- MODAL ---
- restore password input error: 'modal__input_error'
