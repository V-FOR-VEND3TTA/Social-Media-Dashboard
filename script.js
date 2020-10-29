const counters = document.querySelectorAll('.counter');
const speed = 256; // The lower this speed is, the faster the counter is

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed ; // Not to numb ourselves

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 2);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});