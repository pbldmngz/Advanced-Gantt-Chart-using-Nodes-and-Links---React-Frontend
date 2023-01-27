import { Tooltip } from "@mui/material"

export const ListItem = ({ file, index, handleRemove }) => {

    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <i className="bi bi-filetype-csv align-self-center"></i>
                <h6 className="align-self-center ms-2 mt-2">{ file.name }</h6>
            </div>
            <div className="actions d-flex align-items-center">
                <Tooltip title='remove'>
                    <i className="bi bi-trash" onClick={ () => handleRemove( index ) }></i>
                </Tooltip>
            </div>
        </div>
    )
}