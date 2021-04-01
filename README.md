# AjaxSimplier

### Installation

Install with npm:

```bash
$ npm i ajaxsimpler
```

Or, use from unpkg.com:

```html
<script src="https://unpkg.com/ajaxsimpler"></script>
```

You also need to add Jquery (for AJAX) before ajaxsimpler. So, you can use this imports for HTML file:

```html
<script src="https://unpkg.com/jquery"></script>
<script src="https://unpkg.com/ajaxsimpler"></script>
```

### Usage

#### Creating object and setup

To use Ajax Simpler, you must create object first:

```js
var ajx = window.AjaxSimpler.create();
```

If you are using a backend application, ex. Django, you will need to add CSRF token. For adding CSRF token, you can add:

```js
ajx.csrftoken = "csrftoken";
```

For example, if your app has CSRF token in cookie with different name you should use:

```js
ajx.csrftoken = "COOKIE_NAME";
```

Also for shorthand, you can add CSRF token when creating object:

```js
var ajx = window.AjaxSimpler.create({ csrftoken: "csrftoken" });
```

For adding default headers, you can use:

```js
ajx.addDefaultHeader("Content-Type", "application/json");
```

For deleting default header:

```js
ajx.deleteDefaultHeader("Content-Type");
```

#### Requests

For `GET` request you can use:

```js
ajx.GET("URL_HERE").then((result) => console.log(result));
```

`AjaxSimpler.GET` returns Promise object. Accepts, 3 parameters:

-   `url` (required)
    URL to request.
-   `data`
    Data to send as url parameter.
-   `header`
    Headers for request.

For `POST` request you can use:

```js
ajx.POST("URL_HERE").then((result) => console.log(result));
```
`AjaxSimpler.POST` returns Promise object. Accepts, 3 parameters:

-   `url` (required)
    URL to request.
-   `data`
    Data to send as request body.
-   `header`
    Headers for request.

##### Thanks for using AjaxSimpler