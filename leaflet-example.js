<!DOCTYPE HTML>
<html lang="fr">
  <head>
     <!-- Required meta tags -->
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>Carte citoyenne collaborative - Port obligatoire du masque dans la Communauté de communes Carnelle Pays-de-France</title>

		<!-- include leaflet css and javascript -->
		<link rel="stylesheet" crossorigin=""
				href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
		<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js"
						crossorigin=""></script>

		<!-- include our own css -->
		<link rel="stylesheet" href="leaflet-example.css" />

		<!-- we include the javascript at the bottom, see below -->
	</head>

	<body class="bg-light">
    <div class="container">
      <div class="py-5 text-center" style="padding-bottom:0px;margin-bottom:0px;">
        <h2 class="text-info">Port du masque dans la communauté de communes Carnelle Pays-de-France</h2>
        <h2>Carte collaborative</h3>
          <p class="lead">Pour proposer une modification ou signaler une erreur, vous pouvez nous contacter à <a href="mailto:uneambitionpourmaffliers@gmail.com">uneambitionpourmaffliers@gmail.com</a><br>ou participer directement <a href="https://github.com/ambitionmaffliers/ambitionmaffliers.github.io">sur github</a>.
          <br><a href="#moreinfo"><b>&darr; Plus d'informations</b></a></p>
      </div>
    </div>
		<div id="map" class=".container-l"></div>
		<!-- include our own javascript -->
		<script src="leaflet-example.js"></script>
    <div class="container">
      <div class="py-5">

        <div class="card" id="moreinfo">
          <div class="card-body">
            <h4>Informations légales utilisées pour constuire cette carte :</h3>
            Afin de tenir compte de la fréquentation des gares du Val-d’Oise, de leurs abords, et des nombreux déplacements de voyageurs entre le département et Paris et la petite couronne, au sein desquels les niveaux d’incidence sont supérieurs à 70, le port du masque sera obligatoire pour toutes les personnes de onze ans et plus dans toutes les gares du Val-d’Oise et à leurs abords, dans un périmètre de deux cents mètres autour de leurs entrées et sortie.<br> Source : <a href="https://www.sarcelles.fr/images/actualites/P095_20200828_Port_du_masque_-_Gares_et_abords_.pdf">Arrêté préfectoral 2020-626</a><br><br>
            En outre, compte tenu du retour à une importante fréquentation des abords des établissements d’enseignement par une population appartenant majoritairement aux tranches d’âge au sein desquelles la circulation du virus est forte, le port du masque sera obligatoire pour toutes les personnes de onze ans et plus aux abords de tous les établissements d’enseignement (écoles maternelles et primaires, collèges, lycées et établissements d’enseignement supérieur) du Val-d’Oise, dans un périmètre de deux cents mètres autour de leurs entrées et sorties.<br> Source : <a href="https://www.sarcelles.fr/images/actualites/P095_20200828_Port_du_masque_-_Etablissements_denseignement.pdf">Arrêté prefectoral 2020-627</a>
            <br><br>
            Ces obligations s’appliqueront à partir du lundi 31 août à 6H00 s’agissant des gares et de leurs abords et du mardi 1er septembre à 7H00 s’agissant des abords des établissements d’enseignement, et ce pour une durée d'un mois.
          </div>
        </div>
        <br>
        <div class="card" >
          <div class="card-body">
            <h4>Liste des écoles et gares intégrées à la carte</h3>
            <ul>
              <li>Gare de Montsoult</li>
              <li>Ecole élémentaire Louis Jouvet (Luzarches)</li>
              <li>Ecole maternelle Marie Noël (Viarmes)</li>
              <li>Ecole primaire André Jumentier (Mareil-en-France)</li>
              <li>Ecole primaire du Bois Bonnet (Asnières-sur-Oise)</li>
              <li>Ecole élémentaire Albert Boucher (Belloy-en-France)</li>
              <li>Ecole élémentaire Val d'Ysieux (Chaumontel)</li>
              <li>Ecole primaire Les Châtaigniers (Seugy)</li>
              <li>Ecole primaire Alain Fournier (Le Plessis-Luzarches)</li>
              <li>Ecole élémentaire privée Les petites souris de Montessori (Viarmes)</li>
              <li>Ecole primaire Jules Ferry (Montsoult)</li>
              <li>Ecole primeire les Quatre Ormes (Baillet-en-France)</li>
              <li>Ecole élémentaire privée l'espérance (Chaumontel)</li>
              <li>Ecole primaire Yann Arthus-Bertrand Les Camélias (Villaines-sous-Bois)</li>
              <li>Ecole primaire Le Cèdre (Maffliers)</li>
              <li>Ecole maternelle Rosemonde Gérard (Luzarches)</li>
              <li>Ecole élémentaire Langevin-Wallon (Saint-Martin-du-Tertre)</li>
              <li>Ecole primaire Blanche de Castille (Asnières-sur-Oise)</li>
              <li>Ecole maternelle Albert Boucher (Belloy-en-France)</li>
              <li>Ecole élémentaire Louis Pergaud (Viarmes)</li>
              <li>Ecole primaire Alphonse Daudet (Montsoult)</li>
              <li>Ecole maternelle Pauline Kergomard (Saint-Martin-du-Tertre)</li>
              <li>Ecole maternelle Chaumontel (Chaumontel)</li>
              <li>Collège Blaise Pascal (Viarmes)</li>
              <li>Collège Marcel Pagnol (Montsoult)</li>
              <li>Collège Anna de Noailles (Luzarches)</li>
              <li>Lycée professionnel Jean Mermoz (Montsoult)</li>
              <li>Lycée Gérard de Nerval (Luzarches)</li>
              <li>Collège Aristide Briand (Domont)</li>
              <li>Lycée George Sand (Domont)</li>
              <li>Collège Saint-Pie X (Domont)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>



	</body>
</html>
