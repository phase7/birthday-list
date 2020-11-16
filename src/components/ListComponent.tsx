import React from 'react';
import {Entry} from "../shared/data";

type ListType = {
    people : Entry[]
}
export const List: React.FC<ListType> = ({ people }) => {
    return (
        <>
            {people.map(
                (person) => {
                    const { id, name, age, image } = person;
                    return (
                        <div key={id} className="person">
                            <img src={image} alt={name} />
                            <div className="person-name">{name}</div>
                            <div className="person-age">{age}</div>
                        </div>
                    )
                }
            )
            }
        </>
    )
}
