import './index.css'

function Blog(){
    return(
<div className='container-blog'>
    
       <div className='blog-text'>
        <p className='blog'>Femme Blogs</p>
    </div>
    <div className='blog-layout-container'>

     <div className='book-cover'>
        <img src='images/Born A crime.jpg' className='image'></img>
        </div>

    <div className='aerial-view-book'>
        <img src='images/aerial view book.jpg' className='image'></img>
    </div>

    <div className='books-and-flowers'>
        <img src = 'images/books and flowers.jpg' className='image'></img>

    </div>
    
        </div>
        

</div>    
   

    )
}

export default Blog;