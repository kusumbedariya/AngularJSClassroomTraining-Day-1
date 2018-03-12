class HelloWorld{
    private secret:string = "My Secret"
    public city: string;
    protected someingo: string = " Some Information"
    public firstname: string;
    public lastname: string;

    constructor(fn:string , ln:string, city:string ){
    this.firstname = fn;
    this.lastname = ln;
    this.city = city;
    }
}