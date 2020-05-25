class Stamp {
    constructor(name, yearPublished, isStamped, imageUrl, country, price, id) {
        this.name = name;
        this.yearPublished = yearPublished;
        this.isStamped = isStamped;
        this.imageUrl = imageUrl;
        this.country = country;
        this.price = price;
        this.id = id;
    }
 
    getPriceString() {
        return Stamp.convertPriceToString(this.price);
    }

    static convertPriceToString(price) {
        if (typeof price !== 'number') {
            price = parseFloat(price);
        }
        if (isNaN(price)) {
            price = 0.00;
        }
        return price.toFixed(2);
    }
}

export default Stamp;