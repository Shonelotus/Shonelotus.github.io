import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ufficio {
    private String nome;
    private int piano;
    private String sigla;
    private int numeroPostazioni;
    private String nomeResponsabile;
    private dipendente[] vettoreDipendenti = null; // Supponiamo che dipendente sia una classe definita

    // Costruttore parametrico
    public ufficio(String nome, int piano, String sigla, int numeroPostazioni, String nomeResponsabile) 
    {
        this.nome = nome;
        this.piano = piano;
        this.sigla = sigla;
        this.numeroPostazioni = numeroPostazioni;
        this.nomeResponsabile = nomeResponsabile;
    }

    public void caricaDaFile(String nomeFile) throws IOException 
    {
        File file = new File(nomeFile);
        BufferedReader reader = new BufferedReader(new FileReader(file));
        String linea = "";
        while((linea = reader.readLine()) != null)
        {
            String vett[] = linea.split("*"); // trovo i dipendenti
            for(int i = 0; i < vett.length; i++)
            {
                String[] vettoreDipendenteTmp = vett[i].split("*");
                dipendente dipendenteTmp = new dipendente(vettoreDipendenteTmp[0], vettoreDipendenteTmp[1], vettoreDipendenteTmp[2], vettoreDipendenteTmp[3], Integer.parseInt(vettoreDipendenteTmp[4]),vettoreDipendenteTmp[5]);
                this.vettoreDipendenti[i] = dipendenteTmp;
            }
        }
    }

    // Metodo per visualizzare l'ufficio
    public String visualizzaUfficio() 
    {
        String dipendenti = "";
        if (vettoreDipendenti != null) {
            for (int i = 0; i < vettoreDipendenti.length; i++) {
                dipendenti += vettoreDipendenti[i].visualizzaDipendente();
            }
        }
        return this.nome + ";" + this.piano + ";" + this.sigla + ";" + this.numeroPostazioni + ";" + this.nomeResponsabile + ";" + dipendenti;
    }

}
