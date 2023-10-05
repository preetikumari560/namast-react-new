import React from "react"
import ReactDOM from "react-dom/client"

const divGrand= React.createElement("div",{id:"grandChild"},
[React.createElement("h3",{id:"grandSon"},"grand son"),
React.createElement("h4",{id:"grandDaughter"},"grand daughter")])


const div= React.createElement("div",{id:"parent"},
[React.createElement("h1",{id:"child1"},"first child"),
React.createElement("h2",{id:"child2"},"second child"),divGrand]
)

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(div)