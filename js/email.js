const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_8zz5bd8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



function Champ(id, msg)
{
	this.id=id;
	this.msg=msg;
}

Champ.prototype.verifier=function()
{
	return (document.getElementById(this.id).value == "") ? this : null;
}

Champ.prototype.setFocus=function()
{
	document.getElementById(this.id).focus();
}


function ChampListe()
{
	this.items = new Array();
}

ChampListe.prototype.add=function(id,msg)
{
	this.items.push(new Champ(id,msg));
}

ChampListe.prototype.verifierTout=function()
{
	var result = null;
	for (var i=0; i < this.items.length; i++)
	{
		result = this.items[i].verifier();
		if (result)
		{
			break;
		}
	}	
	return result;
}


var champs = new ChampListe();
// Ici on ajoute autant de champs qu'on désire
// du moment qu'il s'agit bien de champs texte -> input ="text"
// Nota qu'on passe l'id de chaque champ et pas son attribut "name"
champs.add("from_name","Veuillez entrer votre Nom svp");
champs.add("adresse","Veuillez entrer votre adresse svp");
// champs.add("message","Veuillez entrer un message svp");
champs.add("email","Veuillez entrer votre adresse email svp");
champs.add("pasword","Veuillez entrer votre mot de passe svp");
champs.add("phone","Veuillez entrer votre numero de telephone svp");
// champs.add("choix","Veuillez choisir votre matiere svp");



function verification() 
{ 
	var champ = champs.verifierTout();
	if (champ)
	{
		alert(champ.msg);
		champ.setFocus();
		return false;
	}
	else
	{
		return true;
	}
}