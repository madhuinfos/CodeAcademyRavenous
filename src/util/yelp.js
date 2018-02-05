const apikey = 'pD9F5urQ7MxA7J5QaPA4hXwZsVMeRXOnJdcK7o88-B0S7hbwWNoM3UuMaJxG4wJustSzBEEslMeunAEsUPMfAMKA10Do7RZEEttuLOEaSmFaAQBV7ceByoALu_52WnYx';
let business = {imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
const businesses = [business, business, business, business, business, business];

const Yelp ={
search(term, location, sortBy){
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='+term+'&location='+location+'&sort_by='+sortBy,
    {
      headers:{
        Authorization: 'Bearer '+ apikey
      }
    }
  ).then(response => response.json()).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business => ({
          id:business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.address,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: 'Italian',
          rating: business.rating,
          reviewCount: business.review_count
      }));
    }
  });
}
};

export default Yelp;
