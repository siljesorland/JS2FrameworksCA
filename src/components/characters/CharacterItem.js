import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterItem({ id, fullName, title }) {
    return (
        <Link to={`detail/${id}`}>
            <h5>{fullName}</h5>
            <p>Title: {title}</p>
        </Link>
    );
}

CharacterItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default CharacterItem;