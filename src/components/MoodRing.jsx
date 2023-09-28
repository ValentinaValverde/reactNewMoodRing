import { useState } from "react";
import styled from "styled-components";

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    background: #e8eddf;
    color: black;
    border-radius: 15px;
    justify-content: center;
    padding: 10px;
`

const MyForm = styled.form`
    color: white;

    label, input{
        color: black;
    }

    label{
        display: flex;
        flex: 1 0 50%;
        justify-content: space-between;
        
        span{
            display: block;
        }
    }

    button{
        width: 100px;

    }

`

const OutputView = styled.div`
    width: 100px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;


        //styling mood output
    .sillyGoofy{
        background-color: #d64933;
        padding: 5px;
        border-radius: 10px;
        color: white;
    }

    .icky{
        background-color: #136f63;
        color: white;
        padding: 5px;
        border-radius: 10px;
    }

    .depresso{
        background-color: #52528c;
        color: white;
        padding: 5px;
        border-radius: 10px;
    }
`


export const MoodRing = () => {
    const [mood, setMood] = useState('sillyGoofy');
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMood(value);
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        <>
            <OuterWrapper>
                <MyForm onSubmit={handleSubmit}>
                    <h2>How are you feeling?</h2>
                    <div>
                        <label> silly goofy
                            <input type="radio" name="myMood" value="sillyGoofy" onChange={handleChange}></input>
                        </label>

                        <label>icky
                            <input type="radio" name="myMood" value="icky" onChange={handleChange}></input>
                        </label>

                        <label>depresso
                            <input type="radio" name="myMood" value="depresso" onChange={handleChange}></input>
                        </label>
                    </div>
                    <button type="submit">submit mood</button>
                </MyForm>
            </OuterWrapper>
            
            <OutputView>
                <p className={mood}>{mood}</p>
            </OutputView>
        </>
    )
}