public class Azienda {
    public static void main(String[] args) throws Exception 
    {
        String nomeAzienda = "StartUp SRL";
        String indirizzo = "Via santa caterina da siena";
        int numeroCivico = 2;

        //public ufficio(String nome, int piano, String sigla, int numeroPostazioni, String nomeResponsabile)
        ufficio ufficio1 = new ufficio("uf1", 1, "pi", 20, "mario rossi");
        //public dipendente(String nome, String cognome, String indirizzoResidenza, String dataDiNascita, int oreSettimanali, String nomeUfficio) 
        dipendente dipendente1 = new dipendente("luca", "moretto", "via fossano", "26/04/73", 40, "ufficio1");
        dipendente dipendente2 = new dipendente("nicolo", "moretto", "via fossano", "26/04/73", 40, "ufficio1");

        ufficio1.salvaSuFile("file.txt");
        dipendente1.salvaSuFile("file.txt");
        dipendente2.salvaSuFile("file.txt");


    }
}