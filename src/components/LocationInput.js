import React, { Component } from 'react';

export default class LocationInput extends Component{
    constructor(){
        super()
        this.state = {
            city: '',
            experience: 0
        }
        setInterval(() => console.log(this.state), 2000)
        this.setCountry = this.setCountry.bind(this)
        this.setExperience = this.setExperience.bind(this)

    }
    setCountry(e) {
        this.setState({ city: e.target.value });
    }
    setExperience(e){
        this.setState({ value: e.target.value });
    }
    render(){
        let cities = [
            "Agartala",
            "Agra",
            "Agumbe",
            "Ahmedabad",
            "Aizawl",
            "Ajmer",
            "Alappuzha Beach",
            "Allahabad",
            "Alleppey",
            "Almora",
            "Amarnath",
            "Amritsar",
            "Anantagir",
            "Andaman and Nicobar Islands",
            "Araku valley",
            "Aurangabad",
            "Ayodhya",
            "Badrinath",
            "Bangalore",
            "Baroda",
            "Bastar",
            "Bhagalpur",
            "Bhilai",
            "Bhimtal",
            "Bhopal",
            "Bhubaneswar",
            "Bhuj",
            "Bidar",
            "Bilaspur",
            "Bodh Gaya",
            "Calicut",
            "Chail",
            "Chamba",
            "Chandigarh",
            "Chennai",
            "Chennai Beaches",
            "Cherai",
            "Cherrapunji",
            "Chidambaram",
            "Chikhaldara Hills",
            "Chopta",
            "Coimbatore",
            "Coonoor",
            "Coorg",
            "Corbett National Park",
            "Cotigao Wild Life Sanctuary",
            "Cuttack",
            "Dadra and Nagar Haveli",
            "Dalhousie",
            "Daman and Diu",
            "Darjeeling",
            "Dehradun",
            "Delhi",
            "Devikulam",
            "Dhanaulti",
            "Dharamashala",
            "Dindigul",
            "Dudhwa National Park",
            "Dwaraka",
            "Faridabad",
            "Gandhinagar",
            "Gangotri",
            "Gangtok",
            "Gir Wildlife Sanctuary",
            "Goa",
            "Great Himalayan National Park",
            "Gulmarg",
            "Gurgaon",
            "Guruvayoor",
            "Guwahati",
            "Gwalior",
            "Hampi",
            "Haridwar",
            "Hogenakkal",
            "Horsley Hills",
            "Hyderabad",
            "Idukki",
            "Imphal",
            "Indore",
            "Itangar",
            "Jabalpur",
            "Jaipur",
            "Jaisalmer",
            "Jalandhar",
            "Jammu",
            "Jamshedpur",
            "Jodhpur",
            "Kanchipuram",
            "Kanha National Park",
            "Kanpur",
            "Kanyakumari",
            "Kargil",
            "Karwar",
            "Kausani",
            "Kedarnath",
            "Keoladeoghana National Park",
            "Khajuraho",
            "Kochi",
            "Kodaikanal",
            "Kolkata",
            "Kollam",
            "Konark",
            "Kotagiri",
            "Kottakkal and Ayurveda",
            "Kovalam",
            "Kovalam and Ayurveda",
            "Kudremukh",
            "Kullu",
            "Kumaon",
            "Kumarakom",
            "Kumarakom and Ayurveda",
            "Kumarakom Bird Sanctuary",
            "Kurukshetra",
            "Lakshadweep",
            "Lucknow",
            "Ludhiana",
            "Madurai",
            "Mahabalipuram",
            "Malpe Beach",
            "Manas National Park",
            "Mangalore",
            "Maravanthe Beach",
            "Margoa",
            "Mount Abu",
            "Mumbai",
            "Munnar",
            "Mussoorie",
            "Mysore",
            "Nahsik",
            "Nalanda",
            "Nanda Devi National Park",
            "Nandi Hills",
            "Netravali Wild Life Sanctuary",
            "Ooty",
            "Orchha",
            "Pahalgam",
            "Palakkad",
            "Panchgani",
            "Patna",
            "Patnitop",
            "Pattadakkal",
            "Periyar Wildlife Sanctuary",
            "Pithoragarh",
            "Pondicherry",
            "Pune",
            "Puri",
            "Pushkar",
            "Raipur",
            "Rajaji National Park",
            "Rajgir",
            "Rameshwaram",
            "Ranchi",
            "Ranganthittu Bird Sanctuary",
            "Ranikhet",
            "Ranthambore",
            "Rishikesh",
            "Rourkela",
            "Sanchi",
            "Saputara",
            "Sariska Wildlife Sanctuary",
            "Shillong",
            "Shimla",
            "Sohna_Hills",
            "Srinagar",
            "Sunderbans",
            "Surat",
            "Tezpur",
            "Thanjavur",
            "Thiruvananthapuram",
            "Thrissur",
            "Tirunelveli",
            "Tirupati",
            "Trichy",
            "Udaipur",
            "Ujjain",
            "Vaishali",
            "Valley of Flowers",
            "Varanasi",
            "Varkala and Ayurveda",
            "Vijayawada",
            "Vishakhapatnam",
            "Vrindhavan",
            "Warangal",
            "Wayanad",
            "Wayanad Wildlife Sanctuary",
            "Yercaud",
            "Zanskar"
         ]
         
        return(
            <div className="searchContainer">
                <div>
                <span><i class="fas fa-location-arrow"></i> </span><select className="cityName" onChange={this.setCountry}>
                    {cities.map(ele => <option>{ele}</option>)}
                </select>   
                </div>
                <div>
                <span><i class="fas fa-graduation-cap"></i></span><select className="experience" onChange={this.setCountry}>
                    {Array.from(Array(16), (_,x) => <option>{x}</option>)}
                </select>
                </div>
                <div>

                </div>             

                <div className="searchBtn">
                    <div>Search</div>
                </div>
            </div>
        );
    }
}


