export class Location{
    public name: string;
    public street: string;
    public city: string;
    public state: string;
    public zip: string;
    public imagePath: string;

    constructor(name: string, street: string, city: string, state: string, zip: string, imagePath: string)
    {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.imagePath = imagePath;
    }
}