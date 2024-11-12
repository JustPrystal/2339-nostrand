import headerLogo from '../assets/images/Headerlogo.svg';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const links = [
  [
    {
      link : "/#root",
      linkText : "Home",
      type: "hash"
    },
    {
      link : "/residences#root",
      linkText : "Residences",
      type: "hash"
    },
    {
      link : "/amenities#root",
      linkText : "Amenities",
      type: "hash"
    }
  ],
  [
    {
      link : "/",
      linkImage : headerLogo
    }
  ],
  [
    {
      link : "/availabilities#root",
      linkText : "Availabilities",
      type: "hash"
    },
    {
      link : "/neighborhood#root",
      linkText : "Neighborhood",
      type: "hash"
    },
    {
      link : "/contact#root",
      linkText : "Contact",
      type: "hash"
    }
  ]
];
const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerClasses, setHeaderClasses] = useState([])
  
  const reload = () => {
    setHeaderClasses(headerClasses.filter(className => className !== 'close'));
  }
  const handleToggle = ()=>{
    if(headerToggle){
      setHeaderClasses(headerClasses.filter(className => className !== 'close'));
    }else{
      setHeaderClasses([...headerClasses, 'close']);
    }
    setHeaderToggle(!headerToggle)
  }
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY >= 100 && !header.classList.contains('scrolled')) {
        setHeaderClasses([...headerClasses, 'scrolled']);
      } else if (window.scrollY < 100 && header.classList.contains('scrolled')) {
        setHeaderClasses(headerClasses.filter(className => className !== 'scrolled'));
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [headerClasses]);
  // (headerToggle ? "" : "closed")
  return (
    <header id="header" className={headerClasses.join(' ')}>
      <div className="header-wrap">
        
        <div className="links" id="header-links">
          {
            links.map((linkGroup, index)=>{
              return (
                <div className={"linkgroup" + index}>
                  {
                    linkGroup.map((link,childIndex)=>{
                      if (link.linkImage) {
                        return(
                          <NavLink 
                            to={link.link} 
                            key={childIndex}>
                            <img src={link.linkImage} alt="logo" />
                          </NavLink>
                        )
                      } 
                      else {

                        if(link.type === "hash"){
                          return (
                            <HashLink smooth className={"link"}
                              to={link.link} 
                              key={childIndex}
                              onClick={reload}>
                              {link.linkText}
                            </HashLink>
                          )
                        }

                        return(
                          <NavLink className={({ isActive }) =>( isActive ? "link active" : "link")} 
                            to={link.link} 
                            key={childIndex}
                            onClick={reload}>
                            {link.linkText}
                          </NavLink>
                        )
                      }
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div className="inquire">
          <HashLink class='link' to='/contact#root' smooth>
            Contact
          </HashLink>
        </div>
        <div className="logo-wrap">
          <HashLink to="/#root" smooth>
            <img className="logo" src={headerLogo} alt=""/>
          </HashLink>
        </div>
        <div className="menu-button" onClick={handleToggle}>
          <span>Menu</span>
        </div>
        
      </div>
  </header>
  )
}

export default Header