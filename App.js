import React from 'react'
import 'style.css';
import Icon from './Icon';
import Input from './Input';

function App() {
    return (
        <article>
            <h1>Inputs</h1>
            <form>
                <div className="input_section">
                    {`<Input />`}
                    <Input placeholder="First Name" label="Label"/>
                </div>
                <div className="input_section">
                    {`<Input error/>`}
                    <Input placeholder="Last Name" error="error" label="Label" />
                </div>
                <div className="input_section">
                    {`<Input disabled/>`}
                    <Input placeholder="Placeholder" label="Disabled input" disabled/>
                </div>
                <div className="input_container">
                    <div className="input_section">
                        {`<Input helperText="Some interesting text"/>`}
                        <label>Label</label>
                        <Input placeholder="Some text"/>
                        <p>Some interesting text</p>
                    </div>
                    <div className="input_section text_interesting">
                        <p>{`<Input helperText="Some interesting text" error/>`}</p>
                        <label>Label</label>
                        <Input placeholder="Some text"/>
                        <p>Some interesting text</p>
                    </div>
                </div>
                <div className="input_container">
                    <div className="input_section"> 
                        {`<Input startIcon/>`}
                        <Input placeholder="Call" label="Start icon" startIcon="call"
                        />
                    </div>
                    <div className="input_section"> 
                        {`<Input endIcon/>`}
                        <Input placeholder="Unlock" label="End icon" endIcon="lock"/>
                    </div>
                </div>
                <div className="input_section">
                    {`<Input value="text" />`}
                    <Input value="text" label="Value text"/>
                </div>
                <div className="input_container">
                    <div className="input_section">
                        {`<Input size="sm" />`}
                        <Input placeholder="Small size" size="sm" label="Small size"/>
                    </div>
                    <div className="input_section">
                        {`<Input size="md" />`}
                        <Input placeholder="Medium size" size="md" label="Medium size"/>
                    </div>
                </div>
                <div className="input_section">
                    {`<Input fullWidth />`}
                    <Input value="text" fullWidth="fullwidth" label="Fullwidth input"/>
                </div>
                <div className="input_section">
                    {`<Input multiple row="4" />`}
                    <Input placeholder="Multiple inputs" multiple="row-4" label="Multiple inputs"/>
                </div>
            </form>
        </article>
    )
}

export default App