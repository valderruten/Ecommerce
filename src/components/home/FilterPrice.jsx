import React from "react";
import "./styles/filterPrice.css"
const FilterPrice = ({setInputPrice}) => {

    const handleSubmit=e=>{
e.preventDefault() 
const inputFrom= +e.target.from.value
const inputTo=+e.target.to.value
if(inputFrom   && inputTo ) {
  setInputPrice({
    from:inputFrom,
    to:inputTo
  })
}else if(!inputFrom  && inputTo){
  setInputPrice({
    from:0,
    to:inputTo
  })

}else if(inputFrom && !inputTo){
  setInputPrice({
    from:inputFrom,
    to:Infinity
  })
}

}
  return (
    <section className="price">
      <h2>Price </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="from">From</label>
          <input className="input__price" type="text" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input className="input__price" type="text" id="to" />
        </div>
        <button className="btn__search">Search</button>
      </form>
    </section>
  );
};

export default FilterPrice;
