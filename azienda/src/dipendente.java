import java.io.File;
import java.io.FileWriter;

public class dipendente 
{

    //csv sarà tipo: ufficio1;dipendenti;nome*cognome*......ufficio1;

    // Dichiarazione delle variabili di istanza
    private String nome;
    private String cognome;
    private String indirizzoResidenza;
    private String dataDiNascita;
    private int oreSettimanali;
    private String nomeUfficio; 

    // Costruttore
    public dipendente() 
    {
        this.nome = "";
        this.cognome = "";
        this.indirizzoResidenza = "";
        this.dataDiNascita = "";
        this.oreSettimanali = 0;
        this.nomeUfficio = ""; 
    }

    public dipendente(String nome, String cognome, String indirizzoResidenza, String dataDiNascita, int oreSettimanali, String nomeUfficio) 
    {
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzoResidenza = indirizzoResidenza;
        this.dataDiNascita = dataDiNascita;
        this.oreSettimanali = oreSettimanali;
        this.nomeUfficio = nomeUfficio;
    }


    // Metodo per visualizzare il dipendente
    public String visualizzaDipendente() 
    {
        return this.nome + "*" + this.cognome + "*" + this.indirizzoResidenza + "*" + this.dataDiNascita + "*" + this.oreSettimanali + "*" + this.nomeUfficio + ";";
    }

    public void salvaSuFile(String nomeFile)
    {
        try 
        {
            File file = new File(nomeFile);
            FileWriter fw = new FileWriter(file, true); 
            fw.write(this.visualizzaDipendente());
            fw.close();
        }catch (Exception e) 
        {
            e.printStackTrace();
        }
    }

}
