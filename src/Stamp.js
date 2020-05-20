class Stamp {
    constructor(name, yearPublished, isStamped, imageUrl, country, price) {
        this.name = name;
        this.yearPublished = yearPublished;
        this.isStamped = isStamped;
        this.imageUrl = imageUrl;
        this.country = country;
        this.price = price;
    }
 
    getPriceString() {
        let price = this.price;
        if (typeof price !== 'number') {
            price = parseFloat(price);
        }
        return price.toFixed(2);
    }
}

export default Stamp;