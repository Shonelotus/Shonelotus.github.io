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

    scopriCasella(riga, colonna)
    {
        if(!this.isGiocoFinito) //entro se non ho finito il gioco
        {
            if(this.campo[riga][colonna] === "bomba" && this.isPrimoClcik === true)
            {
                while(this.campo[riga][colonna] != "bomba")
                {
                    this.creaMatrice; //controllo se la prima casella è una bomba, allora rigenero il campo
                }
                this.isPrimoClcik = false;
            }

            if(this.campo[riga][colonna] === "bomba") //controllo prima se ho schiacciato una bomba e finisco il gioco
            {
                document.getElementById("giocoFinito").hidden = false;
                this.isGiocoFinito = true;
            }
            for(let i = riga; i < this.numRighe; i++)
            {
                for(let j = colonna; j < this.numRighe; j++)
                {
                    if(this.campo[riga][colonna] != 0)
                    {
                        document.getElementsByTagName("tr")[riga].getElementsByTagName("button")[colonna].innerHTML = this.campo[riga][colonna];
                    }
                    
                    this.scopriAdiacenti(i, j);
                    
                }
            }

        }
        return;
    }

    scopriAdiacenti(riga, colonna)
    {
        //ciclo per il numero di caselle attorno
        let numCaselleAdiacenti = 8;

        if(this.campo[riga][colonna-1] == 0)
        {
            document.getElementsByTagName("tr")[riga].getElementsByTagName("button")[colonna-1].innerHTML = this.campo[riga][colonna-1];
        }
        if(this.campo[riga+1][colonna-1] == 0)
        {
            document.getElementsByTagName("tr")[riga+1].getElementsByTagName("button")[colonna-1].innerHTML = this.campo[riga+1][colonna-1];
        }
        if(this.campo[riga+1][colonna+1] == 0)
        {
            document.getElementsByTagName("tr")[riga+1].getElementsByTagName("button")[colonna+1].innerHTML = this.campo[riga+1][colonna+1];
        }
        if(this.campo[riga][colonna+1] == 0)
        {
            document.getElementsByTagName("tr")[riga].getElementsByTagName("button")[colonna+1].innerHTML = this.campo[riga][colonna+1];
        }
        if(this.campo[riga-1][colonna+1] == 0)
        {
            document.getElementsByTagName("tr")[riga-1].getElementsByTagName("button")[colonna+1].innerHTML = this.campo[riga-1][colonna+1];
        }
        if(this.campo[riga-1][colonna] == 0)
        {
            document.getElementsByTagName("tr")[riga-1].getElementsByTagName("button")[colonna].innerHTML = this.campo[riga-1][colonna];
        }
        if(this.campo[riga-1][colonna-1] == 0)
        {
            document.getElementsByTagName("tr")[riga-1].getElementsByTagName("button")[colonna-1].innerHTML = this.campo[riga-1][colonna-1];
        }
    }

}


