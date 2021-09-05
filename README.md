# ![alt text](https://raw.githubusercontent.com/logolica99/polico/main/images/icon.png)

API for **polico** , an easy-to-use marketplace for students' second hand products.

## registration

**URL:**

```
{{base_url}}/user/registration
```
**Method:POST**  \
**Content-Type: application/json**  \
**Body format:**

```
{
    "firstName":,
    "lastName":,
    "username":,
    "password":,
    "email":,
    "phone":,
    "university":
}
```

## login

**URL:**

```
{{base_url}}/user/login
```
**Method:POST**  \
**Content-Type: application/json**  \
**Body format:**

```
{
    "username":,
    "password":,
}
```


## get user data


**URL:**

```
{{base_url}}/user/{{user_id}}
```
**Method:GET**

## update user data
**URL:**


```
{{base_url}}/update
```
**Method:POST**  \
**Content-Type: application/json**  \
**Body format:**
```
{
    "firstName":,
    "lastName":,
    "username":,
    "password":,
    "email":,
    "phone":,
    "university":
}
```

## delete user data
**URL:**


```
{{base_url}}/delete
```
**Method:DELETE**  


## new Product

**URL:**

```
{{base_url}}/products/create
```
**Method:POST**  \
**Content-Type: application/json**  \
**Body format:**

```
{
  "title": ,
  "imgSrc": ,
  "price":,
  "description": ,
  "category:{"electronics","vehicles","pets","home_appliance","clothing","sports","books","stationary",},
  "inStock":
  }
```

## get all products (new to old)

will get 10 results per page
**URL:**

```
  {{base_url}}/products/all?pageNum={int}
```
**Method:GET**

## get single product by id

**URL:**

```
  {{base_url}}/products/single/{{product_Id}}
```
**Method:GET**


## get all the products by the owner

**URL:**

```
  {{base_url}}/products/user/{{user_Id}}
```
**Method:GET**  

## product category if in stock
{"electronics","vehicles","pets","home_appliance","clothing","sports","books","stationary",}
will return 10 results per page
**URL:**

```
  {{base_url}}/products/:category?pageNum={int}
```

**Method:GET**  

## search for a product 
will return 10 results per page
**URL:**
```
  {{base_url}}/products/search/:query_string?pageNum={int}
```
**Method:GET** 


## update a product

**URL:**

```
  {{base_url}}/products/update/{{product_Id}}
```

**Method:POST**  \
**Content-Type: application/json**  \
**Body format:**

```
{
  "title": ,
  "imgSrc": ,
  "price":,
  "description": ,
  "inStock":
  }
```



## delete a product

**URL:**

```
  {{base_url}}/products/update/{{product_Id}}
```

**Method:DELETE**  





Copyright (c) the respective contributors, as shown by the AUTHORS file.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
