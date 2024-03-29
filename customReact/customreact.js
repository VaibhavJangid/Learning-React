
// we are creating this function to make customRender works
function customRender(reactElement, container){
    
    /* 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
            domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_black'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer) 
// this element render our custom element (first elemet: which element to render, second element: where to render)