export function calculatePriceWithDiscount(price: number, discount: number): number {
    return  Math.floor((price * (100 - discount)) / 100);
}

