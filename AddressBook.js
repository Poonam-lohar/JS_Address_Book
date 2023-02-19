//Printing a welcome note to console
console.log("Welcome to address book system!");

class AddressBookContact {

    constructor (firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zipCode+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }
}

/**
 * Created a new contact
 */
let addressBook = new AddressBookContact("Poonam", "Lohar", "Sambhaji Chowk", 
    "kolhapur", "Maharashtra", 416103, "9089786787", "poonam@gmail.com");

//Printing the added contact to console
console.log(addressBook.toString());



