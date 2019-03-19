let restaurent = {
    name: 'om hotel',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seats = this.guestCapacity - this.guestCount;

          return partySize <= seats;
    },

     seatParty: function(partySize)
     {
         this.guestCount+=partySize;
        
     },

     removeParty: function(partySize)
     {
         this.guestCount-=partySize;
     }

}

restaurent.seatParty(72);
console.log(restaurent.checkAvailability(4));
restaurent.removeParty(5);
console.log(restaurent.checkAvailability(4));