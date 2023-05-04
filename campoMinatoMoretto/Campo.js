class Campo
{
    
    constructor() 
    {
        this.difficolta = "";
        this.campo = [];
        this.numBombe = 0;
        this.numColonne = 0;
        this.numRighe = 0;
        this.contatore = 1;
        this.contatoreBombe = 0;
        this.isPrimoClcik = true;
        this.isGiocoFinito = false;
    }
      
    Grandezza() 
    {
        this.difficolta = document.getElementById("grandezza").value;
        if (this.difficolta == "facile") 
        {
            this.numBombe = 5;
            this.numColonne = 5;
            this.numRighe = 5;
        } 
        else if (this.difficolta == "media") 
        {
            this.numBombe = 10;
            this.numColonne = 10;
            this.numRighe = 10;
        } 
        else if (this.difficolta == "difficile") 
        {
            this.numBombe = 15;
            this.numColonne = 15;
            this.numRighe = 15;
        } 
        
      
        for (var i = 0; i < this.numRighe; i++) 
        {
            this.campo[i] = []; 
            for (var j = 0; j < this.numColonne; j++) 
            {
                this.campo[i][j] = this.contatore++; 
            }
        }
      
        this.contatore = 0;
        this.creaMatrice();
        this.creaCampo();
    }

    creaCampo()
    {
        let tabella = "<table id='tabellaCampo'>";
			for (var i = 0; i < this.numRighe; i++) 
            {
				tabella += "<tr id='riga" + i + "'>";
				for (var j = 0; j < this.numColonne; j++) 
                {
					tabella += "<td><button onclick='campo.scopriCasella(" + i + ', ' + j + ")'></button></td>";
				}
				tabella += "</tr>";
                this.contatore++;
			}
		tabella += "</table>";

		document.getElementById("tabellaCampo").innerHTML = tabella;
    }

    creaMatrice()
    {
        let bombePosizionate = this.numBombe;
        let rigaCasuale;
        let colonnaCasuale;
        
        while(bombePosizionate != 0)
        {
            rigaCasuale = Math.floor(Math.random() * this.numRighe);
            colonnaCasuale = Math.floor(Math.random() * this.numColonne);
            if(this.campo[rigaCasuale][colonnaCasuale] != "bomba")
            {
                this.campo[rigaCasuale][colonnaCasuale] = "bomba";
            }
            bombePosizionate--;
        }

        for(var i = 0; i < this.numRighe; i++)
        {
            
            for(var j = 0; j < this.numColonne; j++)
            {
                if(this.campo[i][j] !== "bomba")
                {
                    if(j-1 >= 0 && this.campo[i][j-1] == "bomba") //controllo la casella a sinistra
                    {
                        this.contatoreBombe++;
                    }
                    if(j+1 < this.numColonne && this.campo[i][j+1] == "bomba") //controllo la casella a destra
                    {
                        this.contatoreBombe++;
                    }
                    if(i-1 >= 0 && this.campo[i-1][j] == "bomba") //controllo la casella sopra
                    {
                        this.contatoreBombe++;
                    }
                    if(i+1 < this.numRighe && this.campo[i+1][j] == "bomba") //controllo la casella sotto
                    {
                        this.contatoreBombe++;
                    }
                    if(i-1 >= 0 && j-1 >= 0 && this.campo[i-1][j-1] == "bomba") //controllo la diagonale in alto a sinistra
                    {
                        this.contatoreBombe++;
                    }
                    if(i-1 >= 0 && j+1 < this.numColonne && this.campo[i-1][j+1] == "bomba") //controllo la diagonale in alto a destra
                    {
                        this.contatoreBombe++;
                    }
                    if(i+1 < this.numRighe && j-1 >= 0 && this.campo[i+1][j-1] == "bomba") //controllo la diagonale in basso a sinistra
                    {
                        this.contatoreBombe++;
                    }
                    if(i+1 < this.numRighe && j+1 < this.numColonne && this.campo[i+1][j+1] == "bomba") //controllo la diagonale in basso a destra
                    {
                        this.contatoreBombe++;
                    }
                    this.campo[i][j] = this.contatoreBombe;
                    this.contatoreBombe = 0;
                }
                
            }
        }

    }

    scopriCasella(rigaCasella, colonnaCasella)
    {
        if(this.isPrimoClcik == true && this.isGiocoFinito == false)
        {
            this.isPrimoClcik = false;

            document.getElementsByTagName("tr")[rigaCasella].getElementsByTagName("button")[colonnaCasella].innerHTML
            = this.campo[rigaCasella][colonnaCasella];

            if(this.campo[rigaCasella][colonnaCasella] == "bomba")
            {
                document.getElementById("giocoFinito").style.display = "block";
                this.isGiocoFinito = true;
            }
            else
            {
                //se non sono al margine superiore e la casella non è una bomba o un valore diverso da 0 entro nell'if
                if (rigaCasella > 0 && this.campo[rigaCasella-1][colonnaCasella] != "bomba" && this.campo[rigaCasella-1][colonnaCasella] == 0) 
                {
                    var indice; //mi salvo l'indice perche mi servirà successivamente per stampare la casella successiva a quella contentente l'ultimo zero
                    //a questo punto faccio un for per le colonne
                    for (var i = rigaCasella - 1; i >= 0; i--) 
                    {
                        //se entro nell'if è perchè c'e una bomba o un valore allora interrompo
                        if (this.campo[i][colonnaCasella] == "bomba" || this.campo[i][colonnaCasella] > 0) 
                        {
                            break;
                        }
                        //altrimenti visualizzo la casella sopra
                        document.getElementsByTagName("tr")[i].getElementsByTagName("button")[colonnaCasella].innerHTML = this.campo[i][colonnaCasella];
                        indice = i-1; //assegno l'indice alla i cosi so fino a dove sono arrivato
                    }

                    //if(this.campo[indice][colonnaCasella] != "bomba" && indice > 0)
                        //document.getElementsByTagName("tr")[indice].getElementsByTagName("button")[colonnaCasella].innerHTML = this.campo[indice][colonnaCasella];

                }

                //faccio la stessa cosa per tutti gli altri lati della prima casella cliccata
                if (rigaCasella < this.numColonne && this.campo[rigaCasella+1][colonnaCasella] != "bomba" && this.campo[rigaCasella+1][colonnaCasella] == 0) 
                {
                    var indice;
                    for (var i = rigaCasella+1; i < this.numRighe; i++) 
                    {
                        if (this.campo[i][colonnaCasella] == "bomba" || this.campo[i][colonnaCasella] > 0) 
                        {
                            break;
                        }
                        
                        document.getElementsByTagName("tr")[i].getElementsByTagName("button")[colonnaCasella].innerHTML = this.campo[i][colonnaCasella];
                        indice = i+1;
                    }

                    //if(this.campo[indice+1][colonnaCasella] != "bomba" && indice<this.numColonne)
                        //document.getElementsByTagName("tr")[indice].getElementsByTagName("button")[colonnaCasella].innerHTML = this.campo[indice][colonnaCasella];

                } 
                
                if (colonnaCasella > 0 && this.campo[rigaCasella][colonnaCasella-1] != "bomba" && this.campo[rigaCasella][colonnaCasella-1] == 0) 
                {
                    var indice;
                    for (var j = colonnaCasella-1; j >= 0; j--) 
                    {
                        if (this.campo[rigaCasella][j] == "bomba" || this.campo[rigaCasella][j] > 0) 
                        {
                            break;
                        }
                        document.getElementsByTagName("tr")[rigaCasella].getElementsByTagName("button")[j].innerHTML = this.campo[rigaCasella][j];
                        indice = j-1;
                    }
                    //if(this.campo[rigaCasella][indice] != "bomba" && indice>0)
                        //document.getElementsByTagName("tr")[rigaCasella].getElementsByTagName("button")[indice].innerHTML = this.campo[rigaCasella][indice-1];

                }

                if (colonnaCasella < this.numColonne && this.campo[rigaCasella][colonnaCasella+1] != "bomba" && this.campo[rigaCasella][colonnaCasella+1] == 0) 
                {
                    var indice;
                    for (var j = colonnaCasella+1; j < this.numColonnee; j++) 
                    {
                        if (this.campo[rigaCasella][j] == "bomba" || this.campo[rigaCasella][j] > 0) 
                        {
                            break;
                        }
                        
                        document.getElementsByTagName("tr")[rigaCasella].getElementsByTagName("button")[j].innerHTML = this.campo[rigaCasella][j];
                        indice = j+1;
                    }
                    //if(this.campo[rigaCasella][indice] != "bomba" && indice < this.numColonne)
                        //document.getElementsByTagName("tr")[rigaCasella].getElementsByTagName("button")[indice].innerHTML = this.campo[rigaCasella][indice];

                } 
                
            }

        }
        else if(this.isPrimoClcik == false && this.isGiocoFinito == false)
        {
            document.getElementsByTagName("tr")[rigaCasella].getElementsByTagName("button")[colonnaCasella].innerHTML
            = this.campo[rigaCasella][colonnaCasella];

            if(this.campo[rigaCasella][colonnaCasella] == "bomba")
            {
                document.getElementById("giocoFinito").style.display = "block";
                this.isGiocoFinito = true;
                return;
            }
        }
        
    
    
    }
}


