import * as React from 'react';

function Header(){
    return (<>
    <div className='chilanka-regular'><h1>Hi! I'm Ashley </h1>
    <div><p>Welcome to my online portfolio. I'm a passionate full stack engineer constantly looking to grow and create new innovative software products. </p>
    </div>
    </div>
    </>
)}

function Description(){
    return (
        <>
          <div>
            <p><b>My technical expertise includes:</b>
              <ul>
                <li>HTML, CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>Node.JS, Express</li>
                <li>SQL</li>
              </ul>
             </p>
           </div></>
    )
}
function IntroPage() {
 return(
    <>
    <div className="intro-page">
    <Header/>
    <Description />
    </div>
</> )
}
export default IntroPage;