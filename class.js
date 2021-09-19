class HTML {
    /**
    * Shortcut for creating html elements. All attributes can be added in the attributes parameter.
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

    /**
    * Shortcut for creating multiple html elements at once. All attributes can be added in the attributes parameter.
    *
    * @param {String}   type Type of element in string format.
    *
    * @param {Number}   amount Number of elements to create.
    * 
    * @param {Object}   similarAttributes Object containing any attributes all elements will share. Ex: { class: "my-class", id="123"} Will take textContent and innerHTML
    * 
    * @param {Object}   [differentAttributes={}] An object that contains attributes particular to some elements. The object keys coincide with the array number and the object for the key is the property. Ex: { 0: { class: "first-class" }, 2: { class: "3rd-class" } } - 2nd element will only have attributes from similarAttributes
    * 
    * @return {Array<HTMLElement>} Returns created an array of HTMLElement
    */
    static createSimilarElements(type, amount, similarAttributes, differentAttributes = {}) {
        const elements = [];
        for(let i = 0; i < amount; i++)
        {
            elements.push(this.createElement(type, Object.assign(
                {},
                similarAttributes, 
                differentAttributes[i]
                )))
        }
        return elements;
    }
}

export default HTML