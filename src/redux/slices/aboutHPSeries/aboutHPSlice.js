import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        intro: "The Harry Potter series is a popular fantasy franchise created by British author J.K. Rowling. The series consists of seven main books, which were later adapted into eight movies. The story follows the journey of a young wizard named Harry Potter and his friends Hermione Granger and Ron Weasley as they attend the Hogwarts School of Witchcraft and Wizardry.",
        text: "Harry Potter discovers that he is a famous wizard and that he survived an attack from the dark wizard Lord Voldemort as a baby, which left him with a lightning-shaped scar on his forehead. Throughout the series, Harry learns about his magical abilities, uncovers the truth about his parents' death, and confronts Voldemort and his followers, known as Death Eaters.",
        text2: "The books and movies are set in a magical world where wizards and witches coexist with ordinary people, known as Muggles. The series features various magical creatures, spells, and artifacts, and explores themes of friendship, love, good versus evil, and the importance of choices."
    }
    
}

export const aboutHPSlice = createSlice({
    name: "aboutHP",
    initialState,
    reducers:{
        loadAboutData:(state,action) =>{
            state.data = action.payload
        }
    }
})

export const {loadAboutHPData} = aboutHPSlice.actions

export default aboutHPSlice.reducer