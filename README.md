# ![alt text](https://raw.githubusercontent.com/logolica99/polico/main/images/icon.png)

API for **polico** , an easy-to-use marketplace for students' second hand products.

## registration

**URL:**

```
{{base_url}}/user/registration
```

**Content-Type: apllication/json**  \
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

**Content-Type: apllication/json**  \
**Body format:**

```
{
    "username":,
    "password":,
}
```

## new Product

**URL:**

```
{{base_url}}/products/create
```

**Content-Type: apllication/json**  \
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

## get all products (new to old)

**URL:**

```
  {{base_url}}/products/all
```

## get single product by id

**URL:**

```
  {{base_url}}/products/{{product_Id}}
```

## get all the products by the owner

**URL:**

```
  {{base_url}}/products/user/{{user_Id}}
```

## update a product

**URL:**

```
  {{base_url}}/products/update/{{product_Id}}
```

**Content-Type: apllication/json**  \
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
**The method should be POST**


## delete a product

**URL:**

```
  {{base_url}}/products/update/{{product_Id}}
```

**The method should be DELETE**
