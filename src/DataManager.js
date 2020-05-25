import Stamp from './Stamp'

class DataManager {
    constructor() {
        this.stampCollection = [];
    }

    initDataManager() {
        this.stampCollection.push(new Stamp(
            'Coat of arms with Finnish lioncel', 
            1989, 
            false, 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/FIN_1989_MiNr0876IIx_mt_B002a.jpg/104px-FIN_1989_MiNr0876IIx_mt_B002a.jpg',
            'Finland',
            1.00,
            this.stampCollection.length));
        
        this.stampCollection.push(new Stamp(
            'Small Hermes head', 
            1886, 
            true, 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/SmallHermes_40L.png/104px-SmallHermes_40L.png',
            'Greece',
            40.00,
            this.stampCollection.length));

        this.stampCollection.push(new Stamp(
            'Lietuvos vaikas', 
            1933, 
            false, 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/363zoom.jpg/89px-363zoom.jpg',
            'Lithuania',
            3.00,
            this.stampCollection.length));

        this.stampCollection.push(new Stamp(
            'Danmark post', 
            1945, 
            true, 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DenmarkStamp2.jpg/115px-DenmarkStamp2.jpg',
            'Denmark',
            20.00,
            this.stampCollection.length));
            
        this.stampCollection.push(new Stamp(
            'US National Guard', 
            1942, 
            false, 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZI65mspXc_eQdhuGQxPhx1lpdGBXbFkX7wpep6UoWyo5K5H_&usqp=CAU',
            'USA',
            0.03,
            this.stampCollection.length));        
    }
}

export default DataManager;
