const { useEffect, useRef, useState } = React;

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function Circle({ children }) {
  return <div className="circle">{children}</div>;
}

function App() {
  const [reversed, setReversed] = useState(false);
  const el = useRef();
  const q = gsap.utils.selector(el);
  
  // store the timeline in a ref.
  const tl = useRef();
      
  useEffect(() => {            
    // add a box and circle animation to our timeline and play on first render
    tl.current = gsap.timeline()
      .to(q(".box"), {
        rotate: 360
      })
      .to(q(".circle"), {
        x: 100
      });

  }, []);
  
  useEffect(() => {
    // toggle the direction of our timeline
    tl.current.reversed(reversed);    
  }, [reversed]);
   
  return (
    <div className="app" ref={el}>
      <div>
        <button onClick={() => setReversed(!reversed)}>Toggle</button>
      </div>
      <Box>box</Box>
      <Circle>circle</Circle>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));