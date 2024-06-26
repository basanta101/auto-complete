function debounce(callback, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...arguments);
        }, delay)
    }
}

export default debounce
