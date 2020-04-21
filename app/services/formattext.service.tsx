export function removeTag(str: string) {
    const string = str.toString();

    if (string.length >= 500) {
        const strLength = string.substr(0, 500);
        return strLength.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ");
    } else {
        return string.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ");
    }
}
