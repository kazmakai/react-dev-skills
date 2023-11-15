const NewSkillForm = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="">Skill
                    <input type="text" />
                </label>

                <label htmlFor="">Level
                    <select name="level" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>

                <button type="submit">ADD SKILL</button>
            </form>
        </div>
    );
}

export default NewSkillForm