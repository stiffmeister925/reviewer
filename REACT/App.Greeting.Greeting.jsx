// `props` is an object
// <Greeting>Hey</Greeting>
// { children: 'Hey' }
function Greeting({ children, name }) {
  return (
    <div>
      {children}
      <p>{name}</p>
    </div>
  );
}

export default Greeting;