```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Adding an empty dependency array ensures the effect runs only once
    // after the initial render.
    console.log('Effect ran once'); //Logs only once in console 
    //setCount(count + 1); // Removing this line fixes the infinite loop 
  }, []);

  return <div>Count: {count}</div>;
}
```