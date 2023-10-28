import blogs from "./blogs-data";

/**
 * Aggregates all the tags from every blog into one pool
 * 
 * This pool is displayed in a div on the /blogs page
 * 
 * Instead of iterating through the entire blog data everytime
 * there is a new tag or a new blog post is made -- we will just update
 * this Set structure whenever a new blog is added (How can we do this?)
 */
const tags = new Set()
