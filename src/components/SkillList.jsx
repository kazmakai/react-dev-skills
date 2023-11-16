import SkillListItem from "./SkillListItem.jsx";

const SkillList = (props) => {
    const skills = props.skills;
    const skillListItems = skills.map((s, index) => <SkillListItem skill={s} key={index}/>)
    return (
        <div>
            <ul>
                {skillListItems}
            </ul>
        </div>

    );
}

export default SkillList;