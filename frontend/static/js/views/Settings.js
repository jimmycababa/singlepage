// this file is extending from the abstract view
import AbstractView from "./AbstractView.js";
  
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings")
    }

    // there are backticks to make this html readable
    async getHtml(){
        return `
        <h1>Settings</h1>

        <p>

            Viewing the Settings

        </p>
        <p>

            <a href="/posts" data-link>View Recent Posts</a>

        </p>
        `;
        

    }
}