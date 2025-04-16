function e(n) {
    let e = 1;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
        e += 1/fact;
    }
    return e;
}
