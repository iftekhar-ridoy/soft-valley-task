import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Pages/Routes/Routes';
import whatsappIco from './Assets/icon/whatsapp.png';
import messengerIco from './Assets/icon/messenger.png';

function App({ children }) {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>

      <div className=''>
        <div className='fixed top-[50%] -mt-[50px] right-[17px] md:right-[34px] z-10'>
          <a href='https://www.facebook.com/softvalley.net'
            target='_blank' rel="noopener noreferrer">
            <div>
              <img className='w-8 h-8 md:w-11 md:h-11 cursor-pointer hover:scale-110 ease-in duration-200 mb-3' src={whatsappIco} alt="" />
            </div>
          </a>

          <a href='https://www.facebook.com/softvalley.net'
            target='_blank' rel="noopener noreferrer">
            <div>
              <img className='w-8 h-8 md:w-11 md:h-11 cursor-pointer hover:scale-110 ease-in duration-200' src={messengerIco} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
