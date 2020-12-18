let c;

module.exports = {
    getC() {
        if (c) {
            return c;
        }
        // return c = 1;
    },
    setC(p) {
        c = p;
    }
}