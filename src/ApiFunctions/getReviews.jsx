import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL

async function getAllReviews() {
    try {
        const res = await axios.get(`${url}/reviews`)
        const reviews = res.data
        console.log(reviews)
        return reviews
    }
    catch (error) {
        console.log(error)
    }

}
export default getAllReviews