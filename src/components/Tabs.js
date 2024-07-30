import React from 'react';
import { Tab, Tabs } from "@mui/material";
import './tabs.css'
const TabsComponent = ({ categoriesSelect, value, setValue }) => {

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className='tabs' >
            <Tabs
                centered
                value={value}
                onChange={handleChange}
            >
                {categoriesSelect.map((tab) =>
                    <Tab
                        key={tab['value']}
                        value={tab['value']}
                        label={tab['label']}
                    />
                )}
            </Tabs>
        </div>
    );
}

export default TabsComponent;