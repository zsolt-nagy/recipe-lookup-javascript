# Food search API

Hosting link: [https://zsolt-nagy.github.io/recipe-lookup-javascript/](https://zsolt-nagy.github.io/recipe-lookup-javascript/).

## Description

Free text food search driven by the API [https://www.themealdb.com](https://www.themealdb.com/).

## User stories

```
AS A Cook
I WANT TO search for recipes of various meals
SO THAT I can expand my menu

AS A Food Lover
I WANT TO contrast different recipes
SO THAT I can find the best meal

AS A person responsible for a household
I WANT TO look up ingredients of recipes
SO THAT I can estimate costs of my next purchases
```

## Reference - used resources

- Button 12 from [https://getcssscan.com/css-buttons-examples](https://getcssscan.com/css-buttons-examples).
- We consider the API response of [https://www.themealdb.com/api/json/v1/1/search.php?s=Pie](https://www.themealdb.com/api/json/v1/1/search.php?s=Pie) to be safe in a sense that we rely on displaying its content using innerHTML. Reasonable XSS (cross-site-scripting) protection was still added to the code.