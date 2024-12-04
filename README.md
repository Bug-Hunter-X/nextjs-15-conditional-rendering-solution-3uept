# Next.js 15 Conditional Rendering Bug

This repository demonstrates a bug encountered in Next.js 15 related to conditional rendering of components.  The issue occurs when attempting to conditionally render a component based on a runtime variable. The component sometimes renders correctly and other times fails to render, leading to an inconsistent user experience.

## Bug Description

The bug manifests as intermittent failure to render a component when a condition is used within the JSX.  The condition itself evaluates correctly, but the component remains absent from the DOM. This appears to be related to how Next.js handles React's component lifecycle during rendering.

## Solution

The solution involves refactoring how the component is conditionally rendered. Instead of directly embedding the conditional rendering within the JSX,  we use a functional approach, storing the component to render in a variable and then rendering this variable.