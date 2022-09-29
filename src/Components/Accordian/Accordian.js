import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1.How does react work?</Accordion.Header>
        <Accordion.Body>
        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Whats the difference between props and state?</Accordion.Header>
        <Accordion.Body>
        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. What  does useEffect do except load data?</Accordion.Header>
        <Accordion.Body>
        In the code above, we use the useEffect hook to fetch data from an API and then set the result to the data state variable with the setData function.

Then we call the loadData function in the useEffect callback. The 2nd argument of the useEffect hook is an empty array.

React then will rerender the data as the data from the API is fetched. The useEffect callback will only run when the component first loads if the 2nd argument of useEffect is an empty array.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;