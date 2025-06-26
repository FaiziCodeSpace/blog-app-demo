import express from 'express';
import {v4 as uuidv4} from 'uuid';
import url from 'url';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

// CONFIG 
dotenv.config();
const app = express();
const PORT = process.env.PORT;
    
// CONFIGURE EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Location
const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
 
// Body MiddleWare
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// JSON DATA 
const dataPath = path.join(__dirname, 'data', 'posts.json');

// LOAD DATA 
function loadData(){
    if(fs.existsSync(dataPath)){
      const data = fs.readFileSync(dataPath);
      return JSON.parse(data);
    }
    return [];
}
// SAVE DATA 
function saveData(data){
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// ROUTES 

// HOME PAGE
app.get('/blogs/home', (req, res)=>{
    const posts = loadData();
    res.render('home', { posts });
}); 
// NEW POST PAGE
app.get('/blogs/new', (req, res)=>{
    res.render('new');
}); 
// CREATE NEW POST
app.post('/blogs/create', (req, res)=>{
    const posts = loadData();
    const { topic, description, date } = req.body;
    const id = uuidv4().slice(0, 6);
    posts.push({id, topic, description, date});
    saveData(posts);
    res.redirect('/blogs/home');
});

// OPEN SINGLE POST
app.get('/blogs/:id', (req, res)=>{
    const posts = loadData();
    const post = posts.find(p => p.id == req.params.id);
    if(post){
        res.render('post', {post});
    }else{
        res.status(404).render('404', { error: "Post not found" });
    }
})
 
// DELETE A POST
app.post('/blogs/delete/:id', (req, res)=>{
   const posts = loadData();
   const update = posts.filter(e=> e.id != req.params.id);
   saveData(update);
   res.redirect('/blogs/home');
})


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}/blogs/home`);
})