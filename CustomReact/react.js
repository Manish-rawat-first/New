function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.prop.href);
    // domElement.setAttribute('target',reactElement.prop.target);
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const pro in reactElement.prop){
        if(pro === 'children') continue;
        domElement.setAttribute(pro,reactElement.prop[pro])
    }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    prop:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to Visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
