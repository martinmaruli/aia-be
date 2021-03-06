const fetch = require("node-fetch")

module.exports = {
    getFlickr : async (req, res) => {
        const {search} = req.body
        const page = req.query.page
        const limit = 4
        try {
            const data = await fetch(`https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=1&tags=${search}`)
            const text = await data.text()
            const json = JSON.parse(text)
            const result = await json.items.map( (el) => {
                return {
                    title: el.title,
                    link: el.media.m
                }
            })

            const startIndex = (page - 1) * limit
            const endIndex = page * limit

            let allPage = 0
            if((result.length % limit) == 0){
                allPage = result.length / limit
            }else{
                allPage = (result.length / limit) + 1
            }
 
            res.status(200).json({
                allPage,
                data: result.slice(startIndex, endIndex)
            });
        } catch (e) {
            res.status(500).json({
                message: e.message,
                status: "Internal Server Error",
              })
        }
    }  
}