export const debounce = (cb, timeout) => {
    let timer;
    return () => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb();
        }, timeout);
    };
};

export const throttle = (cb, timeout) => {
    let timer;
    return () => {
        if(timer) return;
        timer = setTimeout(() => {
            cb();
            timer = undefined;
        }, timeout);
    };
};
