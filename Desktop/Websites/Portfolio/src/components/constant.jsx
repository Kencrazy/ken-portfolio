import yungkai from "../assets/music/blue_yung.m4a"
import telescope from "../assets/music/telescope.m4a"
import pombeii from "../assets/music/pombeii.m4a"
import hers from "../assets/music/hers.mp3"
import copacabana from "../assets/music/copacabana.mp3"
import wonder_of_u from "../assets/music/wonder_of_u.mp3"

import WebsiteEcommerceTemplate1 from "../screens/ServiceShelf/ServiceDetail/projects/website/ecommerce/template1"
import thumbnailWebsiteEcommerceTemplate1 from "../assets/thumbnailwet1.png"

import WebsiteEcommerceTemplate2 from "../screens/ServiceShelf/ServiceDetail/projects/website/ecommerce/template2"
import thumbnailWebsiteEcommerceTemplate2 from "../assets/designwet2.png"

export const screenElements = [
    {id:1, name: 'Home', path: '/',iconName: 'home-outline',activeColor:'#f55b49'},
    {id:6, name: 'Project', path: '/project',iconName: 'brush-outline',activeColor:'#d072e8'},
    {id:4, name: 'Services', path: '/services',iconName: 'cart-outline',activeColor:'#e38a2b'},
    {id:2, name: 'About', path: '/about',iconName: 'person-circle-outline',activeColor:'#4960f5'},
    {id:3, name: 'Contact', path: '/contact',iconName: 'mail-outline',activeColor:'#2be337'},
    {id:5, name: 'Portfolio', path: '/portfolio',iconName: 'trophy-outline',activeColor:'#dba309'},
]

export const musicList = [
    {id: 1, name: "yung kai - blue", audio: yungkai},
    {id: 2, name: "Telescope - Tim Legend", audio: telescope},
    {id: 3, name: "Pombeii - Bastille", audio: pombeii},
    {id: 4, name: "Hers - Harvey", audio: hers},
    {id: 5, name: "Copacabana - Barry Manilow", audio: copacabana},
    {id: 6, name: "Wonder of You - Elvis Presley", audio: wonder_of_u}
]

export const serviceDetail = {
  ecommerce: {
    adminLink: "https://kencrazy.github.io/admin-keyview/",
    templates: [
      {
        title: "E-commerce Template 1",
        description: "A modern e-commerce template with secure payment integration and inventory management.",
        image: thumbnailWebsiteEcommerceTemplate1,
        isComplete:true,
        template: <WebsiteEcommerceTemplate1/>,
      },
      {
        title: "E-commerce Template 2",
        description: "A sleek, responsive e-commerce template with customizable themes and a built-in contact form.",
        image: thumbnailWebsiteEcommerceTemplate2,
        isComplete:true,
        template: <WebsiteEcommerceTemplate2/>,
      }
    ],
  },
  portfolio: {
    adminLink: "", 
    templates: [
     
    ],
  },
  blog: {
    adminLink: "", 
    templates: [
   
    ],
  },
  landing: {
    adminLink: "", 
    templates: [
      
    ],
  },
  nonprofit: {
    adminLink: "", 
    templates: [
     
    ],
  },
  education: {
    adminLink: "", 
    templates: [
   
    ],
  },
  membership: {
    adminLink: "", 
    templates: [
      
    ],
  },
};