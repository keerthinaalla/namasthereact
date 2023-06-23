/*const heading = React.createElement("h2", { id: "heading2" }, "Hello world from React")
/*{ id: "heading2" } this is attribute section and "Hello world from React" this is childern 
console.log(heading);//this is the object
//we want to put this heading within the root element,for this first 
// we need to tell the browse what is the root 

const root = ReactDOM.createRoot(document.getElementById('root'));

/*the render method takes the object(heading), then it convert into the 
html tag (i.e browser understandable way)and put it into the DOM */

// root.render(heading);

/*
example1:
--------
<div id="parent">
    <div id="child">
        <h1>I am heading1</h1>
    </div>
</div>
example2:
--------
<div id="parent">
    <div id="child">
        <h1>I am heading1</h1>
        <h2>I am heading2</h2>
    </div>
</div>
example3:
---------
<div id="parent">
    <div id="child">
        <h1>I am heading1</h1>
        <h2>I am heading2</h2>
    </div>
    <div id="child2">
        <h1>I am heading1</h1>
        <h2>I am heading2</h2>
    </div>
</div>


*/
const parent = React.createElement("div", { id: "parent" },
    [React.createElement('div', { id: "child" },
        [React.createElement("h1", {}, "I am heading1 from child1"),
        React.createElement("h2", {}, "I am heading2 from child1")]
    ), React.createElement('div', { id: "child2" },
        [React.createElement("h1", {}, "I am heading1 from child2"),
        React.createElement("h2", {}, "I am heading2 from child2")])])

/**the above code is not readable and if the html structure more complex
 * It is difficult to write the code like above ....
 * Then that time JSX comes enter 
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

