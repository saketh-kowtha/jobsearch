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

let compareLocation = (state, data) => {
    let empLocation = state.city
    return data.filter((ele) => {
        return ele.location.trim() === empLocation.trim()
    })
}

let removeDuplicates= (obj, key)=> {
    return obj.filter((ele, index, self )=>  index === self.findIndex((t) => (
        t[key] === ele[key] && t[key]
     ))
   )
}

let sort = (obj, key) => {
    return obj.sort((obj1, obj2) => {
        if(obj1[key] > obj2[key])
            return -1
        else if(obj1[key] < obj2[key])
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