let restaurants

export default class ResturantsDAO{
    static async injectDB(conn)
        {
            if(restaurants){
                return
            }
            try{
                restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
            }
        catch(e){
            console.error(
                `Unable to establish a connection handle in ResturantsDAO: ${e}`
            )
        }
    }
    static async getRestaurants({
        filters = null,
        page = 0,
        restaurantsPerPage = 20,
    } = {}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text: {$search: filters["name"]}}
            }
        }
    }
}