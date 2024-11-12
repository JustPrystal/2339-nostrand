
import EXRLogo from "../assets/images/EXRLogo.svg";
import fairHousingLogo from "../assets/images/fairHousingLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal"
import AddressComponent from "./addressComponent";
import CopyrightComponents from "./copyrightComponent";

export default function Footer() {

    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const scrollUp = () => {
        window.scrollTo({ top: 0 });
    }
    let modalData = [
        {
            slug: "fair-housing",
            content: `<h2>Fair Housing Statement</h2>
            <p>EXR complies fully with local, state and federal fair housing laws against discrimination on the basis of race, color, religion, sex, national origin, handicap, age, marital status and/or familial status, children or other prohibited factors.</p>
            <h2>The Civil Rights Act of 1968</h2>
            <p>The Civil Rights Act of 1968 known as the Federal Fair Housing Law makes illegal any discrimination based on race, color, religion, sex or national origin in connection with the sale or rental of housing. The 1988 amendment to this Act (The Fair Housing Amendments Act of 1988) expands the coverage of this law to handicapped persons and families with children. EXR complies fully with State and local statutes and Federal Fair Housing laws.</p>
            <h2>Links</h2>
            <p>For more information, visit these websites:<br><a target="_blank" href="https://www.dhr.ny.gov/">https://www.dhr.ny.gov</a><br><a target="_blank" href="https://www.nyc.gov/html/cchr/">https://www.nyc.gov/html/cchr/</a><br><a target="_blank" href="http://portal.hud.gov/">http://portal.hud.gov</a></p>`
        },
        {
            slug: "accessibility",
            content: ` <h2>Accessibility</h2>
            <p>We are striving to meet online usability and design requirements recommended by the World Wide Web Consortium (W3C) in its Web Content Accessibility Guidelines 2.0 Level AA, as well as requirements under the Twenty-First Century Communications and Video Accessibility Act of 2010. We are using design standards that help customers identify, interpret, understand and interact with information presented on our websites and mobile apps.</p>
            <p>Here are some helpful tips for using our sites and apps:</p>
            <ul>
                <li>Account numbers: In most instances, you won’t see your complete account number online. For security reasons, we’ll only reveal a few digits (typically the last 3 or 4) of your account number. The remaining digits are represented by a series of periods or the letter X.</li>
                <li>Dollar amounts: Please don’t use the dollar sign ($) when you include dollar amounts in any form field; it will cause an error. When you include dollar amounts, you may see one input field or two fields separated by a decimal point. In some cases, you’ll find an example adjacent to the input field(s) to help you understand how to format your amount.</li>
                <li>JavaScript: Is enabled by default in modern web browsers, if you disable it you won’t be able to enjoy all of the features of our site. Software and Recommendation Settings:</li>
            </ul>
            <p>We follow the W3C’s globally recognized standards to provide content that’s compatible with the most popular assistive technologies and web browsers. We recommend using the most current version (or the version released just prior to) of manufacturer’s assistive technology applications, along with a current version of the browsers listed below. Try different types of browsers with assistive technology applications to determine which combination works best for you.</p>
            <p>Please go to the individual manufacturer’s site for information about how to obtain them. You may also have access to assistance from local and state agencies or non-profit groups in your area.</p>`
        }
    ]
    return (
        <>
            <footer>
                <div className="inner">
                    <div className="origin-and-address">
                        <div className="logos-wrap">
                            <div className="exr-logo logo">
                                <a href="https://www.exrny.com/?utm_source=+http%3A%2F%2F150bk.com&utm_medium=referral+&utm_campaign=landing_pages"  aria-label="Visit EXR Website"><img src={EXRLogo} alt="" /></a>
                            </div>
                            <div className="house-logo logo">
                                <img src={fairHousingLogo} alt="" />
                            </div>
                        </div>
                        <AddressComponent className="address desktop-address" />
                    </div>
                    <div className="logo-and-copyright">
                        <Link onClick={scrollUp} to="/" alt="footer logo" aria-label="Return to Homepage" >
                            <svg width="300" length="auto" viewBox="0 0 300 422" fill="none" xmlns="https://www.w3.org/2000/svg">
                                <path d="M7.20008 386.699L7.26008 408.679C7.26008 413.579 8.78008 417.309 10.8801 420.519H3.07008C5.23008 417.259 6.69008 413.579 6.69008 408.679L6.63008 385.939L2.08008 379.699H12.2201L32.4001 406.759L32.4601 391.539C32.4601 386.639 31.0001 382.969 28.8401 379.699H36.6501C34.5501 382.909 33.0301 386.639 33.0301 391.539L32.9701 421.459H32.6801L7.20008 386.699Z" fill="white" />
                                <path d="M38.6992 400.11C38.6992 387.52 49.1992 378.77 60.0992 378.77C72.7492 378.77 81.3792 389.32 81.3792 400.17C81.3792 412.71 71.2892 421.46 60.4992 421.46C47.5092 421.46 38.6992 411.08 38.6992 400.11ZM64.3592 420.23C70.1292 420.23 72.6392 413.7 72.6392 407.46C72.6392 397.14 65.5892 380.05 55.7292 380.05C49.9592 380.05 47.4492 386.46 47.4492 392.82C47.4492 402.74 54.4492 420.23 64.3592 420.23Z" fill="white" />
                                <path d="M83.4995 418.89L83.4395 404.31L83.6095 404.37C86.4695 411.89 91.9495 420.35 100.229 420.7C103.089 420.76 106.989 419.48 106.989 414.87C106.989 410.96 104.129 408.86 96.8494 405.42C88.9194 401.57 83.5495 397.84 83.5495 390.78C83.5495 382.27 90.4295 378.77 97.4295 378.77C103.259 378.77 108.569 380.7 109.969 381.22V395.86H109.799C108.519 389.85 102.679 379.59 95.2794 379.59C91.3694 379.59 89.1595 381.98 89.1595 385.42C89.1595 391.54 95.9195 393.47 101.749 396.38C111.079 400.93 113.529 404.72 113.529 409.97C113.529 418.48 106.179 421.46 98.3695 421.46C91.9595 421.46 86.6495 419.88 83.4995 418.89Z" fill="white" />
                                <path d="M128.289 409.269V380.289C121.869 380.639 117.209 387.289 116.039 390.899H115.869V379.699H149.219V390.899H149.049C147.939 387.339 143.449 380.929 137.269 380.349V409.269C137.269 414.169 137.559 417.259 139.719 420.519H125.839C127.999 417.259 128.289 414.169 128.289 409.269Z" fill="white" />
                                <path d="M154.02 411.019V389.209C154.02 384.309 153.73 381.629 151.57 379.709H169.24C178.98 379.709 184.63 384.079 184.63 391.139C184.63 396.559 182.06 399.999 177.98 401.579C176.87 401.989 175.65 402.279 174.36 402.449L178.21 411.019C180.6 416.319 182.06 419.179 184.86 420.519H170.4C170.87 419.879 171.1 419.179 171.1 418.359C171.1 417.079 170.52 415.389 169.52 413.109L163 398.069V411.019C163 415.919 163.29 418.599 165.45 420.519H151.57C153.73 418.599 154.02 415.919 154.02 411.019ZM169 401.399C173.84 401.399 175.94 397.429 175.94 390.899C175.94 385.939 174.89 380.289 169.23 380.289C165.03 380.289 162.76 383.729 162.76 390.959C162.77 398.599 164.86 401.399 169 401.399Z" fill="white" />
                                <path d="M187.211 415.449C187.211 414.399 187.391 413.289 187.911 412.129L199.111 386.419C198.241 384.259 197.071 381.639 194.271 379.709H206.281L217.771 411.019C219.581 415.919 220.921 418.599 223.721 420.519H209.261C209.841 419.759 210.131 418.829 210.131 417.779C210.131 416.499 209.781 414.979 208.441 411.659C207.571 409.499 206.521 409.209 205.351 409.209C203.541 409.209 202.321 411.139 200.341 415.279C198.361 419.359 196.901 421.459 193.281 421.459C189.491 421.459 187.211 418.829 187.211 415.449ZM196.721 414.049C198.471 414.049 200.341 413.179 201.911 410.959C202.841 409.619 203.721 408.629 205.581 408.629C206.401 408.629 207.101 408.919 207.561 409.269L199.461 387.169L193.281 401.279C192.291 403.559 191.181 406.239 191.181 408.569C191.171 412.299 194.271 414.049 196.721 414.049Z" fill="white" />
                                <path d="M228.27 386.699L228.33 408.679C228.33 413.579 229.85 417.309 231.95 420.519H224.14C226.3 417.259 227.76 413.579 227.76 408.679L227.7 385.939L223.15 379.699H233.29L253.47 406.759L253.53 391.539C253.53 386.639 252.07 382.969 249.91 379.699H257.72C255.62 382.909 254.1 386.639 254.1 391.539L254.04 421.459H253.75L228.27 386.699Z" fill="white" />
                                <path d="M263.091 409.269V390.959C263.091 386.059 262.801 382.969 260.641 379.709H278.251C290.501 379.709 299.301 388.859 299.301 400.059C299.301 411.259 290.671 420.529 278.601 420.529H260.641C262.801 417.259 263.091 414.169 263.091 409.269ZM275.921 419.939C285.251 419.939 289.621 411.189 289.681 400.109C289.681 389.029 285.251 380.279 275.921 380.279H272.071V419.929H275.921V419.939Z" fill="white" />
                                <path d="M201.91 71.4982C199.02 71.4982 196 71.7682 192.66 72.3382L186.48 73.3882L249.35 26.8082V23.0782H183.78V26.0882H245.3L241.62 28.7982C241.62 28.7982 203.98 56.5582 182.29 72.5882V76.4882L182.48 76.4382C182.84 76.3382 183.03 76.2882 183.15 76.2582C190.16 74.7782 194.6 74.5282 201.89 74.5282C230.9 74.5282 254.5 98.1982 254.5 127.298C254.5 156.388 230.9 180.058 201.89 180.058C172.89 180.058 149.29 156.388 149.29 127.298C149.29 120.858 150.49 114.478 152.86 108.348C152.93 108.168 159.75 90.3482 159.75 78.6882C159.75 47.9382 134.81 22.9082 104.15 22.9082C73.4897 22.9082 48.5497 47.9282 48.5497 78.6882C48.5497 102.118 63.0497 122.858 84.8497 130.958V127.678C64.8897 119.748 51.5397 100.188 51.5397 78.6882C51.5397 49.5882 75.1397 25.9182 104.14 25.9182C133.14 25.9182 156.74 49.5882 156.74 78.6882C156.74 86.2582 155.08 93.8982 151.94 100.788C148.71 107.888 144.21 112.278 138.21 117.718C125.31 129.418 110.92 139.678 96.9997 149.608C91.5397 153.498 85.8997 157.518 80.4497 161.568L58.4497 177.868V183.348H139.18L135.5 186.058C135.5 186.058 97.8597 213.818 76.1697 229.848V233.748C76.6297 233.618 76.8797 233.558 77.0397 233.518V233.508C84.0597 232.028 88.4897 231.778 95.7797 231.778C124.79 231.778 148.39 255.448 148.39 284.548C148.39 313.638 124.79 337.308 95.7797 337.308C66.7797 337.308 43.1797 313.638 43.1797 284.548C43.1797 278.798 44.1397 273.098 46.0197 267.578L42.8997 267.488C41.0897 273.078 40.1797 278.818 40.1797 284.548C40.1797 315.298 65.1197 340.318 95.7797 340.318C126.44 340.318 151.38 315.298 151.38 284.548C151.38 281.708 151.17 278.848 150.74 276.068L150.02 271.368L153.3 274.808C159.31 281.108 166.68 285.928 174.71 288.828V285.548C154.4 277.758 140.83 258.118 140.83 236.328C140.83 207.228 164.43 183.558 193.44 183.558C222.45 183.558 246.04 207.228 246.04 236.328C246.04 248.348 241.86 260.128 234.27 269.498C228.59 276.508 200.45 296.308 197.34 298.618L151.1 333.008V336.758L208.72 294.058C210.34 292.858 211.98 291.668 213.61 290.478C226.87 280.828 239.4 271.718 245.35 256.238C247.79 249.878 249.03 243.178 249.03 236.318C249.03 213.398 235.29 193.058 214.02 184.528L209.57 182.738L214.25 181.668C239.3 175.938 257.48 153.068 257.48 127.308C257.52 96.5182 232.57 71.4982 201.91 71.4982ZM181.1 181.928C156.05 187.668 137.87 210.528 137.87 236.298C137.87 239.028 138.09 241.868 138.53 244.748L139.25 249.448L135.97 246.008C125.36 234.878 111.09 228.748 95.8097 228.748C92.9297 228.748 89.8997 229.018 86.5597 229.588L80.3897 230.628L143.83 183.628V179.868H60.7897L113.57 140.758C115.19 139.558 116.83 138.358 118.46 137.158C127.78 130.328 137.42 123.268 144.89 115.078L148.54 111.078L147.46 116.388C146.69 120.178 146.32 123.738 146.32 127.268C146.32 150.188 160.06 170.518 181.33 179.058L185.78 180.848L181.1 181.928Z" fill="white" />
                                <path d="M291.539 0.539062H6.19922C3.15922 0.539062 0.699219 2.99906 0.699219 6.03906V357.129C0.699219 360.169 3.15922 362.629 6.19922 362.629H291.539C294.579 362.629 297.039 360.169 297.039 357.129V6.03906C297.039 3.00906 294.569 0.539062 291.539 0.539062ZM252.069 236.289C252.069 243.519 250.759 250.579 248.189 257.289C241.919 273.599 228.449 283.399 215.409 292.879C213.779 294.059 212.149 295.249 210.539 296.449L148.139 342.679V331.459C148.139 331.459 226.189 274.719 231.979 267.569C239.139 258.739 243.079 247.629 243.079 236.299C243.079 208.859 220.829 186.529 193.469 186.529C166.109 186.529 143.859 208.859 143.859 236.299C143.859 257.169 157.079 275.959 176.749 283.059L177.739 283.419V292.949L175.789 292.329C167.849 289.799 160.469 285.519 154.219 279.839C154.339 281.399 154.409 282.969 154.409 284.529C154.409 316.939 128.119 343.299 95.8092 343.299C63.4992 343.299 37.2192 316.929 37.2192 284.529C37.2192 278.099 38.3092 271.679 40.4492 265.439L40.8092 264.389L50.3292 264.679L49.5692 266.659C47.3392 272.449 46.2092 278.459 46.2092 284.529C46.2092 311.969 68.4592 334.289 95.8192 334.289C123.179 334.289 145.429 311.969 145.429 284.529C145.429 257.089 123.169 234.759 95.8192 234.759C88.7492 234.759 84.4492 234.999 77.6992 236.429L73.2192 237.679V228.319L73.8292 227.869C91.3692 214.899 119.979 193.789 130.089 186.339H55.4892V176.339L78.7092 159.139C84.1892 155.079 123.469 127.059 136.239 115.479C141.969 110.289 146.259 106.099 149.249 99.5291C152.209 93.0291 153.779 85.8191 153.779 78.6791C153.779 51.2391 131.529 28.9091 104.169 28.9091C76.8092 28.9091 54.5592 51.2191 54.5592 78.6591C54.5592 99.2691 67.5492 117.979 86.8892 125.219L87.8592 125.579V135.119L85.8992 134.469C61.7792 126.509 45.5692 104.079 45.5692 78.6591C45.5692 46.2491 71.8492 19.8791 104.159 19.8791C136.469 19.8791 162.749 46.2491 162.749 78.6591C162.749 90.8791 155.949 108.659 155.659 109.409C153.429 115.199 152.299 121.209 152.299 127.279C152.299 154.719 174.549 177.039 201.909 177.039C229.269 177.039 251.519 154.719 251.519 127.279C251.519 99.8391 229.259 77.5091 201.909 77.5091C194.849 77.5091 190.559 77.7491 183.829 79.1691L179.309 80.4291V71.0591L179.919 70.6091C197.459 57.6391 226.079 36.5291 236.179 29.0791H180.799V20.0691H252.349V28.3191L197.899 68.6591C199.269 68.5491 200.599 68.4991 201.909 68.4991C234.219 68.4991 260.509 94.8691 260.509 127.279C260.509 152.989 243.329 175.949 219.099 183.449C239.259 193.269 252.069 213.569 252.069 236.289Z" fill="white" />
                                <path d="M143.319 127.28C143.319 125.07 143.459 122.85 143.739 120.59C136.679 127.53 69.8789 176.87 69.8789 176.87H146.829L146.779 185.04L91.8089 225.91C93.1789 225.8 94.5089 225.75 95.8189 225.75C110.499 225.75 124.289 231.12 135.079 240.95C134.949 239.38 134.889 237.82 134.889 236.3C134.889 210.59 152.059 187.62 176.299 180.12C156.129 170.29 143.319 149.99 143.319 127.28Z" fill="white" />
                            </svg>
                        </Link>
                        <CopyrightComponents className="extra-links desktop-links" modalData={modalData} setModalContent={setModalContent} setModalShow={setModalShow} />
                        <AddressComponent className="address mobile-address"/>

                    </div>
                    <div className="links">
                        <NavLink onClick={scrollUp} className="link" to="/">Home</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/residences">Residences</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/amenities">Amenities</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/availabilities">Availabilities</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/neighborhood">Neighborhood</NavLink>
                        <NavLink onClick={scrollUp} className="link" to="/contact">Contact</NavLink>
                    </div>
                    <CopyrightComponents className="extra-links mobile-links" modalData={modalData} setModalContent={setModalContent} setModalShow={setModalShow} />
                </div>
            </footer>
            {
                modalShow && <Modal data={modalContent} setter={setModalShow} />
            }
        </>
    );
}