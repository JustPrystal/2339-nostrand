export default function AddressComponent(props) {
    return (
        <>
        <div {...props}>
            <a href="https://www.google.com/maps?q=2339+Nostrand+Ave,+Brooklyn,+NY+11210,+USA&ftid=0x89c244ad93161391:0xc376b00294c5f48e" >
                2339 Nostrand Ave, <br /> Brooklyn, NY 11210, USA</a>
            <a className='telephone' href="tel:5165852829">
                <strong>CALL/TEXT</strong>
                <br />
                (516) 585-2829
            </a>

        </div>
        </>

    )
}