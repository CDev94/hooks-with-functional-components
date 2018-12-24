import React from 'react';
import useResources from './useResource';







const ResourceList = ({ resource }) => {
//    reuse the resource function to display the resource to the app
   const resources = useResources(resource);

return (

    <div>
    <ul>{resources.map(listItem => <li key={listItem.id}> {listItem.title} - {listItem.body} </li> )}</ul>

    </div>
);
}




export default ResourceList;