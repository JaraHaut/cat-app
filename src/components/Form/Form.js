import { useState } from "react";



function Form() {

    const [Activity, setActivity] = useState(null);
    const [Affection, setAffection] = useState(null);
    const [Allergic, setAllergic] = useState(null);
    const [Children, setChildren] = useState(null);
    const [Dogs, setDogs] = useState(null);
    const [Garden, setGarden] = useState(null);

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
        <select value={Activity}>
          <option value="Travelling">Travelling</option>
          <option value="50/50">50/50</option>
          <option value="Indoor">Indoor</option>
        </select>
      </div>
      
      <div>
        <select value={Affection} >
          <option value="normal">Normal</option>
          <option value="Lonely">Lonely</option>
        </select>
      </div>

      <div>
        <select value={Allergic} >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <select value={Children} >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>
      </div>

      <div>
        <select value={Dogs} >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          </select>  
      </div>

      <div>
        <select value={Garden} >
          <option value="Indoor Cat">Indoor Cat</option>
          <option value="Outdoor Cat">Outdoor Cat</option>
          </select>
          </div>  
        </form>
    </section>
    )
  }


  export default Form;