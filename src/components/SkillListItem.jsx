const SkillListItem = ({skill}) => {
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