let ClearWhitespace = function () {
    this.evaluate = function (context) {
        let s = this.textToClear || '';
        return s.replace(/\s+/g, ' ')
    }
};

ClearWhitespace.inputs = [
    InputField("textToClear", "text to clear:", "String", {persisted: true})
]
ClearWhitespace.identifier = "com.sothawo.PawExtensions.ClearWhitespace";
ClearWhitespace.title = "clear whitespace";
ClearWhitespace.help = "https://luckymarmot.com/paw/doc/";
registerDynamicValueClass(ClearWhitespace)
