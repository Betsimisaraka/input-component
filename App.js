import React from 'react'
import 'style.css';
import Input from './Input';

function App() {
    return (
        <article>
            <h1>Inputs Component</h1>
            <form>
                <fieldset className="input_section">
                    {`<Input />`}
                    <Input 
                        placeholder="First Name" 
                        label="Label"/>
                </fieldset>
                <fieldset className="input_section">
                    {`<Input error/>`}
                    <Input 
                        placeholder="Last Name" 
                        error="error" 
                        label="Label" />
                </fieldset>
                <fieldset className="input_section">
                    {`<Input disabled/>`}
                    <Input 
                        placeholder="Placeholder" 
                        label="Disabled input" 
                        disabled/>
                </fieldset>
                <div className="input_container">
                    <fieldset className="input_section">
                        {`<Input helperText="Some interesting text"/>`}
                        <label>Label</label>
                        <Input placeholder="Some text"/>
                        <p>Some interesting text</p>
                    </fieldset>
                    <fieldset className="input_section text_interesting">
                        <p>{`<Input helperText="Some interesting text" error/>`}</p>
                        <label>Label</label>
                        <Input placeholder="Some text"/>
                        <p>Some interesting text</p>
                    </fieldset>
                </div>
                <div className="input_container">
                    <fieldset className="input_section"> 
                        {`<Input startIcon/>`}
                        <Input 
                            placeholder="Call" 
                            label="Start icon" 
                            startIcon="call"
                        />
                    </fieldset>
                    <fieldset className="input_section"> 
                        {`<Input endIcon/>`}
                        <Input 
                            placeholder="Unlock" 
                            label="End icon" 
                            endIcon="lock"/>
                    </fieldset>
                </div>
                <fieldset className="input_section">
                    {`<Input value="text" />`}
                    <Input 
                        placeholder="text" 
                        label="Value text"/>
                </fieldset>
                <div className="input_container">
                    <fieldset className="input_section">
                        {`<Input size="sm" />`}
                        <Input 
                            placeholder="Small size" 
                            size="sm" 
                            label="Small size"/>
                    </fieldset>
                    <fieldset className="input_section">
                        {`<Input size="md" />`}
                        <Input 
                            placeholder="Medium size" 
                            size="md" 
                            label="Medium size"/>
                    </fieldset>
                </div>
                <fieldset className="input_section">
                    {`<Input fullWidth />`}
                    <Input 
                        placeholder="text" 
                        fullWidth="fullwidth" 
                        label="Fullwidth input"/>
                </fieldset>
                <fieldset className="input_section">
                    {`<Input multiple row="4" />`}
                    <label>Multilines of text</label>
                    <textarea
                        placeholder="Multilines of text" 
                        name="textarea" 
                        id="multiline"  
                        rows="5">
                    </textarea>
                </fieldset>
            </form>
        </article>
    )
}

export default App