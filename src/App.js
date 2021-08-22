import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks = ["Razzak", "Alomgir", "Bappa", "Shuvo", "Sakib"]
    const friends = [
        {
            name: "Nahid",
            age: "25"
        },
        {
            name: "Sohel",
            age: "20"
        },
        {
            name:"Arin",
            age: "20"
        },
        {
            name:"Sarah",
            age: "20"},
        {
            name:"Ahosan",
            age: "20"
        }]
    const naiyeka = ["Moushumi", "Bobita", "Shabana"]
    const product = [
        {name:"Photoshop", price:"$699.99"},
        {name:"Illustrator", price:"$299.99"},
        {name:"PDF Reader", price:"9.99"},
        {name:"Premier Ei", price:"249.99"}
    ]

    const nayoksName = nayoks.map(nayok => nayok);
    console.log(nayoksName);
  return (
    <div className="App">
      <header className="App-header">
          {friends.map( friend => <Friend name={friend.name} age={friend.age}></Friend>)}
          <ul>
              {nayoks.map( name => <li>{name}</li>)}
              <li>{nayoks[0]}</li>
              <li>{nayoks[1]}</li>
              <li>{nayoks[2]}</li>
          </ul>
          <h3>I am a React Developer</h3>
          {
              product.map(product => <Product product={product}></Product>)
          }
          {/*<Product product={product[0]}></Product>*/}
          {/*<Product product={product[1]}></Product>*/}
          {/*<Product product={product[2]}></Product>*/}
          {/*<Person hero={nayoks[0]} heroine={naiyeka[0]}></Person>*/}
          {/*<Person hero={nayoks[1]} heroine={naiyeka[1]}></Person>*/}
          {/*<Person hero={nayoks[2]} heroine={naiyeka[2]}></Person>*/}
      </header>
    </div>
  );
}

function Friend(props){
    const friendStyle = {
        backgroundColor: "white",
        color: "black",
        border: "1px solid lightgray",
        margin: "10px",
        padding: "10px",
        width: "150px",
        height: "150px"
    }
    const {name,age} = props;
    return(
        <div style={friendStyle}>
            <h5>Name : {name}</h5>
            <h5>Age : {age}</h5>
        </div>
    )

}

function Product(props){
    const productStyle={
        border:"1px solid gray",
        backgroundColor:"lightgray",
        borderRadius: "5px",
        width: "200px",
        height: "200px",
        float: "left",
        margin:"20px",
        padding: "20px"
    }
    const {name, price} = props.product;
    return(
        <div style={productStyle}>
            <h3>{name}</h3>
            <h2>{price}</h2>
            <button>Buy Now</button>
        </div>
        )
}
function Person(props){
    return <div style={
        {
        border:"1px solid green",
        backgroundColor:"black",
        margin:"10px",
        padding:"20px",
        width: "400px"
        }
    }>
        <h3>{props.hero}</h3>
        <h3>Hero of the{props.heroine}</h3>
    </div>
}
export default App;
