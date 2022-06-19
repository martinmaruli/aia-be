const fetch = require("node-fetch")

module.exports = {
    getFlickr : async (req, res) => {
        const {search} = req.body
        try {
            const data = await fetch(`https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=1&tags=${search}`)
            const text = await data.text()
            const json = JSON.parse(text)
            const result = json.items.map( (el) => {
                return {
                    title: el.title,
                    link: el.media.m
                }
            })
            res.status(200).json(result);
        } catch (e) {
            res.status(500).json({
                message: e.message,
                status: "Internal Server Error",
              })
        }
    }  
}