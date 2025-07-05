
/**
 * Comments API Router
 *
 * Endpoints:
 *   GET    /:postId         - Get all comments for a post (sorted by newest first)
 *   POST   /                - Create a new comment (requires postId, author, content)
 *   DELETE /:commentId      - Delete a comment by its ID
 *
 * Each endpoint returns JSON responses and appropriate HTTP status codes.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;


/**
 * GET /:postId
 * Fetch all comments for a given post, sorted by creation date (newest first).
 * Response: 200 OK with array of comments, or 500 on error.
 */
router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


/**
 * DELETE /:commentId
 * Delete a comment by its ID.
 * Response: 200 OK if deleted, 404 if not found, or 500 on error.
 */
router.delete("/:commentId", async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * POST /
 * Create a new comment. Requires postId, author, and content in the request body.
 * Response: 201 Created with the new comment, 400 if missing fields, or 500 on error.
 */
router.post("/", async (req, res) => {
  try {
    const { postId, author, content } = req.body;
    if (!postId || !author || !content) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newComment = new Comment({ postId, author, content });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


