import React from "react";
import "../styles.css";

const quoteblock = (props) => {
  const { value } = props;

  return (
    <div className="quote__block">
      <h1 className="quote__text">{value.quote}</h1>
      <h3 className="quote__author">- {value.author}</h3>
      <div className="quote__controls">
        <a
          className="quote__controls--button"
          href={`https://twitter.com/intent/tweet?text=${props.value.quote} - ${props.value.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
        <button
          className="quote__controls--button"
          onClick={props.onQuoteChange}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default quoteblock;
