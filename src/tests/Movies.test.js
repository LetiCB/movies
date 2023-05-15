import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import HarryPotterSpecial from "../components/HarryPotter";
import { configureStore } from "@reduxjs/toolkit";
import Navbar from "../components/Navbar";

describe("Harry Potter Special component", ()=> {

    beforeEach(()=> {
        render(<Provider store={store}> <HarryPotterSpecial/> </Provider>)
    })

    test("Verify that the title Harry Potter Special is displayed on screen", () => {

        let title = screen.getByText("Harry Potter Special")
        expect(title).toBeInTheDocument;
    }) 
})


 
  
  
  
  
  
  