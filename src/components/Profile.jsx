

const Profile = () => {

  return (

<div className='profile'>

<div className='wrapper-img'></div>

<div className='content-wrapper'>
  <div >
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhY3Q_YzsH1s9LKU9yY4c8n9_-UR1fL6AiQ&usqp=CAU' alt='face'/>
  </div>
  <div>
    <div className='content-info'>
    <p>Name : </p>
    <h3>Alex Leo</h3>
    </div>
    <div className='content-info'>
    <p>Date : </p>
    <h3>10 january 1990</h3>
    </div>
    <div className='content-info'>
    <p>Job : </p>
    <h3>videomaker</h3>
    </div>
    <div className='content-info'>
    <p>Pets : </p>
    <h3>Dog</h3>
    </div>
  </div>
</div>



<div className='post'>
<h2>My posts</h2>
    <input type='textarea' />
</div>


<div className='post'>
<h2>My last posts</h2>
    <input type='textarea' />
</div>


</div>



  )
};


export default Profile;