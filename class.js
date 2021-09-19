class HTML {
    static createElement(type, attributes) { // add : HTMLElement if decide to use node
        const newElement = document.createElement(type)
        for(const key in attributes)
        {
            newElement.setAttribute(key, attributes[key]);
        }
        return newElement
    }
}

export default HTML