import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import Odalar from './Odalar'

function Schedule() {
    const [dateInterval, setdateInterval] = useState(new Date("9/1/2021"))
    const initOdalar = [
        {
            odaId : 1,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/01/2021",
            gün2 : "9/4/2021" 
        },
        {
            odaId : 2,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/02/2021",
            gün2 : "9/11/2021" 
        },
        {
            odaId : 3,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/02/2021",
            gün2 : "9/3/2021" 
        },
        {
            odaId : 4,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/02/2021",
            gün2 : "9/3/2021" 
        }
    ]
    console.log("object",dateInterval)
    const [odalar, setodalar] = useState(initOdalar)

    var aySecildi = (girdi) =>{
        //buraya ayı seçince hangi aysa o ayın ilk gününü dateIntervale verirsin. Aşagıdakini dinamik yaparsın
        // her seçilen ay için değişince odalar da otomatik değişir.
        setdateInterval(new Date("9/1/2021"))
        setodalar(prev =>(
            initOdalar.filter(i => (dateInterval.getDate() <= (new Date(i.gün1)).getDate() & dateInterval.getDate() < (new Date(i.gün1)).getDate() + 7))
        ))
    }

    var dateChanger = (inputchar) =>{
        console.log("msadasdasd")
        if (inputchar === ">") {
            let x = dateInterval
            x.setDate(x.getDate() +7)
            setdateInterval(prev =>(x))
            setodalar(prev =>(
                initOdalar.filter(i => (dateInterval.getDate() <= (new Date(i.gün1)).getDate() & dateInterval.getDate() < (new Date(i.gün1)).getDate() + 7))
            ))
        }
        if (inputchar === "<") {
            let x = dateInterval
            x.setDate(x.getDate() - 7)
            setdateInterval(prev =>(x))
            setodalar(prev =>(
                initOdalar.filter(i => (x.getDate() <= (new Date(i.gün1)).getDate() & x.getDate() < (new Date(i.gün1)).getDate() + 7))
            ))
        }
        
    }
    useEffect(() => {

        setodalar(prev =>(
            prev.filter(i => (dateInterval.getDate() <= (new Date(i.gün1)).getDate() & dateInterval.getDate() < (new Date(i.gün1)).getDate() + 7))
            ))
            
        }, [])
        console.log("dateintervakssls", odalar)
    return (
        <div className="schedule">
            <Navbar/>
            <Datepicker dateChanger = {dateChanger} dateInterval={dateInterval} aySecildi={aySecildi}/>
            <Odalar dates = {dateInterval} odalar ={odalar}/>
        </div>
    )
}

export default Schedule
