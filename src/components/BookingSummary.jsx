import { DetailRezervace } from "./DetailRezervace";
import { DoplnkoveSluzby } from "./DoplnkoveSluzby";
import { Storno } from "./Storno";
import { Summary } from "./Summary";


//data pro komponentu BookingSummary
export const hoteloveDetailyApi = { 
    name: 'Hotel Lesní Zátiší',
    address: 'Malohradské skály 347/21',
    city: 'Malohradská ves',
    rating: '4.65',
    roomnumber: '2',
    roomtype: 'Dvoulůžkový s dětskou přistýlkou',
    price: '1 800 Kč / noc',
    bookingnum: 'Číslo: 459787-745',
    dates: '13.6.2023 - 17.6.2026',
    guests: 'Hosté: 2 dospělí, 1 dítě',
    food: 'žádné',
    totalprice: '7 200 Kč',
    checkin: '13.6.2023 do 18:00',
    checkout: ' 17.6.2026 do 10:00',
    parking: 'Parkování: 200 Kč / noc',
    breakfast: 'Snídaně: 150 Kč / noc',
    wellness: 'Wellness: Zdarma',
    wifi: 'Wifi: Zdarma na všech pokojích'
}
   
const {name, address, city, rating, roomnumber, roomtype, price, 
    bookingnum, dates, guests, food, totalprice, checkin, checkout,
    parking, breakfast, wellness, wifi} = hoteloveDetailyApi


export const BookingSummary = () => {
    return (
    <>
    <Summary 
        hotel={name}
        address={address}
        city={city}
        rating={rating}
        roomnum={roomnumber}
        roomtype={roomtype}
        price={price}
    />

    <DetailRezervace 
        bookingnum={bookingnum}
        dates={dates}
        guests={guests}
        food={food}
        totalprice={totalprice}
        checkin={checkin}
        checkout={checkout}
    />

    <DoplnkoveSluzby 
        parking={parking}
        breakfast={breakfast}
        wellness={wellness}
        wifi={wifi}

    />

    <Storno />
    </>
    )
  }