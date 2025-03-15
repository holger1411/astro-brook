import React from 'react';

export default function StyleguideComponent() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-5xl mb-4">Styleguide</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          A visual reference of how HTML elements appear on this site
        </p>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section id="headings">
          <h2>Headings</h2>
          <p>All heading levels (h1 through h6) with their respective styling:</p>
          
          <h1>Heading Level 1</h1>
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>
        </section>
        
        <section id="text">
          <h2>Text Elements</h2>
          
          <h3>Paragraph</h3>
          <p>This is a standard paragraph element. <strong>This text is bold</strong>. <em>This text is italicized</em>. <u>This text is underlined</u>. <del>This text is strikethrough</del>. <mark>This text is marked/highlighted</mark>. <small>This text is smaller</small>. This text contains <sub>subscript</sub> and <sup>superscript</sup> elements.</p>
          
          <h3>Links</h3>
          <p>This is a <a href="#">standard link</a> that you might use within a paragraph of text.</p>
          
          <h3>Blockquote</h3>
          <blockquote>
            <p>This is a blockquote. It's often used to quote someone or highlight a particular piece of text with special emphasis.</p>
            <p>Multiple paragraphs can be included in a blockquote.</p>
            <footer>— Someone Famous</footer>
          </blockquote>
          
          <h3>Line Break and Horizontal Rule</h3>
          <p>This line will be followed by a line break.<br/>This text appears after the line break.</p>
          
          <hr/>
          
          <p>The horizontal rule appears above this text.</p>
        </section>
        
        <section id="lists">
          <h2>Lists</h2>
          
          <h3>Unordered List</h3>
          <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three with a longer description that spans multiple lines to show how text wrapping works within list items</li>
            <li>List item four with nested items:
              <ul>
                <li>Nested item one</li>
                <li>Nested item two</li>
              </ul>
            </li>
          </ul>
          
          <h3>Ordered List</h3>
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item with a longer description to demonstrate text wrapping</li>
            <li>Fourth item with nested items:
              <ol>
                <li>Nested ordered item one</li>
                <li>Nested ordered item two</li>
              </ol>
            </li>
          </ol>
          
          <h3>Definition List</h3>
          <dl>
            <dt>Definition Term</dt>
            <dd>This is the definition or description for the term above.</dd>
            
            <dt>Another Definition Term</dt>
            <dd>Each term can have one or more definitions associated with it.</dd>
            <dd>Here's a second definition for the same term.</dd>
          </dl>
        </section>
        
        <section id="code">
          <h2>Code</h2>
          
          <h3>Inline Code</h3>
          <p>Use <code>console.log('Hello, World!')</code> to output a message to the browser console.</p>
          
          <h3>Code Block</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <pre>function greet(name) {'{'}
  return "Hello, " + name + "!";
{'}'}

// Call the function
const message = greet('World');
console.log(message);</pre>
          </div>
          
          <h3>Syntax Highlighted Code</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <pre>// This is a JavaScript comment
function calculateSum(a, b) {'{'}
  return a + b;
{'}'}

const sum = calculateSum(5, 10);
console.log("The sum is: " + sum);</pre>
          </div>
        </section>
        
        <section id="tables">
          <h2>Tables</h2>
          
          <table>
            <caption>Sample Table Caption</caption>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
              </tr>
              <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
              </tr>
              <tr>
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Table Footer Information</td>
              </tr>
            </tfoot>
          </table>
        </section>
        
        <section id="forms">
          <h2>Form Elements</h2>
          <p>Basic form elements (non-functional, just for display purposes):</p>
          
          <form>
            <div className="mb-4">
              <label htmlFor="text-input">Text Input:</label>
              <input type="text" id="text-input" placeholder="Enter text here" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="textarea">Textarea:</label>
              <textarea id="textarea" rows="3" placeholder="Enter multiple lines of text"></textarea>
            </div>
            
            <div className="mb-4">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Checkbox example</label>
            </div>
            
            <div className="mb-4">
              <input type="radio" id="radio1" name="radio-group" defaultChecked />
              <label htmlFor="radio1">Radio option 1</label>
              <br />
              <input type="radio" id="radio2" name="radio-group" />
              <label htmlFor="radio2">Radio option 2</label>
            </div>
            
            <div className="mb-4">
              <label htmlFor="select">Select Dropdown:</label>
              <select id="select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            
            <button type="button">Button Element</button>
          </form>
        </section>
        
        <section id="media">
          <h2>Media Elements</h2>
          
          <h3>Image</h3>
          <figure>
            <img src="https://via.placeholder.com/800x400" alt="Placeholder Image" />
            <figcaption>A placeholder image with caption</figcaption>
          </figure>
          
          <h3>Responsive Image</h3>
          <img className="w-full" src="https://via.placeholder.com/1200x600" alt="Responsive Placeholder Image" />
        </section>
        
        <section id="misc">
          <h2>Miscellaneous Elements</h2>
          
          <h3>Abbreviations</h3>
          <p><abbr title="HyperText Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> are core web technologies.</p>
          
          <h3>Citations</h3>
          <p>According to the book <cite>HTML5 for Web Designers</cite>, semantic markup is important for accessibility.</p>
          
          <h3>Details & Summary</h3>
          <details>
            <summary>Click to expand for more information</summary>
            <p>This content is hidden until the user clicks on the summary element.</p>
            <p>It's useful for FAQ sections, accordion elements, and other expandable content.</p>
          </details>
        </section>
      </div>
    </div>
  );
}
