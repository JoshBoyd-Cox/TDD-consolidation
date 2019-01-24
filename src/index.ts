//get the 3 name test green
//handle a single name
//capitalise all names apart from 'de'



export class NameCombiner {

    name: string;
    firstName: string;
    middleName: string;
    lastName:string;

    combine(firstName: string, lastName: string) {
        this.name = firstName + " " + lastName;
    }

    split(name: string) {
        let parts = name.split(" ");
        this.firstName = this.capitaliseLetter(parts[0]);
        
        if (parts.length === 2) {
            this.lastName = this.capitaliseLetter(parts[1]);
            return this.firstName + this.lastName;
        }

        else if (parts.length === 3) {
            this.middleName = parts[1];
            this.lastName = this.capitaliseLetter(parts[2]);
            return this.firstName + this.middleName + this.lastName;
        }
    }

    capitaliseLetter(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}