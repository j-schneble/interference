const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null;

  return (

    <select
      {...props}
      
      className="relative flex-grow w-full py-2 pl-3 mb-3 text-sm text-gray-500 bg-white border border-gray-300 rounded shadow-sm appearance-none form-select sm:mb-0 sm:mr-3 focus:border-gray-500 focus:outline-none focus:text-gray-900 ring-0 focus:ring-0"
    >
      
      {variants.map(({ external_id, name }) => (
        <option key={external_id} value={"external_id"}  >
          {name} 
        </option>
      ))}
    </select>
 
  );
};

export default VariantPicker;
