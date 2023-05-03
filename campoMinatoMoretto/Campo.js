class Campo
{
    
    constructor() 
    {
        this.difficolta = "";
        this.campo = [];
        this.numBombe = 0;
        this.numColonne = 0;
        this.numRighe = 0;
        this.contatore = 0;
        this.contatoreBombe = 0;
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
					tabella += "<td><button>" + this.campo[i][j] + "</button></td>";
				}
				tabella += "</tr>";
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

}