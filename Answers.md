# Answers

1.  What is React JS and what problems does it try and solve?

- React is a javascript library created by Facebook focussed on providing a reactive user interfaces. React class components give developers
    access to state which can temporarily hold/save data under its properties. In combination with state and React's setState method provides 
    React with it's 'reactiveness' by rerendering whats displayed any time state is changed.

1.  What does it mean to _think_ in react?

- To think in react is to break down a project into components and their respective hierarchies. This allows data to flow from the head class component
    with state down through imported components through props.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Class/Stateful has a class extending React.component, a state object to hold data, and a render method. A Functional/Presentational is a component
    that typically takes data as props and displays it via returning it passed in as a jsx element.

1.  Describe state.

- An object on a React class component that can hold data in its properties as long as it is active in the app

1.  Describe props.

- Props are passed similar to attributes in HTML on their imported component element. Inside the component itself props are passed in as a parameter that can be accessed
    to retrieve what was passed in from its declaration.