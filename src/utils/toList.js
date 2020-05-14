import React from 'react';
import { Link } from 'gatsby';

const toList = (data = '', isBlogPosts = false) => {
  const lines = typeof data === 'string' ? data.split('\n') : data;

  const chunkArray = (myArray, chunkSize) => {
    const arrayLength = myArray.length;
    const tempArray = [];

    for (let i = 0; i < arrayLength; i += chunkSize) {
      const myChunk = myArray.slice(i, i + chunkSize);
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  const chunkedArray = isBlogPosts ? chunkArray(lines, 4) : lines;
  return isBlogPosts ? (
    chunkedArray.map((item) => (
      <ul key={item}>
        {item.map(({ label, to }) => (
          <li key={label}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    ))
  ) : (
    <ul>
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
};

export default toList;
