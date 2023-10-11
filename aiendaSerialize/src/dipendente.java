public class dipendente 
{

    //csv sarà tipo: ufficio1;dipendenti;;nome*cognome*......ufficio1**...

    // Dichiarazione delle variabili di istanza
    private int idDipendente;
    private String nome;
    private String cognome;
    private String indirizzoResidenza;
    private int dataDiNascita;
    private int codiceUfficio; 
    private int dataAssunzione;

    // Costruttore
    public dipendente() 
    {
        this.idDipendente = 0;
        this.nome = "";
        this.cognome = "";
        this.indirizzoResidenza = "";
        this.dataDiNascita = 0;
        this.codiceUfficio = 0; 
        this.dataAssunzione = 0;
    }

    public dipendente(int idDipendente, int dataDiNascita, int dataAssunzione, int codiceUfficio, String cognome, String nome, String indirizzoResidenza)
    {
        this.idDipendente = idDipendente;
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzoResidenza = indirizzoResidenza;
        this.dataDiNascita = dataDiNascita;
        this.dataAssunzione = dataAssunzione;
        this.codiceUfficio = codiceUfficio;
    }


    // Metodo per visualizzare il dipendente
    public String visualizzaDipendente() 
    {
        return "i:" + this.idDipendente +";" + "i:" + this.dataDiNascita + ";" + "i:" + this.dataAssunzione + ";" + "i:" + this.codiceUfficio + ";"  + "s:" + this.cognome.length() + ":" + this.cognome + ";" + "s:" + this.nome.length() + ":" + this.nome + ";"  + "s:" + this.indirizzoResidenza.length() + ":" + this.indirizzoResidenza + ";" + "\n"; 
    }

    

}
