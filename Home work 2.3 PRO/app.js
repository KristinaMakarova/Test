const titleProject = prompt('Project name?')
console.log(`Progect name is ${titleProject}`)

const screensValue = prompt('Select the type of screens: templates, with unique design, with animations')
console.log(`${screensValue}`)

const responsive = confirm('Do you need a responsive site?')
console.log(`${responsive}`)

const service1 = prompt('What kind of service is needed?')
const servicePrice1 = prompt('How much does it cost?')
const service2 = prompt('Will more service be needed?')
const servicePrice2 = prompt('How much does additional service cost?')
console.log(`First service: ${service1}, Price: ${servicePrice1}`)
console.log(`Second service: ${service2}, Price: ${servicePrice2}`)

const screenPrice = 10000
const fullPrice = +screenPrice + +servicePrice1 + +servicePrice2
console.log(`Commercial offer: ${fullPrice}`)

if (fullPrice > 50000) {
    console.log("You get a 10% discount")
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("You get a 5% discount")
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("There is no discount")
} else if (fullPrice === 0) {
    console.log("Smth went wrong")
} else {
    console.log("Smth went wrong again....")
}


const servicePercentPrice = Math.round(fullPrice - (fullPrice * (15/ 100)))
console.log(`Final price ${servicePercentPrice}`)