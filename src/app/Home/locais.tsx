export default function Locais() {
    const locais = [{
        "local": "Veneza",
        "pais": "Itália",
        "descricao": "A 'Cidade dos canais' é um dos destinos turísticos mais populares do mundo. Com seus canais sinuosos, pontes góticas e arquitetura renascentista, Veneza é uma cidade verdadeiramente única.",
        "img": "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2019/04/melhores-lugares-para-se-hospedar-em-veneza-1.jpg?resize=750%2C450&ssl=1",
        "valor": "R$ 5000",
        "tema": "1",
    },
    {
        "local": "Paris",
        "pais": "França",
        "descricao": "A 'Cidade da luz' é uma das cidades mais românticas do mundo. Com a Torre Eiffel, o Arco do Triunfo e o Museu do Louvre, Paris é uma cidade com uma rica história e cultura.",
        "img": "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg",
        "valor": "R$ 6000",
        "tema": "1",
    },
    {
        "local": "Roma",
        "pais": "Itália",
        "descricao": "A 'Cidade eterna' é uma das cidades mais históricas do mundo. Com o Coliseu, o Panteão e o Fórum Romano, Roma é uma cidade que respira história.",
        "img": "https://dicasdaitalia.com.br/wp-content/uploads/2015/09/praça-sao-pedro-roma.jpg",
        "valor": "R$ 4000",
        "tema": "1",
    },
    {
        "local": "Londres",
        "pais": "Inglaterra",
        "descricao": "A 'Cidade das ilhas' é uma das cidades mais cosmopolitas do mundo. Com o Big Ben, o Palácio de Buckingham e o Museu Britânico, Londres é uma cidade que oferece algo para todos.",
        "img": "https://inglaterrabrasil.com.br/wp-content/uploads/sites/8/2022/08/conheca-londres.jpg",
        "valor": "R$ 5500",
        "tema": "1",
    },
    {
        "local": "Nova York",
        "pais": "Estados Unidos",
        "descricao": "A 'Cidade que nunca dorme' é uma das cidades mais vibrantes do mundo. Com o Empire State Building, a Estátua da Liberdade e o Central Park, Nova York é uma cidade que nunca deixa de surpreender.",
        "img": "https://minhasgerais.com.br/wp-content/uploads/2019/10/nova-york-estatua-da-liberdade-estados-unidos-57571180-minhas-gerais_diamantina.jpg",
        "valor": "R$ 6500",
        "tema": "1",
    },
    {
        local: "Jericoacoara",
        pais: "Brasil",
        descricao: "Parece que você está se referindo a Jericoacoara (ou apenas Jeri), um destino turístico popular no nordeste do Brasil, localizado no estado do Ceará. Jericoacoara é conhecida por suas belezas naturais, praias deslumbrantes, e atmosfera descontraída. ",
        img: "https://mulheresqueviajamsozinhas.com.br/wp-content/uploads/2020/11/Pedra-furada-2-2.jpg",
        valor: "R$ 320",
        tema: "2"
    },
    {
        local: "Praia do Sancho",
        pais: "Brasil",
        descricao: "A Praia do Sancho é considerada uma das mais belas praias do mundo, e é fácil entender o porquê. Com águas cristalinas, areia branca e coqueiros, a praia é um verdadeiro paraíso. O acesso à praia é feito por uma trilha de cerca de 500 metros, que passa por uma fenda na rocha.",
        img: "https://viajandocomamalarosa.com.br/wp-content/uploads/2018/01/DSC05398.jpg",
        valor: "R$ 460",
        tema: "2"
    },
    {
        local: "Praia de Navagio",
        pais: "Grécia",
        descricao: "A Praia de Navagio é uma das praias mais famosas da Grécia. A praia é conhecida pelo seu navio naufragado, que fica encalhado na areia branca. As águas cristalinas e a paisagem rochosa completam o cenário deslumbrante.",
        img: "https://conteudo.imguol.com.br/c/entretenimento/9c/2023/04/18/panoramic-view-of-the-famous-navagio-shipwreck-beach-on-zakynthos-island-greece-with-people-enjoying-the-light-blue-colored-sea---historias-do-mar---naufragio-na-grecia-1681848122441_v2_4x3.jpg",
        valor: "R$ 700",
        tema: "2"

    },
    {
        local: "Praia de Anse Source d'Argent",
        pais: "Seychelles",
        descricao: "A Praia de Anse Source d'Argent é uma das praias mais fotografadas do mundo. A praia é conhecida pelas suas pedras graníticas, que formam piscinas naturais na areia. As águas cristalinas e a vegetação tropical completam o cenário idílico.",
        img: "https://www.costacruzeiros.com/content/dam/costa/costa-magazine/article-images/seychelles-beaches/10-anse-source-d'argent.jpg.image.694.390.low.jpg",
        valor: "R$ 1200",
        tema: "2"
    },
    {
        local: "Praia de Bora Bora",
        pais: "Polinésia Francesa",
        descricao: "A Praia de Bora Bora é uma das praias mais românticas do mundo. A praia é conhecida pelas suas águas cristalinas, areia branca e coqueiros. O cenário é ainda mais deslumbrante ao pôr do sol.",
        img: "https://www.costacruzeiros.com/content/dam/costa/costa-magazine/articles-magazine/beaches/praias-em-bora-bora/resort-beach_d.jpg.image.1296.974.high.jpg",
        valor: "R$ 920",
        tema: "2"
    },
    {
        local: "Praia de Whitehaven",
        pais: "Austrália",
        descricao: "A Praia de Whitehaven é conhecida pela sua areia branca e fina, que é considerada a mais branca do mundo. As águas cristalinas e a vegetação tropical completam o cenário paradisíaco.",
        img: "https://i.pinimg.com/originals/e0/c6/f2/e0c6f23d56c26e7bf8aef28b25fd28c6.jpg",
        valor: "R$ 1600",
        tema: "2"
    },
    {
        local: "Praia de Maya Bay",
        pais: "Tailândia",
        descricao: "A Praia de Maya Bay é uma das praias mais famosas da Tailândia. A praia ficou mundialmente conhecida após o filme A Praia ter sido gravado no local. As águas cristalinas, a areia branca e a vegetação tropical formam um cenário de tirar o fôlego.",
        img: "https://viagemeturismo.abril.com.br/wp-content/uploads/2021/11/humphrey-muleba-pZhlZpxP-Mo-unsplash.jpg?quality=70&strip=info&w=1024",
        valor: "R$ 2200",
        tema: "2"
    }
    ]
    return locais;
}