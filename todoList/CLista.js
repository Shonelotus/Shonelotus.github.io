class CLista
{
    constructor()
    {
        this.lista = [];
        this.contatore = 0;
        this.contatoreclick = 1;
    }

    addToList()
    {
        let evento = this.newEvento();
        if(this.lista.length < 50)
        {
            this.lista.push(evento);
            document.getElementsByClassName("tabellaLinea")[this.contatore].innerHTML = '<tr class="row" visible> <td class="immagini" id="img' + this.contatore +'"><img src="immagini/vuota.png" onclick="lista.fatto(' + this.contatore + ')"></td><td class="testo" id="testo' + this.contatore + '">' + this.lista[this.contatore].getRemember() + '</td><td class="bottoni" id="btn' + this.contatore + '"><button onclick = "lista.rimuovi('+ this.contatore + ')"> Reset </td></tr>';
            this.contatore++;
        }
        else
            alert("Hai superato il numero limite di eventi");
        
    }

    newEvento()
    {
        let testo = document.getElementById('testo').value;
        let data = document.getElementById('data').value;
        let nuovoEvento = new CEvento(testo, data);
        return nuovoEvento;
    }


    fatto(numero) 
    {
        this.contatoreclick++;
        let img = document.getElementById("img" + numero).getElementsByTagName("img")[0];//prendo l'elemento img1 e lo divido in un vettore in base al tagname, prendendo il vett[0] perche tanto ho solo un elemento
        if (this.contatoreclick % 2 == 0) {
          img.src = "immagini/fatto.png"; //se i click corrispondono a dispari allora metto l'immagine fatto
        } else {
          img.src = "immagini/vuota.png"; //altrimenti metto la checkbox vuota
        }
      }

    rimuovi(numero)
    {
        this.lista.pop(this.lista[numero]);
        document.getElementsByClassName("tabellaLinea")[numero].innerHTML = '<tr class="row" hidden> <td class="immagini" id="img' + numero +'"><img src="immagini/vuota.png" onclick="lista.fatto(' + numero + ')"></td><td class="testo" id="testo' + numero + '">' + '</td><td class="bottoni" id="btn' + numero + '"><button onclick = "lista.rimuovi('+ numero + ')"> Reset </td></tr>';
    }
}