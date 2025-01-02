import { Post } from "../Models/Schemas.js";

const getPosts = async (req, res) => {
  try {
    const Posts = await Post.find({});
    res.status(200).json(Posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const Postid = await Post.findById(id);
    res.status(200).json(Postid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);
    if (!post) {
      return res.status(404).json({ message: "Post not updated" });
    }

    const up = await Post.findById(id);
    res.status(200).json(up);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not deleted" });
    }
    const up = await Post.findById(id);
    res.status(200).json(up);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getPosts, getPost, createPost, updatePost, deletePost };
