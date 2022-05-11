# Collections

- Customer
- Vendor
- Orders
- Address
- cart
- Inventory - array of products
- Product {name, vendor, price, quantity, status [out of stock, available, images], description, reviews, rating }
- reviews { customer, rating, description}

# Endpoints

## /customers

    - /:id                                      GET profile of customer
    - /:id/update                               POST update profile of customer
    - /:id/cart                                 GET get cart of customer
    - /:id/cart/add/:product_id                 POST add item to cart
    - /:id/cart/delete/:product_id              POST delete item from cart
    - /:id/orders/                              GET list of all the orders
    - /:id/orders/:order_id                     GET particular order
    - /:id/orders/                              POST create new order

## /vendors

    - /:id                                      GET profile of vendor
    - /:id/update                               POST update profile of vendor
    - /:id/products                             GET all products sold by vendor
    - /:id/products                             POST add a new product
    - /:id/products/:product_id                 GET details of one product
    - /:id/products/:product_id                 POST update product
    - /:id/products/:product_id                 DELETE delete product
    - /:id/orders/                              GET list of all the orders

## /products

    - /                                         list of products
    - /:id                                      details of product
