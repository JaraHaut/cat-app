import { useState } from "react";



function Form() {

    const [activity, setActivity] = useState(null);
    const [affection, setAffection] = useState(null);
    const [allergic, setAllergic] = useState(null);
    const [children, setChildren] = useState(null);
    const [dogs, setDogs] = useState(null);
    const [garden, setGarden] = useState(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
    }

  
    const handleChange = (event) => {
      setActivity(event.target.value)
      setAffection(event.target.value)
      setAllergic(event.target.value)
      setChildren(event.target.value)
      setDogs(event.target.value)
      setGarden(event.target.value)
    }
  
   
    return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <p>How much do you travel?</p>
        <select value={activity}>
          <option value="Travel a lot">Travelling</option>
          <option value="50/50">50/50</option>
          <option value="Prefer to stay at home">Indoor</option>
        </select>
      </div>
      
      <div>
        <p>Are you an affectionate person?</p>
        <select value={affection} >
          <option value="normal">Normal</option>
          <option value="Lonely">Lonely</option>
          <option value="Super ">Lonely</option>
        </select>
      </div>

      <div>
        <p>Are you allergic?</p>
        <select value={allergic} >
          <label htmlFor="checkbox">Yes</label>
          <label htmlFor="checkbox">No</label>
        </select>
      </div>

      <div>
        <p>Do you have children?</p>
        <select value={children} >
        <label htmlFor="checkbox">Yes</label>
          <label htmlFor="checkbox">No</label>
          </select>
      </div>

      <div>
        <p>Do you have a dog?</p>
        <select value={dogs} >
        <label htmlFor="checkbox">Yes</label>
          <label htmlFor="checkbox">No</label>
          </select>  
      </div>

      <div>
        <p>Do you have a garden?</p>
        <select value={garden} >
          <option value="Indoor Cat">Indoor Cat</option>
          <option value="Outdoor Cat">Outdoor Cat</option>
          </select>
          </div>  
        </form>
    </section>
    )
  }


  export default Form;