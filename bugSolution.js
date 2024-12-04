```javascript
// pages/index.js

export default function Home() {
  const condition = true; // Replace with your actual condition
  const MyComponentToRender = condition ? <MyComponent /> : null;

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {MyComponentToRender}
    </div>
  );
}

function MyComponent() {
  return <p>This component renders conditionally!</p>;
}
```