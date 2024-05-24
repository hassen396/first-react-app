import { useState } from "react";
 
const Main = () => {
  return (
    <div className='divider'>
    <div className='main'>
      <h1>this is h1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        doloribus sed nobis aliquam officiis maiores. Quidem quisquam molestias,
        beatae iure cum rem, assumenda quibusdam qui, nostrum ipsam enim ipsum
        atque?
      </p>
     
      <MyButton />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      
    </div>
    <div className='main'>
      <h1>this is h1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        doloribus sed nobis aliquam officiis maiores. Quidem quisquam molestias,
        beatae iure cum rem, assumenda quibusdam qui, nostrum ipsam enim ipsum
        atque?
      </p>
      <MyButton />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        incidunt ea. Fugiat, ex nulla. At consequatur voluptatem ducimus odio
        similique, enim sequi quidem cumque est voluptas quibusdam, ipsa
        exercitationem assumenda?
      </p>
      
    </div>
    </div>
  );
};
export default Main;

 function MyButton() {
  const [counter, setCounter] = useState(0);
  return (
    <button className="counter-btn" onClick={clicked}>
      clicked {counter}  times
    </button>
  );
  function clicked() {
    setCounter(counter + 1);
    }
}
