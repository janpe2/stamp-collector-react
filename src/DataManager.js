import Stamp from './Stamp'

let stampCollection = [];

function initDataManager() {
    stampCollection.push(new Stamp(
        'Suomi Finland', 
        1989, 
        false, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/FIN_1989_MiNr0876IIx_mt_B002a.jpg/104px-FIN_1989_MiNr0876IIx_mt_B002a.jpg'));
    
    stampCollection.push(new Stamp(
        'Small Hermes head', 
        1886, 
        true, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/SmallHermes_40L.png/104px-SmallHermes_40L.png'));

    stampCollection.push(new Stamp(
        'Lietuvos vaikas', 
        1933, 
        false, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/363zoom.jpg/89px-363zoom.jpg'));

    stampCollection.push(new Stamp(
        'Danmark post', 
        1945, 
        true, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DenmarkStamp2.jpg/115px-DenmarkStamp2.jpg'));

}

export default stampCollection;
export {initDataManager};
