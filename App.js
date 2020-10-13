import React from 'react'
import 'style.css';
import Input from './Input'

function App() {
    return (
        <article>
            <h1>Inputs</h1>
            <form>
                <div className="input_section">
                    {`<Input />`}
                    <label>Label</label>
                    <Input placeholder="First Name"/>
                </div>
                <div className="input_section">
                    {`<Input error/>`}
                    <label>Label</label>
                    <Input placeholder="Last Name" />
                </div>
                <div className="input_section">
                    {`<Input desabled/>`}
                    <label>Label</label>
                    <Input placeholder="Placeholder"/>
                </div>
                <div className="input_container">
                    <div className="input_section">
                        {`<Input helperText="Some interesting text"/>`}
                        <label>Label</label>
                        <Input placeholder="Some text"/>
                    </div>
                    <div className="input_section">
                        {`<Input helperText="Some interesting text" error/>`}
                        <label>Label</label>
                        <Input placeholder="Some text"/>
                    </div>
                </div>
                <div className="input_container">
                    <div className="input_section"> 
                        {`<Input startIcon/>`}
                        <label>Label</label>
                        <Input placeholder="Call"/>
                    </div>
                    <div className="input_section"> 
                        {`<Input endIcon/>`}
                        <label>Label</label>
                        <Input placeholder="Unlock"/>
                    </div>
                </div>
                <div className="input_section">
                    {`<Input value="text" />`}
                    <label>Label</label>
                    <Input />
                </div>
                <div className="input_container">
                    <div className="input_section">
                        {`<Input size="sm" />`}
                        <label>Label</label>
                        <Input placeholder="Small size"/>
                    </div>
                    <div className="input_section">
                        {`<Input size="md" />`}
                        <label>Label</label>
                        <Input placeholder="Medium size"/>
                    </div>
                </div>
                <div className="input_section">
                    {`<Input fullWidth />`}
                    <label>Label</label>
                    <Input placeholder="Full width"/>
                </div>
                <div className="input_section">
                    {`<Input multiple row="4" />`}
                    <label>Label</label>
                    <Input placeholder="Multiple inputs"/>
                </div>
            </form>
        </article>
    )
}

export default App