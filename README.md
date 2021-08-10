# ![alt text](https://raw.githubusercontent.com/logolica99/polico/main/images/icon.png)

API for **polico** , an easy-to-use marketplace for students' second hand products.

## registration

**URL:** `{{base_url}}/user/registration`

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

**URL:** `{{base_url}}/user/login`

```
{
    "username":,
    "password":,
}
```

## new Product

**URL:** `{{base_url}}/products/create`

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

## gel single product by id 

**URL:**

```
  {{base_url}}/products/{{product_Id}}
```
