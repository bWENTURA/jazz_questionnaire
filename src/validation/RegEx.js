export const validName = /^\p{L}{3,}$/u;

export const validSurname = /^\p{L}{3,}$/u;

export const validEmail = /^(?<name>[a-zA-Z0-9.!#$%&*+=?^_`{|}~-]+)@(?<domain>[a-zA-Z0-9-]+)(?<tld>[.][a-zA-Z]{2,12})$/

export const validPhone = /^(?<phoneNumber>)(\d{3})[ -]?(\d{3})[ -]?(\d{3})$/

export const validDate = /^(?<date>[0-9]{4}[-][0-9]{2}[-][0-9]{2})$/

export const validButton = (value) => {
    return value.length > 2
}