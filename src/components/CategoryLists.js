import React from 'react'

export const CategoryLists = (props) => {
    return (
        <div className="category-container">
            {props && props.data.map(item => {
                return (
                    <div className="tab-container" onClick={() => props.handleCatogoryChange(item.category_id,item.category_name)} key={item.category_id}>
                        <img src={item.category_image} width={120} alt={item.category_name} />
                        <div className={props.category === item.category_name ? 'centered-text text-bold' : 'centered-text'}>{item.category_name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryLists
