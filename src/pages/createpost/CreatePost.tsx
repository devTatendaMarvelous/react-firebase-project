import {Form} from './Form'

export  const CreatePost = () => {
  return (
     <>
     
        

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
         
          <div className="mt-5 md:col-span-12 md:mt-0">
            <Form/>
          </div>
        </div>
      </div>

      

    </>
  )
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

