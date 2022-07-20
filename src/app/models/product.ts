export class Product {
    public id: number;
    public ref: string;
    public designation: string;
    public descriptif: string;
    public prixVenteHT: number;
    public image : string;
    public quantite : number;
    public averageStar : number;

    constructor(){
            this.id=0,
            this.ref='',
            this.designation='',
            this.descriptif='',
            this.prixVenteHT=0,
            this.image='',
            this.quantite=1;
            this.averageStar = 0;
    }
}
