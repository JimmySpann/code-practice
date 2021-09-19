class HTML {
    /**
    * Shortcut for creating html elements. All attributes can be add in the attributes parameter.
    *
    * @param {String}   type Type of element in string format.
    *
    * @param {Object}   attributes Object containing any attributes. Ex: { class: "my-class", id="123"}
    * 
    * @return {HTMLElement} Returns created HTMLElement
    */
    static createElement(type, attributes) {
        const newElement = document.createElement(type)
        for(const key in attributes)
        {
            newElement.setAttribute(key, attributes[key]);
        }
        return newElement
    }
}

export default HTML