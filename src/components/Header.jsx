  function Header() {
    return(
        <div>
            <header className="flex justify-between items-center py-6 px-6 md:px-14 bg-primarycolor drop-shadow-md">
            <img src="./src/assets/afribite logo.png" alt="Afribite logo"/>
            <nav>
                <ul className="hidden md:flex items-center gap-12 lg:gap-24 font-medium text-base">
                    <li className="p-3 relative hover:text-hover text-white transition-all cursor-pointer">
                        Swallow
                        <span className="relative"><i className='bx bx-chevron-down absolute bottom-0.5'></i></span>
                    </li>
                    <li className="p-3 relative hover:text-hover text-white transition-all cursor-pointer">
                        Rice
                        <span className="relative"><i className='bx bx-chevron-down absolute bottom-0.5'></i></span>
                    </li>
                    <li className="p-3 relative hover:text-hover text-white transition-all cursor-pointer">
                        Soup
                        <span className="relative"><i className='bx bx-chevron-down absolute bottom-0.5'></i></span>
                    </li>
                </ul>
            </nav>
              <div className="relative hidden md:flex items-center justify-center gap-3">
                <i className="bx bx-search absolute left-3 text-2xl text-white"></i>
                <input type="text" placeholder="search" className="pr-10 py-2 pl-4 lg:pr-16 lg:pl-10 rounded-xl border-[1px] bg-primarycolor border-white focus:outline-white placeholder-white placeholder-opacity-50 lg:text-left text-center"></input>
                <div className="absolute bg-white px-5 py-2 rounded-r-xl right-0">
                   <i className="fa-regular fa-user text-base text-primarycolor"></i>
                   <i className="bx bx-cart-alt text-primarycolor text-base ml-2"></i>
                </div>
              </div>
              <div className="md:hidden">
              <i className="fa-solid fa-bars block text-5xl cursor-pointer text-white"></i>
              </div>
            </header>
        </div>
        
    )
 }
 export default Header;