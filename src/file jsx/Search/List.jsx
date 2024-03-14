function Search({ Name, Price, Image }) {
  return (
    <div className="product">
      <img src={Image} alt="Son" className="hinh" />
      <p className="namepricesearch">
        <span className="name"> {Name}</span>
        <span className="price">Price: {Price}</span>
      </p>
      <button>View Detail</button>
    </div>
  );
}

export default Search;
