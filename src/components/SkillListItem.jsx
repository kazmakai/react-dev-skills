const SkillListItem = (props) => { // Use 'props' as a parameter because it allows you to import more than a prop
    const skill = props.skill // Access the props here
    return (
        <div>
            <li>
                <div className="row">
                    <div className="column">{skill.name}</div>
                    <div className="column">{skill.level}</div>
                </div>

            </li>
        </div>
    );
}

export default SkillListItem;