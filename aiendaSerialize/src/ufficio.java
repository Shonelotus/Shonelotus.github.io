public class ufficio 
{
    private int idUfficio;
    private String codiceUfficio;
    private String nome;
    private String piano;
    private int numeroPostazioni;
    private int idResponsabile;

    // Costruttore parametrico
    public ufficio(int idUfficio, String codiceUfficio, int numeroPostazioni, int idResponsabile, String nome, String piano) 
    {
        this.nome = nome;
        this.piano = piano;
        this.numeroPostazioni = numeroPostazioni;
        this.idResponsabile = idResponsabile;
        this.idUfficio = idUfficio;
        this.codiceUfficio = codiceUfficio;

    }

    // Metodo per visualizzare l'ufficio
    public String visualizzaUfficio() 
    {
        return "i:" + this.idUfficio +";" + "s:" + this.codiceUfficio.length() + ":" + this.codiceUfficio + ";" + "i:" + this.numeroPostazioni + ";" + "i:" + this.idResponsabile + ";"  + "s:" + this.nome.length() + ":" + this.nome + ";"  + "s:" + this.nome.length() + ":" + this.nome + ";"  + "s:" + this.piano.length() + ":" + this.piano + ";"; 

    }

}
