import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5 pt-5 pb-5 fw-bold fs-1 text-uppercase text-success'>My Blogs</h1>


            <h3><strong>Questions 01:</strong> Difference between authorization and authentication.</h3>
            <p><strong>Answer:
                <li>Authentication confirms your identity to grant access to the system but Authorization determines whether you are authorized to access the resources. </li>
                <li>It is the process of validating user credentials to gain user access but It is the process of verifying whether access is allowed or not.</li>
                <li> Authentication usually requires a username and a password but Authentication factors required for authorization may vary, depending on the security level.</li>
                <li>Authentication is the first step of authorization so always comes first but Authorization is done after successful authentication.</li>
                <li>It determines whether user is what he claims to be but It determines what user can and cannot access.</li>



            </strong></p>
            <h3><strong>Questions 02:</strong>  Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><strong>Answer:
                Firebase is  is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too. some people said it is Backend-as-a-Service (BaaS).
                <br />
                <strong>Other options do you have to implement authentication</strong>
                <li>Voice Recognition</li>
                <li> Retina Scans</li>
                <li>Fingerprints</li>
                <li> Puzzle </li>
                <li>Secrete cate</li>
                <li>Server Cards</li>

            </strong></p>
            <h3><strong>Questions 03:</strong>What other services does firebase provide other than authentication</h3>
            <p><strong>Answer:
                <li>Cloud Firestore</li>
                <li> Hosting</li>
                <li>Realtime Database</li>
                <li>Cloud Functions</li>
                <li>Monitoring</li>
                <li>App Distribution</li>
                <li>In-App Messaging</li>
                <li>A/B Testing</li>
            </strong></p>
        </div>
    );
};

export default Blogs;