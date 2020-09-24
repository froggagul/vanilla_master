import Boot from "./module/Boot.js";
import CommentForm from "./module/CommentForm.js";

new Boot()
    .then(() => {
        new CommentForm();
    });