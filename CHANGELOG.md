# Burdigalax-project

## Version 2.0.0

**BREAKING CHANGE:**

- Rename and replace all CustomEvents by Functions.
    - list of emitted :
        - `@Burdigalax-shop:onClose` => `BURDIGALAX_onShop_onClose();`
        - `@Burdigalax-shop:cashPayment` => `BURDIGALAX_onShop_onCashPayment();`
        - `@Burdigalax-shop:contactLessPayment` => `BURDIGALAX_onShop_onContactLessPayment();`
        - `@Burdigalax-shop:cardPayment` => `BURDIGALAX_onShop_onCardPayment();`
    - list of listened :
        - `@Burdigalax-shop:config` => `BURDIGALAX_onShop.setConfig(JSON)`
        - `@Burdigalax-shop:paymentError` => `BURDIGALAX_onShop.setPaymentError(title, message, iconUrl)`
        - `@Burdigalax-shop:paymentSuccess` => `BURDIGALAX_onShop.setPaymentSuccess(title, message, iconUrl)`
        - `@Burdigalax-shop:resetBasket` => `BURDIGALAX_onShop.resetBasket()`
        - `@Burdigalax-player:updatePlayer` => `BURDIGALAX_onShop.updatePlayer(JSON)`
        - `@Burdigalax-shop:updateArticles` => `BURDIGALAX_onShop.updateArticles(JSON)`
        
- Removal the file **index.js** used for converting events to functions.

- New bundle compilation. Split `frozen-vendors.js` to `commons.burdigalax.js` and `vendors.burdigalax.js`. _I don't know how to bring them together =(_ 

- The source code of the GUI is now available in open source.