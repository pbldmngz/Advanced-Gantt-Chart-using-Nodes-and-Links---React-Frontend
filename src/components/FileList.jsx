import { ListItem } from "./ListItem"

export const FileList = ({ files, handleRemove }) => {
    return (
        <div className="mt-3 ms-0 me-0">
            {
                files.map( (file, index) =>(
                    <div key={ index }>
                        <hr />
                        <ListItem file={ file } index={ index } handleRemove={ handleRemove } />
                    </div>
                ))
            }
        </div>     
    )
}