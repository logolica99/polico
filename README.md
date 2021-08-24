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

**URL:**

```
  {{base_url}}/products/all
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
**URL:**

```
  {{base_url}}/products/:category
```

**Method:GET**  

## search for a product 
**URL:**
```
  {{base_url}}/products/search/:query_string
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