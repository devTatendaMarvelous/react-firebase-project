import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = () => {
     const schema = yup.object().shape({
          title: yup.string().required("Post Must Have A Title"),
          description: yup.string().required("Post Must Have A Title"),
     })
     const {register } = useForm({
          resolver: yupResolver(schema)
     })
  return (
     <>
          <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                                          type="text"
                                          id="first-name"
                                          autoComplete="given-name"
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          {...register('title')} />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Description
                                     </label>
                                     <textarea
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                     {...register('description')}></textarea>
                    </div>

                    
                  </div>
                </div>
                      <div className="bg-gray-50 px-8 py-3 text-right sm:px-6">
                           
                  <input
                    type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                value={'Save'}
                  />
                    
                 
                </div>
              </div>
            </form>
    </>
  )
}
