# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by an incorrectly defined dependency array in the `useEffect` hook.

## Bug Description
The `useEffect` hook in the provided `MyComponent` function attempts to increment the `count` state variable in every render, without specifying any dependencies in the dependency array. This causes an infinite loop, as each state update triggers a re-render, which triggers the `useEffect` hook again, and so on.

## Bug Solution
The solution involves correctly defining the dependency array for the `useEffect` hook, to avoid unnecessary re-renders. By leaving the dependency array empty `[]`, the effect will run only once after the initial render, resolving the infinite loop.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the error in the browser console and the infinite loop behavior.