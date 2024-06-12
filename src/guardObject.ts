function guardObject(value: unknown) {
    if (value == null) {
        throw new Error('There is no value')
    }
    if (typeof value !== 'object') {
        throw new Error('Value is not an object.')
    }
    return value;
}
export default guardObject;