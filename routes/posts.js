import express from 'express'
import { createPost, getPosts, updatePost,deletePost, getPost} from '../controllers/posts.js';
import auth from '../middleware/auth.js'
const router=express.Router();
router.get('/:id',getPost);
router.get('/',getPosts)
router.post('/',auth,createPost)
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth,deletePost)
export default router