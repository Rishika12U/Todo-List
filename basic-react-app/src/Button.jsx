function printHello(event){
    console.log("Hello!");
    console.log(event);
}
function printBye(){
  console.log("bye!");  
}
function handleDbClick(){
    console.log(" Double Clicked!");
}
export default function Button(){
    return (<div>
        <button onClick={printHello}>Click me!</button>
        <p onMouseOver={printBye}>Lorem ipsum,
             dolor sit amet consectetur adipisicing elit.
              Tenetur rerum fugit enim possimus voluptates
               magni quos doloremque, 
            temporibus ad! Nobis
             aperiam alias perferendis quae, 
            distinctio maiores repellendus qui
             repellat corporis.</p>
             <button onDoubleClick={handleDbClick}>double click me</button>
        </div>
);
}