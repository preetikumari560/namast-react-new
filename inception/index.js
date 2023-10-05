// *using vanilla javascript :

//    const heading= document.createElement("h1")
//    heading.innerHTML= "This h1 heading Created using Vanilla javaScript"
//    heading.style.color="blue"
//     const root=document.getElementById("root")
//     root.appendChild(heading)


// *using React:

// heading=> It's a React element , nd React element is itself a javascript object (so overall heading is an js object also called as React element, )
// *imp heading is still not html tag yet, until it render over browser using over ReactDOM
//"h1"=>first argument of create element , which take type of tag we want to create 
//{id:"heading"} => this is second argument, takes numbers of attributes ,i.e, id, class, etc., it can empty as well
//  "Created using React .CDN link is used"=>third argument takes which we want to print in type h1 tag.
//Together first and second argument  consider as a props



     const heading= React.createElement("h1",{id:"heading"},"Created using React .CDN link is used")
     console.log(heading) // it will return a object bcoz it's not h1 tag yet
        const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(heading) // now heading become h1 tag just after rendering on browser/ a


//  *Nested React Elements  :

// const head2 =React.createElement("h2",{},"h2 tag")
// const head3=React.createElement("h3",{},"h3 tag")

// const divChild= React.createElement("div",{id:"child"},[heading,head2])
// const divParent = React.createElement("div",{id:"parent"},[divChild,head3])
// console.log(divChild)
// root.render([divParent,divChild])


// *or this way,

const div =  React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"h tag of child1"),
React.createElement("h2",{},"h2 tag of child1")
]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"h1 tag of child2"),
React.createElement("h2",{},"h2 tag of child2")])])


root.render(div)