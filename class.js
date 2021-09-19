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

    static createSimilarElements(type, amount, similarAttributes, differentAttributes = {}) {
        const elements = [];
        for(let i = 0; i < amount; i++)
        {
            const combinedObjects = {}
            elements.push(this.createElement(type, Object.assign(
                combinedObjects,
                similarAttributes, 
                differentAttributes[i]
                )))
        }
        return elements;
    }
}

export default HTML