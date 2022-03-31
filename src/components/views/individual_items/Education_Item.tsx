interface Props {
    education_institute: string;
    program: string;
    start_date: string;
    end_date: string;
}

function Education_Item ( { education_institute, program, start_date, end_date } : Props ) {
    return (
        <div>
            <div>
                <h4>{education_institute}</h4>
                <span>{start_date} - {end_date}</span>
            </div>
            <div>
                {program}
            </div>
        </div>
    )
}

export default Education_Item;