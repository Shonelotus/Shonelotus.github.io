import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class gestioneDipendenti 
{
    private ArrayList<dipendente> lista;    
    public gestioneDipendenti()
    {
        this.lista = new ArrayList<>();
    }

    public void salvaSuFile(String nomeFile)
    {
        try 
        {
            File file = new File(nomeFile);
            FileWriter fw = new FileWriter(file, true); 
            for(int i = 0; i < this.lista.size(); i++)
            {
                fw.write((this.lista.get(i)).visualizzaDipendente());
            }
            fw.close();
        }catch (Exception e) 
        {
            e.printStackTrace();
        }
    }

    public boolean caricaDaFile(String nomeFile) throws IOException 
    {
        File file = new File(nomeFile);
        if(file.exists())
        {
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String linea = "";
            while((linea = reader.readLine()) != null)
            {
                String vett[] = linea.split("\n"); 
                for(int i = 0; i < vett.length; i++)
                {
                    String[] vettoreDipendenteTmp = vett[i].split(";");
                    dipendente dipendenteTmp = new dipendente(Integer.parseInt(vettoreDipendenteTmp[0]), Integer.parseInt(vettoreDipendenteTmp[1]), Integer.parseInt(vettoreDipendenteTmp[2]), Integer.parseInt(vettoreDipendenteTmp[3]), vettoreDipendenteTmp[4], vettoreDipendenteTmp[5], vettoreDipendenteTmp[6]);
                    this.lista.add(dipendenteTmp);
                }
            }
            reader.close();
            return true;
        }
        else
            return false;
        
    }


}
