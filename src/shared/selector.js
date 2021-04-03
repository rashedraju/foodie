export default (attribute, identifier) => {
    switch (attribute) {
        case 'id':
            return document.getElementById(identifier);
        case 'class':
            return document.getElementsByClassName(identifier);
        default:
            return null;
    }
};
