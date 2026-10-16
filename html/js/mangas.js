const mangas = [
  {
    nome: "One Piece",
    imagem: "imagens/capas/onepiece.png",
    descricao: "Monkey D. Luffy parte em uma jornada pelos mares para encontrar o lendário tesouro One Piece e se tornar o Rei dos Piratas.",
    autor: "Eiichiro Oda",
    categorias: ["Aventura", "Ação", "Comédia", "Fantasia"]
  },
  {
    nome: "Bleach",
    imagem: "imagens/capas/bleach.png",
    descricao: "Ichigo Kurosaki ganha poderes de Ceifeiro de Almas e passa a proteger humanos e espíritos de ameaças sobrenaturais.",
    autor: "Tite Kubo",
    categorias: ["Ação", "Aventura", "Fantasia", "Sobrenatural"]
  },
  {
    nome: "Vinland Saga",
    imagem: "imagens/capas/vilandsaga.png",
    descricao: "Thorfinn cresce em meio a guerras vikings e busca seu próprio caminho em um mundo marcado pela violência.",
    autor: "Makoto Yukimura",
    categorias: ["Ação", "Aventura", "Drama", "Histórico"]
  },
  {
    nome: "Kingdom",
    imagem: "imagens/capas/kingdom.png",
    descricao: "Durante o período dos Reinos Combatentes da China, Xin sonha em se tornar um grande general e ajudar a unificar o país.",
    autor: "Yasuhisa Hara",
    categorias: ["Ação", "Aventura", "Drama", "Histórico"]
  },
  {
    nome: "Chainsaw Man",
    imagem: "imagens/capas/chainsawman.png",
    descricao: "Denji, um jovem endividado que se funde a um demônio-serra, passa a trabalhar caçando demônios.",
    autor: "Tatsuki Fujimoto",
    categorias: ["Ação", "Terror", "Sobrenatural", "Comédia"]
  },
  {
    nome: "Berserk",
    imagem: "imagens/capas/berserk.png",
    descricao: "O espadachim Guts enfrenta forças demoníacas e um destino brutal em uma fantasia sombria.",
    autor: "Kentaro Miura",
    categorias: ["Ação", "Aventura", "Drama", "Fantasia sombria", "Terror"]
  },
  {
    nome: "One-Punch Man",
    imagem: "imagens/capas/onepunch.png",
    descricao: "Saitama é tão poderoso que derrota quase qualquer inimigo com um único golpe, mas procura um desafio de verdade.",
    autor: "ONE (roteiro), Yusuke Murata (arte)",
    categorias: ["Ação", "Comédia", "Ficção científica", "Super-heróis"]
  },
  {
    nome: "JoJo's Bizarre Adventure",
    imagem: "imagens/capas/jojo.png",
    descricao: "Diferentes gerações da família Joestar enfrentam inimigos extraordinários em aventuras cheias de poderes e estilo.",
    autor: "Hirohiko Araki",
    categorias: ["Ação", "Aventura", "Sobrenatural"]
  },
  {
    nome: "Monster",
    imagem: "imagens/capas/monster.png",
    descricao: "Um cirurgião passa a investigar um antigo paciente ligado a uma sequência de crimes e a um mistério perturbador.",
    autor: "Naoki Urasawa",
    categorias: ["Drama", "Mistério", "Suspense", "Psicológico"]
  },
  {
    nome: "Demon Slayer",
    imagem: "imagens/capas/demonslayer.png",
    descricao: "Tanjiro se torna um caçador de demônios para salvar sua irmã e vingar sua família.",
    autor: "Koyoharu Gotouge",
    categorias: ["Ação", "Aventura", "Fantasia", "Sobrenatural"]
  },
  {
    nome: "Naruto",
    imagem: "imagens/capas/naruto.png",
    descricao: "Naruto Uzumaki treina para se tornar Hokage e conquistar o reconhecimento de sua vila.",
    autor: "Masashi Kishimoto",
    categorias: ["Ação", "Aventura", "Fantasia"]
  },
  {
    nome: "Jujutsu Kaisen",
    imagem: "imagens/capas/jujutsu.png",
    descricao: "Yuji Itadori entra no mundo dos feiticeiros jujutsu após se envolver com um objeto amaldiçoado poderoso.",
    autor: "Gege Akutami",
    categorias: ["Ação", "Fantasia", "Terror", "Sobrenatural"]
  },
  {
    nome: "Jagaaaaan",
    imagem: "imagens/capas/jagaan.png",
    descricao: "Um policial insatisfeito ganha poderes após um evento sobrenatural desencadear transformações violentas nas pessoas.",
    autor: "Muneyuki Kaneshiro (roteiro), Kensuke Nishida (arte)",
    categorias: ["Ação", "Terror", "Psicológico", "Sobrenatural"]
  },
  {
    nome: "Tokyo Ghoul",
    imagem: "imagens/capas/tokyoghoul.png",
    descricao: "Após um encontro fatal, Ken Kaneki passa a viver entre humanos e ghouls, criaturas que se alimentam de carne humana.",
    autor: "Sui Ishida",
    categorias: ["Ação", "Drama", "Terror", "Sobrenatural"]
  },
  {
    nome: "Zatch Bell!",
    imagem: "imagens/capas/zatchbell.png",
    descricao: "Kiyo e o pequeno mamodo Zatch participam de uma batalha entre mamodos para decidir quem será o rei de seu mundo.",
    autor: "Makoto Raiku",
    categorias: ["Ação", "Aventura", "Comédia", "Fantasia"]
  },
  {
    nome: "The World Is Mine",
    imagem: "imagens/capas/worldismine.png",
    descricao: "Uma história sombria e provocadora acompanha violência, caos e personagens à margem da sociedade.",
    autor: "Hideki Arai",
    categorias: ["Drama", "Psicológico", "Suspense"]
  },
  {
    nome: "BLAME!",
    imagem: "imagens/capas/blame.png",
    descricao: "Em uma megaconstrução tecnológica quase infinita, Killy procura humanos com genes capazes de acessar o sistema da cidade.",
    autor: "Tsutomu Nihei",
    categorias: ["Ação", "Ficção científica", "Mistério"]
  },
  {
    nome: "Vagabond",
    imagem: "imagens/capas/vagabond.png",
    descricao: "A trajetória do espadachim Miyamoto Musashi é retratada em uma jornada de combate, disciplina e autoconhecimento.",
    autor: "Takehiko Inoue",
    categorias: ["Ação", "Aventura", "Drama", "Histórico"]
  },
  {
    nome: "Daemons of the Shadow Realm",
    imagem: "imagens/capas/daemon.png",
    descricao: "Yuru descobre uma ligação extraordinária com seres sobrenaturais e segredos que envolvem seu passado e sua família.",
    autor: "Hiromu Arakawa",
    categorias: ["Ação", "Aventura", "Fantasia", "Sobrenatural"]
  },
  {
    nome: "My Hero Academia",
    imagem: "imagens/capas/bokunohero.png",
    descricao: "Em um mundo onde a maioria das pessoas tem superpoderes, Izuku Midoriya luta para se tornar um herói.",
    autor: "Kohei Horikoshi",
    categorias: ["Ação", "Comédia", "Super-heróis"]
  },
  {
    nome: "Black Clover",
    imagem: "imagens/capas/blackclover.png",
    descricao: "Asta, um jovem sem magia em um mundo mágico, busca se tornar o Rei Mago por meio de esforço e determinação.",
    autor: "Yūki Tabata",
    categorias: ["Ação", "Aventura", "Fantasia"]
  },
  {
    nome: "Dandadan",
    imagem: "imagens/capas/dandadan.png",
    descricao: "Dois adolescentes investigam fenômenos paranormais e extraterrestres, acabando envolvidos em situações absurdas e perigosas.",
    autor: "Yukinobu Tatsu",
    categorias: ["Ação", "Comédia", "Romance", "Sobrenatural", "Ficção científica"]
  },
  {
    nome: "Blue Lock",
    imagem: "imagens/capas/blulock.png",
    descricao: "Jovens atacantes competem em um programa radical criado para encontrar o melhor centroavante do Japão.",
    autor: "Muneyuki Kaneshiro (roteiro), Yusuke Nomura (arte)",
    categorias: ["Esportes", "Drama"]
  },
  {
    nome: "The Fragrant Flower Blooms with Dignity",
    imagem: "imagens/capas/fragantflower.png",
    descricao: "Dois estudantes de escolas com reputações opostas se aproximam e desafiam os preconceitos ao redor deles.",
    autor: "Saka Mikami",
    categorias: ["Romance", "Drama", "Slice of life"]
  },
  {
    nome: "Three Days of Happiness",
    imagem: "imagens/capas/3days.png",
    descricao: "Um jovem vende grande parte de sua expectativa de vida e passa a reconsiderar o valor dos dias que lhe restam.",
    autor: "Sugaru Miaki (história), Shōichi Taguchi (arte)",
    categorias: ["Romance", "Drama", "Sobrenatural"]
  },
  {
    nome: "A Silent Voice",
    imagem: "imagens/capas/silentvoice.png",
    descricao: "Um antigo agressor tenta reparar os danos causados a uma colega surda e reconstruir suas relações.",
    autor: "Yoshitoki Ōima",
    categorias: ["Drama", "Romance", "Slice of life"]
  },
  {
    nome: "Shikimori's Not Just a Cutie",
    imagem: "imagens/capas/sakamori.png",
    descricao: "A relação entre um rapaz azarado e sua namorada, que revela um lado confiante e protetor, acompanha o cotidiano escolar dos dois.",
    autor: "Keigo Maki",
    categorias: ["Romance", "Comédia", "Slice of life"]
  },
  {
    nome: "Call of the Night",
    imagem: "imagens/capas/callofthenight.png",
    descricao: "Um estudante insone conhece uma vampira e começa a explorar a vida noturna enquanto considera tornar-se um vampiro.",
    autor: "Kotoyama",
    categorias: ["Romance", "Sobrenatural", "Comédia", "Drama"]
  },
  {
    nome: "Kaguya-sama: Love Is War",
    imagem: "imagens/capas/loveiswar.png",
    descricao: "Dois estudantes brilhantes gostam um do outro, mas transformam a confissão amorosa em uma disputa estratégica.",
    autor: "Aka Akasaka",
    categorias: ["Romance", "Comédia", "Slice of life"]
  },
  {
    nome: "Grand Blue",
    imagem: "imagens/capas/grandblue.png",
    descricao: "Na universidade, Iori se envolve com um clube de mergulho e uma sequência de situações cômicas e exageradas.",
    autor: "Kenji Inoue (história), Kimitake Yoshioka (arte)",
    categorias: ["Comédia", "Slice of life"]
  },
  {
    nome: "My Dress-Up Darling",
    imagem: "imagens/capas/sonobisque.png",
    descricao: "Um estudante apaixonado por bonecas tradicionais ajuda uma colega extrovertida a criar cosplays.",
    autor: "Shinichi Fukuda",
    categorias: ["Romance", "Comédia", "Slice of life"]
  },
  {
    nome: "The Ramparts of Ice",
    imagem: "imagens/capas/ice.png",
    descricao: "Uma estudante reservada tenta lidar com as relações sociais e os sentimentos que surgem em seu cotidiano escolar.",
    autor: "Kōcha Agasawa",
    categorias: ["Drama", "Romance", "Slice of life"]
  },
  {
    nome: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You",
    imagem: "imagens/capas/100girl.png",
    descricao: "Após receber uma previsão absurda, Rentaro conhece várias almas gêmeas e tenta fazer todas felizes.",
    autor: "Rikito Nakamura (história), Yukiko Nozawa (arte)",
    categorias: ["Romance", "Comédia"]
  },
  {
    nome: "Solanin",
    imagem: "imagens/capas/solanim.png",
    descricao: "Jovens adultos tentam descobrir o que querem da vida enquanto enfrentam trabalho, amor, perdas e incertezas.",
    autor: "Inio Asano",
    categorias: ["Drama", "Slice of life"]
  },
  {
    nome: "Dorohedoro",
    imagem: "imagens/capas/dorohedoro.png",
    descricao: "Caiman, um homem com cabeça de lagarto e amnésia, procura o feiticeiro responsável por sua transformação.",
    autor: "Q Hayashida",
    categorias: ["Ação", "Comédia", "Fantasia sombria", "Mistério"]
  },
  {
    nome: "We Did It",
    imagem: "imagens/capas/wedidit.png",
    descricao: "Um grupo de jovens vê sua vida mudar drasticamente após um incidente violento e suas consequências.",
    autor: "Muneyuki Kaneshiro (história), Akeji Fujimura (arte)",
    categorias: ["Drama", "Romance", "Suspense"]
  },
  {
    nome: "Look Back",
    imagem: "imagens/capas/lookback.png",
    descricao: "Duas jovens artistas desenvolvem uma ligação por meio do desenho, da rivalidade e de acontecimentos inesperados.",
    autor: "Tatsuki Fujimoto",
    categorias: ["Drama", "Slice of life"]
  },
  {
    nome: "Goodbye, Eri",
    imagem: "imagens/capas/sayonaraeri.png",
    descricao: "Um garoto registra sua vida em vídeo e cria um filme que mistura memória, luto e ficção.",
    autor: "Tatsuki Fujimoto",
    categorias: ["Drama", "Mistério", "Psicológico"]
  },
  {
    nome: "The Girl from the Other Side",
    imagem: "imagens/capas/garotadooutrolado.png",
    descricao: "Uma menina humana e uma criatura misteriosa formam um vínculo em um mundo dividido entre os que podem e os que não podem se tocar.",
    autor: "Nagabe",
    categorias: ["Drama", "Fantasia sombria", "Mistério"]
  },
  {
    nome: "Homunculus",
    imagem: "imagens/capas/homunculos.png",
    descricao: "Após um procedimento experimental, um homem passa a enxergar manifestações estranhas ligadas à psique das pessoas.",
    autor: "Hideo Yamamoto",
    categorias: ["Drama", "Mistério", "Psicológico", "Terror"]
  },
  {
    nome: "Takopi's Original Sin",
    imagem: "imagens/capas/takopy.png",
    descricao: "Uma criatura alienígena tenta espalhar felicidade na Terra, mas se depara com situações humanas dolorosas e complexas.",
    autor: "Taizan 5",
    categorias: ["Drama", "Ficção científica", "Psicológico"]
  },
  {
    nome: "Pluto",
    imagem: "imagens/capas/pluto.png",
    descricao: "Um detetive robô investiga uma série de assassinatos que ameaça humanos e robôs em um mundo futurista.",
    autor: "Naoki Urasawa (história e arte), baseado em Astro Boy de Osamu Tezuka",
    categorias: ["Ficção científica", "Mistério", "Drama", "Suspense"]
  },
  {
    nome: "20th Century Boys",
    imagem: "imagens/capas/20centry.png",
    descricao: "Um grupo de amigos tenta descobrir a identidade de uma figura misteriosa ligada a uma profecia de infância.",
    autor: "Naoki Urasawa",
    categorias: ["Mistério", "Ficção científica", "Suspense", "Drama"]
  },
  {
    nome: "Billy Bat",
    imagem: "imagens/capas/billybat.png",
    descricao: "Um cartunista investiga o significado de um personagem de quadrinhos e se envolve em uma conspiração que atravessa épocas.",
    autor: "Naoki Urasawa (história e arte), Takashi Nagasaki (colaboração)",
    categorias: ["Mistério", "Suspense"]
  },
  {
    nome: "Bibliomania",
    imagem: "imagens/capas/bibliomania.png",
    descricao: "Uma jovem acorda em uma mansão estranha e precisa atravessar seus quartos enquanto tenta escapar de um destino inquietante.",
    autor: "Orval (história), Macchiro (arte)",
    categorias: ["Terror", "Fantasia sombria", "Mistério"]
  },
  {
    nome: "100 Ghost Stories That Will Lead to My Death",
    imagem: "imagens/capas/100ghost.png",
    descricao: "Uma coleção de histórias de terror que acompanha relatos sobrenaturais e acontecimentos assustadores.",
    autor: "Autor não confirmado a partir do material fornecido",
    categorias: ["Terror", "Sobrenatural"]
  },
  {
    nome: "Uzumaki",
    imagem: "imagens/capas/uzumaki.png",
    descricao: "Uma cidade é tomada por uma maldição inexplicável relacionada a formas espirais, que transforma seus habitantes e o ambiente.",
    autor: "Junji Ito",
    categorias: ["Terror", "Sobrenatural", "Psicológico"]
  },
  {
    nome: "Frankenstein",
    imagem: "imagens/capas/frankstein.png",
    descricao: "Uma adaptação de horror inspirada no clássico de Mary Shelley, com a abordagem grotesca e sobrenatural de Junji Ito.",
    autor: "Junji Ito",
    categorias: ["Terror", "Sobrenatural"]
  },
  {
    nome: "Hellstar Remina",
    imagem: "imagens/capas/remina.png",
    descricao: "A descoberta de um planeta monstruoso com o nome de uma jovem desencadeia pânico e uma ameaça cósmica.",
    autor: "Junji Ito",
    categorias: ["Terror", "Ficção científica"]
  },
  {
    nome: "Tomie",
    imagem: "imagens/capas/tomie.png",
    descricao: "Uma jovem misteriosa parece retornar repetidamente à vida e provoca obsessão, violência e horror nas pessoas ao redor.",
    autor: "Junji Ito",
    categorias: ["Terror", "Sobrenatural"]
  },
  {
    nome: "Hunter x Hunter",
    imagem: "imagens/capas/hunter.png",
    descricao: "Gon parte em busca do pai e enfrenta provas perigosas para se tornar um Hunter, explorador de elite.",
    autor: "Yoshihiro Togashi",
    categorias: ["Ação", "Aventura", "Fantasia"]
  },
  {
    nome: "Gachiakuta",
    imagem: "imagens/capas/gachiakuta.png",
    descricao: "Acusado injustamente, Rudo é lançado em um abismo e precisa sobreviver em um mundo formado pelos resíduos da sociedade.",
    autor: "Kei Urana (história e arte), Hideyoshi Andou (design de graffiti)",
    categorias: ["Ação", "Aventura", "Fantasia"]
  },
  {
    nome: "Witch Hat Atelier",
    imagem: "imagens/capas/atelier.png",
    descricao: "Coco descobre os segredos da magia e começa seu aprendizado em um mundo onde feitiços dependem de desenhos.",
    autor: "Kamome Shirahama",
    categorias: ["Aventura", "Fantasia"]
  },
  {
    nome: "The Beginning After the End",
    imagem: "imagens/capas/begningafter.png",
    descricao: "Um rei renasce em um mundo de magia e monstros, levando consigo as memórias de sua vida anterior.",
    autor: "TurtleMe (história), Fuyuki23 (arte do manhwa)",
    categorias: ["Ação", "Aventura", "Fantasia"]
  },
  {
    nome: "The Climber",
    imagem: "imagens/capas/climber.png",
    descricao: "Um estudante descobre a escalada e enfrenta desafios físicos e emocionais em sua busca por superar os próprios limites.",
    autor: "Shinichi Sakamoto (arte), Yoshirō Nabeda (roteiro inicial)",
    categorias: ["Drama", "Esportes", "Psicológico"]
  },
  {
    nome: "Mushishi",
    imagem: "imagens/capas/mushishi.png",
    descricao: "Ginko viaja por regiões remotas investigando mushi, formas de vida misteriosas que afetam o mundo natural e os humanos.",
    autor: "Yuki Urushibara",
    categorias: ["Aventura", "Drama", "Fantasia", "Sobrenatural"]
  }
];

export default mangas;
export { mangas };