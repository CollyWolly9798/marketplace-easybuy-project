import SearchIcon from '@/components/icons/SearchIcon.jsx';

const SearchBox = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex-grow bg-white2 rounded-[4px] lg:rounded-r-none focus-within:[&_input::placeholder]:text-blue10 focus-within:[&_svg_path]:fill-white2 focus-within:[&_svg_path]:stroke-blue10 md:rounded-l-[8px]">
        <SearchIcon className="absolute top-[50%] left-[12px] -translate-y-1/2 pointer-events-none [&_path]:fill-transparent [&_path]:stroke-blue9 [&_path]:transition-colors" />
        <input
          className="text-[12px] max-w-[159px] py-[6px] pl-[36px] pr-[12px] text-blue10 placeholder:text-blue9 placeholder:transition-colors md:text-[16px] md:max-w-[480px] md:py-[15px] md:pl-[48px] md:pr-[280px]"
          type="text"
          placeholder="Search"
        />
      </div>
      <button
        className="
        rounded-l-none
    hidden md:block font-medium text-[16px] rounded-r-[8px]
    px-[13px] py-[15px] w-[104px] text-white2 cursor-pointer
    bg-orange-gradient hover:bg-orange-gradient-hover
    transition-all duration-300
  "
        style={{
          background: 'linear-gradient(180deg, #ff7400 0%, #df4300 100%)',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
