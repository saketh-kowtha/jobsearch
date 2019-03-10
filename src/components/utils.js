/**
 * Author: Saketh Kowtha
 * Description: This is helper functions file
 */

 /** this method returns an Array json which consists of user required job results based on skills input */
let compareSkills = (state, data) => {
    let empSkills = state.skills.split(",")
    let resultSet =  data.filter((ele) => {
        let requiredSkills = (ele.skills.toLocaleUpperCase().split(",") || []).map(e => e.trim())
        for(let i of empSkills){
            if(requiredSkills.indexOf(i.toLocaleUpperCase()) !== -1){  
                return true
            }
        }
        return false
    })
    return resultSet
}

 /** this method returns an Array json which consists of user required job results based on experience input */
let compareExp = (state, data) => {
    let empExp = state.exp
    let resultSet = data.filter((ele)=>{
        let requiredExp = ele.experience || ""
        requiredExp = requiredExp.toLocaleUpperCase() 
        requiredExp = requiredExp.replace("YRS","")
        if(requiredExp.indexOf("-"))
            requiredExp = requiredExp.split("-")
        else if(requiredExp.indexOf("TO"))
            requiredExp = requiredExp.split("TO")
        requiredExp = requiredExp.map(ele => ele.trim())
        return empExp >= requiredExp || (empExp === 0 && requiredExp === "FRESHER")
    })
    return resultSet
}

 /** this method returns an Array json which consists of user required job results based on location input */
let compareLocation = (state, data) => {
    let empLocation = state.city
    return data.filter((ele) => {
        return ele.location.trim() === empLocation.trim()
    })
}

 /** this method will remove dulplicates */
let removeDuplicates= (obj, key)=> {
    return obj.filter((ele, index, self )=>  index === self.findIndex((t) => (
        t[key] === ele[key] && t[key]
     ))
   )
}

 /** this method will sort an Array based on given order */
let sort = (obj, key, order) => {
    if(order === "up")
        return obj.sort((obj1, obj2) => { 
            if(obj1[key] > obj2[key])
                return -1
            else if(obj1[key] < obj2[key])
                return 1
            return 0
        })
    else
        return obj.sort((obj1, obj2) => { 
            if(obj1[key] < obj2[key])
                return -1
            else if(obj1[key] > obj2[key])
                return 1
            return 0
        })
        
}
export default  {
    compareExp,
    compareLocation,
    compareSkills,
    removeDuplicates,
    sort
}