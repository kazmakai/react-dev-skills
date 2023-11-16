import { useState } from "react";

const NewSkillForm = ({addSkills}) => {
    // Hook
    const [newSkill, setNewSkill] = useState ({
        name: "",
        level: 3,
    });
    
    // Event Handlers
    const _handleSkillName = (event) => {
        const updatedForm = {
            ...newSkill,
            'name': event.target.value
        }
        setNewSkill(updatedForm);
    };

    const _handleSkillLevel = (event) => {
        const updatedForm = {
            ...newSkill,
            'level': event.target.value
        }
        setNewSkill(updatedForm);
    };

    const _handleSubmit = (event) => {
        event.preventDefault(); // prevents the form from being submitted ot the server (cos it does a full render)
        _handleAddSkill();
    }

    const _handleAddSkill = () => {
        addSkills(newSkill);
        setNewSkill({
            name: "",
            level: 3
        });
    };

    return (
        <div>
            <form onSubmit={_handleSubmit}>
                <label>SKILL NAME:
                    <input name="name" type="text" onChange={_handleSkillName} placeholder="Dev Skill" value={newSkill.name}/>
                </label>

                <label>LEVEL:
                    <select name="level" onChange={_handleSkillLevel} value={newSkill.level}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>

                <button type="submit">ADD SKILL</button>
            </form>
        </div>
    );
}

export default NewSkillForm;