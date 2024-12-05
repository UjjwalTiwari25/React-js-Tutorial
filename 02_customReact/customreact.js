function customRender(reactElement, container) {
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {      //props ek object hota hai
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

//ab hm kya chahte hai ki ek element ho ya method ho..jo isko render kr de...but kaise?...reactElement ko add kr de #root k andar.

customRender(reactElement, mainContainer)  //but ye custom render kaam kaise karega..we can design a method