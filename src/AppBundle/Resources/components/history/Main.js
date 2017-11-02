import React from "react";
import Parallax from 'parallax-js';

class Main extends React.Component {
    componentDidMount() {
        var nav_item = document.getElementsByClassName('nav-item'),
            gotop = document.getElementById('gotop'),
            chapters = [
                document.getElementById('chapter-01'),
                document.getElementById('chapter-02'),
                document.getElementById('chapter-03'),
                document.getElementById('chapter-04'),
                document.getElementById('chapter-05'),
                document.getElementById('chapter-06'),
                document.getElementById('chapter-07'),
                document.getElementById('chapter-08'),
                document.getElementById('chapter-09'),
                document.getElementById('chapter-end')
            ];

        setTimeout(() => {
            for(var i = 0; i < chapters.length; i++) {
                chapters[i].classList.remove('d-none');
            }
        }, 300);

        for(var i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.remove('active');
        }

        document.querySelector('#history').classList.add('active');
        localStorage.setItem('page', 'history');

        gotop.addEventListener('click', () => {
            document.getElementById('chapters').scrollTop = 0;

            setTimeout(() => {
                for(var i = 0; i < chapters.length; i++) {
                    chapters[i].classList.add('opac0');
                }
            }, 200);
        });

        var scene = document.getElementById('scene'),
            parallaxInstance = new Parallax(scene);

        parallaxInstance.limit(30, 15);
    }
    render() {
        return (
            <section id="History">
                <section className="p-absolute o-hidden wrapper-scene">
                    <section id="scene" className="scene" style={{backgroundImage: `url(bundles/fond.jpg)`}}>
                        <div className="img background" style={{backgroundImage: `url(bundles/background.jpg)`}} data-depth="0.2"></div>
                        <div className="img marche" style={{backgroundImage: `url(bundles/marche.png)`}} data-depth="0.6"></div>
                    </section>
                </section>
                <section className="container-fluid opacity-medium p-relative">
                    <div className="row">
                        <div className="col-12 text-right">
                            <a id="gotop" href="javascript:void(0)" className="opac0">Remonter</a>
                        </div>
                    </div>
                </section>
                <section id="chapters" className="container-fluid custom-scroll opacity-medium oy-auto p-relative wrapper-content">
                    <div id="chapter-00" className="row justify-content-center mt-lg-5 p-fixed">
                        <div className="col-12 mt-lg-5 text-center">
                            <h3>Début de lecture</h3>
                            <p>Scrollez vers le bas pour commencer la lecture</p>
                            <p className="symbol pulse">&#8675;</p>
                        </div>
                    </div>
                    <div id="chapter-01" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <h1>Marché de Talensac</h1>
                            <p>
                                Le vendredi 8 janvier 1937, Auguste Pageot , député-maire de Nantes inaugurait le nouveau marché de Talensac.
                                Ce dernier prenait la place de l'ancien marché à la viande et de l'ancien marché aux bestiaux qui côtoyait l'abattoir
                                municipal installé en 1829 et transféré en 1933 à Pont-Rousseau.
                                <br/>
                                Ce nouvel équipement avec ses 200 étals remplaçait aussi le marché couvert de Feltre et le marché en plein air de
                                Saint-Similien, il fut ouvert au public le samedi 9 janvier.
                            </p>
                        </div>
                    </div>
                    <div id="chapter-02" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <h1>Les anciens abattoirs</h1>
                            <p>
                                Le marché se dresse à l'emplacement des anciens abattoirs municipaux ouvert en 1829 sur le site d'une tenue agricole
                                acquise par la ville au début du xixe siècle.
                                <br/>
                                Ces abattoirs publics dont l'entrée se trouvait rue Talensac, furent inaugurés le 15 octobre 1829. Ils se composaient
                                de deux bâtiments édifiés autour d'une place plantée de marronniers, présentant un porche central de plein cintre couronnés
                                d'un fronton triangulaire en tuffeau, flanquées d'ailes perpendiculaires plus basses coiffées de toitures à double pente
                                festonnées d'ardoises. L'ensemble était clôturé par de hautes grilles que l'on s'empressait de refermer afin d'éviter que
                                les animaux ne tentent de s'en échapper. De l'autre côté de la rue de Talensac se tenait un marché de la Boucherie.
                            </p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div id="chapter-03" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <p>
                                Dès 1880, le « Conseil Central d’Hygiène Publique et de Salubrité de la Loire-Inférieure » (CCHPS) nomme une commission pour
                                étudier « le déplacement de l'abattoir de Nantes ». Le rapport de 16 pages qui est remis en 1882 et imprimé en 1899, statut
                                sur la fermeture de Talensac principalement pour cause d'insalubrité pour le voisinage (immeubles construit autour de l'abattoir
                                après son ouverture) et la pollution de l'Erdre - aujourd'hui occupé par le cours des 50-Otages. Le rapport met également en
                                cause le mauvais état des bâtiments et le manque de place pour les 151 bouchers qui y exerçaient à cette époque. Le document
                                préconise son transfert sur un site de 60 000 m2 (150 x 400 m) soit 4 fois plus grand que le site de Talensac.
                            </p>
                        </div>
                    </div>
                    <div id="chapter-04" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <p>
                                En 1910, pour une question d'hygiène et d'aménagement urbain, la municipalité décide de transférer « La tuerie aux bestiaux »,
                                comme l'avaient surnommés les nantais à l'époque, sur l'île Beaulieu (dans la partie est de l'actuelle île de Nantes) et en en
                                confie la conception à l'architecte lyonnais Tony Garnier, mais un ancien entrepreneur conteste le choix du site retenu et propose
                                un nouvel emplacement, toujours sur l'île Beaulieu, mais plus à l'ouest entre les boires de Toussaint et des Récollets. Le
                                projet est néanmoins suspendu à la suite du déclenchement de la Première Guerre mondiale.
                            </p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div id="chapter-05" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <p>
                                Il faudra attendre l'entre-deux-guerres pour que la question du transfert des abattoirs soit remise à l'ordre du jour, dans le cadre
                                d'une réorganisation des marchés sur Nantes : le marché de la rue de Feltre et celui de la place Saint-Similien sont supprimés au grand
                                dam des usagers et des commerçants.
                            </p>
                        </div>
                    </div>
                    <div id="chapter-06" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <p>
                                On opte pour la construction de nouveaux abattoirs intercommunaux sur un site de 2,6 hectares situé sur la commune de Rezé, à la
                                confluence de la Loire et de la Sèvre Nantaise, sur les basses prairies de la « Tête-des-Mottes ». Les plans sont établis en 1923 et la
                                décision de transfert est prise en 1929. Ce site annexé par la suite à la ville de Nantes, sera en activité jusqu'en 1975, avant d'être
                                transféré un kilomètre plus loin, dans l'ancien marais du Seil situé toujours à Rezé (ce dernier équipement fonctionna jusqu'en 1989).
                            </p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div id="chapter-07" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <h1>La construction du marché</h1>
                            <p>
                                Le transfert de l'activité de l'abattoir de Talensac vers son nouveau site a lieu le 16 octobre 1933.
                                <br/>
                                Le maire Léopold Cassegrain organise, le 15 décembre suivant, un concours d'architectes afin d'envisager la construction d'un grand marché
                                central couvert sur le site. Le cahier des clauses du concours, indique que « la plus grande latitude est laissée aux concurrents pour ce qui
                                concerne les procédés d'exécution des ouvrages, leur forme et leur disposition. » Cet espace devra comporter : un marché entièrement clos, réservé
                                aux bouchers et aux charcutiers ; un marché couvert pour les marchands de beurres, d'œufs, de volailles ; un marché en plein air, pour les légumes,
                                les marchands de bimbeloterie et d'articles divers.
                            </p>
                        </div>
                    </div>
                    <div id="chapter-08" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <p>
                                La démolition des abattoirs commence en juin 1934 et se poursuit jusqu'en novembre. Les travaux de construction vont ainsi s'échelonner trois ans. Ainsi,
                                en août 1935, les piliers de soutènement sont réalisés. En février 1936, les parois latérales sont construites : des murs en briques jaunes sur un
                                soubassement de briques rouges de Chartres (matériau déjà utilisé pour le lycée Gabriel-Guist'hau notamment4) enduit d'un crépissage, tandis que les loges
                                en briques tapissées de petits carreaux sont achevés. À l'automne 1936, le terrain est planté de rangées de platanes. La construction du marché est assortie
                                d'importants travaux de voirie sur les rues Talensac et de Basse-Porte : les becs à gaz disparaissent, remplacés par des lampadaires électriques.
                            </p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div id="chapter-09" className="row d-none justify-content-center mt-lg-5 p-fixed opac0">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-lg-5">
                            <p>
                                Le marché qui aura couté 2 700 000 millions de francs de l'époque4, sera inauguré le 8 janvier 1937 par le successeur de Léopold Cassegrain, Auguste
                                Pageot. Idéalement situé à proximité de la route de Rennes (dont la rue Paul-Bellamy forme un ancien tronçon), par sa taille et la diversité de ses
                                produits, il connaîtra aussitôt un succès qui ne s'est pas démenti depuis, restant l'un des marchés nantais les plus courus.
                            </p>
                        </div>
                    </div>
                    <div id="chapter-end" className="row d-none justify-content-center p-fixed opac0">
                        <div className="col-12 mt-lg-5 text-center">
                            <p className="symbol pulse">&#8673;</p>
                            <h3>Fin de lecture</h3>
                            <p>Cliquez sur 'Remontez' pour revenir au début</p>
                        </div>
                    </div>
                    <div id="decoy-00" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-01" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-02" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-03" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-04" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-05" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-06" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-07" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-08" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-09" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                    <div id="decoy-10" className="row">
                        <div className="col-12 decoy"></div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
