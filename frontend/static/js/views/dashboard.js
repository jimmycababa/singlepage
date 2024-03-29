// this file is extending from the abstract view
import AbstractView from "./AbstractView.js";
  
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home")
    }

    // there are backticks to make this html readable
    async getHtml(){
        return `
        <h1>Hello There!</h1>

        <p>

            This is a follow along coded page that I will eventually make my own!

        </p>
        <p>

            <a href="/posts" data-link>View Recent Posts</a>

        </p>
        `;
        

    }
}