const getTotalPrice = (arrayItems) => {
    const total = arrayItems.reduce((a, b) => a + b.price, 0);
    return total;
}
export { getTotalPrice as GTP };