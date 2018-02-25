const bar = (function () {
    const timeoutScheduled = Date.now();

    setTimeout(() => {
        const delay = Date.now() - timeoutScheduled;

        console.log(`${delay}ms haved passed since I was scheduled`);
    }, 100);
})();

export default bar;