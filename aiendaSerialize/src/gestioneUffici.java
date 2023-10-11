import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class gestioneUffici 
{
    private ArrayList<ufficio> lista;
    
    public gestioneUffici()
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
                fw.write((this.lista.get(i)).visualizzaUfficio());
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
                    String[] ufficioTmp = vett[i].split(";");
                    ufficio tmp = new ufficio(Integer.parseInt(ufficioTmp[0]), ufficioTmp[1], Integer.parseInt(ufficioTmp[2]), Integer.parseInt(ufficioTmp[3]), ufficioTmp[4], ufficioTmp[5]);
                    this.lista.add(tmp);
                }
            }
            reader.close();
            return true;
        }
        else
            return false;
        
    }
}
