import axios from 'axios';
import util from "./utils"

const getCities = (cb) => {
    axios.get("https://api.myjson.com/bins/kez8a").then((resp) => {
        if(resp.status === 200 && resp.statusText === "OK"){
           let result = resp.data.jobsfeed.map(ele => ele.location !== "" && ({key: ele.location, value: ele.location, text: ele.location}))
           
           cb(util.removeDuplicates(result, "key"))
        }
    }).catch((err) => {

    })
}

export default getCities