export default function CopyrightComponents({className, modalData, setModalContent, setModalShow} ){
    const showModal = (e) => {
        for (let i = 0; i < modalData.length; i++) {
            if (e.target.className === modalData[i].slug) {
                setModalContent(modalData[i].content)
            }
        }
        setModalShow(true)
    }
    return(
        
        <div className={className}>
            <div className="inner">
                    <p className='accessibility' onClick={showModal}>Accessibility</p> |
                        <p className='fair-housing' onClick={showModal}>Fair Housing Notice</p>
            </div>
            <p> Copyright © 2023 EXR, All rights reserved.</p>
        </div>
    )
}