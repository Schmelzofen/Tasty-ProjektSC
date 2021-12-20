import { useParams } from "react-router-dom";
import SubCategory from "./SubCategory"

const GetId = () => {
    let { id } = useParams()
    return (
        <>
            <SubCategory key={id} />
        </>
    );
}

export default GetId;