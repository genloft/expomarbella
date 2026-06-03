const links = [
"https://www.calameo.com/read/007334244285c31f043a4",
"https://www.calameo.com/read/00798977796033d08fc0a",
"https://www.calameo.com/read/006180367cb596f1efb37",
"https://www.calameo.com/read/00618036748829f9c6888",
"https://www.calameo.com/read/006180367de65c934f9a8",
"https://www.calameo.com/read/006180367fc3f806d68e3",
"https://www.calameo.com/read/006180367d07b1089a3d2",
"https://www.calameo.com/read/00618036707dbf26e60e9",
"https://www.calameo.com/read/006180367b572c350cca2",
"https://www.calameo.com/read/006180367671f6c353ea9",
"https://www.calameo.com/read/006180367d3130913ee50"
];

(async () => {
    const results = [];
    let id = 14;
    for (const url of links) {
        try {
            const r = await fetch(url);
            const text = await r.text();
            const ogImageMatch = text.match(/<meta property="og:image" content="([^"]+)"/);
            const titleMatch = text.match(/<title>([^<]+)<\/title>/);
            
            results.push({
                id: id--,
                title: titleMatch ? titleMatch[1].replace('Calaméo - ', '') : `Edición Nº${id+1}`,
                date: "Edición Pasada",
                desc: "Descubre esta edición completa en nuestro visor interactivo.",
                coverUrl: ogImageMatch ? ogImageMatch[1] : "/images/hero_cover_baja.jpg",
                isNew: id === 13,
                brand: id >= 13 ? "ExpoMarbella" : "DecoMarbella",
                pdfUrl: url
            });
        } catch(e) {
            console.log("Error fetching", url);
        }
    }
    console.log(JSON.stringify(results, null, 2));
})();
