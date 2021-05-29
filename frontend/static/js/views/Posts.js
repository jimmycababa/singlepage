// this file is extending from the abstract view
import AbstractView from "./AbstractView.js";
  
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    // there are backticks to make this html readable
    async getHtml(){
        return `
        <h1>Posts</h1>

        <p>

            Viewing the Posts

        </p>
        <p>

            <a href="/posts" data-link>View Recent Posts</a>

        </p>
        `;
        

    }
}