class CEvento
{
    constructor(remember, scadenza)
    {
        this.scadenza = scadenza;
        this.remember = remember;
    }

    visualizzaTutto()
    {
        return this.remember + " " + this.scadenza;
    }

    getRemember()
    {
        return this.remember;
    }

    getScadenza()
    {
        return this.scadenza;
    }

}