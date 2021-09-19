class HTML {
    /**
    * Shortcut for creating html elements. All attributes can be add in the attributes parameter.
    *
    * @param {String}   type Type of element in string format.
    *
    * @param {Object}   attributes Object containing any attributes. Ex: { class: "my-class", id="123"} Will take textContent and innerHTML
    * 
    * @return {HTMLElement} Returns created HTMLElement
    */
    static createElement(type, attributes) {
        const newElement = document.createElement(type)
        for(const key in attributes)
        {
            if(key === "textContent") {
                newElement.textContent = attributes[key]
            }
            else if(key === "innerHTML") {
                newElement.innerHTML = attributes[key]
            }
            else {
                newElement.setAttribute(key, attributes[key]);
            }
        }
        return newElement
    }
}

export default HTML