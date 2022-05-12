    import { Button, MenuItem, TextField } from '@material-ui/core'
    import React, { useState } from 'react'
    import "./Home.css"
    import Categories from "../../data/Categories"
    import {useNavigate} from "react-router-dom"
    import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"



    const Home = ({name,setName,fetchQuestions}) => {

    const[category,setCategory]=useState("");
    const[difficulty,setDifficulty]=useState("");
    const [error,setError]=useState(false)
    const history= useNavigate()

    const handleSubmit=()=>{
        if(!name || !category || !difficulty){
            setError(true);
            return;
        }
        else{
            setError(false);
            fetchQuestions(category,difficulty);
            history('/quiz')
        }
    }

    return (
        <div className="content">
        <div className="settings">
        <span style={{fontSize:30}}>Quiz Settings</span>
        <div className="settings_select">

        {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}   
        <TextField
        style={{marginBottom:25}}
        label="Enter your Name"
        variant="outlined"
        value={name}
        onChange={(e)=>setName(e.target.value)}

        />
        <TextField
        select
        style={{marginBottom:25}}
        label="Select Category"
        variant="outlined"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}

        >
        {
            Categories.map((cat)=>(
            <MenuItem key={cat.category} value={cat.value}>
            {cat.category}
            </MenuItem>
            ))
        }
        </TextField>
        <TextField
        select
        style={{marginBottom:25}}
        label="Select Difficulty"
        variant="outlined"
        value={difficulty}
        onChange={(e)=>setDifficulty(e.target.value)}
        >
        <MenuItem key="easy" value="easy">
            easy
        </MenuItem>
            <MenuItem key="medium" value="medium">
            medium
        </MenuItem>
            <MenuItem key="hard" value="hard">
            hard
        </MenuItem>  
        </TextField>
        <Button
         variant="contained" 
         color="secondary" 
         size="large"
         onClick={handleSubmit}>
        Start Quiz
        </Button>

        </div>


        </div>
        <img src="/quiz.svg" className="banner" alt="quiz img"/>
        </div>
    )
    }

export default Home
