class InputMask
{
    constructor(element, maskString, regexInput) {
        this._rawValue = element.value.replace();
        this._length = (maskString.match(/#/g) || []).length;
        
        element.dataset.rawValue = "";
        element.value = maskString.replace(/#/gi, '_');
        
        element.addEventListener("input", event => {
            if (event.inputType === "insertText" && event.data.match(regexInput) && this._rawValue.length < this._length) {
                this._rawValue += event.data;
            } else if (event.inputType === "deleteContentBackward") {
                this._rawValue = this._rawValue.slice(0, this._rawValue.length - 1)
            }

            element.dataset.rawValue = this._rawValue;
            element.value = "";
            let index = 0;
            maskString.split("").forEach(character => {
                if (character !== "#") {
                    element.value += character;
                    return;
                }

                element.value += this._rawValue[index] ? this._rawValue[index] : "_";
                index++;
            });
        });
    }
}


const mask1 = new InputMask(document.querySelector('#input'), "$ ###.###.### $", /[0-9]/gi);

document.querySelector('#input').value = "489234230";