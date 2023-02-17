import { PlusIcon } from '@heroicons/react/20/solid'

const DesktopFilterBar = ({ filters, setActive, selected, handleOnChange }) => {
  return (
    <aside>
      <h2 className='sr-only'>Filtros</h2>

      <button type='button' className='inline-flex items-center lg:hidden' onClick={() => setActive(true)}>
        <span className='text-sm font-medium text-gray-700'>Filtros</span>
        <PlusIcon className='ml-1 h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
      </button>

      <div className='hidden lg:block'>
        <form className='space-y-10 divide-y divide-gray-200'>
          {filters.map((section, sectionIdx) => (
            <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
              <fieldset>
                <legend className='block text-sm font-medium text-gray-900'>{section.name}</legend>
                <div className='space-y-3 pt-6'>
                  {section.options.map((option, optionIdx) => (
                    <div key={optionIdx} className='flex items-center'>
                      <input
                        id={option.value}
                        name={option.value}
                        onChange={handleOnChange}
                        checked={selected[option.value] || false}
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                      <label htmlFor={option.value} className='ml-3 text-sm text-gray-600'>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
        </form>
      </div>
    </aside>
  )
}

export default DesktopFilterBar
