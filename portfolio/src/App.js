import logo from './logo.svg';
import Profile from './image/profile.jpg';
import Work from './image/icon/code.png';
import Abount from './image/icon/male-user.png';
import Contact from './image/icon/telephone.png';
import Lab from './image/icon/flask.png';
import { FaGitlab } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='h1 text-center mt-3'>
            <img className='rounded rounded-circle' width={175} height={175} src={Profile} />
            <h2 className='mt-3 text-secondary '>HELLO, I'M </h2>
            <h1 className='mt-3 text-dark font-bold '> TATTAPAN WANGONKLANG</h1>
            <h4 className='mt-2 text-primary '>software developer</h4>
          </div>
        </div>
        <div className='col-md-6 mt-2 '>
          <div className='works'>
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight"><img className='rounded rounded-circle' width={75} height={75} src={Work} /></div>
              <div class="p-2 bd-highlight"></div>
              <div class="p-2 bd-highlight">
                <h4 className='font-bold text-dark'>project</h4>
                <h5 className='font-bold text-secondary'>Web / Webapplication</h5>
              </div>
            </div>
          </div>

        </div>

        <div className='col-md-6  mt-2'>
          <div className='works'>
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight"><img className='rounded rounded-circle' width={75} height={75} src={Abount} /></div>
              <div class="p-2 bd-highlight"></div>
              <div class="p-2 bd-highlight">
                <h4 className='font-bold text-dark'>about   </h4>
                <h5 className='font-bold text-secondary'>Web / Webapplication</h5>
              </div>
            </div>
          </div>

        </div>

        <div className='col-md-6  mt-2'>
          <div className='works'>
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight"><img className='rounded rounded-circle' width={75} height={75} src={Lab} /></div>
              <div class="p-2 bd-highlight"></div>
              <div class="p-2 bd-highlight">
                <h4 className='font-bold text-dark'>lab   </h4>
                <h5 className='font-bold text-secondary'><FaGitlab /></h5>
              </div>
            </div>
          </div>

        </div>


        <div className='col-md-6  mt-2'>
          <div className='works'>
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight"><img className='rounded rounded-circle' width={75} height={75} src={Contact} /></div>
              <div class="p-2 bd-highlight"></div>
              <div class="p-2 bd-highlight">
                <h4 className='font-bold text-dark'>contact   </h4>
                <h5 className='font-bold text-secondary'>Email / Github / Facebook</h5>
              </div>
            </div>
          </div>

        </div>

        {/* <div className='col-md-6 mt-5 works'>

          <div className='work'>
       

          </div>

          {/* <div class="col-md-2">
                <img className='rounded rounded-circle' width={75} height={75} src={Work} />
              </div> */}
        {/* <div class="col-6 ">
                <h4 className='font-bold text-dark'>project</h4>
                <h5 className='font-bold text-secondary'>web</h5>
              </div> */}











      </div>


    </div>
  );
}

export default App;
