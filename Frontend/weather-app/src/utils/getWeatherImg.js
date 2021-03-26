import snow from '../assets/Snow.png'
import sleet from '../assets/Sleet.png'
import hail from '../assets/Hail.png'
import thunderstorm from '../assets/Thunderstorm.png'
import heavyRain from '../assets/HeavyRain.png'
import lightRain from '../assets/LightRain.png'
import shower from '../assets/Shower.png'
import heavyCloud from '../assets/HeavyCloud.png'
import lightCloud from '../assets/LightCloud.png'
import clear from '../assets/Clear.png'

function getWeatherImg(abbr) {
    switch (abbr) {
        case 'sn':
            return snow
        case 'sl':
            return sleet
        case 'h':
            return hail
        case 't':
            return thunderstorm
        case 'hr':
            return heavyRain
        case 'lr':
            return lightRain
        case 's':
            return shower
        case 'hc':
            return heavyCloud
        case 'lc':
            return lightCloud
        case 'c':
            return clear
        default:
            return "";
    }
}

export default getWeatherImg
