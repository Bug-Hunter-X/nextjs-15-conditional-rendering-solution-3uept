```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This is where the error occurs: */}
      <p>The problem is I want to show a component depending on some condition, but my way is not working</p> 
      {condition && <MyComponent/>}
    </div>
  );
}
```