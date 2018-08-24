# Tawk.to Aurelia
A simple Aurelia wrapper for [Tawk.to](https://tawk.to)

## Usage
```html
<tawk-to account-id="YOURACCOUNTIDHERE (get it from Dashboard -> Project Settings)"
   user-details.bind="userDetails"></tawk-to>
```

The attribute user details can be provided to identify the user. It is supposed to be from type `UserDetails` and is the name and email from the user.

```typescript
export class App {
  userDetails = new UserDetails("Demo Visitor", "visitor@test.com");
}
```

## Run sample
* register with Tawk.to
* Clone this repository
* Npm install
* add your `account-id` in `app.html`
* `npm start`
* open browser at [http://localhost:8080](http://localhost:8080)
