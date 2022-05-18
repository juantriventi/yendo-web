const controlador = {
    index: (req,res) => {
        res.render("home");
    },
    playas: (req,res) => {
        res.render("playas");
    },
    camping: (req,res) => {
        res.render("camping");
    },
    afters: (req,res) => {
        res.render("afters");
    },
    noche: (req,res) => {
        res.render("noche");
    },
    deportesAcuaticos: (req,res) => {
        res.render("deportes");
    },
    alquileres: (req,res) => {
        res.render("alquileres");
    },
    spots: (req,res) => {
        res.render("spots");
    },
    puertoBlest: (req,res) => {
        res.render("puertoBlest");
    }
}
    module.exports = controlador